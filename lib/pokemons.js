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

export async function getSpeciesPokemonData(name) {
  const result = await fetch(`${API_URL}/pokemon-species/${name}`)
  return result.json()
}

export async function getEvolutionFromEvolutionChainUrl(url) {
  const result = await fetch(url)
  const evolutions = await result.json()
  const evolutionsName = getNamesFromChainsEvolvesTo(evolutions.chain.evolves_to)
  if(evolutionsName == undefined)
    return [evolutions.chain.species.name]
  return [evolutions.chain.species.name, ...evolutionsName]
}

function getNamesFromChainsEvolvesTo(evolvesTo) {
  if(evolvesTo.length === 0){
    return
  }
  return evolvesTo.reduce((evolve, pokemon) => {
    const evolves = getNamesFromChainsEvolvesTo(pokemon.evolves_to)
    if(evolves == undefined) {
      return [...evolve, pokemon.species.name]
    }
    return [...evolve, pokemon.species.name,...getNamesFromChainsEvolvesTo(pokemon.evolves_to)]
  },[])
}
