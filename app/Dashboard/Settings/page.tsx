"use client";

import { useState } from "react";

export default function Settings() {
    const [name, setName] = useState("Guest");
    const [username, setUsername] = useState("guestuser");
    const [email, setEmail] = useState("guest@example.com");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState(""); // empty means no image
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState("English");
    const [privateAccount, setPrivateAccount] = useState(false);

    const handleSave = () => {
        console.log({
            name,
            username,
            email,
            password: password ? password : "unchanged",
            profileImage: profileImage ? profileImage : "no image",
            notifications,
            darkMode,
            language,
            privateAccount,
        });
        alert("Settings saved!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">
            <div className="w-full max-w-3xl space-y-6">

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-200">Settings</h1>
                    <button
                        onClick={handleSave}
                        className="bg-neutral-600 text-white px-5 py-2 rounded-md hover:bg-neutral-700 transition"
                    >
                        Save Changes
                    </button>
                </div>

                <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-xl p-6 flex space-x-6 items-center">

                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-neutral-600 flex items-center justify-center text-2xl font-bold text-white border-2 border-gray-600">
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-200">{name}</h2>
                        <p className="text-gray-400">@{username}</p>
                    </div>
                    <button className="text-neutral-400 hover:underline">Change Photo</button>
                </div>

                <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-xl p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-200">Account Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-neutral-900 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 font-medium mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-neutral-900 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bneutrallue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-neutral-900 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Leave blank to keep current password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-neutral-900 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-xl p-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-200">Notifications</h2>
                        <p className="text-gray-400 text-sm">Receive updates and activity alerts</p>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-neutral-600 transition after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-200 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                </div>

                <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-200">Preferences</h2>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-200">Dark Mode</span>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={(e) => setDarkMode(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-neutral-600 transition after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-200 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-400 font-medium mb-1">Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="w-full bg-neutral-900 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        >
                            <option>English</option>
                            <option>Filipino</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-200">Private Account</span>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={privateAccount}
                                onChange={(e) => setPrivateAccount(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-neutral-600 transition after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-200 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-xl p-6 flex flex-col space-y-3">
                    <button className="w-full text-left text-red-500 hover:underline">
                        Deactivate Account
                    </button>
                    <button className="w-full text-left text-yellow-400 hover:underline">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
