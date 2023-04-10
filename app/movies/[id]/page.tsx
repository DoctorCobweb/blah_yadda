import Image from "next/image";

// use for when not using fetch API. eg prisma stuff
// export const revalidate = 0

export default async function MovieDetail({
  params,
}: {
  params: { id: number };
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US`,
    { next: { revalidate: 10 } } // does not seem to work??
  );
  const res = await data.json();
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2 className="">{res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={600}
          height={600}
          alt="photo"
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  const response = await fetch(URL);
  const movies = await response.json();
  return movies.results.map((movie: any) => ({
    params: {
      id: movie.id.toString(),
    },
  }));
}
