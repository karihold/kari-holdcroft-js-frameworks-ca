import React from 'react';
import PropTypes from 'prop-types';

const GameItem = ({ id, title, image, rating, releaseDate }) => {
  return (
    <article className="game-item">
      <h2 className="game-title">{title}</h2>
      <img className="game-image" src={image} alt={`${title} illustration.`} />
      <div className="game-item-row">
        <p className="game-info-label">
          Rating:<span className="game-rating">{rating}</span>
        </p>
        <p className="game-info-label">
          Release Date:
          <time className="game-release-date" dateTime={releaseDate}>
            {releaseDate}
          </time>
        </p>
      </div>
      <a className="game-page-link" href={`/game/${id}`}>
        See details
      </a>
    </article>
  );
};

GameItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string
};

export default GameItem;
