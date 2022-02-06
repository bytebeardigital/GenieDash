import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './cryptocard.scss';

const COINBASE_BASE_URL = 'https://api.coingecko.com/api/v3/coins';

function CryptoCard() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    axios.get(COINBASE_BASE_URL).then((resp) => {
      setCryptoData(resp.data);
    });
  }, []);

  if (!cryptoData) return null;

  let cryptos = cryptoData.filter((symbol) => symbol.symbol == 'btc' || symbol.symbol == 'eth');

  function getCryptoType() {
    let cryptoCards = cryptos.map((crypto) => {
      let cryptoCurrent = crypto.market_data.current_price;
      let cryptoCurrentPrice;
      let cryptoUSDConvert;
      for (const key in cryptoCurrent) {
        if (crypto.symbol === key) {
          cryptoCurrentPrice = cryptoCurrent[key];
        }
        if (key === 'usd') {
          cryptoUSDConvert = cryptoCurrent[key];
        }
      }
      return (
        <div key={crypto.id} className="cryptoCard col mx-3">
          <div className="d-flex justify-space-between">
            <img src={crypto.image.thumb} alt="" className="cryptoCard__img me-1" />

            <div className="cryptoCard__meta d-flex flex-column w-100">
              <NumberFormat
                value={cryptoUSDConvert}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
                className="currentPrice h3 text-center"
              />
              <p className="usdPrice">
                {cryptoCurrentPrice} - {crypto.symbol.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return cryptoCards;
  }

  return (
    <>
      {getCryptoType()}
      {/* {cryptoData
        .filter((symbol) => symbol.symbol == 'btc' || symbol.symbol == 'eth')
        .map((crypto) => {
          return (
            <div key={crypto.id} className="cryptoCard col mx-3">
              <div className="d-flex small">
                <img src={crypto.image.thumb} alt="" className="crypto__img" />
                <p>{crypto.symbol}</p>
                <h2 className="text-center">{getCryptoType()}</h2>
              </div>
            </div>
          );
        })} */}
    </>
  );
}

export default CryptoCard;
