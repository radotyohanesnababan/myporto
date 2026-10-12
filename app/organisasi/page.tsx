import Link from "next/link";

export default function OrganisasiPage() {
  const organizations = [
    {
      period: "2023 : 2024",
      org: "HMIF ITERA Point Project 1.0",
      role: "Head of Public Relations",
      institution: "Himpunan Mahasiswa Informatika ITERA",
      icon: "campaign",
      iconBg: "bg-[#00a3af]/15 border-[#00a3af]/30 text-[#8fe3c6]",
      description:
        "Mengoordinasikan sosialisasi kompetisi UI/UX tingkat kampus dengan 12+ tim peserta dan panel dosen juri, mengelola hubungan eksternal, publikasi media digital, serta komunikasi antar lembaga.",
      achievement: "12+ Tim Peserta UI/UX Terkoordinasi",
      tags: ["Public Relations", "Event Management", "Kompetisi UI/UX", "HMIF ITERA"],
    },
    {
      period: "2022 : 2023",
      org: "Perayaan Natal PMK ITERA 2022",
      role: "Head of Accommodation",
      institution: "Persekutuan Mahasiswa Kristen ITERA",
      icon: "diversity_3",
      iconBg: "bg-[#1e50a2]/25 border-[#1e50a2]/40 text-[#5dd7e4]",
      description:
        "Memimpin divisi akomodasi dan logistik operasional, mengkoordinir alur transportasi, perizinan gedung, serta fasilitas konsumsi bagi 1200+ panitia dan jemaat perayaan natal kampus.",
      achievement: "1200+ Panitia & Jemaat Terakomodasi",
      tags: ["Head of Accommodation", "Logistics & Operations", "Team Leadership", "PMK ITERA"],
    },
    {
      period: "2022 : 2024 (4+ Semester)",
      org: "Laboratorium Komputer ITERA",
      role: "Practicum Laboratory Assistant",
      institution: "Institut Teknologi Sumatera",
      icon: "school",
      iconBg: "bg-[#00a3af]/15 border-[#00a3af]/30 text-[#00a3af]",
      description:
        "Membimbing lebih dari 100 mahasiswa pada praktikum Sistem Operasi (Linux Ubuntu, Bash Scripting), C++, dan Struktur Data & Algoritma, serta menyusun evaluasi tugas praktikum dan otomatisasi lembar nilai.",
      achievement: "100+ Mahasiswa Praktikan Dibimbing",
      tags: ["Teaching & Mentoring", "Linux & Bash", "C++ Algorithms", "Akademik Lab"],
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
                Pengalaman Organisasi
              </h1>
              <p className="font-body text-xs text-[#8fe3c6]">Kepemimpinan &amp; Kolaborasi Mahasiswa</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 text-xs font-mono text-[#8fe3c6]">
              <span className="w-2 h-2 rounded-full bg-[#8fe3c6] animate-pulse" />
              Leadership Track
            </span>
          </div>
        </div>

        {/* Section Header */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 w-fit shadow-inner">
                <span className="material-symbols-outlined text-[#00a3af] text-sm">groups</span>
                <span className="font-body text-xs text-[#8fe3c6] font-semibold tracking-wider uppercase">
                  Organisasi &amp; Kepemimpinan
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                Pengalaman Organisasi &amp; Kepanitiaan Kampus
              </h2>
              <p className="font-body text-base text-slate-400 leading-relaxed">
                Peran kepemimpinan divisi, manajemen logistik berskala ribuan peserta, serta asistensi laboratorium
                akademik di lingkungan Institut Teknologi Sumatera (ITERA).
              </p>
            </div>

            {/* Metrics Counter */}
            <div className="flex items-center gap-3 bg-[#101828] p-3 rounded-2xl border border-white/10 shadow-xl self-start lg:self-auto">
              <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#090e1a] border border-[#00a3af]/20 text-center">
                <span className="font-headline text-2xl text-[#8fe3c6] font-bold">1200+</span>
                <span className="font-label text-xs text-slate-400 font-semibold uppercase">Peserta</span>
              </div>
              <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#090e1a] border border-[#1e50a2]/40 text-center">
                <span className="font-headline text-2xl text-[#00a3af] font-bold">12+</span>
                <span className="font-label text-xs text-slate-400 font-semibold uppercase">Tim UI/UX</span>
              </div>
              <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#090e1a] border border-white/10 text-center">
                <span className="font-headline text-2xl text-white font-bold">4+</span>
                <span className="font-label text-xs text-slate-400 font-semibold uppercase">Semester Lab</span>
              </div>
            </div>
          </div>

          {/* Organizational Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizations.map((item) => (
              <div
                key={item.org}
                className="group rounded-2xl bg-[#101828] p-6 sm:p-7 border border-white/10 shadow-xl hover:border-[#00a3af]/50 hover:bg-[#141f36] transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm ${item.iconBg}`}
                    >
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#090e1a] border border-[#00a3af]/30 font-mono text-xs text-[#8fe3c6] font-bold">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-label text-xs text-[#00a3af] font-bold uppercase tracking-wider">
                      {item.org}
                    </span>
                    <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#8fe3c6] transition-colors">
                      {item.role}
                    </h3>
                    <span className="font-body text-xs text-slate-400 font-medium">{item.institution}</span>
                  </div>

                  <p className="font-body text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Pencapaian:</span>
                    <span className="text-[#8fe3c6] font-bold">{item.achievement}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tg) => (
                      <span
                        key={tg}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#090e1a] text-slate-300 border border-white/10"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Competencies / Values */}
        <section className="mb-14 p-6 sm:p-10 rounded-2xl bg-[#101828] border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-label text-xs text-[#00a3af] font-bold uppercase tracking-wider">
              Kompetensi Interpersonal
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-white font-bold">
              Keahlian Soft Skills &amp; Nilai Kepemimpinan
            </h3>
            <p className="font-body text-sm sm:text-base text-slate-400 max-w-2xl">
              Pengalaman organisasi membina kemampuan komunikasi, ketahanan kerja di bawah tekanan, dan orientasi
              pemecahan masalah tim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#090e1a] border border-white/5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00a3af]/15 text-[#00a3af] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">forum</span>
              </div>
              <h4 className="font-headline text-base font-bold text-white">Komunikasi &amp; Hubungan Publik</h4>
              <p className="font-body text-xs text-slate-400 leading-relaxed">
                Membangun jembatan komunikasi antara peserta kompetisi kampus, panel juri dosen, dan sponsor eksternal.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#090e1a] border border-white/5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e50a2]/25 text-[#8fe3c6] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">alt_route</span>
              </div>
              <h4 className="font-headline text-base font-bold text-white">Manajemen Krisis &amp; Logistik</h4>
              <p className="font-body text-xs text-slate-400 leading-relaxed">
                Pengambilan keputusan cepat dan alokasi sumber daya secara taktis untuk mengakomodasi 1200+ orang.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#090e1a] border border-white/5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00a3af]/15 text-[#8fe3c6] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">psychology</span>
              </div>
              <h4 className="font-headline text-base font-bold text-white">Mentoring &amp; Empati</h4>
              <p className="font-body text-xs text-slate-400 leading-relaxed">
                Menyederhanakan konsep sistem operasi dan algoritma kompleks agar mudah dipahami oleh mahasiswa
                praktikan.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-body text-xs text-slate-400 text-center sm:text-left">
              Ingin mendiskusikan peran kepemimpinan atau posisi di tim Anda?
            </span>
            <Link
              href="/kontak"
              className="px-5 py-2.5 rounded-xl bg-[#00a3af] text-[#080d16] font-headline text-xs font-bold hover:bg-[#00a3af]/90 transition-all flex items-center gap-1.5 shadow-md shadow-[#00a3af]/25"
            >
              <span>Hubungi Radot</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
