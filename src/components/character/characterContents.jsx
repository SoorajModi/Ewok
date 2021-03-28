import React from 'react';
import PropTypes from 'prop-types';
import FallBack from '../utils/fallBack';

function CharacterContents({ char, fallback }) {
  if (!char) {
    return fallback;
  }

  return (
    <>
      <h2>{char.name}</h2>
      <p>
        {`Gender: ${char.gender}`}
      </p>
      <p>
        {`Birth Year: ${char.birth_year}`}
      </p>
      <p>
        {`Height: ${char.height}`}
      </p>
      <p>
        {`Mass: ${char.mass}`}
      </p>
      <p>
        {`Hair Color: ${char.hair_color}`}
      </p>
      <p>
        {`Skin Color: ${char.skin_color}`}
      </p>
    </>
  );
}

CharacterContents.defaultProps = {
  char: null,
  fallback: <FallBack />,
};

CharacterContents.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
  }),
  fallback: PropTypes.object,
};

export default CharacterContents;
