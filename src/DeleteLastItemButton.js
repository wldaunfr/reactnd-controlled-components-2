import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItemButton = (props) => (
  <button onClick={props.onDeleteItem} disabled={props.disabled}>
    Delete Last Item
  </button>
)

export default DeleteLastItemButton;

DeleteLastItemButton.propTypes = {
  onDeleteItem: PropTypes.func.required,
  disabled: PropTypes.func.required
}
