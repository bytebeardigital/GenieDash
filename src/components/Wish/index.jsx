import React from 'react';
import { FiTrash } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function Wish(props) {
  return (
    <div className="wish">
      <input
        type="checkbox"
        className="wish--completed"
        onChange={() => props.handleWishGrant(props.wish.id)}
        checked={props.wishGranted}
      />
      <p className="wish--title">{props.wishTitle}</p>
      <NumberFormat
        className="wish--price"
        value={props.price}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button className="wish--delete" onClick={() => props.wishDelete(props.wish.id)}>
        <FiTrash />
      </button>
    </div>
  );
}

Wish.propTypes = {
  props: PropTypes.any,
  wishTitle: PropTypes.string,
  wish: PropTypes.object,
  handleWishGrant: PropTypes.func,
  id: PropTypes.string,
  wishDelete: PropTypes.func,
  price: PropTypes.number,
  wishGranted: PropTypes.bool
};

export default Wish;
