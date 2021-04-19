import axios from "axios";
import { GET_PRODUCT, SET_LOADING } from "../const/actiontypes";

//get product
export const getProducts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.get("/api/product/allproduct");

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//add product
export const addProduct = (newproduct) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/addproduct", newproduct);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

//delete product
export const deleteproduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/product/deleteproduct/${id}`);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

//edit product
export const editProduct = (id, updateproduct) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/product/editproduct/${id}`,
      updateproduct
    );
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
