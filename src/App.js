import './App.scss';
import Sidebar from './components/Sidebar';
import MiniCard from './components/MiniCard';
import Wish from './components/Wish';
import WishForm from './components/WishForm';
import PropTypes from 'prop-types';
import NFTTradingCard from './components/NFTTradingCard';
import foxyNft from './assets/images/foxy-gif.gif';
import nifyBear from './assets/images/nifty-bear.png';

function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col main-content">
          <div className="row flex-wrap">
            <div className="col-lg-6 col-xs-12">
              <div className="wishlist--form dash-wrapper mb-4">
                <h2 className="dash__heading">WishForm</h2>
                <WishForm />
              </div>

              <div className="collections--wrapper">
                <div className="row nft-collection">
                  <div className="col-6 mb-3">
                    <NFTTradingCard
                      className="dash-wrapper"
                      type="gif"
                      image={foxyNft}
                      name="Foxy Kawaii"
                      ethprice={0.0093}
                      likecount={44}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <NFTTradingCard
                      className="dash-wrapper"
                      type="img"
                      image={nifyBear}
                      name="NifyBear #125"
                      ethprice={0.0032}
                      likecount={12}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="wishlist--wrapper dash-wrapper">
                <h2 className="dash__heading">WishList</h2>
                <div className="wishlist">
                  <Wish wishTitle="Samoyed Puppy" price={1000.24} wishGranted={false} />

                  <Wish wishTitle="Clownfish Aquarium" price={750.11} wishGranted={false} />

                  <Wish wishTitle="Japan (2 weeks)" price={5000.24} wishGranted={false} />
                  <Wish wishTitle="New Apartment" price={10000.24} wishGranted={true} />
                </div>
              </div>
              {/** MINI CARD DECK */}
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
