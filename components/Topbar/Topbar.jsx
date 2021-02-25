import React from 'react'
import style from './Topbar.module.css'

function Topbar (props) {
  return (
  <div className="w-full justify-center my-8 flex flex-col items-center">
    <h1 className="text-center text-white text-5xl">My pokemons</h1>
    <input className={style.search} type="search" placeholder="Search pokemon name"></input>
  </div>
  )
}

export default Topbar