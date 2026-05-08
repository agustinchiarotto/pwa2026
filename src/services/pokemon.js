export const getPokemonByName = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Pokemon request failed: ${response.status}`);
  }

  return response.json();
};
