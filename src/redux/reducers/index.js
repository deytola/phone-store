import {combineReducers} from "redux";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    users: userReducer,
});


export default rootReducer;
