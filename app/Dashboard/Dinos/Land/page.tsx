"use client";

import { useState } from "react";
import { Protest_Revolution } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

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
        title: "Carnivore",
        description: "A species that primarily consumes other animals, relying on hunting or scavenging for sustenance.",
        href: "/Dashboard/Dinos/Land/Carnivore",
        image: "/Image/Carnivore.jpg",
    },
    {
        id: 2,
        title: "Herbivore",
        description: "An organism that primarily feeds on plant material, including leaves, stems, fruits, and seeds.",
        href: "#",
        image: "/Image/Herbivore.jpg",
    },
    {
        id: 3,
        title: "Omnivore",
        description: "A species with a diverse diet that includes both animal protein and plant matter, enabling dietary flexibility.",
        href: "#",
        image: "/Image/omnivore.jpg",
    },
];

const Card = ({ title, description, image, href }: CardProps) => {
    const isComingSoon = title === "Herbivore" || title === "Omnivore";

    return (
        <Link
            href={href || "#"}
            className={`relative group ${isComingSoon ? "pointer-events-none" : ""}`}
        >
            <div
                className="relative cursor-pointer w-full h-[60vh] max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl mt-10
                       bg-cover bg-center group transform hover:scale-105 transition duration-300"
                style={{ backgroundImage: `url(${image})` }}
            >
                =
                <div
                    className={`absolute inset-0 bg-black/20 transition ${isComingSoon ? "bg-black/50" : ""
                        }`}
                />

                {isComingSoon && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-zinc-500 text-black text-xs font-bold">
                        Coming Soon
                    </div>
                )}

                <div className="absolute bottom-0 w-full p-4 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition">
                    <h2 className="text-3xl font-extrabold text-gray-400">{title}</h2>
                    <p className="text-gray-200 text-sm mt-2">{description}</p>
                </div>

                {isComingSoon && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        SOON
                    </div>
                )}
            </div>
        </Link>
    );
};

export default function Land() {
    const router = useRouter();

    return (
        <main className="h-full w-full bg-gradient-to-b from-black via-zinc-700 to-black p-6 relative">
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 flex items-center bg-black/60 p-2 rounded-md hover:bg-black/80 transition group"
            >
                <MdOutlineKeyboardArrowLeft size={40} />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white whitespace-nowrap">
                    Go Back
                </span>
            </button>

            <header className="w-full flex flex-col items-center">
                <h1 className={`${protestRevolution.className} text-4xl sm:text-6xl text-zinc-200 font-bold`}>
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
