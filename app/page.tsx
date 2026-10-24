"use client";

import  Image  from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  category: "fullstack" | "frontend" | "backend" | "other";
  title: string;
  type: string;
  org?: string;
  description: string;
  tags: string[];
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
}


export default function Home() {
const [activeFilter, setActiveFilter] = useState<string>("all");
const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

const projects: Project[] = [
    {
      id: "sparta",
      category: "fullstack",
      title: "Sistem Informasi Perpustakaan SMP N 1 Tarutung",
      type: "Skripsi / Tugas Akhir",
      org: "SMP N 1 TARUTUNG",
      description:
        "Sistem pengelolaan perpustakaan untuk inventaris buku, peminjaman siswa, dan sirkulasi di SMP N 1 Tarutung. Dibangun dengan Laravel Framework, MySQL, dan Tailwind CSS.",
      tags: ["Laravel PHP", "MySQL", "TailwindCSS"],
      images: [
        "/image/project/sparta-1.webp",
        "/image/project/sparta-2.webp",
        "/image/project/sparta-3.webp",
      ],
      repoUrl:
        "https://github.com/radotyohanesnababan/SIPerpus-SMP-N-1-Tarutung",
    },
    {
      id: "lettuce-api",
      category: "backend",
      title: "Bangkit Capstone: Lettuce Disease Detection API",
      type: "Proyek MBKM / Kampus Merdeka",
      org: "BANGKIT CLOUD COHORT",
      description:
        "Layanan RESTful API terintegrasi model Machine Learning deteksi penyakit tanaman selada, dideploy pada infrastruktur Google Cloud Platform (Cloud Run) untuk aplikasi Android.",
      tags: ["Google Cloud (GCP)", "Cloud Run",  "RESTful API"],
      repoUrl: "https://github.com/YogaaPratama/CloudComputing-Hicare",
    },
    {
      id: "tapamajuma",
      category: "fullstack",
      title: "PWA Tapamajuma Projects : SMP N 1 Siborongborong",
      type: "Proyek Kolaborasi",
      org: "SMP N 1 SIBORONGBORONG",
      description:
        "Aplikasi PWA untuk latihan literasi dan numerasi siswa SMP N 1 Siborongborong, dengan React SPA dan Laravel backend. Saat ini dipakai aktif oleh 270+ siswa dan sedang diajukan ke GTK Tranformatif Competition 2026 Sumatera Utara",
      tags: ["React SPA", "Laravel", "PWA", "MySQL"],
      images: [
        "/image/project/tapa-1.webp",
        "/image/project/tapa-2.jpeg",
        "/image/project/tapa-3.jpeg",
      ],
      demoUrl: "https://tapamajuma.smpn1siborongborong.sch.id",
      repoUrl: "https://github.com/radotyohanesnababan/Tapamajuma-PWA-",
    },
    {
      id: "haltev",
      category: "fullstack",
      title: "Proyek Pembelajaran Web Course Haltev",
      type: "Proyek Klien",
      org: "Haltev",
      description:
        "Proyek pembuatan website dinamis dan statis untuk pembelajaran Web Development pada course di Haltev untuk kepentingan course dan portofolio. Dibangun dengan Laravel Framework, Tailwind CSS, dan MySQL.",
      tags: ["Laravel Framework", "Tailwind CSS", "PHP Native", "MySQL"],
      images: [
        "/image/project/haltev-1.webp",
        "/image/project/haltev-2.webp",
      ],
      repoUrl: "https://github.com/radotyohanesnababan/unibooks-v.1.1",
    },
    {
      id: "alphapro",
      category: "fullstack",
      title: "Bimbingan Belajar Alphapro Landing Page",
      type: "Proyek Klien",
      org: "Alphapro",
      description:
        "Proyek pembuatan landing page Alphapro dengan HTML dan Tailwind CSS, serta CMS dengan Laravel.",
      tags: ["Laravel Framework", "Tailwind CSS", "CMS"],
      images: ["/image/project/alpha-1.webp"],
      repoUrl: "https://github.com/radotyohanesnababan/LITERA-PROJECT",
    },
    
  ];

  const featuredProjects = projects.slice(0, 3);
  

  const changeSlide = (project: Project, direction: -1 | 1) => {
    const imageCount = project.images?.length ?? 0;
    if (imageCount < 2) return;

    setActiveSlides((current) => ({
      ...current,
      [project.id]:
        ((current[project.id] ?? 0) + direction + imageCount) % imageCount,
    }));
  };
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
                          {featuredProjects.map((project) => (
                            <div
                              key={project.id}
                              className="border-2 border-border bg-secondary-background shadow-shadow rounded-base p-5 flex flex-col justify-between gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all group"
                            >
                              <div className="flex flex-col gap-3">
                                {project.images && project.images.length > 0 && (
                                  <div>
                                    <div className="relative w-full h-48 rounded-base overflow-hidden border-2 border-border bg-background">
                                      <Image
                                        className="object-cover"
                                        alt={`${project.title}, gambar ${(
                                          activeSlides[project.id] ?? 0
                                        ) + 1}`}
                                        src={
                                          project.images[
                                            activeSlides[project.id] ?? 0
                                          ] ?? project.images[0]
                                        }
                                        fill
                                        loading={
                                          project.id === "sparta" &&
                                          (activeSlides[project.id] ?? 0) === 0
                                            ? "eager"
                                            : "lazy"
                                        }
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                      />
                                    </div>
                                    {project.images.length > 1 && (
                                      <div className="flex items-center justify-between mt-2">
                                        <button
                                          type="button"
                                          className="min-h-11 min-w-11 border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base flex items-center justify-center hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                                          onClick={() => changeSlide(project, -1)}
                                          aria-label={`Gambar sebelumnya untuk ${project.title}`}
                                        >
                                          <span
                                            className="material-symbols-outlined"
                                            aria-hidden="true"
                                          >
                                            chevron_left
                                          </span>
                                        </button>
                                        <span
                                          className="font-mono text-xs text-foreground/70"
                                          aria-live="polite"
                                        >
                                          {(activeSlides[project.id] ?? 0) + 1} /{" "}
                                          {project.images.length}
                                        </span>
                                        <button
                                          type="button"
                                          className="min-h-11 min-w-11 border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base flex items-center justify-center hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                                          onClick={() => changeSlide(project, 1)}
                                          aria-label={`Gambar berikutnya untuk ${project.title}`}
                                        >
                                          <span
                                            className="material-symbols-outlined"
                                            aria-hidden="true"
                                          >
                                            chevron_right
                                          </span>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                )}
            
                                <div className="flex flex-col gap-1.5">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-xs text-foreground/70 uppercase tracking-wide">
                                      {project.type}
                                    </span>
                                    {project.org && (
                                      <span className="font-mono text-xs text-foreground/70 font-bold">
                                        {project.org}
                                      </span>
                                    )}
                                  </div>
            
                                  <h3 className="font-headline text-xl text-foreground font-bold">
                                    {project.title}
                                  </h3>
            
                                  <p className="font-body text-sm text-foreground/80 leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>
            
                                {project.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.tags.map((tg) => (
                                      <span
                                        key={tg}
                                        className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold"
                                      >
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
            
                              <div className="flex items-center justify-between pt-3 border-t-2 border-border mt-2">
                                <div className="flex items-center gap-2">
                                  {project.demoUrl && project.demoUrl !== "#" && (
                                    <a
                                      className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5"
                                      href={project.demoUrl}
                                    >
                                      <span className="material-symbols-outlined text-sm" aria-hidden="true">visibility</span>
                                      <span>Situs</span>
                                    </a>
                                  )}
                                  <a
                                    className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base p-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center"
                                    href={project.repoUrl || "https://github.com/radotyohanesnababan"}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Repository GitHub"
                                    aria-label={`Repository GitHub untuk ${project.title} (membuka di tab baru)`}
                                  >
                                    <span className="material-symbols-outlined text-base" aria-hidden="true">code</span>
                                  </a>
                                </div>
            
                                <span className="font-mono text-xs text-foreground/70 font-semibold">
                                  {project.category.toUpperCase()}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
          </div>
        </section>

        {/* SECTION: RANGKUMAN PORTOFOLIO & NAVIGASI */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 ">
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
