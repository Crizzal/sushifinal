const filterProducts = (products, filters) => {
  const { category } = filters;
  const filteredProducts = products.filter(
    (product) => product.TYPE_ID === category
  );
  return filteredProducts;
};

export { filterProducts };
