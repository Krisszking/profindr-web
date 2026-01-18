import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { login } from "@/app/auth/actions";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0b] to-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-violet-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative size-14 rounded-full bg-[#0F0F13] flex items-center justify-center border border-white/10">
                            <Sparkles className="w-7 h-7 text-rose-500" />
                        </div>
                    </Link>
                </div>
                <h2 className="mt-2 text-center text-3xl font-black tracking-tight text-white">Bejelentkezés</h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Vagy <Link href="/register" className="font-medium text-rose-400 hover:text-rose-300 transition-colors">hozz létre új fiókot</Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Card className="py-8 px-4 sm:px-10 glass-card border-none shadow-2xl">
                    <form className="space-y-6" action={login}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email cím</label>
                            <Input id="email" name="email" type="email" autoComplete="email" required placeholder="name@profinder.hu" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Jelszó</label>
                            <Input id="password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-rose-500/50 focus:border-rose-500/50" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-600 rounded bg-white/10" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">Emlékezz rám</label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-rose-400 hover:text-rose-300">Elfelejtetted?</a>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold h-11 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_25px_rgba(225,29,72,0.5)] transition-all">
                                Belépés
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#0a0a0b] text-slate-500 rounded">vagy folytatás ezzel</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white">Google</Button>
                            <Button variant="outline" className="w-full border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white">Facebook</Button>
                        </div>
                    </div>

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
