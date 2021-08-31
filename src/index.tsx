import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { TodoPage } from "./pages";
import GlobalStyle from "./styles/GlobalStyles";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import rootReducer from "./store";
import rootSaga from "./sagas/indes";

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <TodoPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
