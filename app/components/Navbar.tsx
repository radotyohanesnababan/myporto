"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Tentang", href: "/", icon: "person", active: pathname === "/" },
    { label: "Proyek", href: "/proyek", icon: "folder_special", active: pathname === "/proyek" },
    { label: "Tech Stack", href: "/tech-stack", icon: "layers", active: pathname === "/tech-stack" },
    { label: "Pengalaman", href: "/pengalaman", icon: "work_history", active: pathname === "/pengalaman" },
    { label: "Organisasi", href: "/organisasi", icon: "groups", active: pathname === "/organisasi" },
    { label: "Kontak", href: "/kontak", icon: "alternate_email", active: pathname === "/kontak" },
  ];

  const getPageTitle = () => {
    switch (pathname) {
      case "/proyek":
        return "Proyek";
      case "/tech-stack":
        return "Tech Stack";
      case "/pengalaman":
        return "Pengalaman";
      case "/organisasi":
        return "Organisasi";
      case "/kontak":
        return "Kontak";
      default:
        return "Tentang";
    }
  };

  return (
    <>
      {/* Floating Left Glossy Vertical Dock Nav (Desktop) */}
      <aside
        aria-label="Navigasi Utama Desktop"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-3 p-3 rounded-2xl backdrop-blur-2xl bg-[#101828]/95 border border-white/10 shadow-2xl shadow-black/50 select-none"
      >
        {/* Brand / Micro Monogram */}
        <Link
          href="/"
          aria-label="Beranda - Radot Yohanes Nababan"
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e50a2]/40 to-[#00a3af]/20 border border-[#00a3af]/40 flex items-center justify-center text-[#8fe3c6] hover:scale-105 transition-transform mb-1 shadow-md shadow-black/20 group"
          title="Beranda"
        >
          <span className="font-mono text-sm font-bold tracking-tight">&lt;/&gt;</span>
        </Link>

        <div className="w-7 h-[1px] bg-white/10 my-0.5" />

        {/* Navigation items */}
        <nav className="flex flex-col items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative ${
                item.active
                  ? "bg-[#00a3af]/15 text-[#8fe3c6] border border-[#00a3af]/50 shadow-md shadow-black/20"
                  : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-white/5 border border-transparent hover:border-white/10"
              }`}
              title={item.label}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
              {item.active && (
                <span className="absolute -right-1 top-1 w-1.5 h-1.5 rounded-full bg-[#8fe3c6]" aria-hidden="true" />
              )}
              <span className="absolute left-14 px-2.5 py-1 rounded-md bg-[#101828] text-xs font-mono text-[#e2e8f0] border border-white/10 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.label} {item.active ? "(Aktif)" : ""}
              </span>
            </Link>
          ))}
        </nav>

        <div className="w-7 h-[1px] bg-white/10 my-0.5" />

        {/* Social shortcut icons */}
        <div className="flex flex-col items-center gap-1.5">
          <a
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#00a3af]/10 transition-colors"
            href="https://github.com/radotyohanesnababan"
            rel="noreferrer"
            target="_blank"
            title="GitHub (membuka di tab baru)"
            aria-label="GitHub Radot Yohanes Nababan (membuka di tab baru)"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">code</span>
          </a>
          <a
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#00a3af]/10 transition-colors"
            href="https://linkedin.com/in/radotnababan"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn (membuka di tab baru)"
            aria-label="LinkedIn Radot Yohanes Nababan (membuka di tab baru)"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">hub</span>
          </a>
        </div>
      </aside>

      {/* Top Bar Minimal on Mobile/Tablet */}
      <header className="xl:hidden sticky top-0 z-40 bg-[#101828]/90 backdrop-blur-md border-b border-[#1e2c44] px-5 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Beranda - Radot Yohanes Nababan" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-black/20" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="font-headline text-sm font-bold text-[#e2e8f0]">Radot Y. Nababan</span>
        </Link>
        <div className="flex items-center gap-1.5 font-label text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-[#00a3af]/15 text-[#8fe3c6] border border-[#00a3af]/30 font-semibold">
            {getPageTitle()}
          </span>
        </div>
      </header>

      {/* Ergonomic Floating Bottom Pill Nav (Mobile/Tablet) */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="fixed bottom-5 left-1/2 -translate-y-0 -translate-x-1/2 z-50 xl:hidden backdrop-blur-xl bg-[#101828]/95 border border-white/10 px-2 sm:px-3 py-1.5 rounded-full shadow-2xl shadow-black/50 flex items-center gap-1 sm:gap-2 select-none"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
            className={`min-w-[44px] min-h-[44px] flex flex-col items-center justify-center rounded-full transition-all ${
              item.active
                ? "text-[#8fe3c6] bg-[#00a3af]/15 border border-[#00a3af]/30"
                : "text-slate-400 hover:text-[#8fe3c6] hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]" aria-hidden="true">{item.icon}</span>
            {item.active && (
              <span className="w-1 h-1 rounded-full bg-[#8fe3c6] mt-0.5" aria-hidden="true" />
            )}
          </Link>
        ))}
      </nav>
    </>
  );
}
