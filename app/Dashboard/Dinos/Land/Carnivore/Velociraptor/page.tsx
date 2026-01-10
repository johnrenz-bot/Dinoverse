"use client";

import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Velociraptor() {
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
            src="/Image/Velociraptor.jpg"
            alt="Velociraptor"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-lg">
            <h1 className="text-2xl font-bold tracking-wide">
              Velociraptor
            </h1>
            <p className="text-xs text-gray-300">
              The Swift and Intelligent Hunter
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 flex flex-col gap-6">
        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Velociraptor was a small but highly intelligent carnivorous dinosaur
            that lived during the Late Cretaceous period. Despite its size, it
            was a deadly predator known for speed, agility, and strategy.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Quick Facts</h2>
          <ul className="space-y-2 text-gray-300 text-sm lg:text-base">
            <li><span className="text-white font-medium">Diet:</span> Carnivore</li>
            <li><span className="text-white font-medium">Length:</span> About 2 meters</li>
            <li><span className="text-white font-medium">Height:</span> Around 0.5 meters</li>
            <li><span className="text-white font-medium">Weight:</span> ~15 kg</li>
            <li><span className="text-white font-medium">Period:</span> Late Cretaceous</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Abilities</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Velociraptor possessed a large, curved claw on each foot that it
            used to slash and pin down prey. Its keen intelligence and
            feathered body made it an efficient and agile hunter.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm lg:text-base">
            <li>It was actually feathered, unlike movie portrayals.</li>
            <li>Its name means “swift thief.”</li>
            <li>One fossil was found locked in combat with a Protoceratops.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
