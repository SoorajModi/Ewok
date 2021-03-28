import React from 'react';
import PropTypes from 'prop-types';
import CharacterContents from './characterContents';
import Breadcrumb from './breadcrumb';

let swapiURL = 'https://swapi.dev/api/people/';

const fetchData = (id) => {
  let newId = id;

  if (id > 83 || id < 1) newId = 1;
  swapiURL += `${newId}/`;

  return fetch(swapiURL).then((res) => res.json());
};

function Character({ match }) {
  const [charData, setCharData] = React.useState({});
  const { id } = match.params;

  React.useEffect(() => {
    fetchData(id)
      .then((data) => setCharData(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Breadcrumb charData={charData} />
      <CharacterContents char={charData} />
    </>
  );
}

Character.defaultProps = {
  match: {
    params: {
      id: '1',
    },
  },
};

Character.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Character;
