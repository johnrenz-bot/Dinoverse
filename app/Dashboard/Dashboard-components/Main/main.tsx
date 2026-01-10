"use client";

import News from './news'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Protest_Revolution } from "next/font/google";

const protestRevolution = Protest_Revolution({ subsets: ["latin"], weight: "400" });

const features = [
    { name: "Dinosaur Gallery", description: "Explore detailed dinosaur images", href: "/Dashboard/Dinos", image: "/Image/trexx.jpg" },
    { name: "T-rex 3D", description: "View the T-rex in 3D", href: "/Dashboard/Dinos/Trex-3D", image: "/Image/trex.png" },
    { name: "Dino FAQ's & News Feed", description: "Latest dinosaur trivia", href: "/Dashboard/Faq", image: "/Image/faq.jpg" },
    { name: "Dinosaur Community", description: "Connect with enthusiasts", href: "/Dashboard/Community", image: "/Image/faq.jpg" },
    { name: "??? Secret Dino", description: "Discover the unknown!", href: "/Dashboard/SecretDino", image: "/Image/secret.jpg" }
];

export default function DashboardMain() {
    const [index, setIndex] = useState(0);
    const visibleCards = 4;
    const maxIndex = Math.max(0, features.length - visibleCards);

    const handleKey = (e: KeyboardEvent) => {
        if (["ArrowLeft", "a"].includes(e.key)) setIndex(prev => Math.max(prev - 1, 0));
        if (["ArrowRight", "d"].includes(e.key)) setIndex(prev => Math.min(prev + 1, maxIndex));
    };

    useEffect(() => { window.addEventListener("keydown", handleKey); return () => window.removeEventListener("keydown", handleKey); }, []);

    return (
        <div className="w-full h-full text-white p-6">
            <div className="relative w-full h-[25vh] mb-6 rounded-xl p-6 flex flex-col justify-center shadow-lg bg-cover bg-center border-2 border-neutral-700" style={{ backgroundImage: "url('/Image/eye.jpg')" }}>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black via-zinc-800/60 to-black" />
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold">
                        Welcome to{" "}
                        <span className={`${protestRevolution.className} text-5xl bg-clip-text text-transparent bg-gradient-to-br from-green-900 via-green-500 to-yellow-800`}>
                            DinoVerse
                        </span>
                    </h1>
                    <p className="text-sm text-white/80 mt-1">Explore fascinating dinosaur facts and amazing prehistoric creatures.</p>
                </div>
            </div>

            <div className="relative mb-10 overflow-hidden">
                <h1 className="text-xl font-bold p-2">Features</h1>
                <div className="flex gap-6 transition-transform duration-700" style={{ transform: `translateX(-${index * (100 / visibleCards)}%)`, width: `${(features.length / visibleCards) * 100}%` }}>
                    {features.map((f, i) => (
                        <Link key={i} href={f.href} className="flex-shrink-0 basis-[calc(33.333%-0.5rem)] h-[26vh] relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 transition-all">
                            <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40" style={{ backgroundImage: `url(${f.image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                                <h2 className="text-2xl font-bold mb-1">{f.name}</h2>
                                <p className="text-sm text-white/70 mb-3">{f.description}</p>
                                <span className="text-sm font-semibold text-zinc-400 group-hover:translate-x-1 transition-transform">Explore →</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <button disabled={index === 0} onClick={() => setIndex(index - 1)} className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 ${index === 0 ? "bg-black/30 text-white/30 cursor-not-allowed" : "bg-black/60 hover:bg-black"}`}>‹</button>
                <button disabled={index === maxIndex} onClick={() => setIndex(index + 1)} className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 ${index === maxIndex ? "bg-black/30 text-white/30 cursor-not-allowed" : "bg-black/60 hover:bg-black"}`}>›</button>
            </div>

            <div className=" w-full ">
                <div className="w-full p-2 bg-neutral-900 border-zinc-700 border">
                    <News />
                </div>
            </div>
        </div>
    );
}
