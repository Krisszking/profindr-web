import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { signup } from "@/app/auth/actions";

export default function Register() {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0b] to-black">
            {/* Background Gradients */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <h2 className="mt-6 text-center text-3xl font-black tracking-tight text-white">Csatlakozz Szakemberként</h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Kezdd el a 30 napos ingyenes próbaidőszakot. <br />
                    <Link href="/login" className="font-medium text-rose-400 hover:text-rose-300 transition-colors">Már van fiókod? Jelentkezz be</Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Card className="py-8 px-4 sm:px-10 glass-card border-none shadow-2xl">
                    <form className="space-y-6" action={signup}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-slate-300 mb-2">Vezetéknév</label>
                                <Input id="last-name" name="last_name" type="text" required placeholder="Kovács" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-slate-300 mb-2">Keresztnév</label>
                                <Input id="first-name" name="first_name" type="text" required placeholder="János" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email cím</label>
                            <Input id="email" name="email" type="email" autoComplete="email" required placeholder="janos@pelda.hu" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefonszám</label>
                            <Input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+36 30 123 4567" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                        </div>

                        <div>
                            <label htmlFor="birth_date" className="block text-sm font-medium text-slate-300 mb-2">Születési Dátum</label>
                            <Input id="birth_date" name="birth_date" type="date" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50 [color-scheme:dark]" />
                        </div>

                        <div>
                            <label htmlFor="profession" className="block text-sm font-medium text-slate-300 mb-2">Fő tevékenység</label>
                            <div className="relative">
                                <select id="profession" name="profession" className="block w-full pl-3 pr-10 py-3 text-base border border-white/10 bg-[#1a1a1e] rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 text-white sm:text-sm appearance-none hover:bg-white/10 transition-colors">
                                    <option className="bg-[#1a1a1e]">Válassz szakmát...</option>
                                    <option className="bg-[#1a1a1e]">Villanyszerelő</option>
                                    <option className="bg-[#1a1a1e]">Vízvezeték szerelő</option>
                                    <option className="bg-[#1a1a1e]">Burkoló</option>
                                    <option className="bg-[#1a1a1e]">Kőműves</option>
                                    <option className="bg-[#1a1a1e]">Asztalos</option>
                                    <option className="bg-[#1a1a1e]">Festő</option>
                                    <option className="bg-[#1a1a1e]">Klímaszerelő</option>
                                    <option className="bg-[#1a1a1e]">Egyéb</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Jelszó</label>
                            <Input id="password" name="password" type="password" autoComplete="new-password" required placeholder="••••••••" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                        </div>

                        <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                            <h4 className="font-bold text-sm text-rose-400 mb-2 flex items-center"><Sparkles className="w-4 h-4 mr-2 text-rose-500" /> Prémium Előnyök</h4>
                            <ul className="space-y-1 text-sm text-slate-400">
                                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> 30 nap ingyen próba</li>
                                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Korlátlan megkeresés</li>
                                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> 0% Jutalék</li>
                            </ul>
                        </div>

                        <div>
                            <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold h-11 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_25px_rgba(225,29,72,0.5)] transition-all">
                                Regisztráció Indítása
                            </Button>
                        </div>
                        <p className="text-xs text-center text-slate-500">
                            A regisztrációval elfogadod a <a href="#" className="underline hover:text-rose-400 transition-colors">Felhasználási Feltételeket</a>.
                        </p>
                    </form>

                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Vissza a főoldalra
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}
