import Link from "next/link";

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
      type: "Internship",
      period: "Jun 2025 – Jul 2025",
      title: "Haltekom Media Inovasi",
      location: "Bekasi, West Java",
      points: [
        "Built a dynamic website with Laravel (PHP) and MySQL as a learning platform for Junior Web Developer certification preparation, covering basic CRUD operations and authentication.",
        "Developed 1 responsive static landing page with HTML and CSS to support the learning program.",
      ],
      tags: ["Laravel (PHP)", "MySQL", "HTML5", "CSS3", "Responsive Web"],
    },
    {
      id: "research-tarutung",
      role: "Research & Web Development",
      type: "Research / Skripsi",
      period: "2025 – 2026",
      title: "SPARTA – Perpustakaan SMP N 1 Tarutung",
      location: "Tarutung, Tapanuli Utara",
      points: [
        "Designed and developed the digital library system with Laravel (PHP) and React, from requirements analysis through implementation for around 300 students.",
        "Conducted on-site system testing using the Blackbox Testing method to verify accuracy and operational flow.",
      ],
      tags: ["Laravel (PHP)", "React Framework", "MySQL", "Blackbox Testing", "RESTful API"],
    },
    {
      id: "lab-assistant",
      role: "Lab Assistant",
      type: "Contract",
      period: "Sep 2023 – May 2024",
      title: "Informatics Engineering Laboratory, Institut Teknologi Sumatera",
      location: "Lampung Selatan, Lampung",
      points: [
        "Guided 60+ students in using the Ubuntu operating system (file management and basic terminal commands).",
        "Guided 50+ students in Office applications, covering Mail Merge in Word and VBA in Excel.",
        "Guided 50+ students in C++ programming fundamentals (variables, conditionals, and loops).",
      ],
      tags: ["Ubuntu Linux", "Bash", "C++", "Microsoft Word", "Microsoft Excel"],
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
                Pengalaman Kerja
              </h1>
              <p className="font-body text-xs text-[#8fe3c6]">Work Experience &amp; Rekayasa Teknis</p>
            </div>
          </div>
        </div>

        {/* Section: Work Experience */}
        <section className="mb-14">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 w-fit">
              <span className="material-symbols-outlined text-[#00a3af] text-sm" aria-hidden="true">work_history</span>
              <span className="font-body text-xs text-[#8fe3c6] font-semibold tracking-wider uppercase">
                Work Experience
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold tracking-tight text-balance">
              Rekam Jejak Profesional
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed text-pretty">
              Pengalaman kerja magang, riset pengembangan sistem perpustakaan digital, dan asistensi laboratorium komputer di perguruan tinggi.
            </p>
          </div>

          {/* Experience list */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#101828] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00a3af]/40 transition-colors shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                      {exp.role}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#141f36] text-[#8fe3c6] border border-[#00a3af]/30 font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-slate-300 font-semibold shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 text-xs sm:text-sm">
                  <span className="font-medium text-slate-200">{exp.title}</span>
                  <span className="text-slate-400">{exp.location}</span>
                </div>

                <ul className="space-y-2 text-slate-300 font-body text-sm leading-relaxed">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#00a3af] mt-0.5 select-none font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                  {exp.tags.map((tg) => (
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

            {/* Navigation link to Organisasi */}
            <div className="p-5 rounded-2xl bg-[#101828] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6]">
                  <span className="material-symbols-outlined text-xl">groups</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-white">Lihat Pengalaman Organisasi</h4>
                  <p className="font-body text-xs text-slate-400">
                    HMIF ITERA, PMK ITERA, dan Asisten Laboratorium Komputer.
                  </p>
                </div>
              </div>
              <Link
                href="/organisasi"
                className="px-4 py-2 rounded-xl bg-[#141f36] hover:bg-[#00a3af] hover:text-[#080d16] text-[#8fe3c6] font-headline text-xs font-semibold border border-[#00a3af]/30 transition-all flex items-center gap-1.5 shrink-0"
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
