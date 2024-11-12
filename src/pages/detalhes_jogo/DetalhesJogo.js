import React from 'react';
import { useParams } from 'react-router-dom';

const DetalhesJogo = () => {
  const { id } = useParams();
  const [game, setGame] = React.useState(null);

  React.useEffect(() => {
    // Simular chamada à API para buscar detalhes do jogo
    const fetchGameDetails = async () => {
      const mockData = { 
        id: id, 
        title: `Jogo ${id}`, 
        description: 'Descrição do jogo...', 
        rating: 4.5 
      };
      setGame(mockData);
    };

    fetchGameDetails();
  }, [id]);

  if (!game) return <p>Carregando...</p>;

  return (
    <div className="game-details">
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className="rating">Avaliação: {game.rating}</div>
      {/* Aqui você pode adicionar um sistema de avaliação ou comentários */}
    </div>
  );
};

export default DetalhesJogo;
