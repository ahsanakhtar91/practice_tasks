import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunkMiddleware from "redux-thunk";

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

export const initializeStore = (initialState = {}): any => {
  const middleWare = bindMiddleware([thunkMiddleware]);
  const store = createStore(rootReducer, initialState, middleWare);
  return store;
};
