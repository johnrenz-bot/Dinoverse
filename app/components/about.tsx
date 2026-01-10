import { Protest_Revolution } from "next/font/google"

const protestRevolution = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
})

export default function About() {
  return (
    <main className="min-h-screen w-full bg-[url('/Image/Dar.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/40 flex flex-col items-center justify-center px-6 text-center">
        <h1
          className={`${protestRevolution.className} font-bold text-gray-300/80
          text-3xl sm:text-5xl md:text-6xl lg:text-8xl mb-8`}
        >
          ABOUT
        </h1>

        <p className="max-w-4xl text-gray-200/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
          <span className="font-bold text-green-700">DinoVerse</span> is a personal project created by a solo student programmer
          to explore web development while sharing knowledge about dinosaurs. It demonstrates
          how a simple yet interactive website can present educational content in a fun and
          engaging way.
        </p>

        <p className="max-w-4xl text-gray-200/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
          The website includes information about different dinosaur species, from the fierce 
          <span className="font-semibold text-yellow-600"> Tyrannosaurus Rex</span> to the gentle
          <span className="font-semibold text-yellow-600"> Brachiosaurus</span>. Each entry shows images,
          fun facts, and basic details about their habitats and characteristics.
        </p>

        <p className="max-w-4xl text-gray-200/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
          Designed as a learning project, <span className="font-bold text-green-600">DinoVerse</span> also includes small interactive
          elements like quizzes and simple timelines, allowing visitors to explore dinosaurs
          in a more engaging way. It showcases the skills of a student programmer in frontend
          design, responsive layout, and user-friendly interfaces.
        </p>

        <p className="max-w-4xl text-gray-200/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          This project demonstrates how a solo developer can combine creativity and coding
          to build an educational website. <span className="font-bold text-green-600">DinoVerse</span> is both
          a personal learning experience and a showcase of practical web development skills.
        </p>
      </div>
    </main>
  )
}
