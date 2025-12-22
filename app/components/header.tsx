import Link from 'next/link'

import { Protest_Revolution } from "next/font/google"

const protestRevolution = Protest_Revolution({
    subsets: ["latin"],
    weight: "400",
})


export default function Header() {
    return (
        <header className="w-full bg-neutral-900/95 shadow-md rounded-xl  ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                <img src="/Image/Logo.png" className="h-20 drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]" />

                <nav className={`hidden md:flex space-x-6 text-gray-400  ${protestRevolution.className} text-xl `}>
                    <a href="#" className=" hover:text-green-700 "> Home </a>
                    <a href="#" className=" hover:text-green-700">About</a>
                    <a href="#" className="hover:text-green-700">Services</a>
                    <a href="#" className=" hover:text-green-700">Contact</a>
                </nav>

                <div>
                    <Link href="/Login" className={`w-full p-2 px-5 rounded-md border border-neutral-700 focus:border-green-700 outline-none transition hover:bg-neutral-700 hover:border-green-700  ${protestRevolution.className}  `}>
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
