import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full xl:pl-24 bg-[#080d16] border-t border-[#1e2c44] py-8 sm:py-10 pb-24 xl:pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-headline text-base font-semibold text-white">Radot Yohanes Nababan</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            className="px-3 py-1.5 rounded-lg font-label text-xs text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#101828] transition-colors flex items-center gap-1.5 border border-transparent hover:border-[#1e2c44]"
            href="https://github.com/radotyohanesnababan"
            rel="noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            <span>GitHub</span>
          </a>
          <a
            className="px-3 py-1.5 rounded-lg font-label text-xs text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#101828] transition-colors flex items-center gap-1.5 border border-transparent hover:border-[#1e2c44]"
            href="https://linkedin.com/in/radot-nababan-a51247195"
            rel="noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-sm">hub</span>
            <span>LinkedIn</span>
          </a>
          <a
            className="px-3 py-1.5 rounded-lg font-label text-xs text-[#94a3b8] hover:text-[#8fe3c6] hover:bg-[#101828] transition-colors flex items-center gap-1.5 border border-transparent hover:border-[#1e2c44]"
            href="mailto:radot2510@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>Email</span>
          </a>
          <Link
            className="px-3 py-1.5 rounded-lg font-label text-xs text-[#00a3af] hover:text-[#8fe3c6] hover:bg-[#101828] transition-colors flex items-center gap-1.5 border border-[#00a3af]/20"
            href="/kontak"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Diskusi Teknis</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
