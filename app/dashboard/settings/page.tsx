import { Suspense } from "react";
import SearchBar from "./search-bar";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  return data;
}

async function getApiResponse() {
  const response = await fetch("http://localhost:3000/api/hello");
  const data = await response.json();
  return data;
}

function SearchBarFallback() {
  return <>placeholder</>;
}

export default async function Page() {
  // const blah = await getApiResponse();
  // const blah = await getData();
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchBar />
      </Suspense>
      <h3>Settings</h3>
      {/* <div>{JSON.stringify(blah)}</div> */}
    </>
  );
}
