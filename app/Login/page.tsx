import Link from "next/link"
import { Protest_Revolution } from "next/font/google"

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
})

export default async function Login() {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay");
        }, 1000);
    });

    return (
        <main className="min-h-screen flex items-center justify-center bg-black text-white relative">

            <Link href="/" className="absolute top-6 left-6 text-sm text-gray-400 hover:text-green-400 transition">
                ← Back
            </Link>

            <div className="w-[70%] h-[80vh] flex rounded-2xl border border-neutral-700 overflow-hidden">

                <div className="w-1/2 flex flex-col justify-center gap-5 px-16">

                    <img
                        src="/Image/Logo.png"
                        className="h-24 mx-auto drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                    />

                    <input
                        placeholder="Username"
                        className="w-full p-3 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-md bg-black border border-neutral-700 focus:border-green-700 outline-none transition"
                    />

                    <Link href="/Login/ForgetPassword" className="text-xs text-gray-400 hover:text-green-400 self-end transition">
                        Forgot password?
                    </Link>
                    <button
                        disabled
                        className="w-full py-3 rounded-md border border-neutral-600 
             text-neutral-500 cursor-not-allowed opacity-60"
                    >
                        Login
                    </button>

                    <Link
                        href="/Dashboard"
                        className="w-full py-3 text-center rounded-md border border-neutral-600 hover:border-green-700 hover:text-green-400 transition"
                    >
                        Continue as Guest
                    </Link>

                    <Link href="/Login/Create" className="text-sm text-gray-400 hover:text-green-400 text-center transition">
                        Create Account
                    </Link>

                </div>

                <div className="w-1/2 bg-[url('/Image/dino.jpg')] bg-cover bg-center flex items-center justify-center">
                    <h1 className={`${protestRevolution.className} text-7xl tracking-widest text-green-800`}>
                        JURASSIC
                    </h1>
                </div>

            </div>
        </main>
    )
}
