"use client";

import { useEffect, useState } from "react";

export default function TrexPage() {



    return (
        <div className="relative w-full h-full bg-black overflow-hidden rounded-xl">

            <iframe
                title="T-Rex Skeleton"
                src="https://sketchfab.com/models/4641dced5b474c30a1af71971a7307fe/embed?autostart=1&preload=0&ui_infos=0&ui_controls=0&ui_watermark=0"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen />

        </div>
    );
}
