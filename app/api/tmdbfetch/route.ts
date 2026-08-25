import { NextRequest, NextResponse } from "next/server";

const TMDB_BASE = "https://api.themoviedb.org/3";

export async function GET(request: NextRequest) {
  const key = process.env.TMDB_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "TMDB_API_KEY is not configured.", results: [] },
      { status: 503 }
    );
  }

  const query = request.nextUrl.searchParams.get("query");
  const type = request.nextUrl.searchParams.get("type") || "trending";

  try {
    let endpoint = `${TMDB_BASE}/trending/movie/week?api_key=${encodeURIComponent(key)}`;

    if (type === "tv") endpoint = `${TMDB_BASE}/trending/tv/week?api_key=${encodeURIComponent(key)}`;
    if (type === "search" && query) {
      endpoint = `${TMDB_BASE}/search/multi?api_key=${encodeURIComponent(key)}&query=${encodeURIComponent(query)}&include_adult=false`;
    }

    const response = await fetch(endpoint, {
      next: { revalidate: 1800 }
    });

    if (!response.ok) {
      return NextResponse.json({ error: "TMDB request failed.", results: [] }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Unable to reach TMDB.", results: [] }, { status: 502 });
  }
}