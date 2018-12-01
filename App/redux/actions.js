import { get_books, get_books_success, get_recent_books } from './actionTypes';


export const getBooks = (query) => ({
    type: get_books,
    query
});

export const getRecentBooks = () => ({
    type: get_recent_books
});


export const receivedBooks = books => {
    return {
        type: get_books_success,
        books
    }
}