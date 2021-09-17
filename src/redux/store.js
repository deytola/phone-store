import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const logger = createLogger();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;

