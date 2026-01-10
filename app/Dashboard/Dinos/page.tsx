"use client";

import { useState } from "react";
import { Protest_Revolution } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
});

type CardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    href?: string;
};

const placeData: CardProps[] = [
    {
        id: 1,
        title: "Land",
        description: "Terrestrial dinosaurs that lived and moved primarily on land.",
        href: "/Dashboard/Dinos/Land",
        image: "/Image/Landd.jpg",
    },
    {
        id: 2,
        title: "Sky",
        description: "Aerial reptiles that could fly and lived in the skies.",
        href: "#",
        image: "/Image/Skies.jpg",
    },
    {
        id: 3,
        title: "Sea",
        description: "Aquatic reptiles that lived and hunted in ancient oceans.",
        href: "#",
        image: "/Image/sea.jpg",
    },
];

const Card = ({ title, description, image, href }: CardProps) => {
    const isComingSoon = title === "Sky" || title === "Sea";

    return (
        <Link
            href={href || "#"}
            className={`relative group ${isComingSoon ? "pointer-events-none" : ""}`}
        >
            <div className="relative max-w-sm mx-auto mt-10 cursor-pointer overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.75)]">

                <div
                    className="relative w-full aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image})` }}
                >

                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent ${isComingSoon ? "bg-black/50" : ""
                            }`}
                    />

                    {isComingSoon && (
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-yellow-500 text-black text-xs font-bold">
                            Coming Soon
                        </div>
                    )}
                </div>

                {isComingSoon && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        SOON
                    </div>
                )}

                <div className="relative p-6 transition-all duration-500 group-hover:-translate-y-3">
                    <h2 className="text-3xl font-extrabold text-white tracking-wide transition-all duration-500 group-hover:translate-y-[-0.25rem]">
                        {title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-300 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default function Dinosaurs() {
    const router = useRouter();

    return (
        <main className="h-full w-full bg-gradient-to-b from-black via-zinc-700 to-black p-6 relative">
            <header className="w-full flex flex-col items-center">
                <h1
                    className={`${protestRevolution.className} text-4xl sm:text-6xl text-zinc-200 font-bold`}
                >
                    Explore the World of Dinosaurs
                </h1>
                <p className="mt-4 text-gray-300 text-center max-w-md">
                    Learn about different types of dinosaurs based on their diets.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {placeData.map((place) => (
                    <Card key={place.id} {...place} />
                ))}
            </section>
        </main>
    );
}
