import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function Wish(props) {
  const [editing, setEditing] = useState(false);

  //handles the view/edit Mode for Wish Editing
  const handleEditing = () => {
    setEditing(!editing);
  };

  let wish_name = props.wish.wish_name;
  //Declare viewMode and editMode as empty object to hold the text and input fields for a wish
  let viewMode = {};
  let editMode = {};

  // If editing = true. Display the editing mode is editing=false display the view
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  //handle keyboard controls for editing Wish
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      setEditing(false);
    }
  };

  const handleUpdateWish = (e) => {
    e.target.value = '';
    props.updateWish(e.target.value, props.id);
  };
  return (
    <div className="wish" onDoubleClick={handleEditing}>
      <input
        type="checkbox"
        className="wish--completed"
        onChange={() => props.handleWishGrant(props.wish.id)}
        checked={props.wish.is_completed}
      />
      <p className="wish--title" style={viewMode}>
        {props.wish.wish_name}
      </p>
      <input
        type="text"
        style={editMode}
        value={wish_name}
        onChange={(e) => {
          handleUpdateWish(e);
        }}
        onKeyDown={handleUpdatedDone}
        className="wish--title"
      />
      <NumberFormat
        className="wish--price"
        value={props.wish.wish_price}
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
  updateWish: PropTypes.func,
  wish: PropTypes.object,
  handleWishGrant: PropTypes.func,
  id: PropTypes.string,
  wishDelete: PropTypes.func
};

export default Wish;
