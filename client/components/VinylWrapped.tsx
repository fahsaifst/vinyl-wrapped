"use client";

import React from "react";

const VinylWrapped = () => {
  return (
    <div className="flex flex-col items-start justify-center w-70">
      <div className="relative w-full flex flex-col items-start justify-center">
        <LoginButtun />
        <img
          className=" absolute inset-0 z-0 left-15 top-10"
          src="/vinyl.png"
          alt="vinyl"
        />
        <VinylCover />
      </div>
      <Term />
    </div>
  );
};

export default VinylWrapped;

export const LoginButtun = () => {
  const handleLogin = () => {
    window.location.href = "http://127.0.0.1:3001/login";
  };
  return (
    <button
      className="text-black font-bold underline bg-[#26BC30] pl-3 pr-3"
      onClick={handleLogin}
    >
      LOG IN
    </button>
  );
};

export const VinylCover = () => {
  return (
    <div className="cover z-10 text-white mt-4 bg-[#200CDB] w-70 h-70 flex flex-col items-center justify-between">
      <div className="flex flex-col justify-start">
        <h1 className="text-8xl font-medium">VINYL</h1>
        <h2 className="text-5xl font-semibold">WRAPPED</h2>
      </div>
      <div className="flex items-end justify-between w-full ">
        <p className="font-black text-xs">MADE BY</p>
        <p className="font-black text-base">FAHSAI X CAPTAIN</p>
      </div>
    </div>
  );
};

export const Term = () => {
  return (
    <div className="text-black mt-10">
      <p className="text-xs">
        This is a demo app for educational purposes only.
      </p>
      <p className="text-xs">Please do not use it for commercial purposes.</p>
      <p className="text-xs">
        Spotify is a registered trademark of Spotify AB.
      </p>
      <p className="text-xs">This app is not affiliated with Spotify AB.</p>
      <p className="text-xs">
        For more information, please visit the{" "}
        <a
          href="https://developer.spotify.com/documentation/web-api/"
          className="underline text-blue-500"
        >
          Spotify Web API documentation
        </a>
        .
      </p>
    </div>
  );
};
