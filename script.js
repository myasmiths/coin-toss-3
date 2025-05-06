document.addEventListener('DOMContentLoaded', () => {
    const headsButton = document.getElementById('heads');
    const tailsButton = document.getElementById('tails');
    const guessDisplay = document.getElementById('guess');
    const coinResultDisplay = document.getElementById('coin-result');
    const gameResultDisplay = document.getElementById('game-result');

    // Function to simulate a coin flip
    const flipCoin = () => Math.random() < 0.5 ? 'Heads' : 'Tails';

    // Function to play the game
    const playGame = (playerGuess) => {
        const coinResult = flipCoin();
        guessDisplay.textContent = playerGuess;
        coinResultDisplay.textContent = coinResult;
        gameResultDisplay.textContent = playerGuess === coinResult ? 'Win!' : 'Loss!';
    };

    // Add event listeners to the buttons
    headsButton.addEventListener('click', () => playGame('Heads'));
    tailsButton.addEventListener('click', () => playGame('Tails'));
});