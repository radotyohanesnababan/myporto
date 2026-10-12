"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  category: "fullstack" | "frontend" | "backend";
  title: string;
  badge?: string;
  org: string;
  description: string;
  stats?: { value: string; label: string }[];
  tags: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  hasCodeSnippet?: boolean;
}

export default function ProyekPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [copiedCode, setCopiedCode] = useState(false);

  const projects: Project[] = [
    {
      id: "perpustakaan",
      category: "fullstack",
      title: "Sistem Informasi Perpustakaan SMP N 1 Tarutung",
      badge: "FEATURED SYSTEM",
      org: "SMP N 1 TARUTUNG",
      description:
        "Sistem manajemen perpustakaan digital komprehensif yang dirancang untuk mengelola inventaris buku, peminjaman siswa, dan sirkulasi bagi sekitar 300 siswa di SMP N 1 Tarutung dengan antarmuka responsif.",
      stats: [
        { value: "300+", label: "Siswa Terlayani" },
        { value: "Laravel + React", label: "Full Stack Flow" }
      ],
      tags: ["Laravel PHP", "React Framework", "MySQL", "RESTful API", "TailwindCSS"],
      demoUrl: "#",
      repoUrl: "https://github.com",
      hasCodeSnippet: true,
    },
    {
      id: "lettuce-api",
      category: "backend",
      title: "Bangkit Capstone: Lettuce Disease Detection API",
      badge: "CLOUD & ML API",
      org: "BANGKIT CLOUD COHORT",
      description:
        "Layanan RESTful API terintegrasi model Machine Learning deteksi penyakit tanaman selada, dideploy pada infrastruktur Google Cloud Platform (Cloud Run) untuk aplikasi Android.",
      tags: ["Google Cloud (GCP)", "Cloud Run", "Python / Flask", "RESTful API"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5iHPHJrdyq9blKKkkadlyMbzjA-2iH2aMrSsx1KySZIKIDlj8GCd--c8z7egbMbP83clROSnbJbBFByMu8BvIuf-uEOxpuANfwvI0ud236wrOvBlvpOxHmHJ9tySypIdzZ7cRGvo-afr7VhNLxYszWdYjiVWlDYML7xtqTDq5JxpVN8a1xJOioToSdgjqxNVFFOUoRaF_wtmwAKsEl3-1Zv3u4IRiZa1TkgqlXUaBD1fxzkGKu3s",
      demoUrl: "#case-study",
      repoUrl: "https://github.com",
    },
    {
      id: "tapamajuma",
      category: "fullstack",
      title: "PWA Tapamajuma Projects : SMP N 1 Siborongborong",
      badge: "PROGRESSIVE WEB APP",
      org: "200+ SISWA AKTIF",
      description:
        "Proyek aplikasi PWA memadukan React SPA dan Laravel backend untuk latihan literasi & numerasi bagi siswa SMP N 1 Siborongborong dengan 200+ pengguna aktif.",
      tags: ["React SPA", "Laravel", "PWA", "MySQL"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSNEcddK_aGvhBzRNr_UaL-Ti_oRhFcpIw9ByOD4Iwcdl3cQSlar-6NSXh8_AuXP2HIZYl8wYaelTeGU9K-VHOWf_vYzrcazGStWHUOmYpkOUuGlJffbBATtoaYc0_biPTcwZvaP2xtatYSs5J7dBYgcfCHMx5Ihz98Y3VWqYir0-c1bd8-TdTDU0P9Q17eIFIiPSNBVVwxx1HMYad2-Nrfx1B-dTGD78WthWAO6ioOL6zZxs3MR0",
      demoUrl: "#",
      repoUrl: "https://github.com",
    },
    {
      id: "web-native",
      category: "frontend",
      title: "Website HTML CSS Native & PHP (Mata Kuliah Pemrograman Web)",
      badge: "WEB FUNDAMENTAL",
      org: "ITERA INFORMATIKA",
      description:
        "Website interaktif dengan HTML, Native CSS, dan PHP backend meliputi homepage interaktif, pembuatan form dinamis, dan pengelolaan tabel database.",
      tags: ["PHP Native", "HTML5", "CSS3 Native", "MySQL"],
      demoUrl: "#",
      repoUrl: "https://github.com",
    },
    {
      id: "alphapro",
      category: "fullstack",
      title: "Bimbingan Belajar Alphapro Landing Page & Haltev Modules",
      badge: "CLIENT & EDUTECH",
      org: "HALTEV & ALPHAPRO",
      description:
        "Landing page berkonversi tinggi untuk bimbel Alphapro dan pembuatan website studi kasus modul kelas Expert Web Development di Haltev IT Learning Center.",
      tags: ["Laravel Framework", "Tailwind CSS", "Responsive Web", "Blade Engine"],
      demoUrl: "#",
      repoUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const copySnippet = () => {
    const code = `public function borrowBook(Request $request) {
    // Validasi & Catat Sirkulasi Siswa SMP N 1
    $siswa = Siswa::findOrFail($request->siswa_id);
    if ($siswa->active_loans >= 3) {
        return response()->json(['limit_exceeded'], 422);
    }
    $loan = Loan::createLoanRecord($request->all());
    return response()->json(['success' => true]);
}`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <main className="w-full xl:pl-24 bg-[#0b111d] min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-32 right-12 w-[30rem] h-[30rem] rounded-full bg-[#00a3af]/12 blur-[140px] pointer-events-none" />
          <div className="absolute top-96 -left-12 w-96 h-96 rounded-full bg-[#1e50a2]/20 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#8fe3c6]/10 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-16 flex flex-col gap-10 lg:gap-12 relative">
            {/* Header Section */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3 max-w-3xl">
                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
                  Proyek & Portofolio Rekayasa Web
                </h1>
                <p className="font-body text-base sm:text-lg text-[#94a3b8] leading-relaxed">
                  Koleksi proyek pengembangan web, sistem informasi sekolah, arsitektur cloud, dan aplikasi berbasis
                  Laravel, React, serta Google Cloud.
                </p>
              </div>
            </div>

            {/* Project List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {filteredProjects.map((project) => {
                if (project.hasCodeSnippet) {
                  return (
                    <div
                      key={project.id}
                      className="lg:col-span-12 rounded-2xl bg-[#101828]/95 p-6 sm:p-8 border border-[#1e2c44] shadow-xl relative overflow-hidden group hover:border-[#00a3af]/60 transition-all duration-300"
                    >
                      <div className="flex flex-col gap-8 justify-between items-start relative z-10">
                        <div className="flex flex-col gap-5 max-w-2xl">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a3af]/15 text-[#8fe3c6] border border-[#00a3af]/40 font-label text-xs font-bold shadow-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00a3af] animate-pulse" />
                              {project.badge}
                            </span>
                            <span className="font-mono text-xs text-[#8fe3c6] font-medium">{project.org}</span>
                          </div>

                          <div className="flex flex-col gap-2">
                            <h2 className="font-headline text-2xl sm:text-3xl text-white group-hover:text-[#8fe3c6] transition-colors font-semibold">
                              {project.title}
                            </h2>
                            <p className="font-body text-base text-[#94a3b8] leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {project.stats && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
                              {project.stats.map((st, i) => (
                                <div
                                  key={st.label}
                                  className={`p-3.5 rounded-xl bg-[#0f1624] border border-[#1e2c44] ${
                                    i === 2 ? "col-span-2 sm:col-span-1" : ""
                                  }`}
                                >
                                  <div className="font-headline text-2xl font-bold text-[#8fe3c6]">{st.value}</div>
                                  <div className="font-label text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">
                                    {st.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tg, idx) => (
                              <span
                                key={tg}
                                className={`font-label text-xs px-2.5 py-1 rounded-lg ${
                                  idx === 0
                                    ? "bg-[#00a3af]/15 text-[#8fe3c6] font-semibold border border-[#00a3af]/30"
                                    : "bg-[#0f1624] text-[#e2e8f0] font-medium border border-[#1e2c44]"
                                }`}
                              >
                                {tg}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-3 flex-wrap pt-2">
                            <a
                              className="px-4 py-2.5 rounded-xl bg-[#00a3af] text-[#080d16] font-headline text-sm font-semibold hover:bg-[#00a3af]/90 transition-all flex items-center gap-2 shadow-sm shadow-[#00a3af]/25"
                              href="#"
                            >
                              <span className="material-symbols-outlined text-base">local_library</span>
                              <span>Demo Perpustakaan</span>
                            </a>
                            <a
                              className="px-4 py-2.5 rounded-xl bg-[#0f1624] hover:bg-[#182337] text-white font-headline text-sm font-semibold transition-colors flex items-center gap-2 border border-[#1e2c44]"
                              href="https://github.com"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <span className="material-symbols-outlined text-base">code</span>
                              <span>Repository</span>
                            </a>
                            <a
                              className="px-3 py-2.5 rounded-xl text-[#00a3af] hover:text-[#8fe3c6] hover:bg-[#0f1624] transition-colors font-headline text-sm font-semibold flex items-center gap-1.5"
                              href="#case-study"
                            >
                              <span className="material-symbols-outlined text-base">menu_book</span>
                              <span>Arsitektur Sistem</span>
                            </a>
                          </div>
                        </div>
                        {project.image && (
                          <div className="w-full h-48 rounded-xl overflow-hidden bg-[#0f1624] relative border border-[#1e2c44]">
                            <img
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              src={project.image}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={project.id}
                    className="lg:col-span-6 rounded-2xl bg-[#101828] p-6 border border-[#1e2c44] shadow-md flex flex-col justify-between gap-6 group hover:border-[#00a3af]/60 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-4">
                      {project.image && (
                        <div className="w-full h-48 rounded-xl overflow-hidden bg-[#0f1624] relative border border-[#1e2c44]">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                            alt={project.title}
                            src={project.image}
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#080d16]/90 backdrop-blur-sm font-label text-xs text-[#8fe3c6] font-bold shadow-xs border border-[#00a3af]/40">
                            {project.badge}
                          </div>
                        </div>
                      )}

                      {!project.image && (
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0f1624] text-[#94a3b8] font-label text-xs font-bold border border-[#1e2c44]">
                            {project.badge}
                          </span>
                          <span className="font-label text-xs text-[#8fe3c6] font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-[#00a3af]">verified</span>{" "}
                            {project.org}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-headline text-xl text-white group-hover:text-[#8fe3c6] transition-colors font-semibold">
                          {project.title}
                        </h3>
                        <p className="font-body text-sm text-[#94a3b8] leading-relaxed">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tg) => (
                          <span
                            key={tg}
                            className="font-label text-xs px-2.5 py-1 rounded-lg bg-[#0f1624] text-[#e2e8f0] font-medium border border-[#1e2c44]"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#1e2c44]">
                      <div className="flex items-center gap-2">
                        <a
                          className="px-3 py-1.5 rounded-lg bg-[#0f1624] hover:bg-[#00a3af] hover:text-[#080d16] text-[#e2e8f0] font-label text-xs font-semibold transition-all flex items-center gap-1.5 border border-[#1e2c44]"
                          href={project.demoUrl || "#"}
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                          <span>Buka Preview</span>
                        </a>
                        <a
                          className="p-1.5 rounded-lg bg-[#0f1624] hover:text-[#8fe3c6] text-[#94a3b8] transition-colors flex items-center justify-center border border-[#1e2c44]"
                          href={project.repoUrl || "https://github.com"}
                          rel="noreferrer"
                          target="_blank"
                          title="Source Code"
                        >
                          <span className="material-symbols-outlined text-base">code</span>
                        </a>
                      </div>
                      <span className="font-mono text-xs text-[#8fe3c6] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a3af]" /> {project.org}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Case Study Section */}
            <div className="rounded-2xl bg-[#101828] p-6 sm:p-10 border border-[#1e2c44] flex flex-col gap-8 shadow-xl" id="case-study">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00a3af] animate-ping" />
                    <span className="font-label text-xs text-[#8fe3c6] font-bold uppercase tracking-wider">
                      Deep Dive
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold">
                    Keputusan Arsitektur & Trade-Offs Teknis
                  </h2>
                  <p className="font-body text-sm sm:text-base text-[#94a3b8]">
                    Dokumentasi transparansi teknis di balik pemilihan stack, toleransi latensi, dan skema data.
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-[#0f1624] font-mono text-xs text-[#94a3b8] border border-[#1e2c44]">
                  ISO Architecture Review: <span className="text-[#8fe3c6] font-bold">Passed</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl bg-[#080d16] border border-[#1e2c44] shadow-sm hover:border-[#00a3af]/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6]">
                    <span className="material-symbols-outlined text-xl">install_mobile</span>
                  </div>
                  <h3 className="font-headline text-lg text-white font-semibold">PWA vs Native: Evaluasi Tapamajuma</h3>
                  <p className="font-body text-sm text-[#94a3b8] leading-relaxed">
                    Bagaimana implementasi Progressive Web App memberikan akses cepat latihan soal dengan bandwidth
                    rendah untuk siswa sekolah di SMP N 1 Siborongborong tanpa perlu instalasi aplikasi berat.
                  </p>
                  <div className="mt-auto pt-3 flex items-center gap-1 font-label text-xs text-[#8fe3c6] font-bold">
                    <span>Optimasi Aksesibilitas Siswa</span>
                    <span className="material-symbols-outlined text-sm text-[#00a3af]">arrow_forward</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl bg-[#080d16] border border-[#1e2c44] shadow-sm hover:border-[#8fe3c6]/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#1e50a2]/30 border border-[#1e50a2] flex items-center justify-center text-[#8fe3c6]">
                    <span className="material-symbols-outlined text-xl">schema</span>
                  </div>
                  <h3 className="font-headline text-lg text-white font-semibold">
                    Laravel & React Hybrid Architecture
                  </h3>
                  <p className="font-body text-sm text-[#94a3b8] leading-relaxed">
                    Integrasi backend Laravel yang tangguh dengan interaktivitas React untuk sistem informasi
                    perpustakaan SMP N 1 Tarutung guna menyajikan katalog real-time dan sirkulasi buku yang presisi.
                  </p>
                  <div className="mt-auto pt-3 flex items-center gap-1 font-label text-xs text-[#8fe3c6] font-bold">
                    <span>Decoupled API & Reactive UI</span>
                    <span className="material-symbols-outlined text-sm text-[#00a3af]">arrow_forward</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl bg-[#080d16] border border-[#1e2c44] shadow-sm hover:border-[#00a3af]/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6]">
                    <span className="material-symbols-outlined text-xl">cloud_sync</span>
                  </div>
                  <h3 className="font-headline text-lg text-white font-semibold">
                    GCP API Optimization for ML Inference
                  </h3>
                  <p className="font-body text-sm text-[#94a3b8] leading-relaxed">
                    Penanganan latensi RESTful API model machine learning pada Google Cloud Platform (Cloud Run) untuk
                    deteksi penyakit tanaman selada Bangkit Capstone, menghasilkan inferensi cepat ke klien Android.
                  </p>
                  <div className="mt-auto pt-3 flex items-center gap-1 font-label text-xs text-[#8fe3c6] font-bold">
                    <span>Cloud Run Container Deployment</span>
                    <span className="material-symbols-outlined text-sm text-[#00a3af]">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1624] border border-[#1e2c44] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6] shrink-0">
                    <span className="material-symbols-outlined text-2xl">neurology</span>
                  </div>
                  <div>
                    <div className="font-headline text-lg text-white font-bold">
                      Ingin mendiskusikan arsitektur sistem Anda?
                    </div>
                    <div className="font-body text-sm text-[#94a3b8]">
                      Terbuka untuk konsultasi rekayasa sistem terdistribusi dan kolaborasi rekayasa web.
                    </div>
                  </div>
                </div>
                <Link
                  className="px-6 py-3 rounded-xl bg-[#00a3af] text-[#080d16] font-headline text-sm font-semibold hover:bg-[#00a3af]/90 transition-all whitespace-nowrap shadow-md shadow-[#00a3af]/25 hover:shadow-lg"
                  href="/pengalaman#kontak"
                >
                  Jadwalkan Diskusi Teknis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
