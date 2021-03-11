import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';

const ItemList = (props) => (
  <div>
    <p className="items">Items</p>
    <ol className="item-list">
      {props.items.map((item, index) => <Item index={index} item={item} />)}
    </ol>
  </div>
);

export default ItemList;

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};
