"use client";

import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Trex() {
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
            src="/Image/trexx.jpg"
            alt="Tyrannosaurus Rex"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-lg">
            <h1 className="text-2xl font-bold tracking-wide">
              Tyrannosaurus Rex
            </h1>
            <p className="text-xs text-gray-300">
              King of the Carnivores
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 flex flex-col gap-6">
        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Tyrannosaurus Rex was one of the largest and most fearsome
            carnivorous dinosaurs to ever walk the Earth. It lived during
            the Late Cretaceous period and dominated its ecosystem as an apex predator.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Quick Facts</h2>
          <ul className="space-y-2 text-gray-300 text-sm lg:text-base">
            <li><span className="text-white font-medium">Diet:</span> Carnivore</li>
            <li><span className="text-white font-medium">Length:</span> Up to 12 meters</li>
            <li><span className="text-white font-medium">Height:</span> Around 4 meters</li>
            <li><span className="text-white font-medium">Weight:</span> 8–14 tons</li>
            <li><span className="text-white font-medium">Period:</span> Late Cretaceous</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Abilities</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            T-Rex had one of the strongest bite forces ever recorded,
            capable of crushing bone. Despite its massive size, it was
            surprisingly fast and had excellent vision and smell.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm lg:text-base">
            <li>Its teeth could grow up to 30 cm long.</li>
            <li>It had tiny arms, but they were extremely strong.</li>
            <li>It is one of the most studied dinosaurs in history.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
