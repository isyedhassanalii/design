import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/new1.png";

const Footer = () => {
    return (
        <footer>
            <div
                class="footer-part wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
            >
                <div class="icon-default icon-dark">
                    <img src={logo} alt="" />
                </div>
                <div class="container">
                    <div class="footer-inner">
                        <div class="footer-info">
                            <h3>Foodology</h3>
                            <p>
                                This is the demo app for Building Web and Mobile
                                Apps.
                            </p>

                            <p>
                                <Link to="#">111-000-0101</Link>
                            </p>
                            <p>
                                <Link to="#">demo@hs-fulda.de</Link>
                            </p>
                        </div>
                    </div>
                    <div class="copy-right">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12 copyright-before">
                                <span>
                                    This is the demo app for Building Web and
                                    Mobile Apps.
                                </span>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 copyright-after">
                                <div class="social-round">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-facebook"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-twitter"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-instagram"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-pinterest"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-dribbble"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i
                                                    class="fa fa-google"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
