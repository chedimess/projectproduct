import React from "react";
import Formproduct from "./Formproduct";

function Addproduct({ name, price, quantity, setName, setPrice, setQuantity }) {
  return (
    <div>
      <Formproduct
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default Addproduct;
