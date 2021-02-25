import React from "react"
import { getAllPokemonsName, getPokemonData } from "../../lib/pokemons"

function Pokemon({pokemon}) {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row">
          <img src={pokemon.sprites.front_default} className="w-1/6"></img>
          <div>
            {pokemon.name}
          </div>
        </div>
        <div className="flex flex-row">
          <h1>Evolution</h1>

        </div> 
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPokemonsName()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pokemon = await getPokemonData(params.name)
  return {
    props: {
      pokemon
    }
  }
}

export default Pokemon
