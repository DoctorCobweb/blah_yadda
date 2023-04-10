"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  // useSearchParams is a cliend-side only hook that lets
  // you read the current URL's query string
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  // this will not be logged on the server when using static rendering
  console.log(search);

  return <>Search: {search}</>;
}
