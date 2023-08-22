
import { takeEvery, call, put, select, fork, takeLatest,all } from 'redux-saga/effects';

function* fetchContentGoogle ()  {
    console.log("fetch api google");
}

const selectRoutesMap = state => state.location.routesMap;

function* watchRouteSaga ()  {
    const routesMap = yield select(selectRoutesMap);
    console.log(Object.keys(routesMap))
    yield takeLatest(Object.keys(routesMap), function*(currentRoute) {
        console.log(currentRoute);
            yield fork(routesMap[currentRoute.type].saga)
    });
}



export default function* sagas() {
    console.log("running root saga")
    yield all([
        fork(watchRouteSaga),
    ]);
} 