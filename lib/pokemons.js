const limit = 151
const offset = 0
const API_URL = `https://pokeapi.co/api/v2/`

export async function getAllPokemons() {
  const result = await fetch(`${API_URL}pokemon?limit=${limit}&offset=${offset}`)
  return (await result.json()).results
}

export async function getAllPokemonsName() {
  const pokemons = await getAllPokemons()
  return pokemons.map(pokemon => {
    return {
      params: {
        name: pokemon.name
      }
    }
  })
}

export async function getPokemonData(name) {
  const result = await fetch(`${API_URL}pokemon/${name}`)
  return result.json()
}
