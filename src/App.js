// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/menu/Home';
import Perfil from './pages/Perfil';
import Login from './pages/login/Login';
import DetalhesJogo from './pages/detalhes_jogo/DetalhesJogo';
import Cadastro from './pages/cadastro/Cadastro';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Colocando a Navbar aqui, acima das rotas */}
      <div className="app-container" style={{ marginTop: '100px' }}> {/* Ajustando o espaço para a navbar fixa */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/game/:id" element={<DetalhesJogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
