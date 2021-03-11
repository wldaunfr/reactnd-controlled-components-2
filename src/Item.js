import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => (
  <li key={props.index}>{props.item}</li>
)

export default Item;

Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired
};
