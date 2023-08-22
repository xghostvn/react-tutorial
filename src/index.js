// Cài đặt các thư viện
// npm install redux redux-first-router react-redux

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRoutes, NOT_FOUND } from 'redux-first-router';
import { Provider, connect, useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import routeMaps from './routes/auth';
import rootSaga from "./sagas/index"

import universal from 'react-universal-component';
import { Button } from 'bootstrap';

import configureStore from "./configureStore"

const store = configureStore()

function* triggerSaga() {

  yield put({type : "HAHA"})
}


const App = () => {

  const dispatch = useDispatch();
  return (
    <div>   
       <button onClick={() => {
            dispatch({type : "HOME_PAGE"})
        }}>
       Action
     </button>
  
    </div>

  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root"))


