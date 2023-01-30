import React, { useState } from "react";
import LoginModal from "./LoginModal";

const ShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open MOdal</button>
      {showModal && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default ShowModal;
