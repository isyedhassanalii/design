import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <label>Newsletter</label>
        <br />
        <input
          type="email"
          name="newsletter"
          placeholder="Your Email Address"
        />
        <button class="btn btn_2">Subscribe</button>
      </div>
    </>
  );
};

export default Footer;
