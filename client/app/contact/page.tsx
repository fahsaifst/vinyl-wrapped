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
