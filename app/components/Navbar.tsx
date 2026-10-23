"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
      {/* Desktop Vertical Dock Nav (Full Neobrutalism) */}
      <aside
        aria-label="Navigasi Utama Desktop"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-3 p-3 rounded-base bg-secondary-background border-2 border-border shadow-shadow select-none"
      >
        {/* Brand Monogram */}
        <Link
          href="/"
          aria-label="Beranda - Radot Yohanes Nababan"
          className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border flex items-center justify-center font-mono font-bold text-sm shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all group"
          title="Beranda"
        >
          &lt;/&gt;
        </Link>

        <div className="w-8 h-[2px] bg-border my-0.5" />

        {/* Navigation items */}
        <nav className="flex flex-col items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
              className={`w-10 h-10 rounded-base flex items-center justify-center transition-all group relative border-2 ${
                item.active
                  ? "bg-main text-main-foreground border-border shadow-shadow font-bold"
                  : "bg-secondary-background text-foreground border-transparent hover:border-border hover:bg-main hover:text-main-foreground"
              }`}
              title={item.label}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
              <span className="absolute left-14 px-2.5 py-1 rounded-base bg-secondary-background text-foreground border-2 border-border shadow-shadow font-mono text-xs font-bold opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.label} {item.active ? "(Aktif)" : ""}
              </span>
            </Link>
          ))}
        </nav>

        <div className="w-8 h-[2px] bg-border my-0.5" />

        {/* Theme Toggle Button (Desktop) */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Ganti ke mode ${theme === "dark" ? "Light" : "Dark"}`}
          className="w-10 h-10 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center cursor-pointer group relative"
          title={`Ganti ke mode ${theme === "dark" ? "Light" : "Dark"}`}
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
          <span className="absolute left-14 px-2.5 py-1 rounded-base bg-secondary-background text-foreground border-2 border-border shadow-shadow font-mono text-xs font-bold opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <div className="w-8 h-[2px] bg-border my-0.5" />

        {/* Social shortcut icons */}
        <div className="flex flex-col items-center gap-1.5">
          <a
            className="w-9 h-9 rounded-base flex items-center justify-center text-foreground hover:bg-main hover:text-main-foreground border-2 border-transparent hover:border-border transition-all"
            href="https://github.com/radotyohanesnababan"
            rel="noreferrer"
            target="_blank"
            title="GitHub (membuka di tab baru)"
            aria-label="GitHub Radot Yohanes Nababan (membuka di tab baru)"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">code</span>
          </a>
          <a
            className="w-9 h-9 rounded-base flex items-center justify-center text-foreground hover:bg-main hover:text-main-foreground border-2 border-transparent hover:border-border transition-all"
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
      <header className="xl:hidden sticky top-0 z-40 bg-secondary-background border-b-2 border-border px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Beranda - Radot Yohanes Nababan" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow flex items-center justify-center font-mono font-bold text-xs" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="font-headline text-sm font-bold text-foreground">Radot Y. Nababan</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="border-2 border-border bg-main text-main-foreground rounded-base px-2 py-0.5 font-mono text-xs font-bold">
            {getPageTitle()}
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Ganti ke mode ${theme === "dark" ? "Light" : "Dark"}`}
            className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base p-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </header>

      {/* Floating Bottom Nav (Mobile/Tablet Neobrutalism) */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 xl:hidden bg-secondary-background border-2 border-border shadow-shadow px-2 py-1.5 rounded-base flex items-center gap-1 select-none"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
            className={`min-w-[40px] min-h-[40px] flex items-center justify-center rounded-base border-2 transition-all ${
              item.active
                ? "bg-main text-main-foreground border-border shadow-shadow"
                : "bg-secondary-background text-foreground border-transparent hover:border-border hover:bg-main hover:text-main-foreground"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
