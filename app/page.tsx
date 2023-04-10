// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Movie from "./Movie";

export default async function Page() {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  console.log(process.env.API_KEY);
  const response = await fetch(URL);
  const movies = await response.json();

  return (
    <div className="flex flex-col">
      <div className="grid gap-16 grid-cols-fluid">
        {movies.results.map((movie: any) => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
