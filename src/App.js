import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Sidebar from './components/Sidebar';
import MiniCard from './components/MiniCard';
import { v4 as uuidv4 } from 'uuid';
import Wish from './components/Wish';
import WishForm from './components/WishForm';
import PropTypes from 'prop-types';
import NFTTradingCard from './components/NFTTradingCard';
// import foxyNft from './assets/images/foxy-gif.gif';
// import nifyBear from './assets/images/nifty-bear.png';

const dataURL = 'https://my-json-server.typicode.com/bytebeardigital/GenieDash/db';

function App() {
  const [wishes, setWishes] = useState(null);
  const [finances, setFinances] = useState(null);
  const [collectables, setCollectables] = useState(null);
  // const [wishList, setWishList] = useState(wishes);

  useEffect(() => {
    axios.get(dataURL).then((response) => {
      setWishes(response.data.wishes);
      setFinances(response.data.money);
      setCollectables(response.data.collectables);
    });
  }, []);

  if (!wishes) return null;
  if (!finances) return null;

  //Handles Function Completed or incompleted
  const handleWishChange = (id) => {
    setWishes(
      wishes.map((wish) => {
        if (wish.id === id) {
          wish.is_completed = !wish.is_completed;
        }
        return wish;
      })
    );
    console.log('completed', id);
  };

  //Handle Rendering Wishes
  let handleWishList = wishes.map((wish, index) => {
    //Handle Delete Wishes
    const deleteWish = (id) => {
      setWishes(
        wishes.filter((wish) => {
          return wish.id !== id;
        })
      );
      // setWishes();
    };
    return (
      <Wish
        key={wish.id}
        wishTitle={wish.wish_name}
        price={wish.wish_price}
        index={index}
        wishDelete={deleteWish}
        wish={wish}
        wishGranted={wish.is_completed}
        handleWishGrant={handleWishChange}
      />
    );
  });

  //Add Wish to WishList
  const addWish = (wish) => {
    //copy of current WishList
    let currentWishList = wishes;

    //New Wish Created
    const newWish = {
      id: uuidv4(),
      wish_name: wish.wish_name,
      wish_price: wish.wish_price,
      is_favorite: false
    };
    setWishes((currentWishList = [...currentWishList, newWish]));
  };

  if (!collectables) return null;
  //render Collectables
  let renderCollectables = collectables.map((collectable) => {
    console.log(collectable.meta.nft_type);
    return (
      <div key={collectable.id} className="col-6 mb-3">
        <NFTTradingCard
          className="dash-wrapper"
          type="img"
          image={collectable.image}
          name="NifyBear #125"
          data={collectable}
          ethprice={0.0032}
          likecount={12}
        />
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col main-content">
          <div className="row flex-wrap">
            <div className="col-lg-6 col-xs-12">
              <div className="wishlist--form dash-wrapper mb-4">
                <h2 className="dash__heading">WishForm</h2>
                {!wishes ? null : <WishForm addWish={addWish} />}
              </div>

              <div className="collections--wrapper">
                {!collectables ? null : (
                  <div className="row nft-collection">{renderCollectables}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="wishlist--wrapper dash-wrapper">
                <h2 className="dash__heading">WishList</h2>
                {!wishes ? null : <div className="wishlist">{handleWishList}</div>}
              </div>
              {/** MINI CARD DECK */}
              {!finances ? null : (
                <div className="row cards-inner">
                  <div className="col-6 mb-3">
                    <MiniCard type="income" price={1200.43}></MiniCard>
                  </div>
                  <div className="col-6 mb-3">
                    <MiniCard type="Expenses" price={1200.43}></MiniCard>
                  </div>
                  <div className="col-6 mb-3">
                    <MiniCard type="ETH" price={1200.43}></MiniCard>
                  </div>
                  <div className="col-6 mb-3">
                    <MiniCard type="BIT" price={1200.43}></MiniCard>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
MiniCard.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  price: PropTypes.number
};

export default App;
