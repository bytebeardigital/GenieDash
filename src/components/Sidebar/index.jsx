import React from 'react';
import logo from '../../assets/images/headshot.jpeg';
import { BsHouse, BsCollection, BsListCheck } from 'react-icons/bs';
import { BiBitcoin } from 'react-icons/bi';
import { RiGameLine } from 'react-icons/ri';
import { GiMagicLamp } from 'react-icons/gi';
// import { MdDashboard } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="col-auto col-md-4 col-xl-2 px-sm-2 px-0 text-white sidebar">
      <div className="sidebar__inner px-3 pt-3">
        <div className="siderbar--heading text-center">
          <img src={logo} alt="" className="mb-2 userInfo__headshot" height="175" />
          <p className="userInfo--username" id="site_author">
            ByteBearDigi
          </p>
        </div>
        <div className="sidebar__navigation">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu">
            <li className="nav-item main-link">
              <a href="#" className="nav-link align-middle px-0 text-white">
                <BsHouse className="fas fa-home" />
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li className="main-link">
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 text-white align-middle">
                <GiMagicLamp className="far fa-gem" />
                <span className="ms-1 d-none d-sm-inline">Wishes</span>
              </a>
            </li>

            <li className="main-link">
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 text-white align-middle">
                <BsListCheck className="fas fa-list-ul" />
                <span className="ms-1 d-none d-sm-inline">Quests</span>
              </a>
            </li>
            <li className="main-link">
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 text-white align-middle">
                <BsCollection className="fas fa-book" />
                <span className="ms-1 d-none d-sm-inline">Collection</span>
              </a>
              <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                <li className="w-100 d-flex align-items-center">
                  <RiGameLine className="fas fa-cloud mx-2" />
                  <a href="#" className="nav-link px-0 text-white">
                    <span className="d-none d-sm-inline">NFTs</span>
                  </a>
                </li>
                <li className="w-100 d-flex align-items-center">
                  <BiBitcoin className="fab fa-bitcoin mx-2" />
                  <a href="#" className="nav-link px-0 text-white">
                    <span className="d-none d-sm-inline">Cryto</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-link">
              <a
                href="#submenu4"
                data-bs-toggle="collapse"
                className="nav-link text-white px-0 align-middle">
                <FaMoneyBillWave className="fas fa-wallet" />
                <span className="ms-1 d-none d-sm-inline">Money</span>
              </a>
              <ul className="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                <li className="w-100 d-flex align-items-center">
                  <a href="#" className="nav-link px-0 text-white">
                    <i className="fas fa-dollar-sign mx-2"></i>
                    <span className="d-none d-sm-inline">Income</span>
                  </a>
                </li>
                <li className="w-100 d-flex align-items-center">
                  <a href="#" className="nav-link px-0 text-white">
                    <i className="fas fa-hand-holding-usd mx-2"></i>
                    <span className="d-none d-sm-inline">Expenses</span>
                  </a>
                </li>
                <li className="w-100 d-flex align-items-center">
                  <a href="#" className="nav-link px-0 text-white">
                    <i className="far fa-bookmark mx-2"></i>
                    <span className="d-none d-sm-inline">Leftovers</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar__footer text-center">Footer here</div>
      </div>
    </div>
  );
}

export default Sidebar;
