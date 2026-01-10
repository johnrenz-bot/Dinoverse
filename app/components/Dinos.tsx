"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Protest_Revolution } from "next/font/google";

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
});

type CardProps = {
    id: number;
    title: string;
    info: string;
    image: string;
    onClick: () => void;
};

const cardData = [
    { id: 1, title: "Tyrannosaurus rex", info: "A powerful apex predator.", image: "/Image/trexx.jpg" },
    { id: 2, title: "Triceratops", info: "A horned, plant-eating dinosaur.", image: "/Image/triso.jpg" },
    { id: 3, title: "Pterosaurs", info: "Flying reptiles of the ancient skies.", image: "/Image/velo.jpg" },
    { id: 4, title: "Mosasaurs", info: "Giant hunters of prehistoric seas.", image: "/Image/miro.jpg" },
];

const Card: React.FC<CardProps> = ({ title, info, image, onClick }) => (
    <div
        onClick={onClick}
        className="relative cursor-pointer w-full h-[65vh] max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 bg-cover bg-center group"
        style={{ backgroundImage: `url(${image})` }}
    >
        <div className="absolute bottom-0 w-full p-4 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-2xl font-extrabold text-yellow-500">{title}</h2>
            <p className="text-gray-200 text-sm mt-1">{info}</p>
        </div>
    </div>
);

export default function Dinos() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <main className="min-h-screen w-full bg-gradient-to-b from-black via-green-900 to-black p-6">
            <header className="w-full flex justify-center mb-10">
                <h1 className={`${protestRevolution.className} text-4xl sm:text-6xl text-yellow-200 font-bold`}>
                    Dinosaurs
                </h1>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cardData.map((card) => (
                    <Card key={card.id} {...card} onClick={() => setOpen(true)} />
                ))}
            </section>

            {open && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm">
                    <div className="relative w-full max-w-md mx-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-green-400/20 shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_70%)]" />

                        <div className="relative p-8 text-center">
                            <div className="mx-auto mb-4 size-15 rounded-full grid place-items-center text-2xl text-green-400 bg-green-500/10 border border-green-400/20">
                                <img src="/Image/Logo.png" className="h-20 drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]" />
                            </div>

                            <h2 className="text-2xl font-semibold text-green-300">
                                Access Required
                            </h2>

                            <p className="mt-3 text-sm text-gray-300">
                                Sign in to continue exploring the prehistoric world.
                            </p>

                            <div className="mt-7 flex justify-center gap-4">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="px-5 py-2.5 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => router.push("/Login")}
                                    className="px-5 py-2.5 rounded-lg bg-green-900/90 hover:bg-green-800 text-white font-medium"
                                >
                                    Enter the Park
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            )}
        </main>
    );
}
