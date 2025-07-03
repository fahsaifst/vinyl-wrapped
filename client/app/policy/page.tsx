"use client";

import { useRouter } from "next/navigation";

export default function PolicyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white text-black">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm leading-relaxed">
          This project, <strong>Vinyl Wrapped</strong>, uses Spotify’s Web API
          to display your top tracks and listening statistics in a
          vinyl-inspired format. We do not store, log, or share any personal
          information. All data—including your top tracks and artists—is
          accessed temporarily and processed only within your current browser
          session. No information is sent to any server or third party. This
          application is not affiliated with, endorsed by, or officially
          connected to Spotify. You can revoke access to your Spotify account at
          any time by visiting{" "}
          <a
            href="https://www.spotify.com/account/apps/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            your Spotify app settings
          </a>
          . Once access is revoked, the app retains no further data.
        </p>

        <div className="mt-10">
          <button
            onClick={() => router.back()}
            className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
