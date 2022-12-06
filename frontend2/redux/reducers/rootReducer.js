import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import questionReducer from "./questionReducer";
import stateReducer from "./stateReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    questions: questionReducer,
    appState: stateReducer,
});

export default rootReducer;