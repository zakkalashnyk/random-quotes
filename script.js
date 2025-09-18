import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // option 1
  // const { quote, author} = randomQuote;
  // quoteElement.textContent = quote;
  // quoteAuthorElement.textContent = author;
  //
  // option 2
  // const { quote, author} = quotes[randomIndex];
  // quoteElement.textContent = quote;
  // quoteAuthorElement.textContent = author;

  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener("click", generateRandomQuotes);
// generateRandomQuotes();
