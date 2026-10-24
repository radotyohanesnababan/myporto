import Link from "next/link";
import { PhotoSlots } from "../components/PhotoSlots";

interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  period: string;
  title: string;
  location: string;
  points: string[];
  tags: string[];
}

export default function PengalamanPage() {
  const experiences: ExperienceItem[] = [
    {
      id: "haltekom",
      role: "Web Developer Intern",
      type: "Magang (Internship)",
      period: "Jun 2025 – Jul 2025",
      title: "Haltekom Media Inovasi",
      location: "Bekasi, Jawa Barat",
      points: [
        "Membangun website dinamis dengan Laravel (PHP) dan MySQL sebagai platform pembelajaran persiapan sertifikasi Junior Web Developer, mencakup operasi CRUD dasar dan autentikasi.",
        "Mengembangkan 1 responsive static landing page dengan HTML dan CSS untuk mendukung kelancaran program pembelajaran.",
      ],
      tags: ["Laravel (PHP)", "MySQL", "HTML5", "CSS3", "Responsive Web"],
    },
    {
      id: "research-tarutung",
      role: "Riset & Web Development",
      type: "Riset / Skripsi",
      period: "2025 – 2026",
      title: "SPARTA – Perpustakaan SMP N 1 Tarutung",
      location: "Tarutung, Tapanuli Utara",
      points: [
        "Merancang dan mengembangkan sistem informasi perpustakaan digital dengan Laravel (PHP) dan React, mulai dari tahap analisis kebutuhan hingga implementasi penuh untuk sekitar 300 siswa.",
        "Melakukan pengujian sistem langsung di lokasi (on-site testing) menggunakan metode Blackbox Testing untuk memverifikasi keakuratan fungsional dan alur sirkulasi peminjaman buku.",
      ],
      tags: ["Laravel (PHP)", "React Framework", "MySQL", "Blackbox Testing", "RESTful API"],
    },
    {
      id: "lab-assistant",
      role: "Asisten Praktikum (Lab Assistant)",
      type: "Kontrak",
      period: "Sep 2023 – Mei 2024",
      title: "Laboratorium Teknik Informatika, Institut Teknologi Sumatera",
      location: "Lampung Selatan, Lampung",
      points: [
        "Membimbing 60+ mahasiswa dalam penggunaan sistem operasi Ubuntu (manajemen berkas dan command dasar terminal).",
        "Membimbing 50+ mahasiswa dalam aplikasi perkantoran, mencakup Mail Merge pada Word dan otomasi VBA pada Excel.",
        "Membimbing 50+ mahasiswa dalam dasar-dasar pemrograman C++ (variabel, percabangan logika, dan perulangan).",
      ],
      tags: ["Ubuntu Linux", "Bash", "C++", "Microsoft Word", "Microsoft Excel"],
    },
  ];

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
                Pengalaman Kerja
              </h1>
              <p className="font-mono text-xs text-foreground/70">
                Rekam Jejak Profesional &amp; Rekayasa Teknis
              </p>
            </div>
          </div>
        </div>

        {/* Section: Work Experience */}
        <section className="mb-14">
          <div className="flex flex-col gap-3 mb-8">
            <div className="border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow">
              PENGALAMAN KERJA &amp; RISET
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl text-foreground font-bold tracking-tight">
              Rekam Jejak Profesional
            </h2>
            <p className="font-body text-base text-foreground/80 max-w-2xl leading-relaxed">
              Pengalaman kerja magang, riset pengembangan sistem perpustakaan digital, serta asistensi laboratorium komputer di lingkungan kampus.
            </p>
          </div>

          {/* Experience list */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-6 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-headline text-xl text-foreground font-bold">
                        {exp.role}
                      </h3>
                      <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                        {exp.type}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-foreground/80 font-bold shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 text-xs font-mono text-foreground/70">
                    <span className="font-bold">{exp.title}</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 text-foreground/80 font-body text-sm leading-relaxed">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-main font-bold select-none">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PhotoSlots
                  subject={exp.title}
                  images={
                    exp.id === "haltekom"
                      ? [
                          "/image/org&pengalaman/pkl-1.webp",
                          "/image/org&pengalaman/pkl-2.webp",
                        ]
                      : exp.id === "research-tarutung"
                        ? [
                            "/image/org&pengalaman/ta-1.webp",
                            "/image/org&pengalaman/ta-2.webp",
                          ]
                        : [
                            "/image/org&pengalaman/lab-1.webp",
                            "/image/org&pengalaman/lab-2.webp",
                          ]
                  }
                />

                <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-border mt-2">
                  {exp.tags.map((tg) => (
                    <span
                      key={tg}
                      className="border-2 border-border bg-background text-foreground rounded-base px-2 py-0.5 font-mono text-xs font-medium"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Navigation link to Organisasi */}
            <div className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">groups</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-foreground">Lihat Pengalaman Organisasi</h4>
                  <p className="font-body text-xs text-foreground/70">
                    HMIF ITERA, PMK ITERA, dan kepanitiaan kegiatan kampus.
                  </p>
                </div>
              </div>
              <Link
                href="/organisasi"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-4 py-2 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Buka Halaman Organisasi</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
