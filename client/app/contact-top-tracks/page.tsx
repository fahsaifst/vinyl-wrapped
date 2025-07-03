"use client";

import { useRouter } from "next/navigation";
import { ContactVinyl } from "../contact/page";

export default function ContactPage() {
  const router = useRouter();
  return (
    <main className="bg-white min-h-screen min:w-screen w-full h-200 flex flex-col items-center justify-center ">
      <div className="absolute z-20 w-screen ">
        <ContactVinyl />
        <div className="w-full pt-30 flex items-center justify-center">
          <button
            onClick={() => router.back()}
            className="z-50 px-2 py-2 text-sm font-semibold text-white bg-gray-400 rounded-full  transition absolute"
          >
            X
          </button>
        </div>
      </div>
    </main>
  );
}
