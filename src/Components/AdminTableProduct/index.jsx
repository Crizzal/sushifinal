import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import ProductApi from "../../Api/product";
import {
  setModalData,
  setModalInfo,
  setOpenModal,
} from "../../store/slice/productModalSlice";
import { fetchProductTypes } from "../../store/slice/productSlice";
import { formatCurrency } from "../../ultils/format";
import ModalProduct from "../ModalProduct";

async function fetchProduct(page, setProducts) {
  try {
    const response = await ProductApi.getProducts({ page });
    setProducts(response.data?.data);
  } catch (error) {}
}

function AdminTableProduct() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefesh] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct(page, setProducts);
    dispatch(fetchProductTypes());
  }, [dispatch, page]);

  useEffect(() => {
    fetchProduct(page, setProducts);
  }, [refresh, page]);

  const onItemDetele = async (id) => {
    const confirm = window.confirm("Do you want to delete this item?");
    if (confirm && id) {
      try {
        const res = await ProductApi.deleteProduct(id);
        if (res.data?.code === 200) {
          setRefesh(refresh + 1);
          alert("Delete success");
        }
      } catch (error) {}
    }
  };

  const onPageChange = (currentPage) => {
    setPage(currentPage + 1);
  };

  const onEditProduct = (product) => {
    if (product) {
      dispatch(setOpenModal(true));
      dispatch(setModalData(product));
      dispatch(setModalInfo({ title: "Edit Product", type: "edit" }));
    }
  };
  const onSaveSuccess = () => {
    setRefesh(refresh + 1);
  };

  const onCreateProduct = () => {
    dispatch(setOpenModal(true));
    dispatch(setModalData({}));
    dispatch(setModalInfo({ title: "Create Product", type: "create" }));
  };

  return (
    <>
      <div className="mb-4">
        <button
          className="text-white bg-blue-500 outline-none border-0 px-4 py-2 rounded-lg font-semibold hover:opacity-75"
          onClick={onCreateProduct}
        >
          Create Product
        </button>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Number
              </th>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Price</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Category</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Rating</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Status</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              {products &&
                products?.items?.map((product, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={product.Code}
                  >
                    <th className="py-4 px-6">{index + 1}</th>
                    <td className="font-medium py-4 px-6  text-gray-900 whitespace-nowrap">
                      {product?.Name}
                    </td>

                    <td className="py-4 px-6">
                      {formatCurrency(product.Price)}
                    </td>
                    <td className="py-4 px-6">{product.product_type.Name}</td>
                    <td className="py-4 px-6">{product?.Votes}</td>
                    <td className="py-4 px-6">
                      {product?.is_show == 0 ? "In Active" : "Active"}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex space-x-8">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => {
                            onEditProduct(product);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                          onClick={() => {
                            onItemDetele(product.PRO_ID);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </>
          </tbody>
        </table>
        <div className="flex justify-end my-4 mx-4">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            pageRangeDisplayed={1}
            onPageChange={({ selected }) => {
              onPageChange(selected);
            }}
            pageCount={products?.last_page}
            previousLabel="<"
            renderOnZeroPageCount={null}
            activeClassName={"pagination-active"}
            containerClassName={"flex list-none pagination gap-3"}
          />
        </div>
        <ModalProduct cb={onSaveSuccess} />
      </div>
    </>
  );
}

export default AdminTableProduct;
