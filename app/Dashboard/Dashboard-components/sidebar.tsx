"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { GiDinosaurBones, GiTRexSkull } from "react-icons/gi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";

export default function Sidebar() {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { icon: <GoHome />, label: "Home", href: "/Dashboard" },
        { icon: <RiUserCommunityLine />, label: "Community", href: "/Dashboard/Community" },
        { icon: <GiDinosaurBones />, label: "Dino Info", href: "/Dashboard/Dinos" },
        { icon: <GiTRexSkull />, label: "Trex", href: "/Dashboard/Dinos/Trex-3D" },
        { icon: <FaQuestion />, label: "Faq", href: "/Dashboard/Faq" },
    ];

    const bottomItems = [
        { icon: <IoSettingsOutline />, label: "Settings", href: "/Dashboard/Settings" },
        { icon: <IoLogOutOutline />, label: "Log out", href: "/Login" },
    ];

    const itemClasses =
        "flex items-center px-4 py-2 cursor-pointer transition-colors duration-500 rounded-md";

    const getItemClasses = (href: string) => {
        const isActive = pathname === href;
        return `${itemClasses} ${isActive ? "bg-zinc-600/40 text-neutral-400" : "hover:bg-neutral-700 text-white"}`;
    };

    return (
        <div
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className={`h-full bg-neutral-900 text-white flex flex-col justify-between transition-all duration-700 ease-in-out ${expanded ? "w-56" : "w-16"
                }`}
        >
            <div className="flex justify-center mt-6">
                <img
                    src="/Image/Logo.png"
                    className={`transition-all duration-700 ${expanded ? "h-24" : "h-12"}`}
                />
            </div>

            <div className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className={getItemClasses(item.href)}>
                        <div className={`text-4xl ${pathname === item.href ? "text-green-700" : "text-white"}`}>
                            {item.icon}
                        </div>
                        <span
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${expanded
                                ? "ml-4 opacity-100 max-w-full"
                                : "opacity-0 max-w-0"
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col space-y-4 mb-6">
                {bottomItems.map((item, index) => (
                    <Link key={index} href={item.href} className={getItemClasses(item.href)}>
                        <div className={`text-4xl ${pathname === item.href ? "text-green-700" : "text-white"}`}>
                            {item.icon}
                        </div>
                        <span
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${expanded
                                ? "ml-4 opacity-100 max-w-full"
                                : "opacity-0 max-w-0"
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
