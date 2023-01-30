import React from "react";
import "./button.css";

const Button = () => {
  return (
    <>
      <h1 class="testDiv hide ta-c pop1">Come back soon!</h1>

      <div class="ta-c padT150 padB150">
        <button class="button cancel-btn" onclick="addAnimation()">
          Cancel
        </button>
        <button class="button accept-btn" onclick="addAnimation2()">
          Accept
        </button>
      </div>

      <h1 class="testDiv2 hide ta-c pop2">Thank you!</h1>
    </>
  );
};

export default Button;
