document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded');
});// Add an event listener to the paragraph
document.querySelector('p').addEventListener('mouseover', () => {
  // Change the text color on hover
  document.querySelector('p').style.color = '#007bff';
});

// Add an event listener to the paragraph
document.querySelector('p').addEventListener('mouseout', () => {
  // Change the text color back to default on hover out
  document.querySelector('p').style.color = '#333';
});

const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky"
  ];
  
  const quoteElement = document.getElementById("quote");
  const generateQuoteButton = document.getElementById("generate-quote");
  
  generateQuoteButton.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
  });gsap.to(".moving-object", {
    x: 100,
    y: 100,
    duration: 2,
    ease: "power2.inOut"
  });
  
  

