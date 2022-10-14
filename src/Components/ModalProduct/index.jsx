import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductApi from "../../Api/product";
import { setOpenModal } from "../../store/slice/productModalSlice";

function ModalProduct({ cb }) {
  const dispatch = useDispatch();
  const { isOpen, modalInfo, data } = useSelector(
    (state) => state.productModal
  );
  const productType = useSelector((state) => state.product.productTypes);

  const [selectedImage, setSelectedImage] = useState(data?.Image || "");
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState();
  const formRef = useRef();

  useEffect(() => {
    setForm(data);
  }, [data]);

  const onCloseModal = () => {
    dispatch(setOpenModal(false));
    formRef.current.reset();
    setSelectedImage("");
  };

  const onModalClick = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    for (let key in form) {
      formData.append(key, form[key]);
    }
    try {
      if (modalInfo.type === "edit") {
        const res = await ProductApi.updateProduct(data.PRO_ID, formData);
        if (res.data?.code === 200) {
          alert("Update success");
          cb();
          onCloseModal();
        }
      } else {
        const res = await ProductApi.createProduct(formData);
        if (res.data?.code === 200) {
          alert("Create success");
          cb();
          onCloseModal();
        }
      }
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div
      id="large-modal"
      tabIndex="-1"
      className={
        `overflow-y-auto overflow-x-hidden fixed top-10 left-32 z-50 w-full h-modal md:h-full` +
        (isOpen ? " block" : " hidden")
      }
    >
      <div className="relative p-4 w-full max-w-5xl h-full md:h-auto mx-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {modalInfo?.title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="large-modal"
              onClick={onCloseModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form action="#" method="POST" ref={formRef}>
              <div className="flex flex-wrap justify-between ">
                <div className="basis-[30%] max-w-[30%] mb-4 ">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    onChange={onInputChange}
                    required
                    id="Name"
                    name="Name"
                    defaultValue={data?.Name}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Code
                  </label>
                  <input
                    type="text"
                    onChange={onInputChange}
                    required
                    id="Code"
                    name="Code"
                    defaultValue={data?.Code}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="Price"
                    onChange={onInputChange}
                    required
                    name="Price"
                    defaultValue={data?.Price}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Unit"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Units
                  </label>
                  <input
                    type="text"
                    onChange={onInputChange}
                    required
                    id="Unit"
                    defaultValue={data?.Unit}
                    name="Unit"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    onChange={onInputChange}
                    required
                    id="Amount"
                    defaultValue={data?.Amount}
                    name="Amount"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="TYPE_ID"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Type Id
                  </label>
                  <select
                    onChange={onInputChange}
                    id="TYPE_ID"
                    value={form?.TYPE_ID || data?.TYPE_ID}
                    name="TYPE_ID"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {productType &&
                      productType?.map((item) => (
                        <option value={`${item.TYPE_ID}`} key={item.TYPE_ID}>
                          {item.Name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Materials"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Materials
                  </label>
                  <textarea
                    type="text"
                    onChange={onInputChange}
                    required
                    name="Materials"
                    defaultValue={data?.Materials || ""}
                    id="Materials"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    onChange={onInputChange}
                    required
                    name="Description"
                    defaultValue={data?.Description || ""}
                    id="Description"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="basis-[30%] max-w-[30%] mb-4">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Images:
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(event) => {
                      setSelectedFile(event.target.files[0]);
                      setSelectedImage(
                        URL.createObjectURL(event.target.files[0])
                      );
                    }}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="basis-[30%] max-w-[30%] mb-4">
                  <img src={`${selectedImage}`} alt="" />
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="large-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onModalClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalProduct;
