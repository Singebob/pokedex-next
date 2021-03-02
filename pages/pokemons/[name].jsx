import React from "react"
import Link from 'next/link'
import { getAllPokemonsName, getPokemonData, getSpeciesPokemonData, getEvolutionFromEvolutionChainUrl } from "../../lib/pokemons"
import Pokecard from '../../components/Pokecard/Pokecard'
import Topbar from '../../components/Topbar/Topbar'

function Pokemon({pokemon, species, evolutions}) {
  return (
    <div className="flex flex-col font-body justify-center">
        <Topbar></Topbar>
        <div className="flex flex-row justify-center items-center">
          <img src={pokemon.sprites.front_default} className="w-1/6"></img>
          <div className="flex flex-row bg-white shadow-lg rounded-lg m-2 divide-x divide-black">
            <div className="flex flex-col justify-center m-2">
              <h1 className="text-red-500 text-xl">Info:</h1>
              <div className="text-xl">Name: {pokemon.name}</div>
              <div className="text-xl">Height: {pokemon.height}</div>
              <div className="text-xl">Weight: {pokemon.weight}</div>
              <span className="text-yellow-500 text-2xl m-2">{pokemon.types.map((type) => type.type.name).join(", ")}</span>
            </div>
            <div className="flex flex-col justify-center m-2">
              <div className="text-red-500 text-xl mx-2">Stats:</div>
              {pokemon.stats.map(stat => (
                <div className="text-xl mx-2" key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-2xl text-white">{species.flavor_text_entries.filter(flav => flav.language.name == "en")[0].flavor_text}</div>
        <div>
          <h1 className="text-center text-3xl text-yellow-500">Evolution</h1>
          {evolutions ? (
          <div className="flex flex-row flex-wrap justify-center w-full">
          {
            evolutions.map((name) => (
              <div className="w-3/12 m-2" key={name}>
                <Link href={`/pokemons/${name}`}>
                  <a>
                    <Pokecard name={name}/>
                  </a>
                </Link>
              </div>
            ))
          }
          </div>
        ):(
          <>Chargement....</>
        )}
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
  const species = await getSpeciesPokemonData(params.name)
  const evolutions = await getEvolutionFromEvolutionChainUrl(species.evolution_chain.url)
  return {
    props: {
      pokemon,
      species,
      evolutions
    }
  }
}

export default Pokemon
