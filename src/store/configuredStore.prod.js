import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducer";

import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
