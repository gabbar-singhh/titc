import Modal from "@/Components/Modal/Modal";
import React, { useState } from "react";

const test = () => {
  const [modalVal, setModalVal] = useState(false);

  const modalHandler = () => {
    setModalVal((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setModalVal(false);
  };
  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <button onClick={modalHandler}>below is a demo Modal</button>
      </div>
      <Modal showModalVal={modalVal} closeModalHandler={closeModalHandler} />
    </>
  );
};

export default test;
