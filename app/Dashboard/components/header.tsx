import Link from 'next/link'

import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <header className="w-full h-full flex items-center justify-between px-6 bg-neutral-900 border-b border-neutral-800">

            <div className="flex items-center w-[70%]">
                <div className="flex items-center w-full max-w-md bg-neutral-800 rounded-xl px-4 py-2 gap-3 focus-within:ring-2 focus-within:ring-green-500 transition">
                    <FaSearch className="text-gray-400 text-lg" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center w-[30%] justify-end gap-6">

                <div className="relative cursor-pointer">
                    <IoNotifications className="text-2xl text-gray-300 hover:text-white transition" />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-800 px-3 py-1.5 rounded-lg transition">
                    <CiUser className="text-2xl text-gray-300" />

                </div>

            </div>
        </header>
    );
}
