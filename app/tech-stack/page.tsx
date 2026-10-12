"use client";

import { useState } from "react";
import Link from "next/link";

interface SkillItem {
  name: string;
  level: string;
  percentage?: number;
  description?: string;
  subLeft: string;
  subRight: string;
}

interface DomainGroup {
  id: "frontend" | "backend" | "devops" | "workflow";
  domainNumber: string;
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
  skills: SkillItem[];
  tags: string[];
}

export default function TechStackPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const domains: DomainGroup[] = [
    {
      id: "frontend",
      domainNumber: "Domain 01",
      title: "Web & Frontend Development",
      subtitle: "Modern UI & Web Apps",
      icon: "devices",
      badgeColor: "#00a3af",
      skills: [
        {
          name: "React Framework",
          level: "Proficient",
          percentage: 85,
          subLeft: "SPA & Component-Based",
          subRight: "React Hooks",
        },
        {
          name: "Progressive Web Apps",
          level: "Expert",
          percentage: 90,
          subLeft: "Offline & Service Worker",
          subRight: "Dicoding Certified",
        },
        {
          name: "HTML5 & Modern CSS",
          level: "Expert",
          percentage: 95,
          subLeft: "Tailwind & Bootstrap",
          subRight: "Semantic Web",
        },
        {
          name: "JavaScript / ES6+",
          level: "Advanced",
          percentage: 88,
          subLeft: "Async / DOM Manipulation",
          subRight: "Vanilla & Modules",
        },
      ],
      tags: ["Responsive Design", "Tailwind CSS", "Vite", "Figma UI"],
    },
    {
      id: "backend",
      domainNumber: "Domain 02",
      title: "Backend & Database",
      subtitle: "MVC, Relational Database & API",
      icon: "database",
      badgeColor: "#8fe3c6",
      skills: [
        {
          name: "Laravel Framework",
          level: "Advanced",
          percentage: 90,
          subLeft: "Eloquent ORM & Auth",
          subRight: "MVC Pattern",
        },
        {
          name: "PHP Native & Modern",
          level: "Advanced",
          percentage: 88,
          subLeft: "OOP & Session Handling",
          subRight: "PHP 8.x",
        },
        {
          name: "MySQL & Relational DB",
          level: "Advanced",
          percentage: 85,
          subLeft: "Relasi, Query, Index",
          subRight: "Schema Design",
        },
        {
          name: "C++ Programming",
          level: "Lab Assistant",
          percentage: 85,
          subLeft: "Struktur Data & Algo",
          subRight: "Pointers & Memory",
        },
      ],
      tags: ["RESTful API", "Blade Engine", "Postman", "phpMyAdmin"],
    },
    {
      id: "devops",
      domainNumber: "Domain 03",
      title: "Cloud & Infrastructure",
      subtitle: "GCP, Server Deployment & API Serving",
      icon: "cloud",
      badgeColor: "#aec6ff",
      skills: [
        {
          name: "Google Cloud Platform",
          level: "Bangkit Graduate",
          description: "Compute Engine, Cloud Storage, IAM, Artifact Registry, dan Cloud Run.",
          subLeft: "Cloud Console",
          subRight: "GCP Architecture",
        },
        {
          name: "Ubuntu Linux Terminal",
          level: "Proficient",
          description: "SSH, manajemen user/grup, sistem berkas, permissions, dan bash scripting.",
          subLeft: "Lab Asisten OS",
          subRight: "Bash & Systemd",
        },
        {
          name: "ML API Serving",
          level: "Capstone",
          description: "Penyediaan endpoint inference machine learning untuk konsumsi mobile app.",
          subLeft: "Flask / FastAPI",
          subRight: "Cloud Endpoints",
        },
        {
          name: "Web Server & Nginx",
          level: "Practical",
          description: "Konfigurasi virtual host, reverse proxy HTTP, dan deploy PHP-FPM.",
          subLeft: "Apache / Nginx",
          subRight: "SSL / LetsEncrypt",
        },
      ],
      tags: ["Google Cloud Platform", "Linux SysAdmin", "Docker Basics", "Bangkit 2024"],
    },
    {
      id: "workflow",
      domainNumber: "Domain 04",
      title: "Tools, Workflow & Mentoring",
      subtitle: "Developer Ergonomics & Lab Guidance",
      icon: "school",
      badgeColor: "#00a3af",
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          description: "Version control, branching model, pull requests, dan kolaborasi tim proyek.",
          subLeft: "Git Branching",
          subRight: "Team Workflow",
        },
        {
          name: "Postman & API Testing",
          level: "Proficient",
          description: "Verifikasi endpoint HTTP, pengujian parameter form data, dan dokumentasi API.",
          subLeft: "Request Testing",
          subRight: "JSON Payloads",
        },
        {
          name: "Practicum Assistant",
          level: "4+ Semester",
          description: "Membimbing 100+ mahasiswa pada praktikum Sistem Operasi, C++, dan Algoritma.",
          subLeft: "Lab ITERA",
          subRight: "Modul & Evaluasi",
        },
        {
          name: "MS Excel & VBA Macro",
          level: "Advanced",
          description: "Otomasi pengolahan data nilai praktikum, formatting laporan, dan reporting.",
          subLeft: "Data Formatting",
          subRight: "Automated Sheets",
        },
      ],
      tags: ["VS Code", "Trello & Notion", "Bash", "Academic Mentoring"],
    },
  ];

  const filteredDomains =
    activeFilter === "all" ? domains : domains.filter((d) => d.id === activeFilter);

  return (
    <main className="w-full xl:pl-24 bg-[#0b111d] min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#00a3af]/15 blur-[140px] pointer-events-none" />
          <div className="absolute top-48 right-10 w-[24rem] h-[24rem] rounded-full bg-[#1e50a2]/20 blur-[140px] pointer-events-none" />

          <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 relative z-10">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              <div className="max-w-3xl flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101828]/90 border border-[#00a3af]/40 shadow-[0_0_15px_rgba(0,163,175,0.15)] w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#8fe3c6] animate-pulse" />
                  <span className="font-label text-xs text-[#8fe3c6] font-bold tracking-wider uppercase">
                    Matriks Kualifikasi v2.4
                  </span>
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#f1f5f9] font-bold tracking-tight leading-tight">
                  Keahlian Teknis &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3af] via-[#8fe3c6] to-[#aec6ff]">
                    Ekosistem Teknologi
                  </span>
                </h1>
                <p className="font-body text-base lg:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
                  Teknologi web development, framework Laravel &amp; React, arsitektur Google Cloud Platform, serta
                  dasar rekayasa sistem yang dipelajari dan diimplementasikan.
                </p>
              </div>

              {/* Stats Badge */}
              <div className="flex items-center gap-3 bg-[#101828]/90 p-3 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md self-start lg:self-auto">
                <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#0d1524] border border-[#00a3af]/20 text-center">
                  <span className="font-headline text-2xl text-[#00a3af] font-bold">3.58</span>
                  <span className="font-label text-xs text-[#94a3b8] font-semibold uppercase tracking-wider">
                    IPK ITERA
                  </span>
                </div>
                <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#0d1524] border border-[#1e50a2]/40 text-center">
                  <span className="font-headline text-2xl text-[#8fe3c6] font-bold">Bangkit</span>
                  <span className="font-label text-xs text-[#94a3b8] font-semibold uppercase tracking-wider">
                    Cloud Graduate
                  </span>
                </div>
                <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#0d1524] border border-white/10 text-center">
                  <span className="font-headline text-2xl text-[#aec6ff] font-bold">4+ Lab</span>
                  <span className="font-label text-xs text-[#94a3b8] font-semibold uppercase tracking-wider">
                    Asistensi
                  </span>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-white/10">
              <span className="font-label text-xs text-[#94a3b8] uppercase tracking-wider mr-2 font-bold">
                Filter View:
              </span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-[#00a3af] text-[#002023] shadow-[0_0_12px_rgba(0,163,175,0.4)]"
                    : "bg-[#101828] border border-white/10 text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#152035]"
                }`}
              >
                Semua Domain
              </button>
              <button
                onClick={() => setActiveFilter("frontend")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "frontend"
                    ? "bg-[#00a3af] text-[#002023] shadow-[0_0_12px_rgba(0,163,175,0.4)] font-bold"
                    : "bg-[#101828] border border-white/10 text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#152035]"
                }`}
              >
                Frontend &amp; Mobile
              </button>
              <button
                onClick={() => setActiveFilter("backend")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "backend"
                    ? "bg-[#00a3af] text-[#002023] shadow-[0_0_12px_rgba(0,163,175,0.4)] font-bold"
                    : "bg-[#101828] border border-white/10 text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#152035]"
                }`}
              >
                Backend &amp; DB
              </button>
              <button
                onClick={() => setActiveFilter("devops")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "devops"
                    ? "bg-[#00a3af] text-[#002023] shadow-[0_0_12px_rgba(0,163,175,0.4)] font-bold"
                    : "bg-[#101828] border border-white/10 text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#152035]"
                }`}
              >
                Cloud &amp; DevOps
              </button>
              <button
                onClick={() => setActiveFilter("workflow")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === "workflow"
                    ? "bg-[#00a3af] text-[#002023] shadow-[0_0_12px_rgba(0,163,175,0.4)] font-bold"
                    : "bg-[#101828] border border-white/10 text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#152035]"
                }`}
              >
                Tooling &amp; Testing
              </button>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDomains.map((domain) => (
                <div
                  key={domain.id}
                  className="bg-[#101828] rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#00a3af]/50 hover:bg-[#152035]"
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00a3af]/10 border border-[#00a3af]/30 flex items-center justify-center text-[#00a3af] shadow-xs">
                        <span className="material-symbols-outlined text-2xl">{domain.icon}</span>
                      </div>
                      <div>
                        <h2 className="font-headline text-xl text-[#f1f5f9] font-bold">{domain.title}</h2>
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
                      {domain.domainNumber}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-[#0d1524] border border-white/5 flex flex-col justify-between group hover:border-[#00a3af]/40 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-body text-base text-[#f1f5f9] font-bold">{skill.name}</span>
                          <span className="font-label text-[11px] text-[#00a3af] px-2 py-0.5 rounded-md bg-[#00a3af]/15 border border-[#00a3af]/30 font-bold">
                            {skill.level}
                          </span>
                        </div>

                        {skill.percentage && (
                          <div className="w-full bg-[#101828] h-1.5 rounded-full overflow-hidden my-2">
                            <div
                              className="bg-gradient-to-r from-[#00a3af] to-[#8fe3c6] h-full rounded-full shadow-[0_0_8px_rgba(0,163,175,0.4)]"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        )}

                        {skill.description && (
                          <p className="font-body text-xs text-[#94a3b8] my-1 leading-relaxed">
                            {skill.description}
                          </p>
                        )}

                        <div className="flex justify-between items-center font-mono text-xs text-[#94a3b8] pt-1">
                          <span>{skill.subLeft}</span>
                          <span className="text-[#00a3af] font-semibold">{skill.subRight}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 flex flex-wrap gap-2 items-center">
                    <span className="font-label text-xs text-[#94a3b8] mr-1 font-bold">Ecosystem Tags:</span>
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#0d1524] text-xs font-semibold text-[#aec6ff] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Code & Philosophy Section */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <div className="bg-[#101828] rounded-2xl p-6 lg:p-10 border border-white/10 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left Column: Philosophy */}
                <div className="w-full lg:w-5/12 flex flex-col gap-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e50a2]/20 text-[#aec6ff] font-label text-xs font-bold mb-3 border border-[#1e50a2]/40">
                      <span className="material-symbols-outlined text-sm">psychology</span>
                      <span>Standar Rekayasa</span>
                    </div>
                    <h2 className="font-headline text-2xl lg:text-3xl text-[#f1f5f9] font-bold tracking-tight">
                      Bagaimana Saya Menulis Kode &amp; Bekerja
                    </h2>
                    <p className="font-body text-sm lg:text-base text-[#94a3b8] mt-2 leading-relaxed">
                      Filosofi pengembangan saya menitikberatkan pada struktur kode yang rapi, integrasi antarmuka dan
                      backend yang efisien, serta pembagian pemahaman secara kolaboratif.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="p-4 rounded-xl bg-[#0d1524] border border-white/5 flex gap-3.5 items-start hover:border-[#00a3af]/40 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-[#00a3af]/10 border border-[#00a3af]/20 text-[#00a3af] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">architecture</span>
                      </div>
                      <div>
                        <h3 className="font-headline text-base text-[#f1f5f9] font-bold">Struktur Kode Bersih &amp; Modular</h3>
                        <p className="font-body text-xs text-[#94a3b8] mt-1 leading-relaxed">
                          Pendekatan MVC terstruktur pada Laravel dan reusable component pada React untuk kemudahan
                          penambahan fitur.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d1524] border border-white/5 flex gap-3.5 items-start hover:border-[#8fe3c6]/40 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-[#8fe3c6]/10 border border-[#8fe3c6]/20 text-[#8fe3c6] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">cloud_sync</span>
                      </div>
                      <div>
                        <h3 className="font-headline text-base text-[#f1f5f9] font-bold">Integrasi API &amp; Cloud Efisien</h3>
                        <p className="font-body text-xs text-[#94a3b8] mt-1 leading-relaxed">
                          Desain RESTful API standar untuk kebutuhan integrasi mobile client serta endpoint deployment
                          machine learning di GCP.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d1524] border border-white/5 flex gap-3.5 items-start hover:border-[#1e50a2]/40 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-[#1e50a2]/20 border border-[#1e50a2]/30 text-[#aec6ff] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">groups</span>
                      </div>
                      <div>
                        <h3 className="font-headline text-base text-[#f1f5f9] font-bold">Kolaborasi &amp; Berbagi Pengetahuan</h3>
                        <p className="font-body text-xs text-[#94a3b8] mt-1 leading-relaxed">
                          Pengalaman sebagai asisten praktikum membimbing mahasiswa dalam pemrograman dasar, sistem
                          operasi, dan pemecahan masalah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Code and Architecture Diagram */}
                <div className="w-full lg:w-7/12 flex flex-col gap-6">
                  {/* Code Mockup */}
                  <div className="rounded-2xl bg-[#0d1524] p-5 border border-white/10 shadow-md">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                        <span className="w-3 h-3 rounded-full bg-[#8fe3c6]" />
                        <span className="w-3 h-3 rounded-full bg-[#00a3af]" />
                        <span className="font-mono text-xs text-[#94a3b8] font-medium ml-2">
                          app/Http/Controllers/ApiController.php
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label text-xs text-[#8fe3c6] font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8fe3c6] animate-ping" />
                          GCP Cloud Run Ready
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#101828] border border-white/10 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                      <pre className="text-[#dbe2f9] leading-relaxed">
                        <code>
                          <span className="text-[#8fe3c6] font-bold">&lt;?php</span>
                          {"\n"}
                          <span className="text-[#8fe3c6] font-bold">namespace</span> App\Http\Controllers\Api;
                          {"\n\n"}
                          <span className="text-[#94a3b8]">// Endpoint integrasi layanan Cloud &amp; Mobile Client</span>
                          {"\n"}
                          <span className="text-[#8fe3c6] font-bold">class</span>{" "}
                          <span className="text-[#00a3af] font-bold">DatasetController</span>{" "}
                          <span className="text-[#8fe3c6] font-bold">extends</span> Controller &#123;
                          {"\n    "}
                          <span className="text-[#8fe3c6] font-bold">public function</span>{" "}
                          <span className="text-[#00a3af] font-bold">predict</span>(Request $request): JsonResponse &#123;
                          {"\n        "}$validated = $request-&gt;validate([&apos;image&apos; =&gt;
                          &apos;required|image|max:4096&apos;]);
                          {"\n        "}$gcpUrl = Storage::disk(&apos;gcs&apos;)-&gt;putFile(&apos;uploads&apos;,
                          $validated[&apos;image&apos;]);
                          {"\n        "}$result = Http::post(config(&apos;services.ml.endpoint&apos;), [&apos;url&apos;
                          =&gt; $gcpUrl]);
                          {"\n\n        "}
                          <span className="text-[#8fe3c6] font-bold">return</span> response()-&gt;json([&apos;status&apos;
                          =&gt; &apos;success&apos;, &apos;data&apos; =&gt; $result-&gt;json()], 200);
                          {"\n    "}&#125;
                          {"\n"}&#125;
                        </code>
                      </pre>
                    </div>

                    {/* Architecture diagram */}
                    <div className="mt-4 pt-3 bg-[#101828] border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-label text-xs text-[#94a3b8] uppercase tracking-wider font-bold">
                          Arsitektur Integrasi Web &amp; Cloud API
                        </span>
                        <span className="font-mono text-xs text-[#00a3af] font-bold">GCP Compute + Cloud Storage</span>
                      </div>

                      <div className="relative w-full h-36 bg-[#0d1524] rounded-xl p-2 flex items-center justify-between px-6 overflow-hidden border border-white/5 shadow-inner">
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
                          preserveAspectRatio="none"
                          viewBox="0 0 600 120"
                        >
                          <path
                            className="text-[#00a3af]"
                            d="M 90 60 C 180 60, 180 30, 270 30"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray="4 4"
                            strokeWidth="2"
                          />
                          <path
                            className="text-[#8fe3c6]"
                            d="M 90 60 C 180 60, 180 90, 270 90"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray="4 4"
                            strokeWidth="2"
                          />
                          <path
                            className="text-[#00a3af]"
                            d="M 330 30 C 400 30, 420 60, 500 60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            className="text-[#8fe3c6]"
                            d="M 330 90 C 400 90, 420 60, 500 60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-[#00a3af]/10 flex items-center justify-center text-[#00a3af] shadow-xs hover:scale-105 transition-transform border border-[#00a3af]/30">
                            <span className="material-symbols-outlined text-2xl">smartphone</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-[#f1f5f9] mt-1">Client App</span>
                          <span className="font-label text-[11px] text-[#00a3af] font-semibold">Android / Web PWA</span>
                        </div>

                        <div className="relative z-10 flex flex-col gap-3">
                          <div className="flex flex-col items-center">
                            <div className="px-3 py-1 rounded-lg bg-[#152035] text-[#00a3af] font-mono text-xs flex items-center gap-1 shadow-xs border border-[#00a3af]/30">
                              <span className="material-symbols-outlined text-sm">layers</span>
                              <span className="font-bold">Laravel API</span>
                            </div>
                            <span className="font-label text-[11px] text-[#94a3b8] font-semibold">MVC &amp; Auth</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="px-3 py-1 rounded-lg bg-[#152035] text-[#aec6ff] font-mono text-xs flex items-center gap-1 shadow-xs border border-[#1e50a2]/40">
                              <span className="material-symbols-outlined text-sm">cloud_done</span>
                              <span className="font-bold">GCP Storage &amp; Run</span>
                            </div>
                            <span className="font-label text-[11px] text-[#94a3b8] font-semibold">ML Endpoint</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-[#8fe3c6]/10 flex items-center justify-center text-[#8fe3c6] shadow-xs hover:scale-105 transition-transform border border-[#8fe3c6]/30">
                            <span className="material-symbols-outlined text-2xl">database</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-[#f1f5f9] mt-1">MySQL DB</span>
                          <span className="font-label text-[11px] text-[#8fe3c6] font-semibold">Relational Schema</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0d1524] border border-white/5 flex items-center gap-4 hover:border-[#00a3af]/40 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#00a3af]/15 border border-[#00a3af]/30 flex items-center justify-center text-[#00a3af] shrink-0">
                        <span className="material-symbols-outlined text-2xl">published_with_changes</span>
                      </div>
                      <div>
                        <h4 className="font-headline text-base text-[#f1f5f9] font-bold">Zero-Downtime Release</h4>
                        <p className="font-body text-xs text-[#94a3b8] mt-0.5 leading-relaxed">
                          Penerapan prinsip blue-green deployment menjaga ketersediaan layanan tetap terjaga.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d1524] border border-white/5 flex items-center gap-4 hover:border-[#00a3af]/40 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#8fe3c6]/15 border border-[#8fe3c6]/30 flex items-center justify-center text-[#8fe3c6] shrink-0">
                        <span className="material-symbols-outlined text-2xl">developer_board</span>
                      </div>
                      <div>
                        <h4 className="font-headline text-base text-[#f1f5f9] font-bold">Continuous CI Pipeline</h4>
                        <p className="font-body text-xs text-[#94a3b8] mt-0.5 leading-relaxed">
                          Otomatisasi linting, build verification, dan integration suites yang cepat dan andal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  Siap Menghubungkan Stack Ini ke Tim Anda
                </h3>
                <p className="font-body text-sm lg:text-base text-[#94a3b8] leading-relaxed">
                  Tersedia untuk peluang Junior Web Developer, Cloud Engineer, atau kolaborasi proyek rekayasa perangkat
                  lunak.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 relative z-10">
                <Link
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00a3af] to-[#8fe3c6] text-[#002023] font-body text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,163,175,0.3)] flex items-center gap-2"
                  href="/pengalaman#kontak"
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
      </div>
    </main>
  );
}
