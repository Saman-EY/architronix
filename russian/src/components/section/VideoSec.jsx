"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoSec() {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] rounded overflow-hidden mt-10">
      <video
        autoPlay={play}
        controls={play}
        muted
        loop={!play}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/overlayVid.MP4" type="video/mp4" />
      </video>

      {!play && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <button
            onClick={() => setPlay(true)}
            className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
