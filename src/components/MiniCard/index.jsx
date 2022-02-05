import React from 'react';
import PropTypes from 'prop-types';

const MiniCard = ({ children, type, price }) => {
  return (
    <div className="miniCard" type={type}>
      <p className="miniCard__amt">{`$${price}`}</p>
      <p className="miniCard__title">{type}</p>
      <>{children}</>
    </div>
  );
};

MiniCard.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  price: PropTypes.number
};

export default MiniCard;
