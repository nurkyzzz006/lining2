import { createSlice } from "@reduxjs/toolkit";
interface IProduct {
  createdAt: string;
  description: string;
  image: string;
  name: string;
  price: string;
  updatedAt: string;
  category: string;
  _id: number;
}
interface IData {
  data: IProduct[];
  search: IProduct[];
  edit: IProduct[];
  get: IProduct | null;
  expandedDescriptions: { [productId: string]: boolean };
}
const initialState: IData = {
  data: [],
  search: [],
  edit: [],
  get: null,
  expandedDescriptions: {},
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.search = action.payload;
      state.edit = action.payload;
      // state.get = action.payload;
    },
    searchData: (state, action) => {
      state.search = action.payload;
    },
    getProduct: (state, action) => {
      state.get = action.payload;
    },
    editData: (state, action) => {
      state.edit = action.payload;
    },
    toggleDescription: (state, action) => {
      const id = action.payload;
      state.expandedDescriptions[id] = !state.expandedDescriptions[id];
    },
  },
});

export const { addData, searchData, editData, getProduct, toggleDescription } =
  lining.actions;
export default lining.reducer;
