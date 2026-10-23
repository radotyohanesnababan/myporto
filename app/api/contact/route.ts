import { NextResponse } from "next/server";

const projectTypeLabels: Record<string, string> = {
  fullstack: "Full-Stack Web App (End-to-End)",
  frontend: "Frontend Refactor & UI Architecture",
  consulting: "Konsultasi Arsitektur Perangkat Lunak",
  job: "Penawaran Kerja (Full-time / Contract)",
  other: "Lainnya / Diskusi Lepas",
};

export async function GET() {
  return NextResponse.json({ status: "ok", message: "API contact is ready." });
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY tidak ditemukan di environment variables.");
      return NextResponse.json(
        {
          error:
            "Server belum mendeteksi RESEND_API_KEY. Jika baru menambahkan .env.local, silakan restart server (npm run dev).",
        },
        { status: 500 }
      );
    }

    const { fullName, email, projectType, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO_EMAIL || "[EMAIL_ADDRESS]";
    const labelType = projectTypeLabels[projectType] || projectType || "Umum";

    // Kirim email via Resend REST API langsung
    // Bebas ketergantungan node_modules / module bundler
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Form Kontak <${process.env.RESEND_FROM}>`,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${fullName} - ${labelType}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1e293b; border-radius: 12px; border: 1px solid #e2e8f0;">
            <div style="border-bottom: 2px solid #00a3af; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 20px;">Pesan Baru dari Portofolio</h2>
              <p style="margin: 0; color: #64748b; font-size: 14px;">Ada calon klien / rekanan yang mengirim pesan melalui website Anda.</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Nama Pengirim:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Pengirim:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00a3af; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Tipe Kebutuhan:</td>
                <td style="padding: 8px 0; color: #0f172a;">${labelType}</td>
              </tr>
            </table>

            <div style="margin-top: 10px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Isi Pesan:</p>
              <div style="background-color: #f8fafc; border-left: 4px solid #00a3af; padding: 14px 18px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
              <p style="margin: 0;">Email ini otomatis dikirim dari form kontak di website portofolio.</p>
              <p style="margin: 4px 0 0 0;">Anda cukup klik <strong>Reply</strong> untuk langsung membalas ke ${email}.</p>
            </div>
          </div>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API Error:", resendData);
      return NextResponse.json(
        {
          error:
            resendData.message ||
            resendData.error ||
            "Gagal mengirim email via Resend.",
        },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error ? err.message : "Terjadi kesalahan internal pada server.";
    console.error("Contact Form Server Error:", errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
