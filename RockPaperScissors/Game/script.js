
function play(userChoice) {
    document.getElementById('userChoice').innerText = userChoice;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').innerText = computerChoice;

    if (userChoice === computerChoice) {
        document.getElementById('winner').innerText = "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        document.getElementById('winner').innerText = "You win!";
    } else {
        document.getElementById('winner').innerText = "Computer wins!";
    }
}

