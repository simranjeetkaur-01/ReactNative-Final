const initialState = {
  data: null
};

function productListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST":
      return { ...state, data: action.data };

    default:
      return state;
  }
}

export default productListReducer;
