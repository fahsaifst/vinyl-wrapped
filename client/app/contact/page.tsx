"use client";

import Navbar from "@/components/navbar";
import VinylWrapped, {
  LoginButtun,
  Term,
  VinylCover,
} from "@/components/VinylWrapped";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen min:w-screen w-full flex flex-col items-center justify-center relative">
      <div className="absolute z-20">
        <ContactVinyl />
      </div>

      <div className="w-70">
        <LoginButtun />
      <VinylCover />

      <Term />
      </div>

      <Navbar />
    </main>
  );
}

export const ContactVinyl = () => {
  return (
    <div className="min:w-screen flex items-center justify-center">
      <div className="w-[450px] h-[450px] sm:w-[330px] sm:h-[330px] rounded-full backdrop-blur-xs z-20 bg-amber-800 " />

      <img
        src="/Vinyl_BG.png"
        alt="Vinyl Background"
        className="absolute w-[550px] h-[550px] sm:w-[500px] sm:h-[400px] object-cover z-20"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-black text-center px-4">
        <p className="text-[20px] sm:text-[28px] font-extrabold leading-none">
          VINYL
        </p>
        <p className="text-[12px] sm:text-[16px] font-black leading-none mb-2">
          WRAPPED
        </p>
        <div className="text-[10px] sm:text-[12px] font-medium flex gap-4">
          <span>IG: Lilgupkao</span>
          <span>IG: Fahsai.fst</span>
        </div>
        <div className="w-[60px] h-[24px] bg-black my-2" />
        <p className="text-[8px]">Made by</p>
        <p className="text-[8px] font-semibold">Fahsai x Captain</p>
      </div>
    </div>
  );
};

// export const ContactVinyl = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
//       {/* Optional blur layer behind vinyl */}
//       <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden backdrop-blur-[2px] bg-white/10" />

//       {/* Vinyl image itself */}
//       <img
//         src="/Vinyl_BG.png"
//         alt="Vinyl Background"
//         className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover z-10"
//       />
//     </div>
//   );
// };
