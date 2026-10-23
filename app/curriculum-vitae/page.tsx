"use client";

import Link from "next/link";

export default function CurriculumVitaePage() {
  return (
    <main className="w-full xl:pl-24 bg-background text-foreground min-h-screen py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:m-0">
      {/* Action Toolbar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 no-print print:hidden flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-4 py-2 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Direct PDF File Download */}
          <a
            href="/CV-Radot-Yohanes-Nababan.pdf"
            download="CV-Radot-Yohanes-Nababan.pdf"
            className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-5 py-2 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2 cursor-pointer"
            title="Download file PDF asli langsung ke perangkat"
            aria-label="Download CV Radot Yohanes Nababan format PDF"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">download</span>
            <span>Download PDF Asli</span>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* ==================== PAGE 1 ==================== */}
        <article className="page-break bg-white text-black p-8 sm:p-12 md:p-14 border-2 border-border shadow-shadow rounded-base font-sans text-[12.5px] leading-relaxed print:p-0 print:border-none print:shadow-none print:max-w-full print:m-0 mb-8 print:mb-0">
          {/* HEADER */}
          <header className="text-center mb-3">
            <h1 className="text-xl sm:text-2xl font-bold tracking-normal text-black uppercase">
              RADOT YOHANES NABABAN
            </h1>
            <p className="text-[13px] font-medium text-black mt-0.5">
              Full-Stack Web Developer
            </p>
            <div className="text-[12px] text-black mt-1 flex flex-wrap items-center justify-center gap-x-2">
              <span>+62 82272118326</span>
              <span>|</span>
              <a href="mailto:radot2510@gmail.com" className="hover:underline">
                radot2510@gmail.com
              </a>
              <span>|</span>
              <span>Bandar Lampung</span>
              <span>|</span>
              <a
                href="https://linkedin.com/in/radotnababan"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/radotnababan
              </a>
            </div>
            <hr className="border-t-2 border-black mt-2.5 mb-3" />
          </header>

          {/* PROFIL */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1">
              PROFIL
            </h2>
            <p className="text-[12px] text-black leading-relaxed text-justify">
              Lulusan S1 Teknik Informatika Institut Teknologi Sumatera (ITERA) angkatan 2026 dengan fokus pada
              full-stack web development. Berpengalaman membangun backend Express.js untuk aplikasi Android serta
              sistem informasi perpustakaan berbasis Laravel. Saat ini aktif mengembangkan proyek Laravel + React
              (SPA) yang digunakan oleh 250+ siswa dan diikutsertakan dalam Lomba GTK Transformatif 2026 di Sumatera Utara.
            </p>
          </section>

          {/* PENDIDIKAN */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              PENDIDIKAN
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                <span>S.Kom Teknik Informatika – Institut Teknologi Sumatera</span>
                <span className="font-bold text-[12px]">Agu 2021 – Sep 2026</span>
              </div>
              <ul className="list-disc ml-4 mt-0.5 space-y-0.5 text-[12px] text-black">
                <li><span className="font-bold">IPK :</span> 3.58 / 4.00</li>
              </ul>
              <p className="text-[12px] text-black mt-0.5">
                <span className="font-bold">Skripsi :</span> Perancangan dan Pengembangan Sistem Informasi Perpustakaan Berbasis Web Menggunakan Metode Modified Waterfall
              </p>
              <p className="text-[12px] text-black mt-0.5">
                <span className="font-bold">Mata Kuliah Relevan :</span> Manajemen Proyek Teknologi Informasi (A), Basis Data (AB), Pemrograman Berorientasi Objek (A), Interaksi Manusia dan Komputer (A), Sistem Informasi (A)
              </p>
            </div>
          </section>

          {/* PROYEK */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              PROYEK
            </h2>
            <div className="space-y-2">
              {/* HICARE */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>HICARE – Bangkit Capstone Project</span>
                  <span className="font-bold text-[12px]">2024</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Membangun RESTful API dengan Express.js untuk melayani inferensi model machine learning agar dapat diintegrasikan ke aplikasi mobile.</li>
                  <li>Membuat static landing page berbasis HTML sebagai halaman unduhan aplikasi.</li>
                </ul>
              </div>

              {/* SPARTA */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>SPARTA – Sistem Informasi Perpustakaan SMP N 1 Tarutung</span>
                  <span className="font-bold text-[12px]">2025–2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Merancang dan mengembangkan sistem menggunakan Laravel (PHP), mulai dari analisis kebutuhan hingga tahap implementasi.</li>
                  <li>Melakukan pengujian sistem langsung di lokasi (on-site testing) menggunakan metode Blackbox Testing.</li>
                </ul>
              </div>

              {/* TAPAMAJUMA */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>TAPAMAJUMA – Website Pembelajaran Literasi dan Numerasi</span>
                  <span className="font-bold text-[12px]">2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Membangun sistem asesmen literasi dan numerasi berbasis web dengan arsitektur Laravel dan React (SPA).</li>
                  <li>Digunakan secara aktif oleh 250+ siswa di SMP N 1 Siborongborong.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PENGALAMAN KERJA */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              PENGALAMAN KERJA
            </h2>
            <div className="space-y-2">
              {/* Web Developer Intern */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Web Developer Intern | Magang</span>
                  <span className="font-bold text-[12px]">Jun 2025 – Jul 2025</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Haltekom Media Inovasi – Bekasi, Jawa Barat
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Membangun website dinamis dengan Laravel (PHP) dan MySQL sebagai platform pembelajaran persiapan sertifikasi Junior Web Developer, mencakup operasi CRUD dasar dan autentikasi.</li>
                  <li>Mengembangkan 1 responsive static landing page dengan HTML dan CSS untuk mendukung program pembelajaran.</li>
                </ul>
              </div>

              {/* Asisten Praktikum */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Asisten Praktikum (Lab Assistant) | Kontrak</span>
                  <span className="font-bold text-[12px]">Sep 2023 – Mei 2024</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Laboratorium Teknik Informatika, Institut Teknologi Sumatera
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Membimbing 60+ mahasiswa dalam penggunaan sistem operasi Ubuntu (manajemen file dan command dasar terminal).</li>
                  <li>Membimbing 50+ mahasiswa dalam aplikasi perkantoran, mencakup Mail Merge pada Word dan VBA pada Excel.</li>
                  <li>Membimbing 50+ mahasiswa dalam dasar pemrograman C++ (variabel, percabangan/kondisional, dan perulangan/looping).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* KEAHLIAN */}
          <section className="pt-1 border-t border-black">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              KEAHLIAN
            </h2>
            <div className="space-y-1 text-[12px] text-black">
              <div>
                <span className="font-bold">Software Perkantoran :</span> Microsoft Office (Word, Excel, PowerPoint), Google Workspace (Docs, Sheets, Slides)
              </div>
              <div>
                <span className="font-bold">Web Development Stack :</span> HTML, CSS, PHP, Laravel, React.js, Express.js, Node.js, Figma
              </div>
              <div>
                <span className="font-bold">Database Stack :</span> MySQL, TiDB
              </div>
              <div>
                <span className="font-bold">Infrastruktur &amp; Cloud :</span> Google Cloud Platform, Cloudflare R2, Railway, Docker
              </div>
              <div>
                <span className="font-bold">Soft Skills :</span> Decision Making, Kolaborasi Tim, Problem Solving
              </div>
              <div>
                <span className="font-bold">Bahasa :</span> Bahasa Indonesia (Penutur Asli), Bahasa Inggris (Menengah)
              </div>
            </div>
          </section>
        </article>

        {/* Page 2 Separator indicator (Only visible on web, hidden during print) */}
        <div className="no-print my-6 flex items-center justify-center gap-3">
          <div className="h-[2px] bg-border w-24" />
          <span className="font-mono text-xs text-main-foreground bg-main border-2 border-border shadow-shadow px-3 py-1 rounded-base font-bold uppercase tracking-wider">
            Halaman 2
          </span>
          <div className="h-[2px] bg-border w-24" />
        </div>

        {/* ==================== PAGE 2 ==================== */}
        <article className="bg-white text-black p-8 sm:p-12 md:p-14 border-2 border-border shadow-shadow rounded-base font-sans text-[12.5px] leading-relaxed print:p-0 print:border-none print:shadow-none print:max-w-full print:m-0 mb-12">
          {/* SERTIFIKASI & PELATIHAN */}
          <section className="mb-5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-2">
              SERTIFIKASI &amp; PELATIHAN
            </h2>
            <div className="space-y-1.5 text-[12px] text-black">
              <div className="flex justify-between items-baseline">
                <span>Belajar Membuat Aplikasi Back-End dengan Google Cloud – Dicoding Indonesia</span>
                <span className="font-bold text-black">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>Belajar Dasar Pemrograman JavaScript – Dicoding Indonesia</span>
                <span className="font-bold text-black">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>Create and Manage Cloud Resources – Google Cloud Skill Boost</span>
                <span className="font-bold text-black">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>Perform Foundational Data, ML, and AI Tasks in Google Cloud – Google Cloud Skill Boost</span>
                <span className="font-bold text-black">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>Menjadi Google Cloud Engineer – Dicoding Indonesia</span>
                <span className="font-bold text-black">2024</span>
              </div>
            </div>
          </section>

          {/* PENGALAMAN ORGANISASI & KEPANITIAAN */}
          <section className="mb-2">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-2">
              PENGALAMAN ORGANISASI &amp; KEPANITIAAN
            </h2>
            <div className="space-y-3.5">
              {/* Kepala Divisi Kajian Teknologi */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Kepala Divisi Kajian Teknologi</span>
                  <span className="font-bold text-[12px]">Mei 2023 – Mei 2024</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Himpunan Mahasiswa Informatika (HMIF) ITERA – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Membimbing penulisan artikel untuk website resmi HMIF ITERA dan memimpin produksi konten podcast &quot;Berisik&quot; pada channel YouTube HMIF ITERA.
                  </li>
                </ul>
              </div>

              {/* Kepala Divisi Hubungan Masyarakat */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Kepala Divisi Hubungan Masyarakat (Humas)</span>
                  <span className="font-bold text-[12px]">Okt 2023 – Des 2023</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Point Project 1.0 HMIF ITERA – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Menjaring 12 tim dari berbagai program studi untuk berpartisipasi dalam kompetisi desain UI/UX pertama di ITERA.
                  </li>
                </ul>
              </div>

              {/* Koordinator Sub-Divisi Akomodasi */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Koordinator Sub-Divisi Akomodasi, Divisi Operasional &amp; Logistik</span>
                  <span className="font-bold text-[12px]">Okt 2022 – Des 2022</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Perayaan Natal PMK ITERA 2022 – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Merencanakan alur akomodasi dan keamanan acara serta mengoordinasikan operasional di lapangan untuk 1.200 peserta dan panitia.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
