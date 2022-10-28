import { configureStore } from "@reduxjs/toolkit";
import { itemSliceReducer } from "./Features/textItem/item-slice";
/* import { textItemSliceReducer } from "./Features/Item/textItem-slice";
 */
export const store = configureStore({
  reducer: {
    item: itemSliceReducer,
    /*   textItem: textItemSliceReducer, */
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
