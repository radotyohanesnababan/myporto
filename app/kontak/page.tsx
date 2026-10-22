"use client";

import { useState } from "react";

export default function KontakPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("fullstack");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFullName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

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
                Hubungi &amp; Kolaborasi
              </h1>
            </div>
          </div>
        </div>

        {/* Section: Contact Form & Collaboration */}
        <section className="mb-14" id="kontak">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Mari Berkolaborasi atau Diskusikan Proyek Anda
            </h2>
            <p className="font-body text-base text-slate-400 mt-2 leading-relaxed">
              Terbuka untuk posisi full-time, freelance project, maupun konsultasi arsitektur perangkat lunak.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Form Container */}
            <div className="lg:col-span-8 bg-[#101828]/95 rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 ring-1 ring-[#00a3af]/10">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-body text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between"
                      htmlFor="fullName"
                    >
                      <span>Nama Lengkap</span>
                      <span className="text-[#8fe3c6] font-mono">*</span>
                    </label>
                    <input
                      className="w-full bg-[#090e1a] text-white font-body text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#00a3af] focus:bg-[#141f36] focus:ring-2 focus:ring-[#00a3af]/20 outline-none transition-all placeholder:text-slate-600"
                      id="fullName"
                      placeholder="mis. Sarah Wijaya"
                      required
                      aria-required="true"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-body text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between"
                      htmlFor="emailAddr"
                    >
                      <span>Email Anda</span>
                      <span className="text-[#8fe3c6] font-mono">*</span>
                    </label>
                    <input
                      className="w-full bg-[#090e1a] text-white font-body text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#00a3af] focus:bg-[#141f36] focus:ring-2 focus:ring-[#00a3af]/20 outline-none transition-all placeholder:text-slate-600"
                      id="emailAddr"
                      placeholder="sarah@company.com"
                      required
                      aria-required="true"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Dropdown Tipe Proyek */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs font-bold text-slate-300 uppercase tracking-wider"
                    htmlFor="projectType"
                  >
                    Tipe Proyek &amp; Kebutuhan
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-[#090e1a] text-white font-body text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:border-[#00a3af] focus:bg-[#141f36] focus:ring-2 focus:ring-[#00a3af]/20 outline-none transition-all appearance-none cursor-pointer"
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option className="bg-[#101828] text-white" value="fullstack">
                        Full-Stack Web App (End-to-End)
                      </option>
                      <option className="bg-[#101828] text-white" value="frontend">
                        Frontend Refactor &amp; UI Architecture
                      </option>
                      <option className="bg-[#101828] text-white" value="consulting">
                        Konsultasi Arsitektur Perangkat Lunak
                      </option>
                      <option className="bg-[#101828] text-white" value="job">
                        Penawaran Kerja (Full-time / Contract)
                      </option>
                      <option className="bg-[#101828] text-white" value="other">
                        Lainnya / Diskusi Lepas
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-base" aria-hidden="true">
                      expand_more
                    </span>
                  </div>
                </div>



                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-body text-xs font-bold text-slate-300 uppercase tracking-wider"
                    htmlFor="projectMessage"
                  >
                    Ceritakan Detail Proyek atau Pesan Anda
                  </label>
                  <textarea
                    className="w-full bg-[#090e1a] text-white font-body text-sm px-4 py-3 rounded-xl border border-white/10 focus:border-[#00a3af] focus:bg-[#141f36] focus:ring-2 focus:ring-[#00a3af]/20 outline-none transition-all placeholder:text-slate-600 resize-none"
                    id="projectMessage"
                    placeholder="Jelaskan kebutuhan fungsional, target waktu peluncuran, atau detail teknis yang relevan..."
                    required
                    aria-required="true"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit & SLA Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="material-symbols-outlined text-base text-[#00a3af]" aria-hidden="true">schedule</span>
                    <span className="font-body text-xs font-medium">Biasanya membalas dalam kurun 24 jam</span>
                  </div>
                  <button
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1e50a2] via-[#00a3af] to-[#8fe3c6] hover:opacity-95 text-slate-950 font-body text-sm font-semibold transition-all duration-200 transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-[#00a3af]/30 cursor-pointer disabled:opacity-75"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-base" aria-hidden="true">progress_activity</span>
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan Langsung</span>
                        <span className="material-symbols-outlined text-base" aria-hidden="true">send</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Toast Feedback */}
                {isSubmitted && (
                  <div role="status" aria-live="polite" className="p-3.5 rounded-xl bg-[#101828] border border-[#00a3af] text-[#8fe3c6] font-body text-sm flex items-center gap-2 shadow-lg animate-fade-in">
                    <span className="material-symbols-outlined text-base text-[#8fe3c6]" aria-hidden="true">check_circle</span>
                    <span className="font-semibold">
                      Pesan terkirim dengan sukses! Radot akan segera menghubungi Anda kembali via email.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Contact Cards & Metadata Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="bg-[#101828] rounded-2xl p-6 shadow-xl border border-white/10 ring-1 ring-[#00a3af]/10">
                <h3 className="font-headline text-lg text-white font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00a3af] text-lg">quick_reference</span>
                  <span>Kontak Cepat</span>
                </h3>

                <div className="flex flex-col gap-2.5">
                  {/* Email */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#090e1a] hover:bg-[#141f36] border border-white/10 hover:border-[#00a3af]/50 transition-all"
                    href="mailto:radot2510@gmail.com"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-[#00a3af] text-lg">mail</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                          PRIMARY EMAIL
                        </div>
                        <div className="font-body text-sm text-white truncate font-semibold group-hover:text-[#8fe3c6] transition-colors">
                          radot2510@gmail.com
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#8fe3c6] transition-colors text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* Phone / WhatsApp */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#090e1a] hover:bg-[#141f36] border border-white/10 hover:border-[#00a3af]/50 transition-all"
                    href="tel:082272118326"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-[#00a3af] text-lg">call</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                          TELEPON / WHATSAPP
                        </div>
                        <div className="font-body text-sm text-white truncate font-semibold group-hover:text-[#8fe3c6] transition-colors">
                          082272118326
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#8fe3c6] transition-colors text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#090e1a] hover:bg-[#141f36] border border-white/10 hover:border-[#00a3af]/50 transition-all"
                    href="https://github.com/radotyohanesnababan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-[#00a3af] text-lg">code</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                          SOURCE CODE &amp; REPO
                        </div>
                        <div className="font-body text-sm text-white truncate font-semibold group-hover:text-[#8fe3c6] transition-colors">
                          github.com/radotyohanesnababan
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#8fe3c6] transition-colors text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#090e1a] hover:bg-[#141f36] border border-white/10 hover:border-[#00a3af]/50 transition-all"
                    href="https://linkedin.com/in/radotnababan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-[#00a3af] text-lg">hub</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                          PROFESSIONAL NETWORK
                        </div>
                        <div className="font-body text-sm text-white truncate font-semibold group-hover:text-[#8fe3c6] transition-colors">
                          linkedin.com/in/radotnababan
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#8fe3c6] transition-colors text-base">
                      open_in_new
                    </span>
                  </a>

                  {/* Location */}
                  <div className="p-3 rounded-xl bg-[#090e1a] border border-white/10 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00a3af] text-lg mt-0.5">location_on</span>
                    <div>
                      <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                        LOKASI &amp; PREFERENSI KERJA
                      </div>
                      <div className="font-body text-sm text-white font-semibold">Bandar Lampung &amp; Jakarta</div>
                      <div className="font-body text-xs text-[#8fe3c6] font-semibold mt-0.5">
                        Terbuka untuk On-site &amp; Remote
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base of Operations Card */}
              <div
                className="w-full h-44 bg-[#101828] rounded-2xl bg-cover bg-center overflow-hidden relative shadow-xl border border-white/10 flex items-end p-5"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeDRp_5l5bz8kSQ14CUpkR3SEex0Xq56fGQTCmWNvpe-p0AiPFHVBL309Aswb0P8CLhe3Nsd9GHSTfIPY5aQ2PdBSem7uxSvoxBltzFKlKnl-gWe3O09tCGmpTrkp-VTTJ1iVQEbtZ7x4opSYv3kNE-CjO9uitWQrHqaI02jMaS342zMwouXBRfDuDTwKohUBp6SIQ2jN3kzfMG0j-XFSUNciIJFRdw4lLMUgRRlBKfX3lRAThqxE')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#101828]/80 to-transparent" />
                <div className="relative z-10">
                  <span className="font-mono text-[10px] text-[#8fe3c6] uppercase font-bold tracking-wider">
                    Base of Operations
                  </span>
                  <p className="font-headline text-lg text-white font-bold">WIB (UTC+7) Bandar Lampung &amp; Jakarta</p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
