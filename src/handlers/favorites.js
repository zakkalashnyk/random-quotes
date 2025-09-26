import { favoriteBtn } from "../../index.js";

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(text, author, container);
  } else {
    hideFavoriteCard(text);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, btn) {
  btn.classList.toggle("fa", isFavorite);
  btn.classList.toggle("far", !isFavorite);
}

function showFavoriteBtn(btn) {
  btn.style.display = "inline-block";
}

function hideFavoriteBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${text}<p>
  <p class = "author">${author} </p>`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCard = document.querySelectorAll(".favorite-card");
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
