import { take, call, put } from 'redux-saga/effects';
import { fetchBooks } from './apiCalls';
import { get_books_success, get_books, get_books_failure } from '../actionTypes';

export default function* getBooks() {
    try {
        const response = yield call(fetchBooks);
        yield take(get_books);
        yield put({ type: get_books_success, books });
    } catch (error) {
        yield put({ type: get_books_failure, error });
    }
}
