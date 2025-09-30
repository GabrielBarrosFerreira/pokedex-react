import React from 'react';
import { useParams } from 'react-router-dom';
import { pokemons } from '../data.js';

function PokemonMoves() {
  const { id } = useParams();
  const pokemon = pokemons.find(p => p.id === parseInt(id));
  return (
    <div className="pokemon-sub-info">
      <h4>Ataques:</h4>
      <ul>
        {pokemon.moves.map(move => <li key={move}>{move}</li>)}
      </ul>
    </div>
  );
}
export default PokemonMoves;