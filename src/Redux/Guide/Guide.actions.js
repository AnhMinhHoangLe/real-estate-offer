import guideActionType from "./Guide.types";
export const addGuide = (guide) => ({
	type: guideActionType.ADD_GUIDE,
	payload: guide,
});
export const removeGuide = (guide) => ({
	type: guideActionType.REMOVE_GUIDE,
	payload: guide,
});

