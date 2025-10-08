import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils/math.js";

function getRandomQuote() {
  // return some quote from source
  return { ...quotes[generateRandomInt(quotes.length)] };
  //   const randomIndex = generateRandomInt(quotes.length);
  //   const randomQuote = { ...quotes[randomIndex] };
  //   return randomQuote;
}

export { getRandomQuote };
