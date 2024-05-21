const quotes = [
    "You are the love of my life.",
    "Every moment with you is a treasure.",
    "I fall in love with you more every day.",
    "You are my sunshine on a cloudy day.",
    "My heart belongs to you, now and forever.",
    "With you, my heart feels at home.",
    "You are my forever and always.",
    "I am so grateful to have you in my life.",
    "Your love completes me.",
    "You are the reason for my smile."
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('message').innerText = `❤️ ${quote} ❤️`;
}
