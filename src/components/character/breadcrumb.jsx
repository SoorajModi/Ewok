import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function RenderBreadcrumb({ items }) {
  if (!items) {
    return <Typography color="textPrimary">Character</Typography>;
  }
  return <Typography color="textPrimary">{items.name}</Typography>;
}

function Breadcrumb({ charData }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ paddingTop: '5vh', position: 'center' }}>
      <Link color="inherit" href="/">
        Home
      </Link>
      <RenderBreadcrumb items={charData} />
    </Breadcrumbs>
  );
}

RenderBreadcrumb.defaultProps = {
  items: null,
};

RenderBreadcrumb.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Breadcrumb.defaultProps = {
  charData: null,
};

Breadcrumb.propTypes = {
  charData: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Breadcrumb;
