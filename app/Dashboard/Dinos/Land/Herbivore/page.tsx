"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Dinosaur = {
    id: number;
    name: string;
    type: string;
    image?: string;
};

// Only 2 herbivores
const herbivores: Dinosaur[] = [
    { id: 1, name: "Triceratops", type: "Herbivore", image: "/Image/triceratops.jpg" },
    { id: 2, name: "Brachiosaurus", type: "Herbivore", image: "/Image/brachiosaurus.jpg" },
];

export default function Herbivore() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black">

            <div className="sticky top-0 z-40 backdrop-blur-md py-6">
                <button
                    onClick={() => router.back()}
                    className="fixed top-6 left-6 z-50 flex items-center p-2 rounded-md transition group"
                >
                    <MdOutlineKeyboardArrowLeft size={40} className="text-white" />
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition text-white whitespace-nowrap">
                        Go Back
                    </span>
                </button>

                <h1 className="text-4xl font-bold text-center text-white">
                    Herbivorous Dinosaurs
                </h1>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {herbivores.map((dino) => (
                    <div
                        key={dino.id}
                        className="relative h-[40vh] overflow-hidden shadow-lg group border-2 border-zinc-700 bg-black"
                    >
                        <div className="absolute top-2 left-2 z-10">
                            <h2 className="text-xl font-semibold text-white">{dino.name}</h2>
                        </div>

                        <div className="absolute top-9 left-3 inset-0 
                                        opacity-0 group-hover:opacity-100 transition
                                         z-20">
                            <p className="text-sm text-white tracking-wide">{dino.type}</p>
                        </div>

                        {dino.image && (
                            <img
                                src={dino.image}
                                alt={dino.name}
                                className="w-full h-full object-cover"
                            />
                        )}

                        <div className="absolute bottom-2 right-2 z-10 border p-2 bg-zinc-800 border-neutral-700">
                            <img src="/image/leaf.png" alt="Leaf" className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
