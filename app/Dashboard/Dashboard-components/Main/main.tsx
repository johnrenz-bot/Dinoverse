
import { Protest_Revolution } from "next/font/google"

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
})


export default function DashboardMain() {
    return (
        <div className="w-full h-full  text-white p-6">

            <div
                className="w-full h-[25vh] mb-6 rounded-xl p-6 flex flex-col justify-center shadow-lg
             bg-cover bg-center bg-no-repeat relative overflow-hidden border-neutral-700 border-2 "
                style={{ backgroundImage: "url('/Image/eye.jpg')" }} >
                <div className="absolute inset-0  rounded-xl bg-linear-to-r from-black via-zinc-800/60 to-black"></div>

                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">
                        Welcome to{" "}
                        <span className={`${protestRevolution.className} font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-br from-green-900 via-green-500 to-yellow-800 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]`} >
                            DinoVerse
                        </span>
                    </h1>
                    <p className="text-sm text-white/80 mt-1">
                        Explore fascinating dinosaur facts, history, and amazing prehistoric creatures.
                    </p>
                </div>

            </div>


            <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 h-[25vh]">
                    <p className="text-sm text-white/60">       </p>
                    <h2 className="text-2xl font-bold">         </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5 h-[25vh]">
                    <p className="text-sm text-white/60">       </p>
                    <h2 className="text-2xl font-bold">         </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5 h-[25vh]">
                    <p className="text-sm text-white/60">  </p>
                    <h2 className="text-2xl font-bold">    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 border border-white/10 rounded-xl bg-white/5 p-6">
                    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                    <div className="h-48 flex items-center justify-center border border-dashed border-white/20 rounded-lg text-white/40">
                        Content goes here
                    </div>
                </div>

            </div>
        </div>
    )
}
