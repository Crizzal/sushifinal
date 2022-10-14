import axiosClient from "./AxiosClient";

const productApiUrl = {
  getProducts: `/public/products`,
  getAllProducts: "/products",
  getProduct: (id) => `/products/${id}`,

  getTypes: "/public/product-types",
  getType: (id) => `/public/product-types/${id}`,
};

const ProductApi = {
  getAll: async () => {
    return await axiosClient.get(productApiUrl.getAllProducts);
  },
  getProducts: async (params) => {
    const convertParams = { ...params };
    if (convertParams.priceFrom === 0) delete convertParams.priceFrom;
    if (convertParams.priceTo === 0) delete convertParams.priceTo;

    return await axiosClient.get(productApiUrl.getProducts, {
      params: convertParams,
    });
  },
  getProductTypes: async () => {
    return await axiosClient.get(productApiUrl.getTypes);
  },
  getProduct: async (id) => {
    if (!id) throw new Error("Product id is required");
    return await axiosClient.get(productApiUrl.getProduct(id));
  },
  getProductType: async (id) => {
    if (!id) throw new Error("Product type id is required");
    return await axiosClient.get(productApiUrl.getType(id));
  },
};

export default ProductApi;
