import {combineReducers} from "redux";

import userReducer from "./user/userReducer";
import gadgetReducer from "./gadget/gadgetReducer";

const rootReducer = combineReducers({
    users: userReducer,
    gadgets: gadgetReducer
});


export default rootReducer;
