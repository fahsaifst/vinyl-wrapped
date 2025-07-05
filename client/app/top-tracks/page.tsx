"use client";

import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import VinylCard from "../../components/VinylCard";
import "./page.css"; // Import your CSS file for styling
import Navbar from "@/components/navbar";

type Track = {
  name: string;
  artist: string;
  album: string;
  image: string;
  duration_ms?: number;
};

export default function TopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const fetchTracks = async (token: string) => {
    const res = await fetch(
      "https://vinyl-wrapped-production.up.railway.app/top-tracks",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (res.status === 401 || res.status === 400) {
      // 🔁 Token หมดอายุ → ขอใหม่
      const refresh_token = localStorage.getItem("refresh_token");
      const refreshed = await fetch(
        "https://vinyl-wrapped-production.up.railway.app/refresh-token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh_token }),
        }
      );
      const { access_token } = await refreshed.json();
      localStorage.setItem("access_token", access_token);
      return fetchTracks(access_token); // 🔄 รีเฟตช์ใหม่อีกครั้ง
    }

    const data = await res.json();
    setTracks(data.tracks);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    fetchTracks(token);
  }, []);

  const downloadImage = async () => {
    if (!cardRef.current) return;
    await new Promise((resolve) => setTimeout(resolve, 300));
    const canvas = await html2canvas(cardRef.current!, {
      useCORS: true,
      allowTaint: false,
    });
    const link = document.createElement("a");
    link.download = "vinyl-wrapped.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="page h-300 md:h-450">
      <Navbar />

      <div className="header">
        <h1>TOP TRACK</h1>
        <h1>LAST MONTH</h1>
      </div>
      <button onClick={downloadImage} className="save-button">
        SAVE IMAGE
      </button>

      <div className=" flex justify-center items-center">
        <div className="card-container" ref={cardRef}>
          <VinylCard tracks={tracks} backgroundImage={tracks[0]?.image} />
        </div>
      </div>
    </div>
  );
}
