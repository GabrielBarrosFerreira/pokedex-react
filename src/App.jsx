// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Pokédex</h1>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            {/* A linha abaixo foi atualizada para permitir rotas aninhadas */}
            <Route path="/pokemon/:id/*" element={<PokemonDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
