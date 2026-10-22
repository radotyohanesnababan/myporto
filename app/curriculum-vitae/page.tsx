"use client";

import Link from "next/link";

export default function CurriculumVitaePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="w-full xl:pl-24 bg-[#0b111d] min-h-screen py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:m-0">
      {/* Action Toolbar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 no-print print:hidden flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101828] border border-[#1e2c44] text-slate-300 hover:text-[#8fe3c6] hover:border-[#00a3af]/50 transition-colors text-sm font-medium"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Direct PDF File Download */}
          <a
            href="/CV-Radot-Yohanes-Nababan.pdf"
            download="CV-Radot-Yohanes-Nababan.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00a3af] to-[#8fe3c6] text-slate-950 text-sm font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
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
        <article className="page-break bg-white text-black p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm font-sans text-[12.5px] leading-relaxed print:p-0 print:shadow-none print:max-w-full print:m-0 mb-8 print:mb-0">
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

          {/* PROFILE */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1">
              PROFILE
            </h2>
            <p className="text-[12px] text-black leading-relaxed text-justify">
              Informatics Engineering graduate of Institut Teknologi Sumatera (ITERA), class of 2026, focused on
              full-stack web development. Experienced in building an Express.js backend for an Android
              application and a library information system with Laravel. Currently developing a Laravel + React
              (SPA) project that is actively used by 250+ students and was submitted to the 2026 GTK
              Transformatif Competition in North Sumatra.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              EDUCATION
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                <span>S.Kom in Informatics Engineering - Institut Teknologi Sumatera</span>
                <span className="font-bold text-[12px]">Aug 2021 – Sep 2026</span>
              </div>
              <ul className="list-disc ml-4 mt-0.5 space-y-0.5 text-[12px] text-black">
                <li><span className="font-bold">GPA :</span> 3.58 / 4.00.</li>
              </ul>
              <p className="text-[12px] text-black mt-0.5">
                <span className="font-bold">Thesis :</span> Design and Development of a Web-Based Library Information System Using the Modified Waterfall Method
              </p>
              <p className="text-[12px] text-black mt-0.5">
                <span className="font-bold">Relevant Coursework :</span> Information Technology Project Management (A), Database (AB), Object-Oriented Programming (A), Human-Computer Interaction (A), Information Systems (A)
              </p>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              PROJECTS
            </h2>
            <div className="space-y-2">
              {/* HICARE */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>HICARE – Bangkit Capstone Project</span>
                  <span className="font-bold text-[12px]">2024</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Built a RESTful API with Express.js to serve a machine learning model for integration into a mobile application.</li>
                  <li>Created a static HTML landing page as the application download page.</li>
                </ul>
              </div>

              {/* SPARTA */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>SPARTA – Library Information System, SMP N 1 Tarutung</span>
                  <span className="font-bold text-[12px]">2025-2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Designed and developed the system with Laravel (PHP), from requirements analysis through implementation.</li>
                  <li>Conducted on-site system testing using the Blackbox Testing method.</li>
                </ul>
              </div>

              {/* TAPAMAJUMA */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>TAPAMAJUMA – Literacy and Numeracy Learning Website</span>
                  <span className="font-bold text-[12px]">2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Built a literacy and numeracy assessment system with Laravel and React (SPA).</li>
                  <li>Actively used by 250+ students at SMP N 1 Siborongborong.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-3.5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-2">
              {/* Web Developer Intern */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Web Developer Intern | Internship</span>
                  <span className="font-bold text-[12px]">Jun 2025 – Jul 2025</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Haltekom Media Inovasi – Bekasi, West Java
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Built a dynamic website with Laravel (PHP) and MySQL as a learning platform for Junior Web Developer certification preparation, covering basic CRUD operations and authentication.</li>
                  <li>Developed 1 responsive static landing page with HTML and CSS to support the learning program.</li>
                </ul>
              </div>

              {/* Lab Assistant */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Lab Assistant | Contract</span>
                  <span className="font-bold text-[12px]">Sep 2023 – May 2024</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Informatics Engineering Laboratory, Institut Teknologi Sumatera
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>Guided 60+ students in using the Ubuntu operating system (file management and basic terminal commands).</li>
                  <li>Guided 50+ students in Office applications, covering Mail Merge in Word and VBA in Excel.</li>
                  <li>Guided 50+ students in C++ programming fundamentals (variables, conditionals, and loops).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="pt-1 border-t border-black">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-1.5">
              SKILLS
            </h2>
            <div className="space-y-1 text-[12px] text-black">
              <div>
                <span className="font-bold">Office Software :</span> Microsoft (Word, Excel, PowerPoint), Google (Docs, Sheets, Slides)
              </div>
              <div>
                <span className="font-bold">Web Development Stack :</span> HTML, CSS, PHP, Laravel, React.js, Express.js, Node.js, Figma.
              </div>
              <div>
                <span className="font-bold">Database Stack :</span> MySQL, TiDB
              </div>
              <div>
                <span className="font-bold">Web Infrastructure :</span> Google Cloud Platform, Cloudflare R2, Railway, Docker
              </div>
              <div>
                <span className="font-bold">Soft Skills :</span> Decision Making, Team Collaboration, Problem Solving
              </div>
              <div>
                <span className="font-bold">Languages :</span> Indonesian (Native), English (Intermediate)
              </div>
            </div>
          </section>
        </article>

        {/* Page 2 Separator indicator (Only visible on web, hidden during print) */}
        <div className="no-print my-6 flex items-center justify-center gap-3">
          <div className="h-px bg-white/10 w-24" />
          <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider bg-[#101828] px-3 py-1 rounded-full border border-white/10">
            Halaman 2
          </span>
          <div className="h-px bg-white/10 w-24" />
        </div>

        {/* ==================== PAGE 2 ==================== */}
        <article className="bg-white text-black p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm font-sans text-[12.5px] leading-relaxed print:p-0 print:shadow-none print:max-w-full print:m-0 mb-12">
          {/* CERTIFICATIONS & TRAINING */}
          <section className="mb-5">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-2">
              CERTIFICATIONS &amp; TRAINING
            </h2>
            <div className="space-y-1.5 text-[12px] text-black">
              <div className="flex justify-between items-baseline">
                <span>Learn to Build Back-End Applications with Google Cloud – Dicoding Indonesia</span>
                <span className="font-bold text-black">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>Learn JavaScript Programming – Dicoding Indonesia</span>
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
                <span>Become a Google Cloud Engineer – Dicoding Indonesia</span>
                <span className="font-bold text-black">2024</span>
              </div>
            </div>
          </section>

          {/* ORGANIZATIONAL EXPERIENCE / COMMITTEES */}
          <section className="mb-2">
            <h2 className="text-[13px] font-bold text-black uppercase tracking-wider mb-2">
              ORGANIZATIONAL EXPERIENCE / COMMITTEES
            </h2>
            <div className="space-y-3.5">
              {/* Head of Technology Studies Division */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Head of Technology Studies Division</span>
                  <span className="font-bold text-[12px]">May 2023 – May 2024</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Himpunan Mahasiswa Informatika (HMIF) ITERA – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Guided article writing for the HMIF ITERA website and led production of the &quot;Berisik&quot; podcast on the HMIF ITERA YouTube channel.
                  </li>
                </ul>
              </div>

              {/* Head of Public Relations Division */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Head of Public Relations Division</span>
                  <span className="font-bold text-[12px]">Oct 2023 – Dec 2023</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  Point Project 1.0 HMIF ITERA – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Attracted 12 teams from various study programs to compete in the first UI/UX competition at ITERA.
                  </li>
                </ul>
              </div>

              {/* Sub-Division Head of Accommodation, Operations/Logistics Division */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[12.5px] text-black">
                  <span>Sub-Division Head of Accommodation, Operations/Logistics Division</span>
                  <span className="font-bold text-[12px]">Oct 2022 – Dec 2022</span>
                </div>
                <div className="italic text-[12px] text-black mb-0.5">
                  PMK ITERA Christmas Celebration 2022 – Lampung
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-[12px] text-black">
                  <li>
                    Planned the accommodation and security flow of the event and coordinated on-site operations for 1,200 participants and committee members.
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
