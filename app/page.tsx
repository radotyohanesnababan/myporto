import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full xl:pl-24 bg-background text-foreground min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top Identity Row */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-border">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center font-mono font-bold text-sm">
                &lt;/&gt;
              </span>
              <div>
                <span className="font-headline font-bold text-xl sm:text-2xl text-foreground tracking-tight block">
                  Portofolio Personal
                </span>
                <p className="font-mono text-xs text-foreground/70">
                  Radot Yohanes Nababan &bull; Web &amp; Cloud
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col justify-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow">
              <span>AVAILABLE FOR ROLES &amp; FREELANCE</span>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-3">
              <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground text-balance">
                Radot Yohanes Nababan
              </h1>
              <p className="font-headline text-xl sm:text-2xl md:text-3xl text-foreground/90 font-bold tracking-tight">
                Web Developer &amp; Cloud Computing Enthusiast
              </p>
            </div>

            {/* Summary Bio */}
            <p className="font-body text-base sm:text-lg text-foreground/80 max-w-2xl leading-relaxed">
              <strong className="text-foreground">Fresh Graduate S1 Teknik Informatika ITERA</strong> yang
              berfokus pada modern full-stack web development (Laravel, React, PHP) dan arsitektur cloud
              (Google Cloud Platform, RESTful API). Terbiasa membangun sistem nyata yang teruji dan siap produksi.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/proyek"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2"
              >
                <span>Lihat Proyek Terpilih</span>
                <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
              </Link>

              <Link
                href="/kontak"
                className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
                <span>Hubungi / Diskusi</span>
              </Link>

              <Link
                href="/curriculum-vitae"
                className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">description</span>
                <span>Curriculum Vitae</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: PROYEK UNGGULAN */}
        <section className="w-full bg-secondary-background border-y-2 border-border py-16 md:py-24" id="proyek-terpilih">
          <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-border">
              <div>
                <h2 className="font-headline text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
                  Proyek Pilihan
                </h2>
                <p className="font-mono text-xs text-foreground/70 mt-1 uppercase tracking-wide">
                  Studi Kasus &amp; Sistem Nyata
                </p>
              </div>
              <Link
                href="/proyek"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5 w-fit"
              >
                <span>Lihat Seluruh Arsip Proyek</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <article className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                <div className="flex flex-col gap-3">
                  <div className="w-full h-48 rounded-base overflow-hidden border-2 border-border bg-background">
                    <img
                      className="w-full h-full object-cover"
                      alt="Sistem Informasi Perpustakaan SMP N 1 Tarutung"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmoxlO4drt2rHg_Y8oYefLl208RBy-zvxsc-AfSI04ZRXNIL0KvAgCEYFGlpE2xu3VSJj5krzdi4TYyrCgyDBUiW-4fYxDydl9S67yY3QFylqauUleBMgtmjbf5O3j5YLdHSfqbec8i7yA8sTmbnjiABJXnPwRmod-CJMMIYfTtyUlIdVjSqEr3HMxytXIQRT_3rme2xukFo08Ug74ARsovSY7Xy4wvRCcOO1nk5XxqEb6oIMp9k"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-foreground/70 uppercase tracking-wide">
                      Skripsi / Tugas Akhir &bull; 2025–2026
                    </span>
                    <h3 className="font-headline text-xl text-foreground font-bold">
                      Sistem Informasi Perpustakaan SMP N 1 Tarutung
                    </h3>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed">
                      Sistem perpustakaan digital komprehensif untuk inventaris buku dan sirkulasi peminjaman ~300 siswa
                      berbasis Laravel PHP dan React Framework dengan pengujian Blackbox langsung di lapangan.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-border">
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    Laravel PHP
                  </span>
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    React.js
                  </span>
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    MySQL
                  </span>
                </div>
              </article>

              {/* Project 2 */}
              <article className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                <div className="flex flex-col gap-3">
                  <div className="w-full h-48 rounded-base overflow-hidden border-2 border-border bg-background">
                    <img
                      className="w-full h-full object-cover"
                      alt="Bangkit Capstone: Lettuce Plant Disease Detection"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5iHPHJrdyq9blKKkkadlyMbzjA-2iH2aMrSsx1KySZIKIDlj8GCd--c8z7egbMbP83clROSnbJbBFByMu8BvIuf-uEOxpuANfwvI0ud236wrOvBlvpOxHmHJ9tySypIdzZ7cRGvo-afr7VhNLxYszWdYjiVWlDYML7xtqTDq5JxpVN8a1xJOioToSdgjqxNVFFOUoRaF_wtmwAKsEl3-1Zv3u4IRiZa1TkgqlXUaBD1fxzkGKu3s"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-foreground/70 uppercase tracking-wide">
                      Bangkit Capstone &bull; Cloud Cohort 2024
                    </span>
                    <h3 className="font-headline text-xl text-foreground font-bold">
                      Bangkit Capstone: Lettuce Disease Detection API
                    </h3>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed">
                      Layanan RESTful API terintegrasi model Machine Learning di Google Cloud Platform (Cloud Run) untuk
                      klien aplikasi mobile Android.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-border">
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    Express.js
                  </span>
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    Google Cloud
                  </span>
                  <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                    Cloud Run
                  </span>
                </div>
              </article>

              {/* Project 3 */}
              <article className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all md:col-span-2">
                <div className="flex flex-col md:flex-row gap-5 items-start">
                  <div className="w-full md:w-1/2 h-52 rounded-base overflow-hidden border-2 border-border bg-background shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt="Tapamajuma Learning | PWA Literasi & Numerasi"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSNEcddK_aGvhBzRNr_UaL-Ti_oRhFcpIw9ByOD4Iwcdl3cQSlar-6NSXh8_AuXP2HIZYl8wYaelTeGU9K-VHOWf_vYzrcazGStWHUOmYpkOUuGlJffbBATtoaYc0_biPTcwZvaP2xtatYSs5J7dBYgcfCHMx5Ihz98Y3VWqYir0-c1bd8-TdTDU0P9Q17eIFIiPSNBVVwxx1HMYad2-Nrfx1B-dTGD78WthWAO6ioOL6zZxs3MR0"
                    />
                  </div>

                  <div className="flex flex-col gap-3 justify-between h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-foreground/70 uppercase tracking-wide">
                        Proyek Kolaborasi &bull; 2026
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl text-foreground font-bold">
                        Tapamajuma Learning: Platform Literasi &amp; Numerasi
                      </h3>
                      <p className="font-body text-sm text-foreground/80 leading-relaxed">
                        Sistem informasi pembelajaran dan asesmen literasi-numerasi berbasis soal interaktif dan gamifikasi.
                        Digunakan aktif oleh 250+ siswa di SMP N 1 Siborongborong dan diajukan ke Lomba GTK Transformatif 2026.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                        React (SPA)
                      </span>
                      <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                        Laravel PHP
                      </span>
                      <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
                        MySQL
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION: RANGKUMAN PORTOFOLIO & NAVIGASI */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
                Jelajahi Profil Lengkap
              </h2>
              <p className="font-mono text-xs text-foreground/70 mt-1 uppercase tracking-wide">
                Rekam Jejak, Organisasi, dan Keahlian Teknis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Link
                href="/pengalaman"
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-5 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">work_history</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-foreground">
                      Pengalaman Kerja
                    </h3>
                    <p className="font-body text-xs text-foreground/80 mt-1 leading-relaxed">
                      Riwayat magang sebagai Web Developer, riset pengembangan sistem perpustakaan, dan asisten lab komputer.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t-2 border-border flex items-center justify-between font-mono text-xs font-bold text-foreground">
                  <span>Buka Pengalaman</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Card 2 */}
              <Link
                href="/organisasi"
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-5 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">groups</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-foreground">
                      Pengalaman Organisasi
                    </h3>
                    <p className="font-body text-xs text-foreground/80 mt-1 leading-relaxed">
                      Kepemimpinan divisi kajian teknologi, divisi hubungan masyarakat (humas), dan kepanitiaan kampus.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t-2 border-border flex items-center justify-between font-mono text-xs font-bold text-foreground">
                  <span>Buka Organisasi</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    arrow_forward
                  </span>
                </div>
              </Link>

              {/* Card 3 */}
              <Link
                href="/tech-stack"
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-5 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">layers</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-foreground">
                      Tech Stack &amp; Keahlian
                    </h3>
                    <p className="font-body text-xs text-foreground/80 mt-1 leading-relaxed">
                      Rangkuman teknologi web development, database, cloud infrastructure, dan software perkantoran.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t-2 border-border flex items-center justify-between font-mono text-xs font-bold text-foreground">
                  <span>Buka Tech Stack</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: CTA BANNER */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-6 pb-20">
          <div className="border-[3px] border-border bg-secondary-background shadow-shadow rounded-base p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2.5 py-0.5 font-mono text-xs font-bold w-fit">
                KOLABORASI &amp; PELUANG KERJA
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground">
                Punya ide proyek atau butuh developer di tim Anda?
              </h2>
              <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
                Mari diskusikan visi teknis, timeline, atau kebutuhan produk Anda. Siap membantu membangun solusi web dengan performa tinggi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/kontak"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
                <span>Hubungi Saya</span>
              </Link>
              <a
                href="https://linkedin.com/in/radotnababan"
                rel="noreferrer"
                target="_blank"
                className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">hub</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
