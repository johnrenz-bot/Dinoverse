"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

type Dinosaur = {
    id: number;
    name: string;
    type: string;
    image?: string;
    href?: string;
};

const carnivores: Dinosaur[] = [
    {
        id: 1,
        name: "Tyrannosaurus Rex",
        type: "Carnivore",
        image: "/image/trexx.jpg",
        href: "/Dashboard/Dinos/Land/Carnivore/Trex",
    },
    {
        id: 2,
        name: "Spinosaurus",
        type: "Carnivore",
        image: "/image/Spinosaurus.jpg",
        href: "/Dashboard/Dinos/Land/Carnivore/Spinosaurus",
    },
    {
        id: 3,
        name: "Allosaurus",
        type: "Carnivore",
        image: "/image/Allosaurus.jpg",
        href: "/Dashboard/Dinos/Land/Carnivore/Allosaurus",
    },
    {
        id: 4,
        name: "Velociraptor",
        type: "Carnivore",
        image: "/image/Velociraptor.jpg",
        href: "/Dashboard/Dinos/Land/Carnivore/Velociraptor",
    },

    {
        id: 5,
        name: "Giganotosaurus",
        type: "Carnivore",
        image: "/image/Giganotosaurus.jpg",
    },
    {
        id: 6,
        name: "Carnotaurus",
        type: "Carnivore",
        image: "/image/carnotauro.jpg",
    },
    {
        id: 7,
        name: "Dilophosaurus",
        type: "Carnivore",
        image: "/image/Dilophosaurus.jpg",
    },
    {
        id: 8,
        name: "Utahraptor",
        type: "Carnivore",
        image: "/image/Utahraptor.jpg",
    },
      {
        id: 9,
        name: "Baryonyx",
        type: "Carnivore",
        image: "/image/Baryonyx.jpg",
    },
    {
        id: 10,
        name: "Therizinosaurus",
        type: "Carnivore",
        image: "/image/omnivore.jpg",
    },
];

export default function Carnivore() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black">
            <div className="sticky top-0 z-40 backdrop-blur-md py-6">
                <button
                    onClick={() => router.back()}
                    className="fixed top-6 left-6 z-50 flex items-center p-2 rounded-md transition group"
                >
                    <MdOutlineKeyboardArrowLeft size={40} className="text-white" />
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition text-white">
                        Go Back
                    </span>
                </button>

                <h1 className="text-4xl font-bold text-center text-white">
                    Carnivorous Dinosaurs
                </h1>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {carnivores.map((dino) => {
                    const Card = (
                        <div className="relative h-[40vh] overflow-hidden shadow-lg group border-2 border-zinc-700 bg-black cursor-pointer">
                            <div className="absolute top-2 left-2 z-10">
                                <h2 className="text-xl font-semibold text-white">
                                    {dino.name !== "Unnamed Theropod" ? dino.name : "???"}
                                </h2>
                            </div>

                            <div className="absolute top-9 left-3 opacity-0 group-hover:opacity-100 transition z-20">
                                <p className="text-sm text-white">{dino.type}</p>
                            </div>

                            {dino.image && (
                                <img
                                    src={dino.image}
                                    alt={dino.name}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            <div className="absolute bottom-2 right-2 z-10 border p-2 bg-zinc-800 border-neutral-700 rounded-md hover:bg-green-700 transition">
                                <img
                                    src="/image/meat.png"
                                    alt="Meat"
                                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-125"
                                />
                            </div>
                        </div>
                    );

                    return dino.href ? (
                        <Link key={dino.id} href={dino.href}>
                            {Card}
                        </Link>
                    ) : (
                        <div key={dino.id} className="opacity-50 cursor-not-allowed">
                            {Card}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
