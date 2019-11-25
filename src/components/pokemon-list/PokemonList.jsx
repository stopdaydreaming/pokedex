import React from 'react'
import './PokemonList.scss'

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            <h2>pokedex</h2>
            <div className="pokemon-list">
                {pokemon.map(p => (
                    <div className="pokemon" key={p}>{p}</div>
                ))}
            </div>
        </div>

    )
}

export default PokemonList