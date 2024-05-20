const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const generateButton = document.getElementById('generate-btn');

const apiUrl = 'https://api.adviceslip.com/advice';
let adviceCount = 1; // Counter to keep track of advice number

function generateAdvice() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      adviceText.textContent = advice;
      adviceNumber.textContent = `Advice #${adviceCount}`; // Update advice number
      adviceCount++; // Increment counter for next advice
    })
    .catch(error => {
      adviceText.textContent = "Error fetching advice. Please try again later.";
    });
}

generateButton.addEventListener('click', generateAdvice);
