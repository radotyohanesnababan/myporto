import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full xl:pl-24 bg-secondary-background border-t-2 border-border py-8 sm:py-10 pb-24 xl:pb-10 relative z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-headline text-base font-bold text-foreground">
              Radot Yohanes Nababan
            </span>
          </div>
          <p className="font-mono text-xs text-foreground/70">
            Web Developer &amp; Cloud Computing
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center">
          <a
            className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5"
            href="https://github.com/radotyohanesnababan"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub Radot Yohanes Nababan (membuka di tab baru)"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">code</span>
            <span>GitHub</span>
          </a>
          <a
            className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5"
            href="https://linkedin.com/in/radotnababan"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn Radot Yohanes Nababan (membuka di tab baru)"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">hub</span>
            <span>LinkedIn</span>
          </a>
          <a
            className="border-2 border-border bg-secondary-background text-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5"
            href="mailto:radot2510@gmail.com"
            aria-label="Kirim Email ke radot2510@gmail.com"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
            <span>Email</span>
          </a>
          <Link
            className="border-2 border-border bg-main text-main-foreground shadow-shadow rounded-base px-3 py-1.5 font-mono text-xs font-bold hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all flex items-center gap-1.5"
            href="/kontak"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">chat</span>
            <span>Diskusi Teknis</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
