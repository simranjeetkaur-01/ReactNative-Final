import { FETCH_PRODUCT_LIST } from "./constants.js";

export const fetchProductList = () => {
  return (dispatch) => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        json && dispatch({ type: FETCH_PRODUCT_LIST, data: json });
        console.log(json[0].title + "api data");
        return json;
      })
      .catch((err) => console.log("Error with Fetch Product List Api" + err));
  };
};
