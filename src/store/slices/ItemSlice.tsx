import { createSlice } from "@reduxjs/toolkit";

interface IData {
  data: {
    createdAt: string;
    description: string;
    image: string;
    name: string;
    price: string;
    updatedAt: string;
    category: string;
    _id: number;
  }[];
  search: {
    createdAt: string;
    description: string;
    image: string;
    name: string;
    price: string;
    category: string;
    updatedAt: string;
    _id: number;
  }[];
}
const initialState: IData = {
  data: [],
  search: [],
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.search = action.payload;
    },
    searchData: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addData, searchData } = lining.actions;
export default lining.reducer;
