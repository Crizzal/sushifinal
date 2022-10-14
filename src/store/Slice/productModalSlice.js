import { createSlice } from "@reduxjs/toolkit";

const productModal = createSlice({
  name: "productModal",
  initialState: {
    isOpen: false,
    data: {},
    modalInfo: {
      title: "Edit Product",
      modalType: "edit",
    },
  },
  reducers: {
    setOpenModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setModalData: (state, action) => {
      state.data = action.payload;
    },
    setModalInfo: (state, action) => {
      state.modalInfo = action.payload;
    },
  },
});

export const { setOpenModal, setModalData, setModalInfo } =
  productModal.actions;

export default productModal.reducer;
