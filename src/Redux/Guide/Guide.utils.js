export const addGuideToList = (GuideList, guideItemToAdd) => {
  return [...GuideList, { ...guideItemToAdd }];
};

export const removeGuideToList = (GuideList, idx) => {
  const removeItem = GuideList.splice(
    GuideList.findIndex((id) => id.id === idx),
    1
  );
  return removeItem;
};
