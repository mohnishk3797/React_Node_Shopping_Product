export default (apiUrl) => ({
  getProducts(query = '') {
    return fetch(`${apiUrl}/product/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  addProducts(payload) {
    return fetch(`${apiUrl}/product/`, {
      method: 'POST',
      body: payload,
    });
  },
  deleteProducts(id) {
    return fetch(`${apiUrl}/product/${id}`, {
      method: 'DELETE',
    });
  },
  updateProduct(id, payload) {
    return fetch(`${apiUrl}/product/${id}`, {
      method: 'PUT',
      body: payload,
    });
  },
});
