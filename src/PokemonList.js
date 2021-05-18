import React from 'react'

// Destructures pokemon from the props argument to return the value set in state.
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {/* Running javascript inside JSX */}
            {/* Looping through each pokemon in the collection */}
            {/* Setting the pokemon name as the key in the array because it will always be unique */}
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
