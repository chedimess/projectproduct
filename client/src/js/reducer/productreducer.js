import { GET_PRODUCT, SET_LOADING } from "../const/actiontypes";

const initState = {
  products: [],
  isloading: false,
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, isloading: true };
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
        isloading: false,
      };
    default:
      return state;
  }
}
