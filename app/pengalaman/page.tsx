import Link from "next/link";

export default function PengalamanPage() {
  const experiences = [
    {
      period: "2025 : 2026",
      role: "Research & Web Development",
      title: "Perpustakaan SMP N 1 Tarutung",
      location: "Tarutung, Tapanuli Utara",
      description:
        "Membangun sistem informasi perpustakaan digital berbasis Laravel PHP dan React Framework untuk mengakomodasi kebutuhan pendataan buku serta sirkulasi peminjaman bagi sekitar 300 siswa.",
      tags: ["Laravel PHP", "React Framework", "MySQL", "Sistem Informasi", "RESTful API"],
      impact: "300+ Siswa Terlayani",
    },
    {
      period: "2025",
      role: "Internship & Freelance",
      title: "Haltev IT Learning Center & Alphapro",
      location: "Bekasi City",
      description:
        "Mengembangkan website modul studi kasus untuk kelas Expert Web Development dengan Laravel Framework serta membangun landing page berkonversi tinggi untuk bimbingan belajar Alphapro.",
      tags: ["Laravel Framework", "PHP", "Tailwind CSS", "Responsive Web", "Blade Engine"],
      impact: "Modul Expert & Live Landing Page",
    },
    {
      period: "2024",
      role: "Cloud Engineer (Bangkit Cohort)",
      title: "Bangkit Academy Capstone Project",
      location: "Google Cloud Platform",
      description:
        "Membangun RESTful API untuk integrasi model Machine Learning ke aplikasi mobile Android (Lettuce Plant Disease Detection). Mengoptimalkan arsitektur Google Cloud Platform dan performa endpoint Cloud Run.",
      tags: ["Google Cloud Platform", "Cloud Run", "RESTful API", "Python / Flask", "Android Backend"],
      impact: "Model ML Deployed on Cloud Run",
    },
  ];

  return (
    <main className="w-full xl:pl-24 bg-[#090e1a] text-[#dbe2f9] min-h-screen relative z-10">
      {/* Background ambient lighting */}
      <div className="fixed -top-40 left-1/3 w-[550px] h-[550px] rounded-full bg-[#1e50a2]/15 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#00a3af]/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-[#00a3af]/20">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight">
                Rekam Jejak Profesional
              </h1>
              <p className="font-body text-xs text-[#8fe3c6]">Pengalaman Kerja &amp; Rekayasa Teknis</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 text-xs font-mono text-[#8fe3c6]">
              <span className="w-2 h-2 rounded-full bg-[#8fe3c6] animate-pulse" />
              Open to Projects &amp; Hiring
            </span>
          </div>
        </div>

        {/* Section: Professional Experience */}
        <section className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 mb-3 shadow-inner">
                <span className="material-symbols-outlined text-[#00a3af] text-sm">work_history</span>
                <span className="font-body text-xs text-[#8fe3c6] font-semibold tracking-wider uppercase">
                  Karir &amp; Rekayasa Web
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                Rekam Jejak Profesional &amp; Karir Teknis
              </h2>
              <p className="font-body text-base text-slate-400 max-w-2xl mt-2 leading-relaxed">
                Pengalaman rekayasa perangkat lunak, sistem informasi sekolah, arsitektur cloud Google Cloud Platform,
                dan pembuatan modul edukasi web.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#101828] border border-white/10 p-1.5 rounded-xl self-start lg:self-auto shadow-md">
              <div className="px-3.5 py-1.5 rounded-lg bg-[#141f36] text-[#dbe2f9] flex items-center gap-2 border border-[#00a3af]/20">
                <span className="font-mono text-xs font-bold text-[#8fe3c6]">3.58</span>
                <span className="font-body text-xs text-slate-400">IPK ITERA</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#141f36] text-[#dbe2f9] flex items-center gap-2 border border-[#1e50a2]/40">
                <span className="font-mono text-xs font-bold text-[#5dd7e4]">Bangkit</span>
                <span className="font-body text-xs text-slate-400">Cloud Track</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Timeline on Left + Relevant Image Slot on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Timeline Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title}
                  className="group relative bg-[#101828]/90 hover:bg-[#141f36] rounded-2xl p-6 sm:p-7 transition-all duration-300 border border-white/10 hover:border-[#00a3af]/50 shadow-lg hover:shadow-[0_0_25px_rgba(0,163,175,0.15)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          idx === 0 ? "bg-[#8fe3c6] ring-4 ring-[#00a3af]/20 animate-pulse" : "bg-[#00a3af]"
                        }`}
                      />
                      <span className="font-mono text-xs text-[#8fe3c6] font-bold tracking-wide">{exp.period}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#101828] border border-[#00a3af]/40 font-body text-xs text-[#8fe3c6] font-semibold">
                      {exp.role}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#8fe3c6] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="font-body text-xs text-slate-300 font-medium bg-[#141f36] px-2.5 py-1 rounded border border-white/10">
                      {exp.location}
                    </span>
                  </div>

                  <p className="font-body text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 flex-wrap gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tg) => (
                        <span
                          key={tg}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#090e1a] text-slate-300 border border-white/10 font-medium"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-[#8fe3c6] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a3af]" />
                      {exp.impact}
                    </span>
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

            {/* Relevant Image Slot Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Primary Visual Image Slot */}
              <div className="bg-[#101828] rounded-2xl p-5 shadow-2xl border border-white/10 ring-1 ring-[#00a3af]/20 overflow-hidden flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00a3af] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Work Environment
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#8fe3c6] bg-[#00a3af]/15 px-2 py-0.5 rounded-md border border-[#00a3af]/30">
                    Production Rig
                  </span>
                </div>

                {/* Relevant Image */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpNXrd2PZ-R-lxRdxA_5SRc5IXP6Dly6NFmcyPPDh2I41S-UIuzAKz7g3vbVTyVkSWwphgwAPthk9rHi9pbrZYGIlUkLqM9QM4b7cSO-7DTihuZsRULTK61lmFX4RaXHryefToWn1748ixHvYCW-rMR3z6xBhTWE9q_LbH-2hzFUlENsHVSmV1y3nGCnEML9bG_AAkzh6FP3YFEz88HBSnHqSKyLm8QWKxwXY8VLjDXX1OCIX7PSI"
                    alt="Radot Yohanes Nababan Engineering Setup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                    <span className="px-2 py-1 rounded bg-[#090e1a]/90 backdrop-blur-md border border-white/10">
                      VS Code + Ubuntu Linux
                    </span>
                    <span className="text-[#8fe3c6] font-semibold">GCP Cloud Run</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="font-headline text-base font-bold text-white">
                    Rekayasa Efisien &amp; Arsitektur Cloud
                  </h4>
                  <p className="font-body text-xs text-slate-300 leading-relaxed">
                    Setiap baris kode dirancang untuk keandalan jangka panjang, struktur modular Laravel MVC, dan
                    kemudahan deployment pada container Google Cloud Run.
                  </p>
                </div>

                {/* Technical highlights bullet points */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#090e1a] border border-white/5 flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase">Framework</span>
                    <span className="font-headline text-xs font-bold text-[#8fe3c6] mt-0.5">Laravel &amp; React</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#090e1a] border border-white/5 flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase">Cloud Infra</span>
                    <span className="font-headline text-xs font-bold text-[#00a3af] mt-0.5">GCP Cloud Run</span>
                  </div>
                </div>
              </div>

              {/* Secondary Visual Image Slot: Server & Architecture */}
              <div className="bg-[#101828] rounded-2xl p-5 shadow-xl border border-white/10 overflow-hidden flex flex-col gap-3">
                <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD45n_ZleOjDFGZbI3IQoyBa7-uubbQSGvY1s--kxU7OK-981hchPcAU62UZAVdOYu4EVFhxj7f8bWDjGUxf9ffEJNrF5TcWGENRNmEHGhBSTXJWjOuLQn9Accrz3TTs2mPwDyUoT5RcsDeD9GGQ0y11M7jc3QJU6nh-bJf6tKZk1oo17rRGvD8LreLwLCMw1fOAR29MlizH1FZA3tuLPdSpxqUN9Cus6QE4TMquD3mT0CTsgnojk"
                    alt="Cloud Architecture & Server Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="px-2 py-0.5 rounded bg-[#090e1a]/90 backdrop-blur-md border border-white/10">
                      Cloud Deployment
                    </span>
                    <span className="text-[#8fe3c6]">CI/CD Pipeline</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-headline text-sm font-bold text-white">Standar Deployment</h4>
                  <p className="font-body text-xs text-slate-400 leading-relaxed">
                    Pengujian otomatis linting, verifikasi build, dan endpoint API yang siap melayani ratusan pengguna
                    secara simultan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
