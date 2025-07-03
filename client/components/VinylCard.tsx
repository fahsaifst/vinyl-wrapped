"use client";

import { forwardRef } from "react";
import "./VinylCard.css";
import { url } from "inspector";

type Props = {
  tracks: {
    name: string;
    artist: string;
    album: string;
    image: string;
    duration_ms?: number;
  }[];
  backgroundImage?: string;
};
const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const millisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const VinylCard = forwardRef<HTMLDivElement, Props>(
  ({ tracks, backgroundImage }, ref) => {
    return (
      <div ref={ref} className="vinyl-card">
        {backgroundImage && (
          <div
            className="absolute mt-100 inset-0 w-full h-100 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}

        <ul>
          <div className="vinyl-bg-wrapper">
            <div className="vinyl-bg-blur" />
            <div className="vinyl-bg-image" />
          </div>

          <ul className="vinyl-card-content">
            <ul className="vinyl-card-header">
              <li className="font-extrabold text-[30px]">VINYL</li>
              <li className="font-black text-[15px]">WRAPPED</li>
            </ul>

            <ul>
              <div className="pb-8">
                {tracks.slice(0, 5).map((track, i) => (
                  <li key={i}>
                    <div className="font-black text-black text-[9px] text-center w-60">
                      {i + 1} {track.name} - {track.artist}{" "}
                      {typeof track.duration_ms === "number"
                        ? `${millisToMinutesAndSeconds(track.duration_ms)}`
                        : ""}
                    </div>
                  </li>
                ))}
              </div>
              <img
                className="absolute  w-20 h-5 left-65 top-35"
                src="/barcode.png"
                alt="barcode"
              />
              {tracks.slice(5, 10).map((track, i) => (
                <li key={i}>
                  <div className="font-medium text-black text-[8px] text-center w-60">
                    {i + 6}. {track.name} - {track.artist}{" "}
                    {typeof track.duration_ms === "number"
                      ? `${millisToMinutesAndSeconds(track.duration_ms)}`
                      : ""}
                  </div>
                </li>
              ))}

              <ul className="text-center pt-4">
                <li className="text-[6px] font-bold text-black">
                  SPOTIFY Recordes
                </li>
                <ul className="flex justify-center gap-2">
                  <li className="text-[6px] text-black">TOP TRACK</li>
                  <li className="text-[6px] text-black">LAST MONTH</li>
                </ul>
                <li className="text-[6px] text-black">{currentDate}</li>
                <li className="text-[6px] text-black">Made by</li>
                <li className="text-[6px] text-black">fahsai x captain</li>
              </ul>
            </ul>
          </ul>
        </ul>
      </div>
    );
  }
);

export default VinylCard;
