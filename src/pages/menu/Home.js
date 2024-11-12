import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import Slider from 'react-slick';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar jogos de várias categorias
    /*
    const fetchGames = async () => {
      try {
        const response = await axios.get("URL_DA_SUA_API"); // Substituir pela URL da API
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
    */

    //TESTE DE EXIBICAO
    const mockData = [
      {
        name: 'Ação',
        games: [
          { id: 1, title: 'Jogo Ação 1', imageUrl: 'https://via.placeholder.com/150' },
          { id: 2, title: 'Jogo Ação 2', imageUrl: 'https://via.placeholder.com/150' },
          { id: 3, title: 'Jogo Ação 3', imageUrl: 'https://via.placeholder.com/150' },
          { id: 4, title: 'Jogo Ação 4', imageUrl: 'https://via.placeholder.com/150' },
          { id: 5, title: 'Jogo Ação 5', imageUrl: 'https://via.placeholder.com/150' },
          { id: 6, title: 'Jogo Ação 6', imageUrl: 'https://via.placeholder.com/150' },
        ],
      },
      {
        name: 'Aventura',
        games: [
          { id: 4, title: 'Jogo Aventura 1', imageUrl: 'https://via.placeholder.com/150' },
          { id: 5, title: 'Jogo Aventura 2', imageUrl: 'https://via.placeholder.com/150' },
          { id: 6, title: 'Jogo Aventura 3', imageUrl: 'https://via.placeholder.com/150' },
          { id: 7, title: 'Jogo Aventura 4', imageUrl: 'https://via.placeholder.com/150' },
          { id: 8, title: 'Jogo Aventura 5', imageUrl: 'https://via.placeholder.com/150' },
          { id: 9, title: 'Jogo Aventura 6', imageUrl: 'https://via.placeholder.com/150' },
          { id: 10, title: 'Jogo Aventura 7', imageUrl: 'https://via.placeholder.com/150' },
          { id: 11, title: 'Jogo Aventura 8', imageUrl: 'https://via.placeholder.com/150' },
        ],
      },
      {
        name: 'Indie',
        games: [
          { id: 4, title: 'Jogo Indie 1', imageUrl: 'https://via.placeholder.com/150' },
          { id: 5, title: 'Jogo Indie 2', imageUrl: 'https://via.placeholder.com/150' },
          { id: 6, title: 'Jogo Indie 3', imageUrl: 'https://via.placeholder.com/150' },
          { id: 7, title: 'Jogo Indie 4', imageUrl: 'https://via.placeholder.com/150' },
          { id: 8, title: 'Jogo Indie 5', imageUrl: 'https://via.placeholder.com/150' },
          { id: 9, title: 'Jogo Indie 6', imageUrl: 'https://via.placeholder.com/150' },
          { id: 10, title: 'Jogo Indie 7', imageUrl: 'https://via.placeholder.com/150' },
          { id: 11, title: 'Jogo Indie 8', imageUrl: 'https://via.placeholder.com/150' },
        ],
      },
    ];

    setCategories(mockData);
    setLoading(false);
  }, []);

  // Configurações do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="home-container">
      {categories.map((category, index) => (
        <div key={index} className="carousel-section">
          <h2>{category.name}</h2>
          <Slider {...sliderSettings}>
            {category.games.map((game) => (
              <Link to={`/game/${game.id}`} key={game.id} className="game-card">
                <img src={game.imageUrl} alt={game.title} className="game-image" />
                <h3>{game.title}</h3>
              </Link>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Home;
