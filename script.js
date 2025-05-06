document.addEventListener('DOMContentLoaded', () => {
    const headsButton = document.getElementById('heads');
    const tailsButton = document.getElementById('tails');
    const guessDisplay = document.getElementById('guess');
    const coinResultDisplay = document.getElementById('coin-result');
    const gameResultDisplay = document.getElementById('game-result');

    const flipCoin = () => Math.random() < 0.5 ? 'Heads' : 'Tails';

    const playGame = (playerGuess) => {
        const coinResult = flipCoin();
        guessDisplay.textContent = playerGuess;
        coinResultDisplay.textContent = coinResult;
        gameResultDisplay.textContent = playerGuess === coinResult ? 'Win!' : 'Loss!';
    };

    headsButton.addEventListener('click', () => playGame('Heads'));
    tailsButton.addEventListener('click', () => playGame('Tails'));
});