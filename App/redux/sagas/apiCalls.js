export const fetchBooks = async (query="Design books") => {

    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        return data.items;
    } catch (e) {
        console.log(e);
    }
};

export const fetchRecentBooks = async () => {
    try {
        const recentBooks = await fetch("https://www.googleapis.com/books/v1/volumes?q='harry'&orderBy=newest");
        const data = await recentBooks.json();
        return data.items;
    } catch (e) {
        console.log(e);
    }
};
