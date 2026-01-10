"use client";

import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Allosaurus() {
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
            src="/image/Allosaurus.jpg"
            alt="Allosaurus"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-lg">
            <h1 className="text-2xl font-bold tracking-wide">
              Allosaurus
            </h1>
            <p className="text-xs text-gray-300">
              The Classic Jurassic Predator
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 flex flex-col gap-6">
        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Allosaurus was one of the top predators of the Late Jurassic period.
            It was fast, agile, and heavily built for hunting large herbivorous
            dinosaurs such as Stegosaurus and Apatosaurus.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Quick Facts</h2>
          <ul className="space-y-2 text-gray-300 text-sm lg:text-base">
            <li><span className="text-white font-medium">Diet:</span> Carnivore</li>
            <li><span className="text-white font-medium">Length:</span> Up to 9–10 meters</li>
            <li><span className="text-white font-medium">Height:</span> Around 4 meters</li>
            <li><span className="text-white font-medium">Weight:</span> 2–3 tons</li>
            <li><span className="text-white font-medium">Period:</span> Late Jurassic</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Abilities</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Allosaurus had sharp, serrated teeth designed for slicing flesh.
            Its flexible skull allowed it to deliver powerful bites, while its
            strong legs made it a fast and effective hunter.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm lg:text-base">
            <li>Its name means “different lizard.”</li>
            <li>It may have hunted in packs.</li>
            <li>One fossil shows bite marks from a Stegosaurus tail.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
