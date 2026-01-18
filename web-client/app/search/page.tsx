"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search as SearchIcon, MapPin, Star, Filter, Phone, MessageSquare, ArrowLeft, MoreHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pros, setPros] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const fetchPros = async () => {
            const { data, error } = await supabase
                .from('professionals')
                .select(`
                    id,
                    average_rating,
                    total_reviews,
                    years_of_experience,
                    bio,
                    city,
                    company_name,
                    profile:profiles(first_name, last_name, profile_image_url),
                    trades:professional_trades(
                        trade:trades(name_hu)
                    )
                `);

            if (error) {
                console.error("Error fetching pros:", error);
            } else {
                console.log("Fetched pros:", data); // DEBUG
                setPros(data || []);
            }
            setLoading(false);
        };

        fetchPros();
    }, []);

    const filteredPros = pros.filter(pro => {
        const name = pro.company_name || `${pro.profile?.last_name} ${pro.profile?.first_name}`;
        const profession = pro.trades?.[0]?.trade?.name_hu || "";

        return name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profession.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans selection:bg-rose-500/30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0b] to-black">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            {/* Search Header */}
            <header className="relative z-20 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5 p-4">
                <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Link href="/" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex-1 md:w-96 relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-violet-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative bg-[#0F0F13] rounded-xl flex items-center">
                                <SearchIcon className="absolute left-3 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Szakma vagy név keresése..."
                                    className="w-full bg-transparent border-none rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-0 placeholder:text-slate-600 font-medium"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative z-10">
                {/* Results List */}
                <div className="w-full md:w-[600px] flex flex-col border-r border-white/5 bg-black/20 overflow-y-auto custom-scrollbar">
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center px-1 mb-2">
                            <p className="text-xs text-rose-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                <Sparkles className="w-3 h-3" />
                                {loading ? "Keresés..." : `${filteredPros.length} Szakember elérhető`}
                            </p>
                        </div>

                        {filteredPros.map((pro) => {
                            const name = pro.company_name || `${pro.profile?.last_name} ${pro.profile?.first_name}`;
                            const profession = pro.trades?.[0]?.trade?.name_hu || "Egyéb Szakember";
                            const initials = name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase();

                            return (
                                <div key={pro.id} className="group relative bg-[#0F0F13]/60 border border-white/5 hover:border-rose-500/30 hover:bg-[#0F0F13] rounded-2xl p-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-rose-900/10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 font-bold overflow-hidden border border-white/5 group-hover:scale-105 transition-transform">
                                                {initials}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-white group-hover:text-rose-400 transition-colors">{name}</h3>
                                                <p className="text-sm text-slate-400 font-medium">{profession}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                                                <Star className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                                                {pro.average_rating || "ÚJ"}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">
                                        {pro.bio || "Tapasztalt szakember, aki precíz munkavégzésre törekszik."}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="flex items-center text-xs text-slate-400 font-medium">
                                            <MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
                                            {pro.city || "Magyarország"}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button className="h-9 px-6 text-xs font-bold bg-white text-black hover:bg-slate-200 rounded-xl transition-all">
                                                Adatlap
                                            </Button>
                                            <Button className="h-9 px-4 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-xl shadow-lg shadow-rose-900/20">
                                                <Phone className="w-3.5 h-3.5 mr-2" /> Kapcsolat
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {!loading && filteredPros.length === 0 && (
                            <div className="text-center py-20 text-slate-600">
                                <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Nincs találat a keresési feltételekre.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="hidden md:flex flex-1 bg-[#050507] relative items-center justify-center border-l border-white/5">
                    <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/19.0402,47.4979,12,0/800x600?access_token=YOUR_TOKEN')] bg-cover opacity-20 grayscale mix-blend-luminosity"></div>
                    <div className="text-center p-8 bg-[#0F0F13]/80 backdrop-blur-xl rounded-3xl border border-white/5 relative z-10 shadow-2xl">
                        <MapPin className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Térképnézet</h3>
                        <p className="text-slate-400 text-sm">A térképes keresés hamarosan elérhető.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
