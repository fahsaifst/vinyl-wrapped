import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });

  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
  const REDIRECT_URI = process.env.REDIRECT_URI!;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/callback?access_token=${access_token}&refresh_token=${refresh_token}`
    );
  } catch (error: any) {
    console.error("Callback Error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}