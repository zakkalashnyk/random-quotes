import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils/math.js";

function handleQuote(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = choseRandomQuotes(quotes);
  // check if id of random quote among the id's of favorite quotes
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  // Current quote will have data-current-quote-id HTML attribute
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}
function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

function choseRandomQuotes(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, displayQuote, findQuoteById };
