import { FETCH_PRODUCT_DETAIL } from "./constants.js";

export const fetchProductDetail = (id) => {
  return (dispatch) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        json && dispatch({ type: FETCH_PRODUCT_DETAIL, data: json });
        console.log(json.description + "api data");
        return json;
      })
      .catch((err) => console.log("Error with Fetch Product Detail Api" + err));
  };
};
