"use client";

import { useState } from "react";

export default function KontakPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("fullstack");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          projectType,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim pesan. Silakan coba beberapa saat lagi.");
      }

      setIsSubmitted(true);
      setFullName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim pesan.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full xl:pl-24 bg-background text-foreground min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-border">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center font-mono font-bold text-sm">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                Hubungi &amp; Kolaborasi
              </h1>
              <p className="font-mono text-xs text-foreground/70">
                Kanal Komunikasi &amp; Diskusi Teknis
              </p>
            </div>
          </div>
        </div>

        {/* Section: Contact Form & Collaboration */}
        <section className="mb-14" id="kontak">
          <div className="mb-8">
            <div className="border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow mb-3">
              KIRIM PESAN LANGSUNG
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl text-foreground font-bold tracking-tight">
              Mari Berkolaborasi atau Diskusikan Proyek Anda
            </h2>
            <p className="font-body text-base text-foreground/80 mt-2 max-w-2xl leading-relaxed">
              Terbuka untuk posisi full-time, freelance project, maupun konsultasi arsitektur perangkat lunak dan cloud computing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Form Container (3px Neobrutalism Border) */}
            <div className="lg:col-span-7 border-[3px] border-border bg-secondary-background shadow-shadow rounded-base p-6 sm:p-8">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-mono text-xs font-bold text-foreground uppercase tracking-wider flex items-center justify-between"
                      htmlFor="fullName"
                    >
                      <span>Nama Lengkap</span>
                      <span className="text-main font-bold">*</span>
                    </label>
                    <input
                      className="w-full border-2 border-border bg-secondary-background text-foreground rounded-base px-3 py-2 font-body text-sm focus-visible:outline-2 focus-visible:outline-offset-2 outline-none"
                      id="fullName"
                      placeholder="mis. Sarah Wijaya"
                      required
                      aria-required="true"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-mono text-xs font-bold text-foreground uppercase tracking-wider flex items-center justify-between"
                      htmlFor="emailAddr"
                    >
                      <span>Email Anda</span>
                      <span className="text-main font-bold">*</span>
                    </label>
                    <input
                      className="w-full border-2 border-border bg-secondary-background text-foreground rounded-base px-3 py-2 font-body text-sm focus-visible:outline-2 focus-visible:outline-offset-2 outline-none"
                      id="emailAddr"
                      placeholder="sarah@company.com"
                      required
                      aria-required="true"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Dropdown Tipe Proyek */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs font-bold text-foreground uppercase tracking-wider"
                    htmlFor="projectType"
                  >
                    Tipe Proyek &amp; Kebutuhan
                  </label>
                  <div className="relative">
                    <select
                      className="w-full border-2 border-border bg-secondary-background text-foreground rounded-base px-3 py-2 font-body text-sm focus-visible:outline-2 focus-visible:outline-offset-2 outline-none cursor-pointer appearance-none"
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option className="bg-secondary-background text-foreground" value="fullstack">Full-Stack Web App (End-to-End)</option>
                      <option className="bg-secondary-background text-foreground" value="frontend">Frontend Refactor &amp; UI Architecture</option>
                      <option className="bg-secondary-background text-foreground" value="consulting">Konsultasi Arsitektur Perangkat Lunak</option>
                      <option className="bg-secondary-background text-foreground" value="job">Penawaran Kerja (Full-time / Contract)</option>
                      <option className="bg-secondary-background text-foreground" value="other">Lainnya / Diskusi Lepas</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground text-base" aria-hidden="true">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs font-bold text-foreground uppercase tracking-wider"
                    htmlFor="projectMessage"
                  >
                    Ceritakan Detail Proyek atau Pesan Anda
                  </label>
                  <textarea
                    className="w-full border-2 border-border bg-secondary-background text-foreground rounded-base px-3 py-2.5 font-body text-sm focus-visible:outline-2 focus-visible:outline-offset-2 outline-none resize-none"
                    id="projectMessage"
                    placeholder="Jelaskan kebutuhan fungsional, target waktu peluncuran, atau detail teknis..."
                    required
                    aria-required="true"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit & SLA Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-foreground/70 font-mono text-xs">
                    <span className="material-symbols-outlined text-base text-main" aria-hidden="true">schedule</span>
                    <span>Balasan dalam kurun 24 jam</span>
                  </div>
                  <button
                    className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-6 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-base" aria-hidden="true">progress_activity</span>
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan</span>
                        <span className="material-symbols-outlined text-base" aria-hidden="true">send</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Toast Feedback */}
                {isSubmitted && (
                  <div role="status" aria-live="polite" className="p-3.5 rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow font-mono text-xs font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" aria-hidden="true">check_circle</span>
                    <span>Pesan berhasil dikirim! Saya akan segera menghubungi Anda kembali via email.</span>
                  </div>
                )}

                {errorMessage && (
                  <div role="alert" aria-live="assertive" className="p-3.5 rounded-base border-2 border-border bg-chart-4 text-white shadow-shadow font-mono text-xs font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" aria-hidden="true">error</span>
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Contact Cards Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="border-[3px] border-border bg-secondary-background shadow-shadow rounded-base p-6">
                <h3 className="font-headline text-lg text-foreground font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-main text-xl">quick_reference</span>
                  <span>Kontak Langsung</span>
                </h3>

                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                    href="mailto:radot2510@gmail.com"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-main text-lg">mail</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-foreground/70 uppercase font-bold">
                          EMAIL UTAMA
                        </div>
                        <div className="font-mono text-xs truncate font-bold text-foreground">
                          radot2510@gmail.com
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-foreground/70 text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* Phone / WhatsApp */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                    href="tel:082272118326"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-main text-lg">call</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-foreground/70 uppercase font-bold">
                          TELEPON / WHATSAPP
                        </div>
                        <div className="font-mono text-xs truncate font-bold text-foreground">
                          082272118326
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-foreground/70 text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                    href="https://github.com/radotyohanesnababan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-main text-lg">code</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-foreground/70 uppercase font-bold">
                          SOURCE CODE
                        </div>
                        <div className="font-mono text-xs truncate font-bold text-foreground">
                          github.com/radotyohanesnababan
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-foreground/70 text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                    href="https://linkedin.com/in/radotnababan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-main text-lg">hub</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-foreground/70 uppercase font-bold">
                          LINKEDIN
                        </div>
                        <div className="font-mono text-xs truncate font-bold text-foreground">
                          linkedin.com/in/radotnababan
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-foreground/70 text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* Location */}
                  <div className="p-3 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex items-start gap-3">
                    <span className="material-symbols-outlined text-main text-lg mt-0.5">location_on</span>
                    <div>
                      <div className="font-mono text-[10px] text-foreground/70 uppercase font-bold">
                        LOKASI &amp; PREFERENSI KERJA
                      </div>
                      <div className="font-body text-sm text-foreground font-bold">Bandar Lampung &amp; Jakarta</div>
                      <div className="font-mono text-xs text-foreground/80 mt-0.5">
                        Terbuka untuk On-site &amp; Remote
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base Info Box */}
              <div className="border-[3px] border-border bg-main text-main-foreground shadow-shadow rounded-base p-5">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider block mb-1">
                  ZONA WAKTU &amp; OPERASIONAL
                </span>
                <p className="font-headline text-lg font-bold">WIB (UTC+7) Bandar Lampung &amp; Jakarta</p>
                <p className="font-body text-xs mt-1">Siap berkolaborasi dalam waktu kerja fleksibel sesuai zona waktu tim Anda.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
