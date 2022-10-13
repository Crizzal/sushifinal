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
    return await axiosClient.get(productApiUrl.getProducts, { params });
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
