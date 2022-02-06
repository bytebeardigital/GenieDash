import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './mini_card_module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

function MiniCardModule({ data, type, toggle }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="miniCard__module dash-wrapper">
      <div className="miniCard__module__inner">
        <AiOutlineClose onClick={toggle} className="miniCard__module--closebtn" />
        <div className="miniCard__module--header border-bottom pb-1">
          {type.toUpperCase() + 'S'}
        </div>
        <div className="money-list mt-4">
          {data.map((money, index) => {
            return (
              <div key={index} className="mb-3 d-flex justify-content-between align-items-center">
                <p className="money-name">{money.name}</p>
                <NumberFormat
                  value={money.price}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                  decimalScale={2}
                  className="price ms-2"
                  isNumericString={true}
                  fixedDecimalScale={true}
                  allowNegative={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

MiniCardModule.propTypes = {
  data: PropTypes.array,
  toggle: PropTypes.func,
  type: PropTypes.string
};

export default MiniCardModule;
