const jsBooks = ['A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort', 'Eloquent JavaScript: A Modern Introduction to Programming', 'JavaScript & JQuery: Interactive Front-End Web Development', 'JavaScript: The Good Parts', 'High-Performance Browser Networking', 'You Don’t Know JS', 'Beginning JavaScript', 'Composing Software'];

let jsNamedBook = [];

for (const book of jsBooks) {
    if (book.toLowerCase().includes('javascript')) {
        jsNamedBook.push(book);
    }
}

console.log(jsNamedBook);