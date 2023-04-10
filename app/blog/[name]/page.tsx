type Result = {
  name: string;
  url: string;
};

type Params = {
  name: string;
};

export default function Page(params: any) {
  // return <div>My Post for berry {params.name}</div>;
  return <div>My Post....{params.name}</div>;
}

export async function generateStaticParams() {
  const blah = await fetch("https://pokeapi.co/api/v2/berry");
  const data = await blah.json();
  console.log(data);

  return data.results.map((result: Result) => ({
    params: { name: result.name },
  }));
}
