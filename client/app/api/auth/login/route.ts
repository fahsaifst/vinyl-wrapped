// This file contains multiple route handlers for different endpoints, which causes duplicate imports and identifier errors.
// To fix this, each route handler should be placed in its own file as per Next.js API route conventions.

// Example: Move the following code to /app/api/auth/login/route.ts
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

// Move the callback handler to /app/api/auth/callback/route.ts
// Move the top-tracks handler to /app/api/auth/top-tracks/route.ts
// Move the refresh-token handler to /app/api/auth/refresh-token/route.ts

// Only one route handler per file is allowed to avoid duplicate identifier errors.