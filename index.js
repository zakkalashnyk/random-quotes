import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  removeFavoriteCard,
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  showFavoriteBtn,
} from "./src/handlers/favorites.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuote.js";
import { removeObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTE_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuote = null;
const favoriteQuotes = [];

function removeFavoriteQuote(id) {
  //REMOVE FAVORITE QUOTE
  if (id === currentQuote.id) {
    //Removing from favorites current quote by clicking on the card Remove button
    toggleCurrentQuote();
  } else {
    // removing from favorites quote(not current) by clicking on the card Remove button
    //sync app state by removing quote from favoritesQuotes array in localStorage
    removeObjectFromArrayById(favoriteQuotes, id);
    // remove favorite card from UI
    removeFavoriteCard(id);
  }
  // save favorite quotes to localStorage
  localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
}
// THE WAY TO FOUND CURRENT QUOTE IN HTML BY ID
// const currentQuote = document.querySelector("[data-current-quote-id]");
// const currentQuoteId = currentQuote.dataset.currentQuoteId;

function toggleCurrentQuote() {
  //CURRENT QUOTE UPDATE
  // sync app state and toggle isFavorite of the current quote
  currentQuote.isFavorite = !currentQuote.isFavorite;
  //update UI by toggling favorite icon(no need to display current quote)
  showFavoriteBtn(currentQuote.isFavorite);
  // save current quote to localStorage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  // FAVORITES QUOTES UPDATE
  // sync app state and update favoritesQuotes array
  // if isFavorite became true we add this quote to array as a new object({...currentQuote})
  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } //else(if isFavorite false) we deleting this object from array favoritesQuotes
  else {
    removeObjectFromArrayById(favoriteQuotes, currentQuote.id);
  }
  // update UI by showing/removing favorite card
  toggleFavoriteCard(currentQuote, favoritesContainer);

  // save favorite quotes to localStorage
  localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
}

function setCurrentQuote(quote) {
  //SET CURRENT QUOTE WHEN LOADED FROM LOCAL STORAGE OR RECEIVED RANDOMLY
  //cahnge app state and write copy of the quote to the current quote
  currentQuote = { ...quote };
  //check if id of currentQuote is among [favoritequotes]. if so change isFavorite to true
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id
  );
  // show current quote in UI
  displayCurrentQuote(currentQuote);
  // display favorite icon and change it state
  showFavoriteBtn(currentQuote.isFavorite);
  // save current quote to localStorage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);
// expecting new random quote in {id, text,} format
randomQuoteBtn.addEventListener("click", () =>
  setCurrentQuote(getRandomQuote())
);

function init() {
  const localStorageFavoriteQuotes = localStorageGetItem(FAVORITE_QUOTE_KEY);
  if (localStorageFavoriteQuotes) {
    localStorageFavoriteQuotes.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }

  const localStorageCurrentQuote = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (localStorageCurrentQuote) {
    setCurrentQuote(localStorageCurrentQuote);
  }
}
window.addEventListener("load", init);

export { quoteFavoriteBtn, removeFavoriteQuote };
