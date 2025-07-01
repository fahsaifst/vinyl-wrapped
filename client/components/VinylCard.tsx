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
      <div ref={ref} className="vinyl-card aspect-[9/16]">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="Track background"
            className="absolute mt-100 inset-0 w-full object-cover"
          />
        )}

        <div>
          <div>
            <div className="w-full h-112 absolute inset-0 rounded-full overflow-hidden mt-10 backdrop-blur-xs"></div>
            <img
              className="vinyl-bg absolute inset-0"
              src="/Vinyl_BG.png"
              alt="Vinyl Background"
            />
          </div>

          <div className="vinyl-card-content ">
            <div className="vinyl-card-header">
              <p className="font-extrabold text-[30px] leading-none">VINYL</p>
              <p className="font-black text-[15px] leading-none pb-1">
                WRAPPED
              </p>
            </div>

            <ul>
              <div className="pb-5">
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
                className="absolute inset-0 left-45 w-20 h-5 mt-35"
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

              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-[6px] font-bold text-black">
                  SPOTIFY Recordes
                </p>
                <div className="flex gap-2">
                  <p className="text-[6px] text-black">TOP TRACK</p>
                  <p className="text-[6px] text-black">LAST MONTH</p>
                </div>
                <p className="text-[6px] text-black">{currentDate}</p>
                <p className="text-[6px] text-black">Made by</p>
                <p className="text-[6px] text-black">fahsai x captain</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default VinylCard;
