import React from 'react';
import { useParams } from 'react-router-dom';
import { pokemons } from '../data.js';

function PokemonStats() {
  const { id } = useParams();
  const pokemon = pokemons.find(p => p.id === parseInt(id));
  return (
    <div className="pokemon-sub-info">
      <h4>Status Base:</h4>
      <ul>
        <li>HP: {pokemon.stats.hp}</li>
        <li>Ataque: {pokemon.stats.attack}</li>
        <li>Defesa: {pokemon.stats.defense}</li>
      </ul>
    </div>
  );
}
export default PokemonStats;