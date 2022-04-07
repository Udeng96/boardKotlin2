import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import rootSaga from "./pages/saga/rootSaga";
import rootReducer from "./pages/reducer/rootReducer";
import {Provider} from "react-redux";
import Root from "./pages/component/root"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Root/>
      </Provider>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
