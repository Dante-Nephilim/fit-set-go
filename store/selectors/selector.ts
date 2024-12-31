import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectWaterIntakeHistory = (state: RootState) => state.fitSetGo.waterHistoryData;
export const selectSleepDurationHistory = (state: RootState) => state.fitSetGo.sleepHistoryData;
export const selectBMIHistory = (state: RootState) => state.fitSetGo.bmiHistoryData;

export const selectWaterIntakeHistoryTotal = createSelector(selectWaterIntakeHistory, (waterIntakeHistory) => {
  return waterIntakeHistory.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);
});

export const selectSleepDurationHistoryTotal = createSelector(selectSleepDurationHistory, (sleepDurationHistory) => {
  return sleepDurationHistory.reduce((acc, current) => {
    return acc + current.duration;
  }, 0);
});
