import React, { useContext } from 'react';
import { PokemonContext } from './PokemonProvider';


const CapturedPokemons = () => {
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons,
    } = useContext(PokemonContext);

    const releasedPokemon = (releasedPokemon) => capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

    const release = ((pokemon) => () => {
        setCapturedPokemons(releasedPokemon(pokemon));
        setPokemons([...pokemons, pokemon])
    })

    return (
        <div className="captured-pokemons">
            <h2>Captured Pokemons</h2>
            
            {capturedPokemons.map((pokemon) => {
              return (
                  <div key={`${pokemon.id}-${pokemon.name}`}>
                    <span>{pokemon.name}</span>
                    <button onClick={release(pokemon)}>-</button>
                </div>)})}
                
        </div>
    )
}

export default CapturedPokemons;