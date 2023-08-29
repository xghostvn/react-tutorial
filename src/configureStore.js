
import { connectRoutes } from "redux-first-router"
import routeMaps from "./routes/auth"
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from "./sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const {reducer, middleware} = connectRoutes(routeMaps)
    const rootReducer = combineReducers({
        location : reducer
    })
    const composeMiddleware = [middleware, sagaMiddleware]
    const middlewares = applyMiddleware(...composeMiddleware)   
  
    const store = createStore(rootReducer, middlewares)

    return store;
}


export default configureStore