import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Productlist from "./components/Productlist";
import Addproduct from "./components/Addproduct";
import Editproduct from "./components/Editproduct";
import AppNavbar from "./components/AppNavbar";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Route
        exact
        path="/"
        render={() => (
          <Productlist
            setName={setName}
            setPrice={setPrice}
            setQuantity={setQuantity}
            setEdit={setEdit}
          />
        )}
      />

      <Route
        path="/product/add"
        render={() => (
          <Addproduct
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )}
      />

      <Route
        path="/product/edit/:id"
        render={(props) => (
          <Editproduct
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            quantity={quantity}
            setQuantity={setQuantity}
            edit={edit}
            setEdit={setEdit}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
