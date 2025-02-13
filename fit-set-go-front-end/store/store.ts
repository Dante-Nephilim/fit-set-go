import { configureStore } from "@reduxjs/toolkit";
import { FIT_SET_GO_SLICE_NAME, fitSetGoReducer } from "./slice/slice";

export const store = configureStore({
  reducer: {
    [FIT_SET_GO_SLICE_NAME]: fitSetGoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
