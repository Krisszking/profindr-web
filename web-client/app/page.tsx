import Link from "next/link";
import { Search, MapPin, Sparkles, Shield, Star, Zap, Menu, ArrowRight, Hammer, CheckCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-rose-500/30 text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0b] to-black">

            {/* Floating Glass Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl glass-nav px-6 py-4 flex items-center justify-between border border-white/5 shadow-2xl shadow-black/50 transition-all hover:border-white/10">
                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-violet-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative size-10 rounded-full bg-[#0F0F13] flex items-center justify-center border border-white/10">
                            <Sparkles className="w-5 h-5 text-rose-500" />
                        </div>
                    </div>
                    <span className="font-bold text-xl tracking-wide text-white">PROFINDER</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <Link href="#features" className="hover:text-white transition-colors">Szolgáltatások</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Szakembereknek</Link>
                    <Link href="#about" className="hover:text-white transition-colors">Rólunk</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Belépés</Link>
                    <Link href="/register" className="group relative px-6 py-2.5 rounded-xl bg-white/5 text-white font-bold text-sm border border-white/10 overflow-hidden hover:bg-rose-600 hover:border-rose-500 transition-all duration-300">
                        <span className="relative z-10">Regisztráció</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-rose-600 to-rose-500 transition-transform duration-300"></div>
                    </Link>
                </div>
            </nav>

            <main className="flex-1 flex flex-col pt-40 pb-20 relative overflow-hidden">

                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                        </span>
                        <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Next-Gen Hiring Logic</span>
                    </div>

                    {/* Main Headline */}
                    <div className="mb-8 max-w-4xl relative">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 mb-2 drop-shadow-sm">
                            MESTEREK. <br />
                            <span className="text-stroke-rose-low opacity-90">MAXIMALIZÁLVA.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6">
                            A ProFinder AI motorja másodpercek alatt megtalálja a tökéletes szakembert komplex kivitelezési feladatra.
                            <br /><span className="text-rose-400 font-medium">Nincs várakozás. Csak precíz találatok.</span>
                        </p>
                    </div>

                    {/* Spotlight Search Interface */}
                    <div className="w-full max-w-3xl mx-auto mt-8 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-[#0F0F13]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-2 flex flex-col md:flex-row gap-2 shadow-2xl">

                            <div className="flex-1 flex items-center px-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors h-14 md:h-16 group/input text-left">
                                <Search className="w-5 h-5 text-slate-500 group-focus-within/input:text-rose-400 transition-colors mr-3" />
                                <input
                                    type="text"
                                    placeholder="Burkolás, villanyszerelés..."
                                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600 font-medium h-full"
                                />
                            </div>

                            <div className="flex-[0.6] flex items-center px-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors h-14 md:h-16 group/input">
                                <MapPin className="w-5 h-5 text-slate-500 group-focus-within/input:text-rose-400 transition-colors mr-3" />
                                <input
                                    type="text"
                                    placeholder="Budapest, V. ker"
                                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600 font-medium h-full"
                                />
                            </div>

                            <button className="h-14 md:h-16 px-8 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                <span>Keresés</span>
                            </button>
                        </div>
                    </div>

                    {/* Popular Tags */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Villanyszerelő", "Hidegburkolás", "Gázszerelés", "Fűtéskorszerűsítés"].map((tag, i) => (
                            <button key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-slate-400 hover:bg-white/10 hover:text-white hover:border-rose-500/30 transition-all">
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-32 relative w-full max-w-6xl text-left">
                        {[
                            {
                                icon: Sparkles,
                                title: "AI alapú kiválasztás",
                                desc: "Algoritmusunk 40+ paraméter alapján választja ki a legmegfelelőbb szakembert a feladatra."
                            },
                            {
                                icon: Shield,
                                title: "Ellenőrzött szakemberek",
                                desc: "Minden partnerünk szigorú átvilágításon esik át. Referenciák, cégadatok, biztosítás - minden ellenőrizve."
                            },
                            {
                                icon: Zap,
                                title: "Azonnali kapcsolat",
                                desc: "Nincs napokig tartó e-mailezés. Azonnali chat és időpontfoglalás a kiválasztott szakemberrel."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group relative p-8 rounded-3xl bg-[#0F0F13]/50 border border-white/5 hover:border-rose-500/20 hover:bg-white/5 transition-all duration-500 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-[50px] translate-x-1/2 -translate-y-1/2 group-hover:bg-rose-600/20 transition-colors"></div>

                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                                    <feature.icon className="w-6 h-6 text-rose-500 group-hover:text-rose-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <footer className="border-t border-white/5 bg-[#050507] py-12 relative z-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© 2026 ProFinder Technologies.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
