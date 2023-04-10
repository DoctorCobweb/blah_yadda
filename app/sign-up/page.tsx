import { cookies, headers } from "next/headers";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(data);

  // doing stuff with headers() and cookies(),
  // turns the page into dynamic rendering
  // so there will be no cached content.
  // instead, nextjs will use a lambda function
  // and render the page at request time...
  //
  // const cookieStore = cookies();
  // console.log(cookieStore);
  // const theme = cookieStore.get("theme");
  // console.log(theme);
  //
  // const hKeys = headers().keys();
  // console.log(hKeys);
  // for (const key of hKeys) {
  //   console.log(key);
  // }
  //
  // for client components, using useSearchParams() will skip
  // rendering and instead render all client components up to
  // the nearest supsense boundary on the client.

  // Recommendation: handle errors
  if (!data) {
    // if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  await delay(5000);
  return data;
}

export default async function Page() {
  const data = await getData();

  return <main>{JSON.stringify(data, null, 2)}</main>;
}
