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
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101828] border border-[#1e2c44] text-[#94a3b8] hover:text-[#8fe3c6] hover:border-[#00a3af]/50 transition-colors text-sm font-medium"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Direct PDF File Download */}
          <a
            href="/CV-Radot-Yohanes-Nababan.pdf"
            download="CV-Radot-Yohanes-Nababan.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1e50a2] to-[#00a3af] hover:to-[#8fe3c6] text-white text-sm font-semibold shadow-lg shadow-[#00a3af]/25 hover:shadow-[#00a3af]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            title="Download file PDF asli langsung ke perangkat"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Download PDF Asli</span>
          </a>
        </div>
      </div>

      {/* CV Paper Sheet (A4 White Layout) */}
      <article className="max-w-4xl mx-auto bg-white text-black p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm font-sans text-[13px] leading-relaxed print:p-0 print:shadow-none print:max-w-full print:m-0">
        {/* HEADER */}
        <header className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1">
            RADOT YOHANES NABABAN
          </h1>
          <div className="text-[12px] text-gray-700 space-y-0.5">
            <div>
              <span>082272118326</span>
              <span className="mx-1.5">|</span>
              <a href="mailto:radot2510@gmail.com" className="hover:underline">
                radot2510@gmail.com
              </a>
              <span className="mx-1.5">|</span>
              <a
                href="https://www.linkedin.com/in/radot-nababan-a51247195/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                https://www.linkedin.com/in/radot-nababan-a51247195/
              </a>
            </div>
            <div>Bandar Lampung, Indonesia</div>
          </div>
          <p className="mt-2.5 text-[12.5px] text-gray-800 text-justify">
            Informatics Engineering Fresh Graduate, Institut Teknologi Sumatera. Has an interest in the world of Website Development and Cloud Computing.
          </p>
        </header>

        {/* PENDIDIKAN */}
        <section className="mb-4">
          <h2 className="text-[14px] font-bold text-black uppercase tracking-wide border-b border-black pb-0.5 mb-2">
            Pendidikan
          </h2>
          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>INSTITUT TEKNOLOGI SUMATERA - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Aug 2021 - Sep 2026</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800">
                Bachelor of Informatics Engineering, 3.58/4.00
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>SMA Negeri 1 Siborongborong - North Tapanuli Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Aug 2018 - Apr 2021</span>
              </div>
              <div className="text-[12.5px] text-gray-800">
                Ilmu Pengetahuan Alam
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-4">
          <h2 className="text-[14px] font-bold text-black uppercase tracking-wide border-b border-black pb-0.5 mb-2">
            Work Experience
          </h2>
          <div className="space-y-3.5">
            {/* 1. Perpustakaan SMP N 1 Tarutung */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Perpustakaan SMP N 1 Tarutung - Tarutung, North Tapanuli Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Aug 2025 - Feb 2026</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Researcher</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Creating a library information system build by Laravel PHP - React Framework</li>
                <li>This information system accommodates the needs of approximately 300 students.</li>
              </ul>
            </div>

            {/* 2. Haltev IT Learning Center */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Haltev IT Learning Center - Bekasi City</span>
                <span className="font-normal text-[12px] text-gray-700">Jun 2025 - Jul 2025</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Internship</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Create a example website to Web Development Expert Student in Class with Laravel Framework</li>
              </ul>
            </div>

            {/* 3. Bimbingan Belajar Alphapro */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Bimbingan Belajar Alphapro - Bekasi City</span>
                <span className="font-normal text-[12px] text-gray-700">Jan 2025 - Jun 2025</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Freelancer</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Build a Landing Page Website with Laravel-PHP Framework</li>
              </ul>
            </div>

            {/* 4. Bangkit Academy Capstone */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Bangkit Academy Capstone Project - Bandar Lampung</span>
                <span className="font-normal text-[12px] text-gray-700">May 2024 - Dec 2024</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Cloud Engineer</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Create a RESTful API for Machine Learning models that have been created to be integrated into Mobile Applications (Android)</li>
                <li>Maximizing Google Cloud Platform performance in implementing API integration</li>
                <li>Creating a Welcome Page for the Lettuce Plant Disease Detection Android Application.</li>
              </ul>
            </div>

            {/* 5. Lab Sistem Operasi */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Laboratorium Informatika Institut Teknologi Sumatera - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Feb 2024 - May 2024</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Practicum Assistant of &quot;Sistem Operasi&quot;</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Guiding Practicums and providing materials to practitioners related to the Ubuntu Operating System (Ubuntu Terminal Basics and File and Process Security Management in Ubuntu)</li>
              </ul>
            </div>

            {/* 6. Lab PKS 1 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Laboratorium Komputer Institut Teknologi Sumatera - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Feb 2024 - May 2024</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Practical Assistant Pengantar Komputer dan Software 1</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Assisting Lecturers in Teaching Courses in providing Lecture Theory</li>
                <li>Guide Practitioners in conducting experiments related to the Basics of the C++ Programming Language</li>
              </ul>
            </div>

            {/* 7. Lab PKS 2 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Laboratorium Komputer Institut Teknologi Sumatera - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Sep 2023 - Dec 2023</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Practical Assistant for Pengantar Komputer dan Software 2</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Assisting Lecturers in Teaching Courses in Providing Lecture Theory</li>
                <li>Guiding Student Practicums in Practicing Microsoft Word (Word Basics, Making Proposals, Mail Merge) and Microsoft Excel (VBA, Macros, Formulas in Excel)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ORGANIZATIONAL / COMMITTEE EXPERIENCE */}
        <section className="mb-4">
          <h2 className="text-[14px] font-bold text-black uppercase tracking-wide border-b border-black pb-0.5 mb-2">
            Organizational/Committee Experience
          </h2>
          <div className="space-y-3.5">
            {/* 1. HMIF ITERA */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Himpunan Mahasiswa Informatika ITERA - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">May 2023 - Sekarang</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Head of Kajian Teknologi, Departemen Keprofesian</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Organize the creation of HMIF ITERA articles on the HMIF ITERA Website and HMIF ITERA Medium which reaches the HMIF ITERA masses and the general public</li>
                <li>Organizing and Monitoring the Making of the &quot;Berisik&quot; Podcast (Talking About Informatics) with the achievement of 300+ views on HMIF ITERA Youtube and 100+ listens on HMIF ITERA Spotify</li>
              </ul>
            </div>

            {/* 2. Point Project 1.0 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>Point Project 1.0 HMIF ITERA - South Lampung Regency</span>
                <span className="font-normal text-[12px] text-gray-700">Oct 2023 - Dec 2023</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Head of Public Relations Division</div>
              <div className="text-[12px] text-gray-600 italic">The first UI/UX Design Competition at ITERA organized by the HMIF ITERA</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Disseminating information regarding the HMIF ITERA Point Project Competition, with the results being participated by 12+ teams from various study programs at the Sumatra Institute of Technology</li>
                <li>Recruiting Professional Judges in the UI/UX field (Prodi Lecturers) in the Competition</li>
                <li>Providing a Competition Presentation Platform</li>
              </ul>
            </div>

            {/* 3. PMK ITERA Christmas Celebration 2022 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[13px]">
                <span>PMK ITERA Christmas Celebration 2022 - Bandar Lampung</span>
                <span className="font-normal text-[12px] text-gray-700">Oct 2022 - Dec 2022</span>
              </div>
              <div className="italic text-[12.5px] text-gray-800 font-medium">Head of Accommodation Sub-Division</div>
              <div className="text-[12px] text-gray-600 italic">The Biggest Christmas Celebration Event at the Institut Teknologi Sumatera in 2022</div>
              <ul className="list-disc ml-5 mt-1 space-y-0.5 text-[12.5px] text-gray-800">
                <li>Logistics Accommodation Before and After Christmas Celebration to meet the needs of 1200+ Committees and Participants</li>
                <li>Field Coordinator who coordinates 1200 Participants and Committees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OTHER RELATED PROJECT */}
        <section className="mb-2">
          <h2 className="text-[14px] font-bold text-black uppercase tracking-wide border-b border-black pb-0.5 mb-2">
            Other Related Project
          </h2>
          <ul className="list-disc ml-5 space-y-1.5 text-[12.5px] text-gray-800 text-justify">
            <li>
              <span className="font-bold text-black">PWA Tapamajuma Projects in SMP N 1 Siborongborong (2026)</span> : Developed a project combining React (SPA) and the Laravel framework to facilitate literacy and numeracy exercises for students at SMP N 1 Siborongborong. As of 2026, it is being used by over 200 active users.
            </li>
            <li>
              <span className="font-bold text-black">Website HTML CSS Native, and PHP, Mata Kuliah Pemrograman Web (2023)</span> : Creating a Website (HTML, Native CSS) containing an introductory homepage, creating forms and tables and filling in tables using PHP
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
