import { BMIHistory } from "@/components/BMI-Tracker/BMI-Tracker";
import { SleepDurationHistory } from "@/components/Sleep-Tracker/Sleep-Tracker";
import { WaterIntakeHistory } from "@/components/Water-Tracker/Water-Tracker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const FIT_SET_GO_SLICE_NAME = "fitSetGo";

export type FitSetGoData = {
  waterHistoryData: WaterIntakeHistory[];
  sleepHistoryData: SleepDurationHistory[];
  bmiHistoryData: BMIHistory[];
};
const initialState: FitSetGoData = {
  waterHistoryData: [],
  sleepHistoryData: [],
  bmiHistoryData: [],
};

export const slice = createSlice({
  name: FIT_SET_GO_SLICE_NAME,
  initialState: initialState,
  reducers: {
    addWaterIntake: (state, action: PayloadAction<WaterIntakeHistory>) => {
      state.waterHistoryData = [...state.waterHistoryData, action.payload];
    },
    addSleepDuration: (state, action: PayloadAction<SleepDurationHistory>) => {
      state.sleepHistoryData = [...state.sleepHistoryData, action.payload];
    },
    addBMI: (state, action: PayloadAction<BMIHistory>) => {
      state.bmiHistoryData = [...state.bmiHistoryData, action.payload];
    },
  },
});

export const fitSetGoActions = slice.actions;
export const fitSetGoReducer = slice.reducer;
