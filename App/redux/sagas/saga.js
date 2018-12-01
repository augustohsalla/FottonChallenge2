import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { get_books, get_books_success, get_recent_books, get_recent_books_success } from './../actionTypes';
import { fetchBooks, fetchRecentBooks } from './apiCalls';

function* getBooks(action) {
    const data = yield call(fetchBooks);
    yield put({ type: get_books_success, data })
}

function* getRecentBooks(action) {
    const data = yield call(fetchRecentBooks);
    yield put({ type: get_recent_books_success, data })
}

export default function* rootSaga() {
    yield [
        takeLatest(get_books, getBooks),
        takeLatest(get_recent_books, getRecentBooks)
    ];
}
