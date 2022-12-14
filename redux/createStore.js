import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddle from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

//
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddle();
export const middleware = [thunk, sagaMiddleware, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
