import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";

export default function configureStore(history) {
  return reduxCreateStore(
    reducers,
    applyMiddleware(
      // Action経由でルーティングが制御できるようになる。
      // react-redux-routerのMiddleware
      routerMiddleware(history),
      logger,
      thunk
    )
  );
}
