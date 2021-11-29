import guideActionType from "./Guide.types";
import { addGuideToList, removeGuideToList } from "./Guide.utils";

const INITIAL_STATE = {
  GuideList: [
    {
      id: 0,
      buyerName: "Anh",
      propertyAddress: "2899",
      offeringPrice: "12000",
      status: "",
    },
  ],
};

const guideInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case guideActionType.ADD_GUIDE:
      return {
        ...state,
        GuideList: addGuideToList(state.GuideList, action.payload),
      };
    case guideActionType.REMOVE_GUIDE:
      return {
        ...state,
        GuideList: removeGuideToList(state.GuideList, action.payload),
      };
    default:
      return state;
  }
};
export default guideInfoReducer;
