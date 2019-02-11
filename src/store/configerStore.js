import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import taskReducer from "../reducers/tasks";

export default function configureStore(history) {
  return reduxCreateStore(
    combineReducers({
      // ルーティングのためのReducerとアプリケーションの(Stateを管理する)Reducerを合成する必要がある。
      // taskReducerをtaskというkeyに割り当てる
      tasks: taskReducer,
      // ルーティングのためのReducer
      router: routerReducer
    }),
    applyMiddleware(
      // Action経由でルーティングが制御できるようになる。
      // react-redux-routerのMiddleware
      routerMiddleware(history),
      logger,
      thunk
    )
  );
}
