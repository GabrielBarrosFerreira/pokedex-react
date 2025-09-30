// src/components/PokemonList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { pokemons } from '../data.js';
import './PokemonList.css'; 

function PokemonList() {
  return (
    <div className="pokemon-grid">
      {pokemons.map(pokemon => (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="pokemon-card">
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default PokemonList;