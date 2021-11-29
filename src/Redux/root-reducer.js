import { combineReducers } from "redux";
import guideInfoReducer from "./Guide/Guide.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["GuideList"],
};
const rootReducer = combineReducers({
  GuideList: guideInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
