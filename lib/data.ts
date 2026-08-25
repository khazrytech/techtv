export type Movie = {
  id: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  releaseDate: string;
  type: "movie" | "series";
  genre: string[];
  description: string;
  poster: string;
  backdrop: string;
  videoUrl: string;
};

const tmdb = (path: string) => `https://image.tmdb.org/t/p/w780${path}`;
const back = (path: string) => `https://image.tmdb.org/t/p/w1280${path}`;

export const demoMovies: Movie[] = [
  {
    id: "1", title: "Dune: Part Two", year: 2024, rating: 8.7, duration: "2h 46m", releaseDate: "2024-03-01",
    type: "movie", genre: ["Sci-Fi", "Action", "Drama"],
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster: tmdb("/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"), backdrop: back("/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "2", title: "The Batman", year: 2022, rating: 8.2, duration: "2h 56m", releaseDate: "2022-03-04",
    type: "movie", genre: ["Action", "Drama"],
    description: "Batman investigates a string of murders that exposes corruption buried deep within Gotham City.",
    poster: tmdb("/74xTEgt7R36Fpooo50r9T25onhq.jpg"), backdrop: back("/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: "3", title: "Interstellar", year: 2014, rating: 8.7, duration: "2h 49m", releaseDate: "2014-11-07",
    type: "movie", genre: ["Sci-Fi", "Drama"],
    description: "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: tmdb("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"), backdrop: back("/pbrkL804c8yAv3zBZR4QPEafpAR.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "4", title: "Inception", year: 2010, rating: 8.8, duration: "2h 28m", releaseDate: "2010-07-16",
    type: "movie", genre: ["Action", "Sci-Fi", "Drama"],
    description: "A skilled extractor who steals secrets through shared dreams is offered a chance to erase his past.",
    poster: tmdb("/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"), backdrop: back("/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "5", title: "The Dark Knight", year: 2008, rating: 9.0, duration: "2h 32m", releaseDate: "2008-07-18",
    type: "movie", genre: ["Action", "Drama"],
    description: "Batman faces a criminal mastermind whose reign of chaos pushes Gotham and its heroes to their limits.",
    poster: tmdb("/qJ2tW6WMUDux911r6m7haRef0WH.jpg"), backdrop: back("/nMKdUUepR0i5zn0y1T4CsSB5ez.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  {
    id: "6", title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: 8.6, duration: "2h 20m", releaseDate: "2023-06-02",
    type: "movie", genre: ["Action", "Sci-Fi"],
    description: "Miles Morales journeys across the multiverse and encounters a team of Spider-People charged with protecting its existence.",
    poster: tmdb("/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"), backdrop: back("/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "7", title: "Wednesday", year: 2022, rating: 8.1, duration: "8 Episodes", releaseDate: "2022-11-23",
    type: "series", genre: ["Drama", "Comedy"],
    description: "Wednesday Addams investigates a mystery at Nevermore Academy while navigating new friendships and unusual powers.",
    poster: tmdb("/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"), backdrop: back("/iHSwvRVaRlWZCbCCl8Q7M0rC9P0.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  },
  {
    id: "8", title: "Stranger Things", year: 2016, rating: 8.6, duration: "4 Seasons", releaseDate: "2016-07-15",
    type: "series", genre: ["Sci-Fi", "Drama"],
    description: "A group of friends uncover supernatural secrets and government experiments in a small town.",
    poster: tmdb("/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"), backdrop: back("/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  }
];