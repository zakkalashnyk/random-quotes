import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from "./src/handlers/quote.js";
import quotes from "./src/data/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";

let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;
    // change local storage favoriteQuotes
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem("favoriteQuotes", favoriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem("currentQuote", currentQuote);
}

function init() {
  const localStorageCurrentQuote = localStorageGetItem("currentQuote");
  if (localStorageCurrentQuote) {
    displayQuote(localStorageCurrentQuote);
    const quote = findQuoteById(quotes, localStorageCurrentQuote.id);
    quote.isFavorite = localStorageCurrentQuote.isFavorite;
    currentQuote = quote;
  }
}
window.addEventListener("load", init);

const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    quoteFavoriteBtn,
    favoritesContainer
  )
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
