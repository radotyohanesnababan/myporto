import Link from "next/link";

interface OrganizationItem {
  id: string;
  role: string;
  type: string;
  period: string;
  title: string;
  location: string;
  points: string[];
  tags: string[];
}

export default function OrganisasiPage() {
  const organizations: OrganizationItem[] = [
    {
      id: "hmif-tech",
      role: "Kepala Divisi Kajian Teknologi",
      type: "Divisi HMIF",
      period: "Mei 2023 – Mei 2024",
      title: "Himpunan Mahasiswa Informatika (HMIF) ITERA",
      location: "Lampung Selatan, Lampung",
      points: [
        'Membimbing penulisan artikel ilmiah dan teknologi untuk website resmi HMIF ITERA, serta memimpin produksi konten podcast "Berisik" pada channel YouTube HMIF ITERA.',
      ],
      tags: ["Kajian Teknologi", "HMIF ITERA", "Website Article", "Podcast Production"],
    },
    {
      id: "point-project",
      role: "Kepala Divisi Hubungan Masyarakat (Humas)",
      type: "Kepanitiaan Kampus",
      period: "Okt 2023 – Des 2023",
      title: "Point Project 1.0 HMIF ITERA",
      location: "Lampung Selatan, Lampung",
      points: [
        "Menjaring dan mengoordinasikan 12 tim dari berbagai program studi untuk berkompetisi dalam ajang kompetisi desain UI/UX pertama di ITERA.",
      ],
      tags: ["Hubungan Masyarakat", "Point Project 1.0", "Kompetisi UI/UX", "Event Management"],
    },
    {
      id: "pmk-itera",
      role: "Koordinator Sub-Divisi Akomodasi, Divisi Operasional & Logistik",
      type: "Kepanitiaan",
      period: "Okt 2022 – Des 2022",
      title: "Perayaan Natal PMK ITERA 2022",
      location: "Lampung Selatan, Lampung",
      points: [
        "Merancang alur akomodasi dan tata keamanan kegiatan, serta mengoordinasikan operasional di lapangan untuk 1.200 peserta dan panitia acara.",
      ],
      tags: ["Operasional & Logistik", "Alur Akomodasi", "Koordinasi Massa", "PMK ITERA"],
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
                Pengalaman Organisasi
              </h1>
              <p className="font-mono text-xs text-foreground/70">
                Kepemimpinan &amp; Pengalaman Berorganisasi
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <section className="mb-14">
          <div className="flex flex-col gap-3 mb-8">
            <div className="border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow">
              ORGANISASI &amp; KEPANITIAAN
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl text-foreground font-bold tracking-tight">
              Kepemimpinan &amp; Kolaborasi Mahasiswa
            </h2>
            <p className="font-body text-base text-foreground/80 max-w-2xl leading-relaxed">
              Pengalaman memimpin divisi kajian teknologi, hubungan masyarakat dalam kompetisi kampus, serta koordinasi operasional berskala ribuan peserta di lingkungan Institut Teknologi Sumatera.
            </p>
          </div>

          {/* Organizational Cards List */}
          <div className="flex flex-col gap-6">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-6 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-headline text-xl text-foreground font-bold">
                        {org.role}
                      </h3>
                      <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                        {org.type}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-foreground/80 font-bold shrink-0">
                      {org.period}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 text-xs font-mono text-foreground/70">
                    <span className="font-bold">{org.title}</span>
                    <span>{org.location}</span>
                  </div>

                  <ul className="space-y-2 text-foreground/80 font-body text-sm leading-relaxed">
                    {org.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-main font-bold select-none">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-border mt-2">
                  {org.tags.map((tg) => (
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

            {/* Navigation link to Pengalaman */}
            <div className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">work_history</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-foreground">Lihat Pengalaman Kerja</h4>
                  <p className="font-body text-xs text-foreground/70">
                    Web Developer Intern, Riset Perpustakaan, dan Asisten Laboratorium.
                  </p>
                </div>
              </div>
              <Link
                href="/pengalaman"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-4 py-2 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Buka Halaman Pengalaman</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
