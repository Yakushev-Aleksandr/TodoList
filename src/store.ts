import { configureStore } from "@reduxjs/toolkit";
import { itemSliceReducer } from "./Features/textItem/item-slice";
/* import { dateSliceReducer } from "./Features/Date/date-slice"; */

export const store = configureStore({
  reducer: {
    item: itemSliceReducer,
    /* date: dateSliceReducer, */
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
