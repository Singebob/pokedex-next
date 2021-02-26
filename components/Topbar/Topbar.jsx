import React from 'react'
import style from './Topbar.module.css'

function Topbar ({defaultPokemons, setPokemons}) {

  const updateSearch = (value) => {
    const filtered = defaultPokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase())
    })
    setPokemons(filtered)
  }

  return (
  <div className="w-full justify-center my-8 flex flex-col items-center">
    <h1 className="text-center text-white text-5xl">My pokemons</h1>
    <input className={style.search} type="search" placeholder="Search pokemon name" onChange={(e) => updateSearch(e.target.value)}></input>
  </div>
  )
}

export default Topbar