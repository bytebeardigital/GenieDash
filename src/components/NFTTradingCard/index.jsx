import React from 'react';
import './_nfttradingcard.scss';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

function NFTTradingCard(props) {
  console.log(props);

  const renderNFTImage = () => {
    if (props.type == 'gif') {
      return <img src={props.image} alt="" className="nft__image gif" width="75%" />;
    } else {
      return <img src={props.image} alt="" className="nft__image" />;
    }
  };
  return (
    <div className="dash-wrapper nft mb-3 d-flex">
      {renderNFTImage()}
      <div className="nft__meta">
        <p className="nft__meta-name">Foxy Kawaii</p>
        <div className="nft__meta--data d-flex">
          <div className="eth d-flex">
            <span className="eth__icon--wrapper me-1">
              <FaEthereum className="eth__icon--icon" />
            </span>
            <p>0.01564</p>
          </div>
          <div className="nft__meta--data--likes d-flex">
            <FaHeart className="me-1" />
            <p className="like">22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

NFTTradingCard.propTypes = {
  props: PropTypes.any,
  type: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default NFTTradingCard;
