import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import NumberFormat from 'react-number-format';
import { motion, AnimatePresence } from 'framer-motion';

import MiniCardModule from '../MiniCardModule';
import './mintcard.scss';

const MiniCard = ({ children, type, price, modData }) => {
  const [showModule, setShowModule] = useState(false);

  const toggleModule = () => {
    if (showModule) {
      setShowModule(!showModule);
    }
  };

  function capializeTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="miniCard__outer" onClick={() => toggleModule()}>
      <AnimatePresence>
        {showModule && (
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }}>
            <MiniCardModule data={modData} type={type} toggle={toggleModule} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="miniCard" type={type}>
        {type !== 'expense' && type !== 'income' ? null : (
          <button className="showModule" onClick={() => setShowModule(!showModule)}>
            <BsThreeDots />
          </button>
        )}
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator={true}
          prefix="$"
          decimalScale={2}
          className="miniCard__amt"
          isNumericString={true}
          fixedDecimalScale={true}
          allowNegative={true}
        />
        <p className="miniCard__title mt-1">{capializeTitle(type)}</p>
        <>{children}</>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  price: PropTypes.number,
  modData: PropTypes.array
};

export default MiniCard;
