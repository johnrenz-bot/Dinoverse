"use client";

import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";


export default function Header() {
    const [notifOpen, setNotifOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const notifRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);

    const notifications = [
        "....",

    ];

    const userProfile = {
        name: "Guest",
        image: "",
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
            if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getInitials = (name: string) => {
        const parts = name.split(" ");
        return (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
    };

    const NotificationDropdown = () => (
        <div className="absolute top-13 mt-0 right-0 w-60 bg-zinc-900 shadow-xl overflow-hidden z-50 ring-1 ring-zinc-700 rounded-b-2xl">
            <div className="flex flex-col">
                <div className="p-2 border-b border-zinc-700 flex justify-start bg-zinc-800/80 backdrop-blur-sm">
                    <h1>Notification</h1>
                </div>
                <div className="p-3 flex flex-col gap-2 max-h-64 overflow-y-auto">
                    {notifications.map((note, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-800/90 text-gray-200 px-4 py-2 rounded-xl hover:bg-zinc-700/80 transition-all cursor-pointer shadow-sm"
                        >
                            {note}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const UserDropdown = () => (
        <div className="absolute top-15 mt-0 right-0 w-60 bg-zinc-900 shadow-xl overflow-hidden z-50 ring-1 ring-zinc-700 rounded-b-2xl">
            <div className="flex flex-col items-center gap-2 p-4">
                {userProfile.image ? (
                    <img
                        src={userProfile.image}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700"
                    />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-zinc-700 text-gray-200 flex items-center justify-center font-semibold text-lg">
                        {getInitials(userProfile.name)}
                    </div>
                )}
                <span className="text-gray-200 font-medium">{userProfile.name}</span>
            </div>
        </div>
    );

    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800 relative">
            <div className="flex items-center w-[70%] max-w-md bg-zinc-800 rounded-xl px-4 py-2 gap-3 focus-within:ring-2 focus-within:ring-zinc-600 transition">
                <FaSearch className="text-gray-400 text-lg" />
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
                />
            </div>

            <div className="flex items-center w-[30%] justify-end gap-4 relative">
                <div className="relative" ref={notifRef}>
                    <IoNotifications
                        className="text-2xl text-gray-400 hover:text-gray-200 transition cursor-pointer"
                        onClick={() => setNotifOpen(!notifOpen)}
                    />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse"></span>
                    {notifOpen && <NotificationDropdown />}
                </div>

                <div className="relative" ref={userRef}>
                    <div
                        className="flex items-center justify-center cursor-pointer hover:bg-zinc-800 px-3 py-1.5 rounded-lg transition"
                        onClick={() => setUserOpen(!userOpen)}
                    >
                        {userProfile.image ? (
                            <img
                                src={userProfile.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover border-2 border-zinc-700"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-zinc-700 text-gray-200 flex items-center justify-center font-medium">
                                {getInitials(userProfile.name)}
                            </div>
                        )}
                    </div>
                    {userOpen && <UserDropdown />}
                </div>
            </div>
        </header>
    );
}
