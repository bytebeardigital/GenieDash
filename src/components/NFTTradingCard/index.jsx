import React from 'react';
import './_nfttradingcard.scss';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

function NFTTradingCard({ data }) {
  const renderNFTImage = () => {
    if (data.meta.nft_type == 'gif') {
      return <img src={data.image} alt="" className="nft__image gif" width="75%" />;
    } else {
      return <img src={data.image} alt="" className="nft__image" />;
    }
  };
  return (
    <div className="dash-wrapper nft mb-3 d-flex">
      {renderNFTImage()}
      <div className="nft__meta">
        <p className="nft__meta-name">{data.meta.name}</p>
        <div className="nft__meta--data d-flex">
          <div className="eth d-flex">
            <span className="eth__icon--wrapper me-1">
              <FaEthereum className="eth__icon--icon" />
            </span>
            <p className="cryptoValue">{data.meta.value}</p>
          </div>
          <div className="nft__meta--data--likes d-flex">
            <FaHeart className="me-1" />
            <p className="like">{data.meta.likes}</p>
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
  data: PropTypes.object,
  image: PropTypes.string
};

export default NFTTradingCard;
