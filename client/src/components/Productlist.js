import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import { getProducts, deleteproduct } from "../js/actions/productaction";

import "../App.css";

function Productlist({ setName, setPrice, setQuantity, setEdit }) {
  const products = useSelector((state) => state.productreducer.products);
  const isloading = useSelector((state) => state.productreducer.isloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { textAlign: "center", width: "100px" },
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { textAlign: "center", width: "100px" },
    },
    {
      dataField: "quantity",
      text: "quantity",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { textAlign: "center", width: "100px" },
    },
    {
      dataField: "",
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <div>
            <Link to={`/product/edit/${row._id}`}>
              <button
                className="btn btn-info btn-sm "
                onClick={() => getproductfield(row)}
              >
                <i className=" fas fa-pencil-alt"></i>
              </button>
            </Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => delelteproductt(row._id)}
            >
              <i className=" fas fa-trash"></i>
            </button>
          </div>
        );
      },
      style: { textAlign: "center" },
      headerStyle: { textAlign: "center", width: "100px" },
    },
  ];

  function delelteproductt(index) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteproduct(index));
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Product has been deleted",
          showConfirmButton: false,
          timer: 1100,
        });
      }
    });
  }

  const getproductfield = (text) => {
    let newprice = text.price.slice(0, -1);
    setName(text.name);
    setPrice(newprice);
    setQuantity(text.quantity);
    setEdit(true);
  };

  const defaultSorted = [
    {
      dataField: "_id",
      order: "asc",
    },
  ];
  const { SearchBar, ClearSearchButton } = Search;
  let table;
  if (isloading) {
    table = (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    table = (
      <ToolkitProvider
        bootstrap4
        keyField="_id"
        data={products}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <div className="text-center">
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
            </div>

            <BootstrapTable
              defaultSorted={defaultSorted}
              pagination={paginationFactory({
                sizePerPage: 5,
                showTotal: true,
              })}
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>
    );
  }
  return (
    <div className="container-tab-button">
      <Link to="/product/add">
        <button type="submit" className="btn btn-primary">
          +Add Product
        </button>
      </Link>
      {table}
    </div>
  );
}

export default Productlist;
