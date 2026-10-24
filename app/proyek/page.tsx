"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function ProyekPage() {
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterOptions = [
    { id: "all", label: "Semua Proyek" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend & Cloud" },
    { id: "other", label: "Lainnya" },
  ];

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
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {/* Header identity row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-border">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center font-mono font-bold text-sm">
              &lt;/&gt;
            </span>
            <div>
              <h1 className="font-headline font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                Proyek &amp; Portofolio
              </h1>
              <p className="font-mono text-xs text-foreground/70">
                Showcase Rekayasa Web &amp; Arsitektur Cloud
              </p>
            </div>
          </div>
        </div>

        {/* Section: Project Showcase */}
        <section className="mb-14">
          <div className="flex flex-col gap-3 mb-8">
            <div className="border-2 border-border bg-main text-main-foreground rounded-base px-3 py-1 font-mono text-xs font-bold w-fit shadow-shadow">
              PROYEK REKAYASA PERANGKAT LUNAK
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl text-foreground font-bold tracking-tight">
              Koleksi Karya &amp; Sistem Nyata
            </h2>
            <p className="font-body text-base text-foreground/80 max-w-2xl leading-relaxed">
              Koleksi berbagai proyek yang pernah saya kerjakan, mulai dari sistem informasi perpustakaan berbasis web, arsitektur backend cloud Google Cloud Platform, hingga aplikasi PWA berbasis Laravel dan React.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`border-2 border-border rounded-base px-3 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-main text-main-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    : "bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="w-full p-10 rounded-base bg-secondary-background border-2 border-border shadow-shadow text-center flex flex-col items-center justify-center gap-4">
              <span className="material-symbols-outlined text-4xl text-main" aria-hidden="true">folder_off</span>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline text-lg font-bold text-foreground">Tidak Ada Proyek Ditemukan</h3>
                <p className="font-body text-sm text-foreground/70 max-w-md">
                  Belum ada proyek dalam kategori ini. Silakan pilih kategori lain.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-4 py-2 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
              >
                Tampilkan Semua Proyek
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
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
                          <span>Situs Asli</span>
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
          )}
        </section>
      </div>
    </main>
  );
}
