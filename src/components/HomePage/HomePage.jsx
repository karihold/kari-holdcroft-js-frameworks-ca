import React, { useEffect, useState } from 'react';
import GameFilter from '../GameFilter/GameFilter';
import GameItem from '../GameItem/GameItem';

const HomePage = ({ baseUrl }) => {
  const [games, setGames] = useState([]);
  const [filterQuery, setFilterQuery] = useState([]);

  const filterHandler = event => setFilterQuery(event.target.value.toLowerCase());

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setGames(data.results));
  }, [baseUrl]);

  return (
    <main className="home-page-main">
      <GameFilter label={'Filter games by title'} filterHandler={filterHandler} />
      <section className="games-section">
        {games
          .filter(game => game.name.toLowerCase().includes(filterQuery))
          .map((game, index) => (
            <GameItem
              key={`${game.title}-${game.id}-${index}`}
              id={game.id}
              title={game.name}
              image={game.background_image}
              rating={game.rating}
              releaseDate={game.released}
            />
          ))}
      </section>
    </main>
  );
};

export default HomePage;
