import React, { useEffect, useState } from "react";
import style from "./Pokecard.module.css";
import {upperFirstLetter} from '../../utils/upperFirstLetter'
import { getPokemonData } from "../../lib/pokemons";

function Pokecard({ name }) {
  const [pokemon, setPokemon] = useState()
  useEffect(async () => {
    setPokemon(await getPokemonData(name))
  },[])
  return (
    <div className={style.card}>
      {pokemon? (
        <>
        <div className={style.cardId}>
          <div className={style.cardIdText}>#{pokemon.order}</div>
        </div>
        <img src={pokemon.sprites.front_default}></img>
        <h1 className="text-white text-4xl m-2">{upperFirstLetter(pokemon.name)}</h1>
        <span className="text-yellow-500 text-2xl m-2">{pokemon.types.map((type) => type.type.name).join(",")}</span>
        </>
      ):(
        <>Chargement...</>
      )}
    </div>
  );
}

export default Pokecard