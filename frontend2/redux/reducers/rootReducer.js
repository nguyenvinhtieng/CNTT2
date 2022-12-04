import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import stateReducer from "./stateReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    appState: stateReducer,
});

export default rootReducer;