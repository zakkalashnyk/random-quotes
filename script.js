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
  toggleCollectionBtn.textContent = randomQuote.isFavorite
    ? "remove from collection"
    : "Add to collection";
  toggleCollectionBtn.style.display = "inline-block";
}
function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  // console.log(currentQuote);
  toggleCollectionBtn.textContent = currentQuote.isFavorite
    ? "remove from collection"
    : "Add to collection";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `<p>${currentQuote.quote}<p>
  <p class = "author">${currentQuote.author} </p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    //removes card if unfovorited
    const favoriteCard = document.querySelectorAll(".favorite-card");
    favoriteCard.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", generateRandomQuotes);
toggleCollectionBtn.addEventListener("click", toggleFavorite);
// generateRandomQuotes();
