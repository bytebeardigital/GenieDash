import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './wishform.scss';
import NumberFormat from 'react-number-format';

function WishForm({ addWish }) {
  const [inputValue, setInputValue] = useState({ wish_name: '', wish_price: 0 });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  }

  //handle for adding new Wish to WishList
  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.wish_name.trim()) {
      addWish(inputValue);
    } else {
      alert(`Enter a wish and it's price`);
    }
    setInputValue({
      wish_name: '',
      wish_price: 0
    });
  }

  return (
    <div className="wishform">
      <form className="d-flex">
        <input
          placeholder="Make a Wish"
          name="wish_name"
          className="mb-3 form-control wish_input me-3"
          value={inputValue.wish_name}
          onChange={handleChange}
        />
        <NumberFormat
          value={inputValue.wish_price}
          thousandSeparator={true}
          prefix="$"
          name="wish_price"
          className="mb-3 form-control wishprice_input"
          inputmode="numeric"
          onChange={handleChange}
        />
      </form>
      <button className="add_wish_button btn" onClick={handleSubmit}>
        Make a Wish
      </button>
    </div>
  );
}

WishForm.propTypes = {
  props: PropTypes.any,
  addWish: PropTypes.func
};

export default WishForm;
