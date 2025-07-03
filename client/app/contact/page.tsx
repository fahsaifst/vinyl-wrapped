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
      <div className="absolute z-20 w-screen">
        <ContactVinyl />
      </div>

      <div className="w-70 py-10 ">
        <LoginButtun />
        <VinylCover />

        <Term />
        <Navbar />
      </div>
    </main>
  );
}

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
