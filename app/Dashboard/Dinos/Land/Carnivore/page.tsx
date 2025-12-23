"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Dinosaur = {
    id: number;
    name: string;
    type: string;
    image: string;
};

const carnivores: Dinosaur[] = [
    { id: 1, name: "Tyrannosaurus Rex", type: "Carnivore", image: "/image/trexx.jpg" },
    { id: 2, name: "Spinosaurus", type: "Carnivore", image: "/image/Spinosaurus.jpg" },
    { id: 3, name: "Allosaurus", type: "Carnivore", image: "/image/Allosaurus.jpg" },
    { id: 4, name: "Velociraptor", type: "Carnivore", image: "/image/Velociraptor.jpg" },
    { id: 5, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
    { id: 6, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
    { id: 7, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
    { id: 8, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
    { id: 9, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
    { id: 10, name: "Unnamed Theropod", type: "Carnivore", image: "/Image/unknown.jpg" },
];

export default function Carnivore() {
    const router = useRouter();
    return (
        <div className="p-6 relative">


            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 flex items-center bg-black/60 p-2 rounded-md hover:bg-black/80 transition group"
            >
                <MdOutlineKeyboardArrowLeft size={40} />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white whitespace-nowrap">
                    Go Back
                </span>
            </button>

            <h1 className="text-4xl font-bold mb-6 text-center">Carnivorous Dinosaurs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {carnivores.map((dino) => (
                    <div
                        key={dino.id}
                        className="relative rounded-xl h-[40vh] overflow-hidden shadow-lg group border-2 border-zinc-700"
                    >
                        <img
                            src={dino.image}
                            alt={dino.name}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-xl font-semibold text-white">{dino.name}</h2>
                            <p className="text-gray-300">{dino.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
