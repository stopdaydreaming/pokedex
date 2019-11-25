import React from 'react'
import './PokemonList.scss'

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}

export default PokemonList