import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IItem {
  id: number;
  todo: string;
  completed: boolean;
  date: string;
}

const initialState: IItem[] = [];

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<IItem>) => {
      state.push(actions.payload);
    },

    editItem: (state, actions: PayloadAction<{ id: number; todo: string }>) => {
      state.find((item): number | string | undefined =>
        item.id === actions.payload.id ? (item.todo = actions.payload.todo) : ""
      );
    },
    deleteItem: (state, actions: PayloadAction<IItem>) => {
      return state.filter((todo) => actions.payload.id !== todo.id);
    },
    completeItem: (
      state,
      actions: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      state.find((item): boolean | "" =>
        item.id === actions.payload.id
          ? (item.completed = !actions.payload.completed)
          : ""
      );
    },
  },
});

export const itemSliceReducer = itemSlice.reducer;
export const { addItem, deleteItem, completeItem, editItem } =
  itemSlice.actions;

export const selectItem = (state: RootState) => state.item;
