import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import logger from "redux-logger";
// import { orders, burger } from "./reducer";
import { burger, orders } from "./reducer";
import createSagaMiddleware, { END } from "redux-saga";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ burger, orders });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    // composeEnhancers(applyMiddleware(sagaMiddleware, logger))
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducer", () => {
      const nextRootReducer = require("./reducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
