import { activeIndex } from "./activeIndex";
import { basicInfo } from "./basicInfoReducers";
import { combineReducers } from "redux";

const registerReducer = combineReducers({
	activeIndex: activeIndex,
	basicInfo : basicInfo
})

export default registerReducer;