"use client";

import News from '../Dashboard-components/Main/news'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
    question: string;
    answer: string;
    image?: string;
};

export default function Faq() {
    const faqs: FaqItem[] = [
        {
            question: "What exactly is a dinosaur?",
            answer:
                "Dinosaurs were amazing reptiles that lived millions of years ago! Some were giants, some were tiny, but all were fascinating creatures that ruled the Earth long before humans appeared.",
        },
        {
            question: "Did all dinosaurs roar like in movies?",
            answer:
                "Not really! Most dinosaurs probably didn’t roar like T-Rex. They might have made hisses, grunts, or low calls. Movies just love to make things dramatic!",
        },
        {
            question: "Were dinosaurs warm-blooded or cold-blooded?",
            answer:
                "Scientists believe it was a mix. Some dinosaurs were likely warm-blooded and super active, while others were cold-blooded and moved more slowly. Nature loves variety!",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [dinoFaqs, setDinoFaqs] = useState<FaqItem[]>([]);
    const [search, setSearch] = useState("");
    const [tab, setTab] = useState<"static" | "dino">("static");

    useEffect(() => {
        const fetchDinosaurs = async () => {
            try {
                const res = await fetch("https://dinoapi.brunosouzadev.com/api/dinosaurs");
                const data = await res.json();
                const limited = data.slice(0, 6);
                const dinoItems: FaqItem[] = limited.map((dino: any) => ({
                    question: `Tell me about ${dino.name}?`,
                    answer: `Name: ${dino.name}\nDiet: ${dino.diet}\nPeriod: ${dino.period}\nDescription: ${dino.description}`,
                    image: dino.image,
                }));
                setDinoFaqs(dinoItems);
            } catch (err) {
                console.error("Failed to fetch dinosaurs:", err);
            }
        };
        fetchDinosaurs();
    }, []);

    const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

    const displayedFaqs = tab === "static" ? faqs : dinoFaqs;
    const filteredFaqs = displayedFaqs.filter(f =>
        f.question.toLowerCase().includes(search.toLowerCase())
    );

    const showRandomDino = () => {
        if (dinoFaqs.length === 0) return;
        const randomIndex = Math.floor(Math.random() * dinoFaqs.length);
        setTab("dino");
        setOpenIndex(randomIndex);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <h2 className="text-4xl font-bold text-green-600 text-center mb-6">Dino FAQ</h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                    <button
                        className={`px-4 py-2 rounded-md font-medium ${tab === "static" ? "bg-green-600 text-white" : "bg-zinc-800 text-white"
                            }`}
                        onClick={() => setTab("static")}
                    >
                        FAQs
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md font-medium ${tab === "dino" ? "bg-green-600 text-white" : "bg-zinc-800 text-white"
                            }`}
                        onClick={() => setTab("dino")}
                    >
                        Dinosaur FAQs
                    </button>
                </div>
                {tab === "dino" && (
                    <button
                        onClick={showRandomDino}
                        className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md transition"
                    >
                        Surprise me!
                    </button>
                )}
            </div>

            <div className="space-y-4">
                {filteredFaqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-zinc-900 rounded-2xl border border-green-900/40 shadow-lg overflow-hidden"
                    >
                        <div
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-green-900/20 transition-all duration-200"
                        >
                            <span className="text-lg md:text-xl font-semibold text-white">{faq.question}</span>
                            <span className="text-2xl font-bold text-white">{openIndex === idx ? "−" : "+"}</span>
                        </div>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-4 pb-4 text-white/80 text-sm md:text-base flex flex-col md:flex-row gap-4"
                                >
                                    <div className="flex-1 whitespace-pre-line">{faq.answer}</div>
                                    {faq.image && (
                                        <img
                                            src={faq.image}
                                            alt={faq.question}
                                            className="w-full max-w-xs rounded-lg object-cover self-start"
                                        />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="w-full p-2 bg-neutral-900 border-zinc-700 border">
                <News />
            </div>
        </div>
    );
}
