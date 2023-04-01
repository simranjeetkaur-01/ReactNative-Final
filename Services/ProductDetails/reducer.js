const initialState = {
  data: null
};

function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT_DETAIL":
      return { ...state, data: action.data };

    default:
      return state;
  }
}

export default productDetailReducer;
