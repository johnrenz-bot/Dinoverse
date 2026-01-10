"use client";

import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Spinosaurus() {
  const router = useRouter();

  return (
    <div className="bg-black text-white grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex items-center justify-center p-6">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center gap-1 text-white hover:text-gray-300 transition"
        >
          <MdOutlineKeyboardArrowLeft size={28} />
          <span className="text-sm">Back</span>
        </button>

        <div className="relative max-w-md w-full">
          <img
            src="/Image/Spinosaurus.jpg"
            alt="Spinosaurus"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-lg">
            <h1 className="text-2xl font-bold tracking-wide">
              Spinosaurus
            </h1>
            <p className="text-xs text-gray-300">
              The Largest Predatory Dinosaur
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 flex flex-col gap-6">
        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Spinosaurus was a massive carnivorous dinosaur that lived during
            the Late Cretaceous period. Unlike most theropods, it was highly
            adapted to a semi-aquatic lifestyle and hunted both on land and in water.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Quick Facts</h2>
          <ul className="space-y-2 text-gray-300 text-sm lg:text-base">
            <li><span className="text-white font-medium">Diet:</span> Carnivore (primarily fish)</li>
            <li><span className="text-white font-medium">Length:</span> Up to 15 meters</li>
            <li><span className="text-white font-medium">Height:</span> Around 5–6 meters (with sail)</li>
            <li><span className="text-white font-medium">Weight:</span> 7–10 tons</li>
            <li><span className="text-white font-medium">Period:</span> Late Cretaceous</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Abilities</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Spinosaurus had a long, crocodile-like snout with conical teeth,
            ideal for catching slippery prey. Its powerful forelimbs and
            paddle-like tail suggest it was an excellent swimmer.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm lg:text-base">
            <li>It had a large sail on its back made of elongated spines.</li>
            <li>It is believed to be the largest carnivorous dinosaur ever discovered.</li>
            <li>Its tail was specially adapted for swimming.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
