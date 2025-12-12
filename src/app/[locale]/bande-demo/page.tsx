"use client";

import { useRef, useEffect } from "react";

export default function BandeDemo() {
  const videoUrl = process.env.NEXT_PUBLIC_BANDE_DEMO_URL;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, []);

  return (
    <main className="container">
      <div className="playerWrapper">
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          className="player"
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    </main>
  );
}
