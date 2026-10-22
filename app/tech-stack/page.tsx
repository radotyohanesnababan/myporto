"use client";

import { useState } from "react";
import Link from "next/link";

interface SkillItem {
  name: string;
  description: string;
  subLeft: string;

}

interface DomainGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
  skills: SkillItem[];
}

export default function TechStackPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const domains: DomainGroup[] = [
    {
      id: "web-dev",
      title: "Web Development Stack",
      subtitle: "Frontend, Backend & Frameworks",
      icon: "code",
      badgeColor: "#00a3af",
      skills: [
        {
          name: "HTML & CSS",


          description: "Struktur semantik HTML5 dan penataan gaya responsif modern dengan CSS3 & Tailwind.",
          subLeft: "Markup & Styling",

        },
        {
          name: "PHP",
          

          description: "Pemrograman backend server-side, Object-Oriented Programming (OOP), dan penanganan sesi.",
          subLeft: "Backend Core",

        },
        {
          name: "Laravel",


          description: "Framework MVC untuk arsitektur API bersih, Eloquent ORM, middleware, dan autentikasi.",
          subLeft: "MVC Framework",

        },
        {
          name: "React.js",
   

          description: "Pengembangan antarmuka komponen modular, state management, hooks, dan Single Page App.",
          subLeft: "Component-Based",

        },
        {
          name: "Express.js",


          description: "Framework minimalis Node.js untuk perutean endpoint RESTful API berlatensi rendah.",
          subLeft: "Microservices",

        },
        {
          name: "Node.js",


          description: "JavaScript runtime environment untuk eksekusi server-side, package npm, dan script otomasi.",
          subLeft: "Runtime Env",

        },
      ],
    },
    {
      id: "database",
      title: "Database Stack",
      subtitle: "Relational & Distributed SQL",
      icon: "database",
      badgeColor: "#8fe3c6",
      skills: [
        {
          name: "MySQL",

          description: "Perancangan skema relasional, relasi foreign key, query kompleks, dan optimasi indeks.",
          subLeft: "Relational DB",

        },
        {
          name: "TiDB",

          description: "Distributed SQL database kompatibel MySQL untuk skalabilitas data tinggi dan elastisitas cloud.",
          subLeft: "Distributed SQL",

        },
      ],
    },
    {
      id: "infrastructure",

      title: "Web Infrastructure",
      subtitle: "Cloud, Deployment & Containerization",
      icon: "cloud",
      badgeColor: "#5dd7e4",
      skills: [
        {
          name: "Google Cloud Platform",
          description: "Pengalaman deployment di Cloud Run, Cloud Storage, Compute Engine, dan konfigurasi IAM.",
          subLeft: "Bangkit Cohort",

        },
        {
          name: "Cloudflare R2",
          description: "Object storage kompatibel Amazon S3 dengan latensi rendah dan tanpa biaya transfer egress.",
          subLeft: "Object Storage",

        },
        {
          name: "Railway",
          description: "Penyebaran aplikasi full-stack dan database cloud dengan otomasi deploy berbasis Git.",
          subLeft: "PaaS Hosting",
         
        },
        {
          name: "Docker",
          description: "Containerization aplikasi ke image Docker untuk memastikan keseragaman lingkungan lokal & cloud.",
          subLeft: "Container",

        },
      ],
    },
    {
      id: "office",
      title: "Office Software",
      subtitle: "Dokumentasi, Analisis Data & Presentasi",
      icon: "description",
      badgeColor: "#aec6ff",
      skills: [
        {
          name: "Microsoft Word",

          description: "Penyusunan laporan teknis terstruktur, penulisan proposal, dan format dokumen standar.",
          subLeft: "Dokumentasi",

        },
        {
          name: "Microsoft Excel",

          description: "Pengolahan spreadsheet, visualisasi data, formula logika/matematika, dan tabel dinamis.",
          subLeft: "Spreadsheet",

        },
        {
          name: "Microsoft PowerPoint",

          description: "Pembuatan materi presentasi teknis yang jelas, komunikatif, dan menarik secara visual.",
          subLeft: "Presentasi",

        },
        {
          name: "Google Docs",

          description: "Penyuntingan dan penulisan dokumen berbasis cloud dengan fitur kolaborasi tim real-time.",
          subLeft: "Cloud Docs",

        },
        {
          name: "Google Sheets",

          description: "Spreadsheet cloud kolaboratif untuk manajemen data, kalkulasi bersama, dan sinkronisasi.",
          subLeft: "Cloud Sheets",
        },
        {
          name: "Google Slides",
          description: "Desain presentasi kolaboratif berbasis cloud untuk kebutuhan presentasi proyek tim.",
          subLeft: "Cloud Slides",

        },
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      subtitle: "Kepemimpinan, Kolaborasi & Problem Solving",
      icon: "psychology",
      badgeColor: "#ffd166",
      skills: [
        {
          name: "Decision Making",

          description: "Kemampuan menimbang alternatif solusi teknis dan mengambil keputusan secara terukur.",
          subLeft: "Analytical",

        },
        {
          name: "Team Collaboration",

          description: "Komunikasi terbuka, koordinasi tim lintas fungsi, dan adaptif dalam kerja kelompok.",
          subLeft: "Interpersonal",

        },
        {
          name: "Problem Solving",
          description: "Pendekatan logis dalam menganalisis akar masalah kode maupun alur sistem kerja.",
          subLeft: "Systematic",

        },
      ],
    },
    {
      id: "languages",

      title: "Languages",
      subtitle: "Kemampuan Komunikasi Bahasa",
      icon: "translate",
      badgeColor: "#06d6a0",
      skills: [
        {
          name: "Indonesian",
          description: "Bahasa ibu untuk komunikasi verbal, penulisan formal, dan diskusi teknis profesional.",
          subLeft: "Fluent",

        },
        {
          name: "English",
          description: "Kemampuan memahami bacaan dokumentasi teknis, sintaks bahasa pemrograman, dan komunikasi dasar.",
          subLeft: "Intermediate",

        },
      ],
    },
  ];

  const filteredDomains =
    activeFilter === "all" ? domains : domains.filter((d) => d.id === activeFilter);

  return (
    <main className="w-full xl:pl-24 bg-[#090e1a] text-[#dbe2f9] min-h-screen relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 left-1/3 w-[450px] h-[450px] rounded-full bg-[#1e50a2]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#00a3af]/10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-[#00a3af]/20">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight">
                Tech Stack &amp; Keahlian
              </h1>
              <p className="font-body text-xs text-[#8fe3c6]">Teknologi, Framework &amp; Alat Pengembangan</p>
            </div>
          </div>
        </div>

        {/* Section: Tech Stack Showcase */}
        <section className="mb-14">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101828] border border-[#00a3af]/30 w-fit">
              <span className="material-symbols-outlined text-[#00a3af] text-sm" aria-hidden="true">layers</span>
              <span className="font-body text-xs text-[#8fe3c6] font-semibold tracking-wider uppercase">
                Stack &amp; Kompetensi
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold tracking-tight text-balance">
              Keahlian Teknis &amp; Ekosistem Teknologi
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed text-pretty">
              Tech stack, basis data, infrastruktur web, software perkantoran, soft skills, dan bahasa yang saya kuasai dan terapkan dalam proyek nyata.
            </p>
          </div>


            {/* Skill Cards Grid (Card-in-Card Style) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDomains.map((domain) => (
                <div
                  key={domain.id}
                  className="bg-[#101828] rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#00a3af]/50 hover:bg-[#152035] flex flex-col justify-between"
                >
                  <div>
                    {/* Domain Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                          style={{
                            backgroundColor: `${domain.badgeColor}15`,
                            border: `1px solid ${domain.badgeColor}40`,
                            color: domain.badgeColor,
                          }}
                        >
                          <span className="material-symbols-outlined text-2xl" aria-hidden="true">{domain.icon}</span>
                        </div>
                        <div>
                          <h2 className="font-headline text-xl text-[#f1f5f9] font-bold text-balance">{domain.title}</h2>
                          <p className="font-label text-xs text-[#94a3b8] uppercase tracking-wider font-semibold">
                            {domain.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className="font-label text-xs px-2.5 py-1 rounded-full font-bold border"
                        style={{
                          color: domain.badgeColor,
                          backgroundColor: `${domain.badgeColor}15`,
                          borderColor: `${domain.badgeColor}40`,
                        }}
                      >
                        
                      </span>
                    </div>

                    {/* Subgrid of Individual Skill Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {domain.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-xl bg-[#0d1524] border border-white/5 flex flex-col justify-between group hover:border-[#00a3af]/40 transition-all"
                        >
                          <div>
                            <div className="flex items-start justify-between mb-1.5 gap-2">
                              <span className="font-body text-base text-[#f1f5f9] font-bold">{skill.name}</span>
                            </div>

                            

                            {skill.description && (
                              <p className="font-body text-xs text-[#94a3b8] my-1 leading-relaxed text-pretty">
                                {skill.description}
                              </p>
                            )}
                          </div>

                          {skill.subLeft && (
                            <div className="flex justify-between items-center font-mono text-xs text-[#94a3b8] pt-2 mt-auto border-t border-white/5">
                              <span>{skill.subLeft}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
            <div className="w-full bg-gradient-to-r from-[#101828] via-[#152035] to-[#101828] rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#00a3af]/10 blur-[80px] pointer-events-none" />
              <div className="flex flex-col gap-2 max-w-xl text-center md:text-left relative z-10">
                <span className="font-label text-xs text-[#8fe3c6] font-bold uppercase tracking-wider">
                  Siap Berkolaborasi?
                </span>
                <h3 className="font-headline text-2xl lg:text-3xl text-[#f1f5f9] font-bold">
                  Tertarik Bekerja Sama atau Mengembangkan Proyek?
                </h3>
                <p className="font-body text-sm lg:text-base text-[#94a3b8] leading-relaxed">
                  Terbuka untuk peluang kerja, magang, maupun kolaborasi proyek pengembangan web dan infrastruktur cloud.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 relative z-10">
                <Link
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00a3af] to-[#8fe3c6] text-[#002023] font-body text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,163,175,0.3)] flex items-center gap-2"
                  href="/kontak"
                >
                  <span>Mulai Diskusi</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  className="px-5 py-2.5 rounded-xl bg-[#0d1524] text-[#f1f5f9] font-body text-sm font-bold border border-white/10 hover:bg-[#152035] hover:border-[#00a3af]/40 transition-colors shadow-sm"
                  href="/proyek"
                >
                  Lihat Proyek
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
