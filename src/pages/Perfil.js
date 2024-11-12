// src/pages/Home.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Página de Perfil!</h1>
      <p>
        Esta é a página inicial da sua aplicação React. Aqui você pode adicionar informações sobre o seu projeto ou qualquer outro conteúdo que desejar.
      </p>
      <p>
        Navegue pelas opções na barra de navegação acima para ver outras páginas.
      </p>
      <Button variant="primary">Clique aqui</Button>
    </div>
  );
};

export default Home;
