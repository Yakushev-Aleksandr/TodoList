/* import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: string = "";

const textItemSlice = createSlice({
  name: "textItem",
  initialState,
  reducers: {
    addTextItem: (state, actions: PayloadAction<string>) => {
      return (state = actions.payload);
    },
    editTextItem: (state, actions: PayloadAction<string>) => {
      console.log(" _________________editTextItem_________________");
      return (state = actions.payload);
    },
  },
});

export const textItemSliceReducer = textItemSlice.reducer;
export const { editTextItem, addTextItem } = textItemSlice.actions;

export const selectTextItem = (state: RootState) => state.textItem; */
export {};
