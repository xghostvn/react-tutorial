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


const UniversalComponent = universal(props => {
   return import(`./layouts/${props.currentRoute.component}/index.js`)
});


const RootRoute = connect(state => {
  let routeType = state.location.type;
  let routeMap = state.location.routesMap;
  let currentRoute = routeMap[routeType]

  return {
    currentRoute
  }
})(UniversalComponent)


const App = () => {
  const dispatch = useDispatch();
  return (
    <RootRoute></RootRoute>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root"))


