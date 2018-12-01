import { call, call_success, call_failure, get_books, get_books_failure, get_books_success, get_books_loaded, get_recent_books, get_recent_books_success, get_recent_books_failure } from './../actionTypes';
const initialState = {
    fetching: false,
    books: null,
    error: null
};
export default bookReducer = (state = {}, action) => {
    switch (action.type) {
        case get_books:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case get_books_success:
            return {
                ...state,
                fetching: false,
                books: action.data
            };

        case get_books_failure:
            return {
                ...state,
                fetching: false,
                book: null,
                error: action.error
            };
        case get_recent_books:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case get_recent_books_success:
            return {
                ...state,
                fetching: false,
                recentBooks: action.data
            };

        case get_recent_books_failure:
            return {
                ...state,
                fetching: false,
                book: null,
                error: action.error
            };
        default:
            return state;
    }
}