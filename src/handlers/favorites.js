import { currentQuote } from "../../index.js";
const favoriteBtn = document.getElementById("favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote));

hideBtn(favoriteBtn);

function toggleFavorite(quote) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
  } else {
    hideFavoriteCard(quote);
  }
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, btn) {
  btn.classList.toggle("fa", isFavorite);
  btn.classList.toggle("far", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${text}<p>
  <p class = "author">${author} </p>`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll(".favorite-card");
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(quote.text)) {
      card.remove();
    }
  });
}

export { handleFavorite };
