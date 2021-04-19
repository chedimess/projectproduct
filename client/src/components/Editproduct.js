import React from "react";
import Formproduct from "./Formproduct";

function Editproduct(props) {
  return (
    <div>
      <Formproduct
        name={props.name}
        setName={props.setName}
        price={props.price}
        setPrice={props.setPrice}
        quantity={props.quantity}
        setQuantity={props.setQuantity}
        edit={props.edit}
        setEdit={props.setEdit}
        id={props.match.params.id}
      />
    </div>
  );
}

export default Editproduct;
