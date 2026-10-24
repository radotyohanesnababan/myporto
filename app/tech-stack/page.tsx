"use client";

import Link from "next/link";
import Image from "next/image";

interface SkillItem {
  name: string;
  description: string;
  subLeft: string;
  icons?: {
    src: string;
    alt: string;
  }[];
}

interface DomainGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export default function TechStackPage() {
  const domains: DomainGroup[] = [
    {
      id: "web-dev",
      title: "Web Development Stack",
      subtitle: "Frontend, Backend & Frameworks",
      icon: "code",
      skills: [
        {
          name: "HTML & CSS",
          description: "Struktur semantik HTML5 dan penataan gaya responsif modern dengan CSS3 & Tailwind.",
          subLeft: "Markup & Styling",
          icons: [
            { src: "/icons/html.webp", alt: "HTML" },
            { src: "/icons/css.jfif", alt: "CSS" },
          ],
        },
        {
          name: "PHP",
          description: "Pemrograman backend server-side, Object-Oriented Programming (OOP), dan penanganan sesi.",
          subLeft: "Backend Core",
          icons: [{ src: "/icons/php.webp", alt: "PHP" }],
        },
        {
          name: "Laravel",
          description: "Framework MVC untuk arsitektur API bersih, Eloquent ORM, middleware, dan autentikasi.",
          subLeft: "MVC Framework",
          icons: [{ src: "/icons/Laravel.svg.webp", alt: "Laravel" }],
        },
        {
          name: "React.js",
          description: "Pengembangan antarmuka komponen modular, state management, hooks, dan Single Page App.",
          subLeft: "Component-Based",
          icons: [{ src: "/icons/React.webp", alt: "React" }],
        },
        {
          name: "Express.js",
          description: "Framework minimalis Node.js untuk perutean endpoint RESTful API berlatensi rendah.",
          subLeft: "Microservices",
          icons: [{ src: "/icons/jsexpress.webp", alt: "Express.js" }],
        },
        {
          name: "Node.js",
          description: "JavaScript runtime environment untuk eksekusi server-side, package npm, dan script otomasi.",
          subLeft: "Runtime Env",
          icons: [{ src: "/icons/Node.js_logo.svg.webp", alt: "Node.js" }],
        },
      ],
    },
    {
      id: "database",
      title: "Database Stack",
      subtitle: "Relational & Distributed SQL",
      icon: "database",
      skills: [
        {
          name: "MySQL",
          description: "Perancangan skema relasional, relasi foreign key, query kompleks, dan optimasi indeks.",
          subLeft: "Relational DB",
          icons: [{ src: "/icons/MySQL.webp", alt: "MySQL" }],
        },
        {
          name: "TiDB",
          description: "Distributed SQL database kompatibel MySQL untuk skalabilitas data tinggi dan elastisitas cloud.",
          subLeft: "Distributed SQL",
          icons: [{ src: "/icons/tidb.webp", alt: "TiDB" }],
        },
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastruktur Web & Cloud",
      subtitle: "Cloud, Deployment & Containerization",
      icon: "cloud",
      skills: [
        {
          name: "Google Cloud Platform",
          description: "Pengalaman deployment di Cloud Run, Cloud Storage, Compute Engine, dan konfigurasi IAM.",
          subLeft: "Bangkit Cohort",
          icons: [{ src: "/icons/gcp.png", alt: "Google Cloud" }],
        },
        {
          name: "Cloudflare R2",
          description: "Object storage kompatibel Amazon S3 dengan latensi rendah dan tanpa biaya transfer egress.",
          subLeft: "Object Storage",
          icons: [{ src: "/icons/cloudflare-r2.webp", alt: "Cloudflare R2" }],
        },
        {
          name: "Railway",
          description: "Penyebaran aplikasi full-stack dan database cloud dengan otomasi deploy berbasis Git.",
          subLeft: "PaaS Hosting",
          icons: [{ src: "/icons/railway.webp", alt: "Railway" }],
        },
        {
          name: "Docker",
          description: "Containerization aplikasi ke image Docker untuk memastikan keseragaman lingkungan lokal & cloud.",
          subLeft: "Container",
          icons: [{ src: "/icons/docker.webp", alt: "Docker" }],
        },
      ],
    },
    {
      id: "office",
      title: "Aplikasi Perkantoran",
      subtitle: "Dokumentasi, Analisis Data & Presentasi",
      icon: "description",
      skills: [
        {
          name: "Microsoft Word",
          description: "Penyusunan laporan teknis terstruktur, penulisan proposal, dan format dokumen standar.",
          subLeft: "Dokumentasi",
          icons: [{ src: "/icons/word%20logo.webp", alt: "Microsoft Word" }],
        },
        {
          name: "Microsoft Excel",
          description: "Pengolahan spreadsheet, visualisasi data, formula logika/matematika, dan tabel dinamis.",
          subLeft: "Spreadsheet",
          icons: [{ src: "/icons/excellogo.webp", alt: "Microsoft Excel" }],
        },
        {
          name: "Microsoft PowerPoint",
          description: "Pembuatan materi presentasi teknis yang jelas, komunikatif, dan menarik secara visual.",
          subLeft: "Presentasi",
          icons: [{ src: "/icons/powerpointlogo.webp", alt: "Microsoft PowerPoint" }],
        },
        {
          name: "Google Docs",
          description: "Penyuntingan dan penulisan dokumen berbasis cloud dengan fitur kolaborasi tim real-time.",
          subLeft: "Cloud Docs",
          icons: [{ src: "/icons/docslogo.png", alt: "Google Docs" }],
        },
        {
          name: "Google Sheets",
          description: "Spreadsheet cloud kolaboratif untuk manajemen data, kalkulasi bersama, dan sinkronisasi.",
          subLeft: "Cloud Sheets",
          icons: [{ src: "/icons/sheetslogo.webp", alt: "Google Sheets" }],
        },
        {
          name: "Google Slides",
          description: "Desain presentasi kolaboratif berbasis cloud untuk kebutuhan presentasi proyek tim.",
          subLeft: "Cloud Slides",
          icons: [{ src: "/icons/slideslogo.png", alt: "Google Slides" }],
        },
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      subtitle: "Kepemimpinan, Kolaborasi & Problem Solving",
      icon: "psychology",
      skills: [
        {
          name: "Decision Making",
          description: "Kemampuan menimbang alternatif solusi teknis dan mengambil keputusan secara terukur.",
          subLeft: "Analitis",
        },
        {
          name: "Team Collaboration",
          description: "Komunikasi terbuka, koordinasi tim lintas fungsi, dan adaptif dalam kerja kelompok.",
          subLeft: "Interpersonal",
        },
        {
          name: "Problem Solving",
          description: "Pendekatan logis dalam menganalisis akar masalah kode maupun alur sistem kerja.",
          subLeft: "Sistematis",
        },
      ],
    },
    {
      id: "languages",
      title: "Kemampuan Bahasa",
      subtitle: "Komunikasi Lisan & Tulisan",
      icon: "translate",
      skills: [
        {
          name: "Bahasa Indonesia",
          description: "Bahasa ibu untuk komunikasi verbal, penulisan formal, dan diskusi teknis profesional.",
          subLeft: "Fasih (Native)",
        },
        {
          name: "Bahasa Inggris",
          description: "Kemampuan memahami bacaan dokumentasi teknis, sintaks bahasa pemrograman, dan komunikasi kerja.",
          subLeft: "Menengah (Intermediate)",
        },
      ],
    },
  ];

  return (
    <main className="w-full xl:pl-24 bg-background text-foreground min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-border">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center font-mono font-bold text-sm">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                Tech Stack &amp; Keahlian
              </h1>
              <p className="font-mono text-xs text-foreground/70">
                Teknologi, Framework &amp; Alat Pengembangan
              </p>
            </div>
          </div>
        </div>

        {/* Section: Tech Stack Showcase */}
        <section className="mb-14">
          <div className="flex flex-col gap-3 mb-8">
            <div className="border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow">
              STACK &amp; KOMPETENSI
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl text-foreground font-bold tracking-tight">
              Keahlian Teknis &amp; Ekosistem Teknologi
            </h2>
            <p className="font-body text-base text-foreground/80 max-w-2xl leading-relaxed">
              Daftar teknologi web development, basis data, infrastruktur cloud, aplikasi perkantoran, dan soft skills yang saya kuasai dan implementasikan pada proyek nyata.
            </p>
          </div>

          {/* Skill Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain) => (
              <div
                key={domain.id}
                className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-5"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl" aria-hidden="true">{domain.icon}</span>
                      </div>
                      <div>
                        <h2 className="font-headline text-lg sm:text-xl text-foreground font-bold">
                          {domain.title}
                        </h2>
                        <p className="font-mono text-xs text-foreground/70">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subgrid of Individual Skill Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="border-2 border-border bg-background rounded-base p-3 flex flex-col justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {skill.icons && (
                              <div className="flex shrink-0 items-center gap-1">
                                {skill.icons.map((icon) => (
                                  <Image
                                    key={icon.src}
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={28}
                                    height={28}
                                    sizes="28px"
                                    className="h-7 w-7 object-contain"
                                  />
                                ))}
                              </div>
                            )}
                            <span className="font-headline text-sm font-bold text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          {skill.description && (
                            <p className="font-body text-xs text-foreground/80 leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {skill.subLeft && (
                          <div className="pt-2 border-t border-border mt-auto">
                            <span className="border border-border bg-secondary-background text-foreground/80 rounded-base px-2 py-0.5 font-mono text-[10px] font-semibold inline-block">
                              {skill.subLeft}
                            </span>
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
        <section className="pb-14">
          <div className="border-[3px] border-border bg-secondary-background shadow-shadow rounded-base p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2.5 py-0.5 font-mono text-xs font-bold w-fit">
                SIAP BERKOLABORASI
              </span>
              <h3 className="font-headline text-2xl font-bold text-foreground">
                Tertarik Bekerja Sama atau Mengembangkan Proyek?
              </h3>
              <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
                Terbuka untuk peluang kerja, magang, maupun kolaborasi proyek pengembangan web dan infrastruktur cloud.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/kontak"
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-2"
              >
                <span>Mulai Diskusi</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/proyek"
                className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-5 py-2.5 font-mono text-sm font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
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
