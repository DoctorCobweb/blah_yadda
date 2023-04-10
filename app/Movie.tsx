"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({ id, title, poster_path, release_date }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="py-6">
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/movies/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt="blah"
          width={300}
          height={300}
        />
      </Link>
    </div>
  );
}
