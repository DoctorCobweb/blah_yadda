export async function GET(request: Request) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  return new Response(JSON.stringify({ data }));
}
