import React from "react";
import "./loginModal.css";

const LoginModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div>
          <img
            onClick={closeModal}
            className="cross"
            src="https://img.favpng.com/22/22/1/sign-symbol-x-mark-check-mark-christian-cross-png-favpng-evzDd9ey7UH7PgcrA7qYfr0ZW.jpg"
            alt=""
          />
        </div>
        <h2>asdsa</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora rerum consequuntur labore deleniti delectus minus, quo ab.
          Excepturi deserunt tenetur explicabo cupiditate adipisci ab et sit
          animi sapiente ipsam. Dignissimos modi quae, ipsa sint adipisci quod
          cupiditate amet ipsam, minima repudiandae accusantium explicabo earum
          voluptatibus sed deleniti corrupti esse aut possimus saepe dolore
          quidem fugit. Quam soluta incidunt suscipit.
        </p>
        <button className="modal-btn" onClick={closeModal}>
          close
        </button>
      </div>
    </>
  );
};

export default LoginModal;
