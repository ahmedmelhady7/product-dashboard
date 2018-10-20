import productService from '../../services/products';

export const productConstants = {
  PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE'
};

const fetchAllProducts = () => {
  return dispatch => {
    dispatch(request());
    productService.fetchAllProducts().then(
      products => {
        dispatch(success(products));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
};

const filterProducts = (filters) => {
  return dispatch => {
    dispatch(request());
    productService.filterProducts(filters).then(
      products => {
        dispatch(success(products));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
};

const request = () => ({
  type: productConstants.PRODUCTS_REQUEST,
});

const success = products => ({
  type: productConstants.PRODUCTS_SUCCESS,
  products
});

const failure = error => ({
  type: productConstants.PRODUCTS_FAILURE,
  error
});

export const productActions = { fetchAllProducts, filterProducts };

const initialState = {
  loading: false,
  products: []
};

export function products(state = initialState, action) {
  switch (action.type) {
    case productConstants.PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.products
      };
    case productConstants.PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
