
import { NextResponse } from "next/server";

export async function GET() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
  const REDIRECT_URI = process.env.REDIRECT_URI!;
  const scope = "user-top-read";

  const authURL =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope,
      redirect_uri: REDIRECT_URI,
    }).toString();

  return NextResponse.redirect(authURL);
}
