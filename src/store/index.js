import {createStore,applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import {counterReducer} from "./reducer/index";
import rootSaga from "./sagas/";

const rootReducer = combineReducers({
    counter : counterReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);