import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header class="brand-navigation">
      <div class="content">
        <img
          class="logo-nav"
          src="https://www.dropbox.com/s/7kkz40jze9bd756/Ehrenlos4.svg"
        />

        <nav>
          <ul class="navigation">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button class="button-dark">Keine Ahnung</button>
      </div>
    </header>
  );
};

export default Header;
