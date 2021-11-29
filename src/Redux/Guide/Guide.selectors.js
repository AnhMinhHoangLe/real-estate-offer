import { createSelector } from "reselect";

const selectguide = (state) => state.GuideList;

export const selectGuideItems = createSelector(
  [selectguide],
  (selectguide) => selectguide.GuideList
);
