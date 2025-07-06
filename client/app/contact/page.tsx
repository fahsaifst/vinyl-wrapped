"use client";

import Navbar from "@/components/navbar";
import {
  ContactVinyl,
  LoginButtun,
  VinylCover,
} from "@/components/VinylWrapped";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen min:w-screen w-full flex flex-col items-center justify-center relative">
      <div className="absolute z-20 w-screen">
        <ContactVinyl />
      </div>

      <div className="w-70 py-10 ">
        <LoginButtun />
        <VinylCover />

        <Navbar />
      </div>
    </main>
  );
}


