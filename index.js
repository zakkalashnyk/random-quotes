import quotes from "./src/quotes.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from "./src/handlers.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleCollectionBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuotes() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleCollectionBtn);
  toggleCollectionBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleCollectionBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote);
  }
}

generateBtn.addEventListener("click", generateRandomQuotes);
toggleCollectionBtn.addEventListener("click", toggleFavorite);
// generateRandomQuotes();
