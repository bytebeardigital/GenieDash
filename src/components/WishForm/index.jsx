import React from 'react';
import PropTypes from 'prop-types';
import './wishform.scss';

function WishForm(props) {
  console.log(props);
  return (
    <div className="wishform">
      <form className="d-flex">
        <input className="mb-3 form-control wish_input me-3" type="text" placeholder="add wish" />
        <input className="mb-3 form-control wishprice_input" type="text" placeholder="add price" />
      </form>
      <button className="add_wish_button btn">Add Wish</button>
    </div>
  );
}

WishForm.propTypes = {
  props: PropTypes.any
};

export default WishForm;
