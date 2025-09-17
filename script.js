const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  { quote: "Less is more.", author: "Ludwig Mies van der Rohe" },
  { quote: "Fortune favors the bold.", author: "Virgil" },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { quote: "Knowledge is power.", author: "Francis Bacon" },
  { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
  { quote: "Time is money.", author: "Benjamin Franklin" },
  { quote: "Power tends to corrupt.", author: "Lord Acton" },
  {
    quote: "Life is short. Smile while you still have teeth.",
    author: "Unknown",
  },
  { quote: "Hope is a waking dream.", author: "Aristotle" },
  { quote: "Silence is golden.", author: "Proverb" },
  {
    quote: "Do it with passion or not at all.",
    author: "Rosa Nouchette Carey",
  },
  { quote: "Dream without fear. Love without limits.", author: "Unknown" },
  { quote: "Die with memories, not dreams.", author: "Unknown" },
  { quote: "Work hard. Stay humble.", author: "Unknown" },
  { quote: "Collect moments, not things.", author: "Unknown" },
  { quote: "No pressure, no diamonds.", author: "Thomas Carlyle" },
  { quote: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  { quote: "Do small things with great love.", author: "Mother Teresa" },
];

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
