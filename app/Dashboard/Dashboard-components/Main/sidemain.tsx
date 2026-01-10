export default function DashboardSideMain() {
    const dinoFeatures = [
        {
            name: "Dinosaur Gallery",
            description: "Explore and view detailed dinosaur images and info",
            href: "Dashboard/Dinos"
        },
        {
            name: "T-rex 3D",
            description: "View the T-rex in 3D",
            href: "/Dashboard/Dinos/Trex-3D"
        },
        {
            name: "Dino FAQ's & News Feed",
            description: "Stay updated with the latest dinosaur discoveries and trivia",
            href: "/Dashboard/Faq"
        },
        {
            name: "Dino Community",
            description: "Join, share facts, stay respectful, and have fun!",
            href: "/Dashboard/Community"
        },

        {
            name: "Interactive Map",
            description: "Locate prehistoric habitats and learn about dinosaur regions"
        },
        {
            name: "Quiz & Trivia",
            description: "Test your dinosaur knowledge with fun quizzes and trivia"
        },
        {
            name: "Create Dino Collection",
            description: "Save and organize your favorite dinosaurs in a personal collection"
        },
    ];

    return (
        <aside className="w-full h-full p-6 space-y-6 overflow-y-auto text-white">

            <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <h1 className="text-2xl font-bold mb-2">Welcome, DinoVerse Explorer!</h1>
                <p className="text-base text-white/70">Discover the prehistoric world</p>
            </div>

            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-md space-y-4">
                <p className="text-base text-white/70 mb-2 font-semibold">Features</p>
                <ul className="space-y-3">
                    {dinoFeatures.map((feature, idx) =>
                        feature.href ? (
                            <a
                                key={idx}
                                href={feature.href}
                                className="flex items-center justify-between p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-transform duration-200 shadow-sm"
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg text-white">{feature.name}</span>
                                    <span className="text-sm text-white/50">{feature.description}</span>
                                </div>
                                <span className="text-white text-2xl font-bold">&gt;</span>
                            </a>
                        ) : (
                            <li
                                key={idx}
                                className="flex items-center justify-between p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 opacity-50 cursor-not-allowed"
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg text-white">{feature.name}</span>
                                    <span className="text-sm text-white/50">{feature.description}</span>
                                </div>
                                <span className="text-white text-2xl font-bold">&gt;</span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </aside>
    );
}
