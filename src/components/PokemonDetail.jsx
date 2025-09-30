// src/components/PokemonDetail.jsx
import React from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { pokemons } from '../data.js';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import './PokemonDetail.css';

function PokemonDetail() {
  const { id } = useParams();
  const pokemon = pokemons.find(p => p.id === parseInt(id));

  if (!pokemon) {
    // ... (código existente para pokémon não encontrado)
  }

  return (
    <div className="detail-container">
      <img className="pokemon-image-large" src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p><strong>ID:</strong> #{pokemon.id}</p>
        <p><strong>Tipo:</strong> {pokemon.type}</p>
        
        <nav className="sub-nav">
          <Link to="stats">Status</Link>
          <Link to="moves">Ataques</Link>
        </nav>
        
        {/* Local para renderizar as rotas aninhadas */}
        <Routes>
          <Route path="stats" element={<PokemonStats />} />
          <Route path="moves" element={<PokemonMoves />} />
        </Routes>
        
        <Link to="/" className="back-link">Voltar para a lista</Link>
      </div>
    </div>
  );
}

export default PokemonDetail;