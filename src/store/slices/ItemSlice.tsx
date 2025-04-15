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
}
const initialState: IData = {
  data: [],
  search: [],
  edit: [],
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.search = action.payload;
      state.edit = action.payload;
    },
    searchData: (state, action) => {
      state.search = action.payload;
    },

    editData: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { addData, searchData, editData } = lining.actions;
export default lining.reducer;
