import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full xl:pl-24 bg-[#0b111d] min-h-screen">
      <div className="flex flex-col w-full">
        {/* Ambient Dark Mode Luminous Glows */}
        <div className="relative w-full overflow-hidden bg-[#0b111d]">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1e50a2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 -right-40 w-[34rem] h-[34rem] bg-[#00a3af]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#8fe3c6]/10 rounded-full blur-3xl pointer-events-none" />

          {/* HERO SECTION */}
          <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-24 lg:pb-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-7 pt-2 pb-8 lg:pt-6 lg:pb-14">

              {/* Title & Tagline */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-slate-100 font-extrabold tracking-tight leading-[1.15]">
                  Radot Yohanes Nababan
                </h1>
                <p className="font-headline text-lg sm:text-2xl text-[#8fe3c6] font-medium tracking-tight">
                  Informatics Engineering ITERA &amp; Cloud Specialist
                </p>
              </div>

              {/* Summary Bio */}
              <p className="font-body text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                <span className="text-slate-100 font-semibold">Fresh Graduate Teknik Informatika ITERA</span> dengan
                fokus mendalam pada modern{" "}
                <span className="text-[#00a3af] font-medium">full-stack web development</span> (Laravel, React, PHP)
                dan arsitektur{" "}
                <span className="text-[#8fe3c6] font-medium">Cloud Computing</span> (Google Cloud Platform, RESTful API).
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
                <Link
                  href="/proyek"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1e50a2] via-[#00a3af] to-[#00a3af] hover:to-[#8fe3c6] text-white font-body font-bold text-sm tracking-wide shadow-lg shadow-[#00a3af]/25 hover:shadow-[#00a3af]/40 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Lihat Proyek Terpilih</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#101828] hover:bg-[#162035] text-slate-200 font-body text-sm font-semibold border border-[#283959] shadow-sm hover:border-[#00a3af]/50 hover:text-[#8fe3c6] transition-all duration-200 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-lg text-[#00a3af]">chat_bubble</span>
                  <span>Hubungi / Diskusi</span>
                </Link>

                <Link
                  href="/pengalaman"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#101828] text-slate-400 hover:text-[#8fe3c6] font-body text-sm font-semibold transition-colors border border-transparent hover:border-[#283959] w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-lg">work_history</span>
                  <span>Rekam Jejak Karir</span>
                </Link>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full pt-6 mt-2">
                <div className="p-4 rounded-xl bg-[#101828] border border-[#283959] shadow-sm flex flex-col items-center hover:border-[#00a3af]/40 transition-colors">
                  <div className="font-headline text-3xl font-bold text-[#00a3af] tracking-tight">3.58</div>
                  <div className="font-body text-xs text-slate-400 mt-1 font-medium">IPK (Cum Laude)</div>
                </div>

                <div className="p-4 rounded-xl bg-[#101828] border border-[#283959] shadow-sm flex flex-col items-center hover:border-[#00a3af]/40 transition-colors">
                  <div className="font-headline text-3xl font-bold text-[#8fe3c6] tracking-tight">6+</div>
                  <div className="font-body text-xs text-slate-400 mt-1 font-medium">Proyek &amp; Riset Web</div>
                </div>

                <div className="p-4 rounded-xl bg-[#101828] border border-[#283959] shadow-sm flex flex-col items-center hover:border-[#00a3af]/40 transition-colors">
                  <div className="font-headline text-3xl font-bold text-[#00a3af] tracking-tight">1200+</div>
                  <div className="font-body text-xs text-slate-400 mt-1 font-medium">Peserta Dikoordinir</div>
                </div>

                <div className="p-4 rounded-xl bg-[#101828] border border-[#283959] shadow-sm flex flex-col items-center hover:border-[#00a3af]/40 transition-colors">
                  <div className="font-headline text-2xl font-bold text-slate-100 tracking-tight">Bangkit</div>
                  <div className="font-body text-xs text-slate-400 mt-1 font-medium">Cloud Track Graduate</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 2: VALUE PROPOSITION (FOKUS TECH STACK & REKAYASA SISTEM) */}
        <section
          className="w-full bg-[#101828] py-14 lg:py-18 px-6 lg:px-12 relative border-y border-[#283959]"
          id="mengapa-bekerja-sama"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs text-[#00a3af] font-bold uppercase tracking-wider">
                    Standar Rekayasa &amp; Nilai Teknis
                  </span>
                  <span className="text-slate-600">/</span>
                  <span className="font-body text-xs text-slate-400 font-medium">Tech Stack Focus</span>
                </div>
                <h2 className="font-headline text-2xl sm:text-4xl text-slate-100 font-bold tracking-tight">
                  Mengapa Bekerja Sama Dengan Saya?
                </h2>
              </div>
              <p className="font-body text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
                Menghubungkan logika bisnis dan arsitektur kode bersih agar produk digital Anda handal, cepat diakses,
                serta siap dikembangkan dalam skala besar.
              </p>
            </div>

            {/* Feature Grid: 3 Focused Tech Stack Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Modern Full-Stack Web Development */}
              <div className="group p-6 sm:p-8 rounded-2xl bg-[#162035] border border-[#283959] shadow-sm hover:shadow-xl hover:border-[#00a3af]/50 transition-all duration-300 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">code_blocks</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label text-xs text-[#00a3af] font-bold uppercase tracking-wider">
                      Full-Stack Architecture
                    </span>
                    <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#8fe3c6] transition-colors">
                      Modern Laravel &amp; React Flow
                    </h3>
                    <p className="font-body text-sm text-slate-300 leading-relaxed mt-1">
                      Menguasai integrasi frontend interaktif (React SPA / PWA) dengan backend Laravel yang tangguh.
                      Menerapkan pola MVC bersih, Eloquent ORM efisien, autentikasi terstruktur, dan komponen UI modular.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#283959] flex flex-wrap gap-1.5">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Laravel PHP
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    React Framework
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Card 2: Cloud Infrastructure & Scalable API */}
              <div className="group p-6 sm:p-8 rounded-2xl bg-[#162035] border border-[#283959] shadow-sm hover:shadow-xl hover:border-[#8fe3c6]/50 transition-all duration-300 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e50a2]/25 border border-[#1e50a2]/40 flex items-center justify-center text-[#5dd7e4] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label text-xs text-[#5dd7e4] font-bold uppercase tracking-wider">
                      Cloud &amp; Microservices
                    </span>
                    <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#8fe3c6] transition-colors">
                      GCP Infrastructure &amp; Cloud Run
                    </h3>
                    <p className="font-body text-sm text-slate-300 leading-relaxed mt-1">
                      Lulusan Bangkit Cloud Computing dengan kompetensi merancang RESTful API berlatensi rendah,
                      deployment container Docker pada Google Cloud Run, penyimpanan Cloud Storage aman, dan IAM access.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#283959] flex flex-wrap gap-1.5">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Cloud Run
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    RESTful API
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Docker Container
                  </span>
                </div>
              </div>

              {/* Card 3: Database Design & Reliability */}
              <div className="group p-6 sm:p-8 rounded-2xl bg-[#162035] border border-[#283959] shadow-sm hover:shadow-xl hover:border-[#00a3af]/50 transition-all duration-300 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#00a3af] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">database</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label text-xs text-[#8fe3c6] font-bold uppercase tracking-wider">
                      Data Integrity &amp; Ops
                    </span>
                    <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#8fe3c6] transition-colors">
                      Skema Relasional &amp; Linux SysAdmin
                    </h3>
                    <p className="font-body text-sm text-slate-300 leading-relaxed mt-1">
                      Perancangan skema database MySQL terindeks efisien untuk ratusan pengguna simultan, kebiasaan
                      bekerja di terminal Ubuntu Linux, manajemen versi Git branching, dan otomasi alur deployment.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#283959] flex flex-wrap gap-1.5">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    MySQL Relational
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Linux Ubuntu
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1624] text-slate-300 border border-[#283959]">
                    Git Workflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KARYA FLAGSHIP (PROYEK UNGGULAN) */}
        <section className="w-full bg-[#0b111d] py-14 lg:py-18 px-6 lg:px-12 relative" id="proyek-terpilih">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-[#00a3af] font-bold uppercase tracking-wider">Karya Flagship</span>
                <h2 className="font-headline text-2xl sm:text-3xl text-slate-100 font-bold tracking-tight">
                  Proyek Unggulan Terpilih
                </h2>
              </div>
              <Link
                href="/proyek"
                className="inline-flex items-center gap-1.5 font-headline text-xs font-bold text-[#8fe3c6] hover:text-white transition-colors"
              >
                <span>Lihat Seluruh Arsip Proyek (5 Proyek)</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Project 1 */}
              <article className="group flex flex-col rounded-2xl bg-[#101828] border border-[#283959] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00a3af]/50 transition-all duration-300">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#162035]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    alt="Sistem Informasi Perpustakaan SMP N 1 Tarutung"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmoxlO4drt2rHg_Y8oYefLl208RBy-zvxsc-AfSI04ZRXNIL0KvAgCEYFGlpE2xu3VSJj5krzdi4TYyrCgyDBUiW-4fYxDydl9S67yY3QFylqauUleBMgtmjbf5O3j5YLdHSfqbec8i7yA8sTmbnjiABJXnPwRmod-CJMMIYfTtyUlIdVjSqEr3HMxytXIQRT_3rme2xukFo08Ug74ARsovSY7Xy4wvRCcOO1nk5XxqEb6oIMp9k"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b111d]/85 backdrop-blur-md border border-[#283959] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#00a3af] animate-pulse" />
                    <span className="font-body text-xs text-slate-200 font-semibold">Production Ready</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between bg-[#101828]">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline text-lg sm:text-xl text-slate-100 font-bold group-hover:text-[#8fe3c6] transition-colors">
                      Sistem Informasi Perpustakaan SMP N 1 Tarutung
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Sistem perpustakaan digital komprehensif untuk inventaris buku dan sirkulasi peminjaman ~300 siswa
                      berbasis Laravel PHP dan React Framework.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      Laravel PHP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      React Framework
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      MySQL
                    </span>
                  </div>
                </div>
              </article>

              {/* Project 2 */}
              <article className="group flex flex-col rounded-2xl bg-[#101828] border border-[#283959] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00a3af]/50 transition-all duration-300">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#162035]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    alt="Bangkit Capstone: Lettuce Plant Disease Detection"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5iHPHJrdyq9blKKkkadlyMbzjA-2iH2aMrSsx1KySZIKIDlj8GCd--c8z7egbMbP83clROSnbJbBFByMu8BvIuf-uEOxpuANfwvI0ud236wrOvBlvpOxHmHJ9tySypIdzZ7cRGvo-afr7VhNLxYszWdYjiVWlDYML7xtqTDq5JxpVN8a1xJOioToSdgjqxNVFFOUoRaF_wtmwAKsEl3-1Zv3u4IRiZa1TkgqlXUaBD1fxzkGKu3s"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b111d]/85 backdrop-blur-md border border-[#283959] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#8fe3c6]" />
                    <span className="font-body text-xs text-slate-200 font-semibold">Cloud ML Integration</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between bg-[#101828]">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline text-lg sm:text-xl text-slate-100 font-bold group-hover:text-[#8fe3c6] transition-colors">
                      Bangkit Capstone: Lettuce Disease Detection API
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Layanan RESTful API terintegrasi model Machine Learning di Google Cloud Platform (Cloud Run) untuk
                      klien aplikasi Android.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      Cloud Engineer
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      Google Cloud
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#162035] text-slate-300 font-mono text-xs border border-[#283959]">
                      Cloud Run
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 4: NAVIGASI EKSPLORASI LENGKAP (JELAJAHI PORTOFOLIO) */}
        <section className="w-full bg-[#101828] py-14 lg:py-18 px-6 lg:px-12 border-y border-[#283959]">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-[#00a3af] font-bold uppercase tracking-wider">
                Eksplorasi Halaman Khusus
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl text-slate-100 font-bold tracking-tight">
                Rangkuman Portofolio &amp; Jejak Karir
              </h2>
              <p className="font-body text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Setiap aspek rekayasa, kontribusi organisasi, dan matriks keahlian dipisahkan ke dalam halaman khusus
                agar mudah ditinjau secara mendalam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Halaman Karir & Rekayasa */}
              <Link
                href="/pengalaman"
                className="group p-6 rounded-2xl bg-[#141f36] border border-[#283959] hover:border-[#00a3af]/50 hover:bg-[#18253e] transition-all flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#8fe3c6]">
                    <span className="material-symbols-outlined text-2xl">work_history</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-white group-hover:text-[#8fe3c6] transition-colors">
                      Rekam Jejak Profesional
                    </h3>
                    <p className="font-body text-xs text-slate-300 mt-1 leading-relaxed">
                      Riwayat rekayasa perangkat lunak di Perpustakaan Tarutung, Haltev &amp; Alphapro, serta Bangkit
                      Academy Cloud Cohort.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-headline font-semibold text-[#8fe3c6]">
                  <span>Buka Halaman Karir</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Card 2: Halaman Organisasi */}
              <Link
                href="/organisasi"
                className="group p-6 rounded-2xl bg-[#141f36] border border-[#283959] hover:border-[#8fe3c6]/50 hover:bg-[#18253e] transition-all flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#1e50a2]/25 border border-[#1e50a2]/40 flex items-center justify-center text-[#5dd7e4]">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-white group-hover:text-[#8fe3c6] transition-colors">
                      Pengalaman Organisasi
                    </h3>
                    <p className="font-body text-xs text-slate-300 mt-1 leading-relaxed">
                      Kepemimpinan divisi di HMIF ITERA (Public Relations), PMK ITERA (Akomodasi 1200+ peserta), dan
                      Asisten Lab Komputer.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-headline font-semibold text-[#5dd7e4]">
                  <span>Buka Halaman Organisasi</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Card 3: Halaman Tech Stack */}
              <Link
                href="/tech-stack"
                className="group p-6 rounded-2xl bg-[#141f36] border border-[#283959] hover:border-[#00a3af]/50 hover:bg-[#18253e] transition-all flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#00a3af]">
                    <span className="material-symbols-outlined text-2xl">layers</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-white group-hover:text-[#8fe3c6] transition-colors">
                      Keahlian Teknis &amp; Ekosistem
                    </h3>
                    <p className="font-body text-xs text-slate-300 mt-1 leading-relaxed">
                      Matriks kualifikasi 4 domain, visualisasi diagram integrasi cloud, dan filosofi penulisan kode
                      bersih.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-headline font-semibold text-[#8fe3c6]">
                  <span>Buka Halaman Tech Stack</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: CALL TO ACTION BANNER */}
        <section className="w-full bg-[#0b111d] py-14 lg:py-18 px-6 lg:px-12 relative overflow-hidden" id="kontak-cta">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl bg-[#101828] border border-[#283959] p-8 md:p-14 overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#00a3af]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#1e50a2]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162035] border border-[#00a3af]/40 self-start shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#00a3af]" />
                    <span className="font-body text-xs text-[#8fe3c6] font-bold uppercase tracking-wider">
                      Terbuka Untuk Peluang Kerja &amp; Proyek
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-4xl text-slate-100 font-extrabold tracking-tight">
                    Punya ide proyek atau butuh developer di tim Anda?
                  </h2>
                  <p className="font-body text-sm sm:text-base text-slate-400 leading-relaxed">
                    Mari diskusikan visi teknis, timeline, atau kebutuhan arsitektur produk Anda. Siap membantu
                    membangun solusi web dengan performa tinggi dari nol hingga siap tayang.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#1e50a2] via-[#00a3af] to-[#00a3af] hover:to-[#8fe3c6] text-white font-body text-sm font-bold shadow-lg shadow-[#00a3af]/25 hover:shadow-[#00a3af]/40 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    <span>Hubungi Saya</span>
                  </Link>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#162035] hover:bg-[#1c2844] text-slate-100 font-body text-sm font-bold border border-[#283959] hover:border-[#00a3af]/40 shadow-sm transition-all"
                    href="https://linkedin.com/in/radot-nababan-a51247195"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-base text-[#00a3af]">hub</span>
                    <span>Koneksi LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
