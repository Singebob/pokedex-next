import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Pokecard from '../components/Pokecard/Pokecard'
import Topbar from '../components/Topbar/Topbar'
import { getAllPokemons } from '../lib/pokemons'

export default function Home() {
  const [pokemons, setPokemons] = useState()
  const [defaultPokemons, setDefaultPokemons] = useState()
  
  useEffect(async () => {
    const allPokemons = await getAllPokemons()
    setDefaultPokemons(allPokemons)
    setPokemons(allPokemons)
  },[])

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-body h-screen flex flex-col">
        <Topbar defaultPokemons={defaultPokemons} setPokemons={setPokemons}></Topbar>
        {pokemons ? (
          <div className="flex flex-row flex-wrap justify-center w-full">
          {
            pokemons.map((pokemon) => (
              <div className="w-3/12 m-2" key={pokemon.name}>
                <Link href={`/pokemons/${pokemon.name}`}>
                  <a>
                    <Pokecard name={pokemon.name}/>
                  </a>
                </Link>
              </div>
            ))
          }
          </div>
        ):(
          <>Chargement....</>
        )}
      </main>
    </div>
  )
}
