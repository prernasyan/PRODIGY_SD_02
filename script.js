
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const userGuessInput = document.getElementById('userGuess');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptCount = document.getElementById('attemptCount');


guessButton.addEventListener('click', () => {
    
    const userGuess = parseInt(userGuessInput.value);

    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (userGuess === targetNumber) {
            message.textContent = `Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`;
            guessButton.disabled = true;
        } else if (userGuess < targetNumber) {
            message.textContent = 'Try a higher number.';
        } else {
            message.textContent = 'Try a lower number.';
        }

        attemptCount.textContent = attempts;
    }

    userGuessInput.value = '';
});

