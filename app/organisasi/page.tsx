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
      role: "Head of Technology Studies Division",
      type: "Divisi HMIF",
      period: "May 2023 – May 2024",
      title: "Himpunan Mahasiswa Informatika (HMIF) ITERA",
      location: "Lampung",
      points: [
        'Guided article writing for the HMIF ITERA website and led production of the "Berisik" podcast on the HMIF ITERA YouTube channel.',
      ],
      tags: ["Technology Studies", "HMIF ITERA", "Website Article", "Podcast Production"],
    },
    {
      id: "point-project",
      role: "Head of Public Relations Division",
      type: "Kepanitiaan",
      period: "Oct 2023 – Dec 2023",
      title: "Point Project 1.0 HMIF ITERA",
      location: "Lampung",
      points: [
        "Attracted 12 teams from various study programs to compete in the first UI/UX competition at ITERA.",
      ],
      tags: ["Public Relations", "Point Project 1.0", "UI/UX Competition", "Event Management"],
    },
    {
      id: "pmk-itera",
      role: "Sub-Division Head of Accommodation, Operations/Logistics Division",
      type: "Kepanitiaan",
      period: "Oct 2022 – Dec 2022",
      title: "PMK ITERA Christmas Celebration 2022",
      location: "Lampung",
      points: [
        "Planned the accommodation and security flow of the event and coordinated on-site operations for 1,200 participants and committee members.",
      ],
      tags: ["Operations & Logistics", "Accommodation Flow", "Crowd Coordination", "PMK ITERA"],
    },
  ];

  return (
    <main className="w-full xl:pl-24 bg-[#090e1a] text-[#dbe2f9] min-h-screen relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 left-1/3 w-[450px] h-[450px] rounded-full bg-[#1e50a2]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#00a3af]/10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10 relative z-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-[#00a3af]/20">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight">
                Pengalaman Organisasi
              </h1>
              <p className="font-body text-xs text-[#8fe3c6]">Organizational Experience &amp; Leadership</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <section className="mb-14">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 w-fit">
              <span className="material-symbols-outlined text-[#00a3af] text-sm" aria-hidden="true">groups</span>
              <span className="font-body text-xs text-[#8fe3c6] font-semibold tracking-wider uppercase">
                Organizational &amp; Committees
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold tracking-tight text-balance">
              Kepemimpinan &amp; Kolaborasi Mahasiswa
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed text-pretty">
              Pengalaman memimpin divisi teknologi studi, hubungan masyarakat dalam kompetisi kampus, dan koordinasi logistik berskala ribuan peserta di lingkungan Institut Teknologi Sumatera.
            </p>
          </div>

          {/* Organizational Cards List */}
          <div className="flex flex-col gap-6">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="bg-[#101828] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00a3af]/40 transition-colors shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                      {org.role}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#141f36] text-[#8fe3c6] border border-[#00a3af]/30 font-medium">
                      {org.type}
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-slate-300 font-semibold shrink-0">
                    {org.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 text-xs sm:text-sm">
                  <span className="font-medium text-slate-200">{org.title}</span>
                  <span className="text-slate-400">{org.location}</span>
                </div>

                <ul className="space-y-2 text-slate-300 font-body text-sm leading-relaxed">
                  {org.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#00a3af] mt-0.5 select-none font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                  {org.tags.map((tg) => (
                    <span
                      key={tg}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#090e1a] text-slate-300 border border-white/10"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Navigation link to Pengalaman */}
            <div className="p-5 rounded-2xl bg-[#101828] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6]">
                  <span className="material-symbols-outlined text-xl">work_history</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-white">Lihat Pengalaman Kerja</h4>
                  <p className="font-body text-xs text-slate-400">
                    Web Developer Intern, Riset Perpustakaan, dan Asisten Laboratorium.
                  </p>
                </div>
              </div>
              <Link
                href="/pengalaman"
                className="px-4 py-2 rounded-xl bg-[#141f36] hover:bg-[#00a3af] hover:text-[#080d16] text-[#8fe3c6] font-headline text-xs font-semibold border border-[#00a3af]/30 transition-all flex items-center gap-1.5 shrink-0"
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
