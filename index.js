import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from "./src/handlers/quote.js";
import quotes from "./src/data/quotes.js";
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from "./src/handlers/favorites.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTE_KEY = "favoriteQuotes";
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
    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

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

function init() {
  const localStorageCurrentQuote = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (localStorageCurrentQuote) {
    displayQuote(localStorageCurrentQuote);
    const quote = findQuoteById(quotes, localStorageCurrentQuote.id);
    quote.isFavorite = localStorageCurrentQuote.isFavorite;
    currentQuote = quote;
  }

  const localStorageFavoriteQuotes = localStorageGetItem(FAVORITE_QUOTE_KEY);
  if (localStorageFavoriteQuotes) {
    localStorageFavoriteQuotes.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
    });
  }
}
window.addEventListener("load", init);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
