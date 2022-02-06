import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Sidebar from './components/Sidebar';
import MiniCard from './components/MiniCard';
import { v4 as uuidv4 } from 'uuid';
import Wish from './components/Wish';
import WishForm from './components/WishForm';
import PropTypes from 'prop-types';
import CryptoCard from './components/CryptoCard';
import NFTTradingCard from './components/NFTTradingCard';

const dataURL = 'https://my-json-server.typicode.com/bytebeardigital/GenieDash/db';
function App() {
  const [allData, setAllData] = useState([]);
  const [wishes, setWishes] = useState(() => {
    const savedWishes = localStorage.getItem('wishes');

    if (savedWishes) {
      return JSON.parse(savedWishes);
    } else {
      return [];
    }
  });
  const [finances, setFinances] = useState(null);
  const [collectables, setCollectables] = useState(null);

  useEffect(() => {
    axios.get(dataURL).then((response) => {
      setAllData(response.data);
      setWishes(response.data.wishes);
      localStorage.setItem('wishes', JSON.stringify(wishes));

      setFinances(response.data.money);
      setCollectables(response.data.collectables);
    });
  }, []);

  console.log(allData);
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
    localStorage.setItem('wishes', JSON.stringify(wishes));
  };
  //handle Updating Wish in WishList
  function setUpdate(updatedTitle, id) {
    setWishes(
      wishes.map((wish) => {
        if (wish.id === id) {
          wish.wish_name = updatedTitle;
        }
        return wish;
      })
    );
  }

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
        index={index}
        wish={wish}
        wishDelete={deleteWish}
        handleWishGrant={handleWishChange}
        updateWish={setUpdate}
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
  let renderCollectables = collectables.slice(0, 3).map((collectable) => {
    return (
      <div key={collectable.id} className="col-4">
        <NFTTradingCard
          className="dash-wrapper mb-3"
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

  const handleFinanceCards = () => {
    //clone finance data
    let financeData = finances;

    //Income Data
    let incomeData = financeData.filter((money) => money.type == 'income');
    let incomeTotal = 0;
    let incomeIndex;

    //Sum Income Totals
    for (incomeIndex = 0; incomeIndex < incomeData.length; incomeIndex++) {
      incomeTotal = incomeData[incomeIndex].price + incomeTotal;
    }

    //Expense Data
    let expenseData = financeData.filter((money) => money.type == 'expense');
    let expenseTotal = 0;
    let expenseIndex;

    //Sum Expense Totals
    for (expenseIndex = 0; expenseIndex < expenseData.length; expenseIndex++) {
      expenseTotal = expenseData[expenseIndex].price + expenseTotal;
    }

    //Income MiniCard
    let incomeMiniCard = (
      <div className="col-6 mb-3">
        <MiniCard type="income" price={incomeTotal} modData={incomeData}></MiniCard>
      </div>
    );

    //Expense MiniCard
    let expenseMiniCard = (
      <div className="col-6 mb-3">
        <MiniCard type="expense" price={expenseTotal} modData={expenseData}></MiniCard>
      </div>
    );

    return [incomeMiniCard, expenseMiniCard];
  };

  return (
    <div className="container-fluid">
      <div className="row site-wrap">
        <Sidebar />
        <div className="col-sm-12 col-md-9 col-lg-10 main-content">
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
                  {handleFinanceCards()}

                  <CryptoCard />
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
