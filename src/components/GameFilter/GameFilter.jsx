import React from 'react';
import PropTypes from 'prop-types';

const GameFilter = ({ label, filterHandler }) => {
  return (
    <label className="form-label">
      {label}
      <input id="game-filter" onChange={filterHandler} type="text" name="game-filter" />
    </label>
  );
};

GameFilter.propTypes = {
  label: PropTypes.string,
  filterHandler: PropTypes.func.isRequired
};

export default GameFilter;
