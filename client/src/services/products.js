const API_URL = 'http://127.0.0.1:3000';

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const fetchAllProducts = () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${API_URL}/products`, requestOptions)
    .then(handleResponse)
    .then(products => products);
};

const filterProducts = ({ search, category, price, brand }) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let queryParams = (search || category || price || brand) ? '?' : '';
  if(search) {
    queryParams += queryParams=== '?' ? `search=${search}` : `&search=${search}`;
  }
  if(category) {
    queryParams += queryParams=== '?' ? `category=${category}` : `&category=${category}`;
  }
  if(brand) {
    queryParams += queryParams=== '?' ? `brand=${brand}` : `&brand=${brand}`;
  }
  if(price) {
    queryParams += queryParams=== '?' ? `price[min]=${price.min}&price[max]=${price.max}` : `&price[min]=${price.min}&price[max]=${price.max}`;
  }
  return fetch(`${API_URL}/products${queryParams}`, requestOptions)
    .then(handleResponse)
    .then(products => products);
};

export default { fetchAllProducts, filterProducts };
