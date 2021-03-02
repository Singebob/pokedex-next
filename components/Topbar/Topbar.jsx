import React from 'react'
import Link from 'next/link'
import style from './Topbar.module.css'

function Topbar ({defaultPokemons, setPokemons}) {
  return (
    <Link href="/">
      <a>
        <h1 className={style.title}>My pokemons</h1>
      </a>
    </Link>
  )
}

export default Topbar