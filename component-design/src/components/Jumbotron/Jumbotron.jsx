import React from "react";
import "./index.css";

const Jumbotron = () => {
  return (
    <div class="jumbotron jumbo-picture">
      <div style={{ paddingTop: "10rem" }}>
        <h1>Prestwick Codes</h1>
        <p>And yes, you can change the background, colors, etc...</p>
        <p>Look at the code for this Jumbotron.</p>
        <button className="modal-btn">close</button>
      </div>
    </div>
  );
};

export default Jumbotron;
