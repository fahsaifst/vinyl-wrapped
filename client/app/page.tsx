"use client";

import Navbar from "@/components/navbar";
import VinylWrapped from "@/components/VinylWrapped";

export default function Home() {
  return (
    <main>
      <div className="first-page bg-white h-screen flex flex-col items-center justify-center">
        <VinylWrapped />
        <Navbar />
      </div>
    </main>
  );
}
