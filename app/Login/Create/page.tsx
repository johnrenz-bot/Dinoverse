import Link from "next/link"
import { Protest_Revolution } from "next/font/google"

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
})

export default function Create() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black text-white relative">

            <Link href="/Login" className="absolute top-6 left-6 text-sm text-gray-400 hover:text-green-400 transition">
                Back
            </Link>

            <div className="w-[40%] h-[80vh] flex justify-center items-center  rounded-2xl border border-neutral-700 overflow-hidden ">


                <div className="w-[80%] h-full  ">
                    <div className="w-full h-[20%]">
                        <img
                            src="/Image/Logo.png"
                            className="h-30 mx-auto drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                        />

                    </div>

                    <div className="w-full h-[80%] flex flex-col  gap-10 px-5">
                        <input
                            placeholder="Username"
                            className="w-full p-5 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                        />

                        <input
                            placeholder="Email"
                            className="w-full p-5 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                        />


                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-5 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                        />


                        <input
                            type="Forget password"
                            placeholder="Forget Password"
                            className="w-full p-5 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                        />

                      <button
                        disabled
                        className="w-full py-3 rounded-md border border-neutral-600 
             text-neutral-500 cursor-not-allowed opacity-60"
                    >
                        Submit
                    </button>

                    </div>





                </div>
            </div>
        </main>
    )
}
