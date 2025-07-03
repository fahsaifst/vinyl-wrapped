"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-black bg-white relative">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 right-6 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        Close
      </button>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This project, <strong>Vinyl Wrapped</strong>, uses Spotify's Web API to
        access and display your top tracks and listening statistics in a vinyl-inspired
        format. We value your privacy and want to be transparent about how we use your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Usage</h2>
      <p className="mb-4">
        We only access your top tracks, artists, and related data from your Spotify account
        for display purposes. <strong>No personal data is stored</strong> or shared with any
        third parties. Your Spotify data is processed only within your browser session.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Not Affiliated with Spotify</h2>
      <p className="mb-4">
        This application is not affiliated with, endorsed by, or officially connected to Spotify.
        We use Spotify's public API under their developer terms and policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Your Rights</h2>
      <p className="mb-4">
        You can revoke access to your Spotify account at any time by going to your Spotify
        account settings. No data will be kept by this application after disconnection.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
      <p className="mb-4">
        If you have any questions about this privacy policy, feel free to contact us at:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>IG: @fahsai.fst</li>
        <li>IG: @lilgupkao</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: July 2, 2025
      </p>
    </main>
  );
}
