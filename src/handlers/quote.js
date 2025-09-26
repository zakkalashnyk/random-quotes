import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = choseRandomQuotes(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { quoteText, quoteAuthor, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.textContent = quoteText;
  quoteAuthorElement.textContent = quoteAuthor;
  handleFavorite(isFavorite);
}

function choseRandomQuotes(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
