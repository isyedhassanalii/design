// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/new1.png";
import basket from "../images/icon-basket.png";
import phone from "../images/fon.png";

const Header = () => {
  return (
    <header>
      <div class="header-part header-reduce sticky">
        <div class="header-top">
          <div class="container">
            <div class="header-top-inner">
              <div class="header-top-left" style={{ paddingTop: "10px" }}>
                <Link to="#" class="top-cell">
                  <img src={phone} alt="" />
                  <span>111-000-0101</span>
                </Link>
                <Link to="#" class="top-email">
                  <span>demo@hs-fulda.de</span>
                </Link>
              </div>
              <div class="header-top-right">
                <div class="social-round">
                  <ul>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-dribbble" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ border: "none" }}>
                        <i class="fa fa-google" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <div class="container">
            <div class="header-info">
              <div class="header-info-inner">
                <div class="shop-cart header-collect">
                  <Link to="/cart">
                    <img src={basket} alt="" />
                  </Link>
                  <div class="cart-wrap">
                    <div class="cart-blog">
                      <div class="cart-item">
                        <div class="cart-item-left">
                          <img src="" alt="" />
                        </div>
                        <div class="cart-item-right">
                          <h6>asdsad</h6>
                          <span>$ 23</span>
                        </div>
                      </div>

                      <div class="subtotal">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <h6>Subtotal :</h6>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <span>asdasd</span>
                        </div>
                      </div>
                      <div class="cart-btn">
                        <Link to="/cart" class="btn-black view">
                          VIEW ALL
                        </Link>
                        <Link to="/shipping" class="btn-main checkout">
                          CHECK OUT
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="book-table header-collect book-md">
                  <div class="language-menu">
                    <Link to="#" class="current-lang">
                      <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#signout">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                          LOG OUT
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link to="/signin">LOGIN</Link>
                </div>
              </div>
            </div>
            <div class="menu-icon">
              <Link to="#" class="hambarger">
                <span class="bar-1"></span>
                <span class="bar-2"></span>
                <span class="bar-3"></span>
              </Link>
            </div>

            <div class="menu-main">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                                    <Link to="/">Menu</Link>
                                </li> */}
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
