const API_SERVER = "http://localhost:8080";

export const getProducts = async () => {
  const response = await fetch(`${API_SERVER}/products`);
  const products = await response.json();
  return products;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_SERVER}/products/${id}`);
  const product = await response.json();
  return product;
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
