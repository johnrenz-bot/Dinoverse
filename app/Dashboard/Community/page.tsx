"use client";
import { useState, useRef, useEffect } from "react";
import { CiHeart, CiShare1 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";

const userProfile = {
  name: "Guest",
  image: "",
};

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
};

type Post = {
  id: number;
  title: string;
  image?: string;
  settings?: React.ElementType[];
  icons?: React.ElementType[];
};

const posts: Post[] = [
  {
    id: 1,
    title: "blah blah",
    image: "/image/trexx.jpg",
    settings: [BsThreeDots],
    icons: [CiHeart, FaRegComment, CiShare1],
  },
];

export default function CommunityPosts() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [postsOpen, setPostsOpen] = useState(false);

  const settingsRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
      if (postsRef.current && !postsRef.current.contains(e.target as Node)) {
        setPostsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SettingsDropdown = () => (
    <div className="absolute top-7 right-0 w-60 h-[25vh] bg-zinc-900 shadow-xl overflow-hidden z-50 ring-1 ring-zinc-700 rounded-2xl p-2">
      <p className="text-sm text-white">Settings Content</p>
    </div>
  );

  const PostsDropdown = () => (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="w-[90%] max-w-2xl bg-neutral-900 rounded-2xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-white text-xl font-bold"
          onClick={() => setPostsOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-white mb-4">Create a Post</h2>
        <div className="flex gap-4 items-center mb-4">
          {userProfile.image ? (
            <img
              src={userProfile.image}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-zinc-700"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-zinc-700 text-gray-200 flex items-center justify-center font-semibold text-lg">
              {getInitials(userProfile.name)}
            </div>
          )}
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-neutral-800 text-white px-3 py-2 rounded-md"
          />
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
          Post
        </button>
      </div>
    </div>
  );


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[65%] h-full">
        <div className="w-full h-[18%] bg-[url('/Image/peaces.jpg')] bg-cover bg-center rounded-md border border-neutral-700 mt-1" />
        <div className="w-full h-full flex mt-2">
          <div className="w-[70%] h-full">
            <div className="w-full h-[14vh] p-2">
              <div className="w-full h-full flex border rounded-md bg-neutral-900 border-zinc-700">
                <div className="h-full w-[80%] flex items-center gap-2 p-4" ref={postsRef}>
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
                  <input
                    type="text"
                    placeholder="Post..."
                    className="w-full bg-neutral-800 text-white px-2 py-1 rounded-md"
                    onClick={() => setPostsOpen(!postsOpen)}
                  />
                </div>
                <div className="h-full w-[20%] flex justify-center items-center relative">
                  <button
                    className="p-2 border h-[5vh] w-[10vh] rounded-md border-neutral-600 hover:bg-neutral-700 transition"
                    onClick={() => setPostsOpen(!postsOpen)}
                  >
                    Post
                  </button>
                  {postsOpen && <PostsDropdown />}
                </div>
              </div>
            </div>
            {posts.map((post) => (
              <div key={post.id} className="w-full p-2">
                <div className="w-full h-[75vh] rounded-md bg-neutral-900 border-zinc-700 flex flex-col">
                  <div className="w-full h-[15%] flex items-center justify-between px-4 text-white font-semibold">
                    <span>{post.title}</span>
                    <div className="flex items-center gap-2 relative" ref={settingsRef}>
                      {post.settings?.map((SettingIcon, index) => (
                        <SettingIcon
                          key={index}
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => setSettingsOpen(!settingsOpen)}
                        />
                      ))}
                      {settingsOpen && <SettingsDropdown />}
                    </div>
                  </div>
                  <div className="w-full h-[80%] px-2">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-md"
                      />
                    )}
                  </div>
                  <div className="w-full h-[10%] flex items-center justify-center gap-4 text-white font-semibold">
                    {post.icons?.map((Icon, index) => (
                      <Icon key={index} className="w-6 h-6 cursor-pointer" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[30%] h-full p-2">
            <div className="w-full h-[45%] flex flex-col justify-start items-start border rounded-md bg-neutral-900 border-zinc-700 text-white p-4 space-y-4 overflow-y-auto">
              <h2 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                Dinosaur Community Rules
              </h2>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-md border border-zinc-700 hover:bg-neutral-700 transition">
                <span className="text-green-400 font-bold">1.</span>
                <p className="text-sm">
                  Respect other dinosaur enthusiasts. Everyone’s opinions are welcome, but be kind and courteous.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-md border border-zinc-700 hover:bg-neutral-700 transition">
                <span className="text-green-400 font-bold">2.</span>
                <p className="text-sm">
                  Share accurate information. Only post verified facts, images, or resources about dinosaurs.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-md border border-zinc-700 hover:bg-neutral-700 transition">
                <span className="text-green-400 font-bold">3.</span>
                <p className="text-sm">
                  No spam or self-promotion. Keep the community focused on dinosaurs, learning, and fun discussion.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-md border border-zinc-700 hover:bg-neutral-700 transition">
                <span className="text-green-400 font-bold">4.</span>
                <p className="text-sm">
                  Keep discussions constructive. Avoid negativity, trolling, or inflammatory remarks.
                </p>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-md border border-zinc-700 hover:bg-neutral-700 transition">
                <span className="text-green-400 font-bold">5.</span>
                <p className="text-sm">
                  Report inappropriate content. Help the moderators maintain a safe, educational, and fun community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
