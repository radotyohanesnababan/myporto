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
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-3 p-3 rounded-2xl backdrop-blur-2xl bg-[#101828]/90 border border-white/10 shadow-2xl ring-1 ring-[#00a3af]/25 select-none"
      >
        {/* Brand / Micro Monogram */}
        <Link
          href="/"
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e50a2]/40 to-[#00a3af]/20 border border-[#00a3af]/40 flex items-center justify-center text-[#8fe3c6] hover:scale-105 transition-transform mb-1 shadow-lg shadow-[#00a3af]/10 group"
          title="Radot Yohanes Nababan"
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
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative ${
                item.active
                  ? "bg-[#00a3af]/15 text-[#8fe3c6] border border-[#00a3af]/50 shadow-lg shadow-[#00a3af]/25"
                  : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-white/5 border border-transparent hover:border-white/10"
              }`}
              title={item.label}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.active && (
                <span className="absolute -right-1 top-1 w-2 h-2 rounded-full bg-[#00a3af] animate-pulse" />
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
            title="GitHub"
          >
            <span className="material-symbols-outlined text-lg">code</span>
          </a>
          <a
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#00a3af]/10 transition-colors"
            href="https://linkedin.com/in/radot-nababan-a51247195"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined text-lg">hub</span>
          </a>
        </div>
      </aside>

      {/* Top Bar Minimal on Mobile/Tablet */}
      <header className="xl:hidden sticky top-0 z-40 bg-[#101828]/90 backdrop-blur-md border-b border-[#1e2c44] px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-[#00a3af]/20">
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
        className="fixed bottom-5 left-1/2 -translate-y-0 -translate-x-1/2 z-50 xl:hidden backdrop-blur-xl bg-[#101828]/95 border border-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-2xl ring-1 ring-[#00a3af]/25 flex items-center gap-4 sm:gap-6 select-none"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`flex flex-col items-center justify-center p-1 rounded-full transition-all ${
              item.active
                ? "text-[#8fe3c6] drop-shadow-[0_0_8px_rgba(143,227,198,0.5)]"
                : "text-slate-400 hover:text-[#8fe3c6]"
            }`}
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">{item.icon}</span>
            {item.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a3af] mt-0.5 animate-pulse" />
            )}
          </Link>
        ))}
      </nav>
    </>
  );
}
