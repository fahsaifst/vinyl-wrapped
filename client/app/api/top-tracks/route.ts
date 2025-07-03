import { NextRequest, NextResponse } from "next/server";
import axios from "axios";


export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const tracks = result.data.items.map((track: SpotifyApi.TrackObjectFull) => ({
      name: track.name,
      artist: Array.isArray(track.artists)
        ? track.artists.map((artist: { name: string }) => artist.name).join(", ")
        : "",
      album: track.album?.name || "",
      image: track.album?.images?.[0]?.url || "",
      duration_ms: track.duration_ms,
    }));

    return NextResponse.json({ tracks });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Top Tracks Error:", error.message);
    } else {
      console.error("Top Tracks Unknown Error:", error);
    }
    return NextResponse.json({ error: "Failed to fetch tracks" }, { status: 500 });
  }
}
