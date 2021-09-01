import { combineReducers } from "redux";
import reducer from "./reducer/reducer";

// Reducer를 묶어주는 함수(확장성을 고려해 작성)
const rootReducer = combineReducers({ reducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
