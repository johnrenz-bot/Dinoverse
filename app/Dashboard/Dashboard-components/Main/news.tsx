"use client";

import { useState, useEffect } from "react";

type NewsItem = {
    id: number;
    title: string;
    link: string;
    date: string;
    description: string;
    image?: string;
};

export default function NewsFeed() {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const data: NewsItem[] = [
            {
                id: 1,
                title: "Jurassic World: Chaos Theory – Music from the Original Series by Leo Birenberg Now Available on All Music Platforms",
                link: "https://jurassicoutpost.com/jurassic-world-chaos-theory-music-from-the-original-series-by-leo-birenberg-now-available-on-all-music-platforms",
                date: "2025-12-24",
                description:
                    "Jurassic World: Chaos Theory – Music from the Original Series (featuring music from seasons 2-4) by Leo Birenberg is now available! The first album (released in 2024) featured music from Season 1, and this new album features 37 tracks of music from seasons 2 through the fourth and final season. Both albums are streaming now on all music platforms.",
                image: "/image/1.png",
            },
            {
                id: 2,
                title: "Jurassic World Rebirth and Entire Series Now Streaming on Peacock",
                link: "https://jurassicoutpost.com/jurassic-world-rebirth-and-the-entire-franchise-now-streaming-on-peacocks",
                date: "2025-10-30",
                description:
                    "Jurassic World Rebirth and the entire Jurassic franchise are now streaming on Peacock! The seventh film in the series finds its exclusive streaming home four months after its release and the other six films in the Jurassic story are now finally available to stream there as well.",
                image: "/image/2.png",
            },
            {
                id: 3,
                title: "Jurassic World Evolution 3 is OUT NOW",
                link: "https://jurassicoutpost.com/jurassic-world-evolution-3-is-out-now",
                date: "2025-10-21",
                description:
                    "The third entry in the Jurassic World Evolution video game series has arrived! Check out the launch trailer below: Will you be playing?",
                image: "/image/3.png",
            },
            {
                id: 4,
                title: "Jurassic World: Chaos Theory Season 4 Teaser is the Culmination of Five Years of Storytelling",
                link: "https://jurassicoutpost.com/jwcts4t5st",
                date: "2025-09-18",
                description:
                    "The upcoming final season of Jurassic World: Chaos Theory will hit Netflix November 20th! The first teaser is out today, the five year anniversary of Jurassic World: Camp Cretaceous‘ debut on Netflix, and it’s a tribute to the entire Nublar Six story from beginning to end.",
                image: "/image/4.png",
            },
            {
                id: 5,
                title: "Discover the Jurassic World Hidden Islands in Microsoft Flight Simulator",
                link: "https://jurassicoutpost.com/jw-archipelago",
                date: "2025-09-10",
                description:
                    "Orbx, in collaboration with Universal Products & Experiences, has officially released Jurassic World: Archipelago, a brand-new expansion for Microsoft Flight Simulator 2024, inspired by the Universal Pictures and Amblin Entertainment films. Available now on PC via OrbxDirect, the add-on brings cinematic storytelling and scenic flying to the sim world.",
                image: "/image/5.png",
            },
        ];
        setNews(data);
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-center">Jurassic News & Updates</h1>
            <ul className="space-y-8">
                {news.map((item) => (
                    <li
                        key={item.id}
                        className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-transparent"
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full md:w-80 h-48 md:h-auto object-cover flex-shrink-0"
                                onError={(e) => {
                                    e.currentTarget.src = "/images/placeholder.jpg";
                                }}
                            />
                        )}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl font-semibold hover:text-green-500 transition mb-2"
                            >
                                {item.title}
                            </a>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="text-center text-sm text-gray-400 mt-8">
                Credits: <a href="https://jurassicoutpost.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500">Jurassic Outpost</a>
            </p>
        </div>
    );
}
