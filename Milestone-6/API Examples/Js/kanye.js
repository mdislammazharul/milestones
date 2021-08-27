const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = data.quote;
}