import axiosClient from "./AxiosClient";

const productApiUrl = {
  getProducts: `/public/products`,
  getAllProducts: "/products",
  getProduct: (id) => `/products/${id}`,
  createProduct: "/products",
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
  deleteProduct: async (id) => {
    if (!id) throw new Error("Product id is required");
    return await axiosClient.delete(productApiUrl.getProduct(id));
  },
  createProduct: async (data) => {
    return await axiosClient.postForm(productApiUrl.createProduct, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProduct: async (id, data) => {
    if (!id) throw new Error("Product id is required");
    return await axiosClient.post(productApiUrl.getProduct(id), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default ProductApi;
