document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';
document.getElementById('book-numbers').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data
    searchField.value = '';

    // Handle empty search request
    if (searchText == '') {
        // please write something to display
        displayError();
    }
    else {
        // Display Spinner
        document.getElementById('spinner').style.display = 'block';
        // Hide error
        document.getElementById('error-message').style.display = 'none';
        // Hide book number
        document.getElementById('book-numbers').style.display = 'none';
        // Clear Search Result
        document.getElementById('search-result').textContent = '';
        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data));
    }
}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('book-numbers').style.display = 'none';
    document.getElementById('search-result').style.display = 'none';
}
// Display Search Result
const displaySearchResult = books => {
    document.getElementById('book-numbers').textContent = '';

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    const bookList = books.docs;
    // console.log(bookList);
    if (bookList === null) {
        displayError();
    }
    else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('book-numbers').style.display = 'block';
        document.getElementById('search-result').style.display = 'inline-flex';
        if (bookList.length !== 0) {
            document.getElementById('book-numbers').innerText = `${bookList.length} Books Found`;
        }
        else {
            document.getElementById('book-numbers').innerText = 'No Results Found';
        }

        // Retrieve each book and display in a card
        bookList.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div  class="card h-100 text-center shadow p-3 mb-5 bg-white rounded">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" onerror='this.src="broken_image.jpg"' class="w-50 h-50 mx-auto" alt="...">
                <div class="card-body">
                    <h5><span class="fw-bold text-primary">Book Name:</span> ${book.title ? book.title : 'N/a'} </h5>
                    <p><span class="fw-bold text-primary">Author:</span> ${book.author_name ? book.author_name[0] : book.author_name}</p>
                    <p><span class="fw-bold text-primary">Publisher:</span> ${book.publisher ? book.publisher[0] : book.publisher}</p>
                    <p><span class="fw-bold text-primary">First Publish:</span> ${book.publish_year ? book.publish_year[0] : book.publish_year}</p>
         
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}