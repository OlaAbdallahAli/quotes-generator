var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",

    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

var generateButton = document.getElementById("generateButton");

var quoteElement = document.getElementById("quote");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var currentIndex;
    do {
        quoteElement.textContent = quotes[randomIndex];
        currentIndex = randomIndex - 1;
        currentIndex++;
    } while (currentIndex !== randomIndex);
}