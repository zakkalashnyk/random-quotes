import quotes from "./quotes.js";

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
  toggleFavoriteIcon(randomQuote.isFavorite);
  toggleCollectionBtn.style.display = "inline-block";
}

function toggleFavoriteIcon(isFavorite) {
  toggleCollectionBtn.classList.toggle("fa", isFavorite);
  toggleCollectionBtn.classList.toggle("far", !isFavorite);
}
function showFavoriteCard(card) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${card.quote}<p>
  <p class = "author">${card.author} </p>`;
  favoritesContainer.appendChild(favoriteCard);
}
function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll(".favorite-card");
  console.log(favoriteCard);
  console.log(typeof favoriteCard);
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(quote.quote)) {
      card.remove();
    }
  });
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote);
  } else {
    hideFavoriteCard(currentQuote);
  }
}

generateBtn.addEventListener("click", generateRandomQuotes);
toggleCollectionBtn.addEventListener("click", toggleFavorite);
// generateRandomQuotes();
