import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addProduct, editProduct } from "../js/actions/productaction";

function Formproduct({
  name,
  price,
  quantity,
  setName,
  setPrice,
  setQuantity,
  edit,
  setEdit,
  id,
}) {
  const [nameError, setNameError] = useState("");

  const [priceError, setPriceError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const validate = () => {
    let nameError = "";
    let priceError = "";
    let quantityError = "";
    //valid name
    if (!name || name.includes(" ")) {
      nameError = "Name is required";
    }
    //valid price
    if (!price || price.includes(" ")) {
      priceError = "Price is required";
    }

    if (isNaN(price)) {
      priceError = "Pleaze type a number";
    }
    if (!quantity || quantity.toString().includes(" ")) {
      //valid tarif
      quantityError = "quantity is required";
    }
    if (isNaN(quantity)) {
      quantityError = "Pleaze type a number";
    }

    if (nameError || priceError || quantityError) {
      setNameError(nameError);
      setPriceError(priceError);
      setQuantityError(quantityError);

      return false;
    }
    return true;
  };

  const addProductt = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      dispatch(addProduct({ name, price, quantity }));
      setName("");
      setPrice("");
      setQuantity("");
      history.push("/");
    }
  };
  const editProductt = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      dispatch(editProduct(id, { name, price, quantity }));
      setName("");
      setPrice("");
      setQuantity("");
      setEdit(false);
      history.push("/");
    }
  };
  const resetproduct = () => {
    if (edit) {
      setEdit(false);
    }
    setName("");
    setPrice("");
    setQuantity("");
    history.push("/");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header"></section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-6">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Product Form</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        placeholder="enter name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div style={{ fontSize: "12", color: "red" }}>
                        {nameError}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        value={price}
                        placeholder="enter price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <div style={{ fontSize: "12", color: "red" }}>
                        {priceError}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        value={quantity}
                        placeholder="Enter quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <div style={{ fontSize: "12", color: "red" }}>
                        {quantityError}
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={edit ? editProductt : addProductt}
                    >
                      Submit
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginLeft: "10px" }}
                      onClick={resetproduct}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default Formproduct;
