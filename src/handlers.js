function toggleFavoriteIcon(isFavorite, btn) {
  btn.classList.toggle("fa", isFavorite);
  btn.classList.toggle("far", !isFavorite);
}

function showFavoriteCard(card, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${card.quote}<p>
  <p class = "author">${card.author} </p>`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll(".favorite-card");
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(quote.quote)) {
      card.remove();
    }
  });
}
export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
