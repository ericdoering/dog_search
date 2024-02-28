import { configureStore, combineReducers, compose } from '@reduxjs/toolkit';
import appReducer from './app';

export interface RootState {
  app: ReturnType<typeof appReducer>;
}

const reducers = combineReducers({
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
};

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  ((func: any) => func);

const store = configureStore({
  reducer: reducers, 
  devTools: composeEnhancers({})
});

export default store;
