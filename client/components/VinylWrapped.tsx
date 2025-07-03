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
    </div>
  );
};

export default VinylWrapped;

export const LoginButtun = () => {
  const handleLogin = () => {
    window.location.href = "/api/login";
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

export const ContactVinyl = () => {
  return (
    <div className="min:w-screen flex items-center justify-center overflow-hidden">
      <div className="w-[450px] h-[450px] sm:w-[330px] sm:h-[330px] rounded-full backdrop-blur-xs z-20 " />

      <img
        src="/Vinyl_BG.png"
        alt="Vinyl Background"
        className="absolute w-[550px] h-[550px] sm:w-[550px] sm:h-[550px] object-cover z-20"
      />

      <div className="absolute  h-70 z-20 flex flex-col items-center justify-between text-black text-center px-4 ">
        <div>
          <p className="text-[30px] sm:text-[28px] font-extrabold leading-none">
            VINYL
          </p>
          <p className="text-[15px] sm:text-[16px] font-black leading-none mb-2">
            WRAPPED
          </p>
        </div>
        <div className="text-[10px] sm:text-[12px] font-medium flex gap-30">
          <span className="font-bold">IG: Lilgupkao</span>
          <span className="font-bold">IG: Fahsai.fst</span>
        </div>
        <div>
          <img className="h-8 mb-2"
          src="/barcode-tq.png" alt="thank you" />
          <p className="text-[8px]">Made by</p>
          <p className="text-[8px] font-semibold">Fahsai x Captain</p>
        </div>
      </div>
    </div>
  );
};
