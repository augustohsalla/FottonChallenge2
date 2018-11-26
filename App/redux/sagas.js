import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga:  is a saga that watches for an action to be dispatched to the store, triggering a workerSaga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchBooks(query = 'design books') {
    return axios({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes?q=${query}`
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchBooks);
        const books = response.data.message;

        // dispatch a success action to the store with the new 
        yield put({ type: "API_CALL_SUCCESS", books });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}