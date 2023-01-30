import React, { useEffect, useState } from "react";
import detailImage from "../../images/img64.png";
import banner from "../../images/breadbg1.jpg";
import { Link } from "react-router-dom";
import scrollArrow from "../../images/scroll-arrow.png";

const RegisterPage = () => {
  return (
    <div class="main-part">
      <section
        class="breadcrumb-part"
        data-stellar-offset-parent="true"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div class="container">
          <div class="breadcrumb-inner">
            <h2> Register</h2>
            <Link to="#">Home</Link>
            <span>Shop</span>
          </div>
        </div>
      </section>

      <section class="home-icon login-register bg-skeen">
        <div class="icon-default icon-skeen">
          <img src={scrollArrow} alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div class="register-wrap form-common">
                <div class="title text-center">
                  <h3 class="text-coffee">Register</h3>
                </div>
                <form class="register-form" method="post" name="register">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="first_name"
                        placeholder="Enter your first name here"
                        required
                      />
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="last_name"
                        placeholder="Enter yourlast first name here"
                        required
                      />
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter email here"
                        required
                      />
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter gender here"
                        required
                      />
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter password here"
                        required
                      />
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter Confirm Password  here"
                        required
                      />
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="submit"
                        name="submit"
                        class="button-default button-default-submit"
                        value="RegIster now"
                      />
                    </div>
                  </div>
                </form>
                <p>
                  By clicking on “Register Now” button you are accepting the{" "}
                  <Link to="terms_condition.html">Terms &amp; Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
