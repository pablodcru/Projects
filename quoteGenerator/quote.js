const nextButton = document.querySelector('.next-quote');
const quoteText = document.querySelector('.text');
const quoteAuthor = document.querySelector('.author');
const container = document.querySelector('.container');


let apiQuotes = [];



//GET A RANDOM QUOTE
function newQuote() {
    quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author) {
        quoteAuthor.textContent = 'Pablo Dahl';
    }else {
        quoteAuthor.textContent = quote.author;
    }
    if(quote.text.length > 120) {
        quoteText.style.fontSize = "12px";
    }
    quoteText.textContent = quote.text;
}

//GET QUOTES FROM API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error) {

    }
}

//EVENT LISTENER
nextButton.addEventListener('click', newQuote);

getQuotes();





/*
async function fetchQuotes() {
    const quotes = [];
    try{
        const apiUrl = 'https://type.fit/api/quotes'
        const quotes = await response(apiUrl)
    }catch{
        console.log(error)
    }
}
*/
