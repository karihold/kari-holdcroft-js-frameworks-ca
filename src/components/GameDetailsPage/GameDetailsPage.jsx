import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetailsPage = ({ baseUrl }) => {
  const { id } = useParams();
  const [game, setGame] = useState({});

  const removeHTMLTagsFromDescription = description =>
    description.replace(/^<[^>]*>/gim, '').replace(/<\/[^>]*>/gim, '');

  useEffect(() => {
    fetch(`${baseUrl}/${id}`)
      .then(response => response.json())
      .then(data => setGame(data));
  }, [baseUrl, id]);

  return (
    <main className="game-details-page">
      <h1 className="game-details-title">{game.name}</h1>
      <img className="game-details-image" src={game.background_image} alt={`${game.name} illustration.`} />
      <p
        className="game-details-description"
        dangerouslySetInnerHTML={{ __html: removeHTMLTagsFromDescription(game.description || '') }}
      />
      <a className="game-details-website-button" href={game.website}>
        Official Website
      </a>
    </main>
  );
};

export default GameDetailsPage;
