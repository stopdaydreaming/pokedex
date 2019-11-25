import React from 'react'
import './PokemonList.scss'

const PokemonList = ({ pokemon }) => {
    return (
        <div className="pokemon">
            <h1>pokedex</h1>
            <div className="pokemon-list">
                {pokemon.map(p => (
                    <div className="pokemon-item" key={p}>{p}</div>
                ))}
            </div>
        </div>

    )
}

export default PokemonList