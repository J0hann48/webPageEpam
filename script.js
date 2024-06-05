document.getElementById('addBookForm').addEventListener('submit', addBook);

const books = [];

function addBook(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
    
    const book = {
        title: title,
        author: author,
        description: description
    };
    
    books.push(book);
    displayBooks(books);
    
    document.getElementById('addBookForm').reset();
}

function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    
    bookArray.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author}<br>${book.description}`;
        bookList.appendChild(bookItem);
    });
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filteredBooks);
}

function sortBooks() {
    books.sort((a, b) => a.title.localeCompare(b.title));
    displayBooks(books);
}