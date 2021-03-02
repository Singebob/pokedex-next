import React from 'react'
import style from './Search.module.css'

function Search ({defaultPokemons, setPokemons}){
  const updateSearch = (value) => {
    const filtered = defaultPokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase())
    })
    setPokemons(filtered)
  }

  return (
    <input className={style.search} type="search" placeholder="Search pokemon name" onChange={(e) => updateSearch(e.target.value)}></input>
  )
}

export default Search
