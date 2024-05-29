window.onload = function() {
    var words = data.dict;
    var lives = 10;
    var word = '';
    var keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var guess = '';
    var guesses = [];
    var wrongGuesses = [];
    var getLives = document.getElementById("lives");
    var getWrongs = document.getElementById("incorrect-inputs")
    var winLoss = document.getElementById("face");
    var play;
    var amountOfGuesses = 0;

    var buttons = function () {
        let inputs = document.getElementById("keyboard");
        let letters = document.createElement("ul");
        let letter;
        for (let counter = 0; counter < keyboard.length; counter++) {
            letters.setAttribute('id', 'alphabet');
            letter = document.createElement('li');
            letter.setAttribute('id', 'letter');
            letter.innerHTML = keyboard[counter];
            letter.onclick = input;
            inputs.appendChild(letters);
            letters.appendChild(letter);
        }
        document.addEventListener("keydown", (event ) => keyboardInput(event.key));
    }

    var input = function () {
        if(play === false) {

        } else {
            let thisGuess = this.innerHTML;
            if(guesses.indexOf(thisGuess) !== -1 || wrongGuesses.indexOf(thisGuess) !== -1) {
            } else {
                for (let counter = 0; counter < word.length; counter++) {
                    if (word[counter] === thisGuess) {
                        guesses[counter].innerHTML = thisGuess;
                        guesses.push(thisGuess);
                        amountOfGuesses++;
                        showBody();
                    }
                }
                if (word.indexOf(thisGuess) === -1) {
                    lives--;
                    wrongGuesses.push(thisGuess);
                    showBody();
                }
            }
        }
    }

    var keyboardInput = function(keyName) {
        if(play === false) {

        } else {
            let thisGuess = keyName.toLowerCase();
            if(keyboard.indexOf(thisGuess) === -1) {

            } else {
                if(guesses.indexOf(thisGuess) !== -1 || wrongGuesses.indexOf(thisGuess) !== -1) {

                } else {
                    for (let counter = 0; counter < word.length; counter++) {
                        if (word[counter] === thisGuess) {
                            guesses[counter].innerHTML = thisGuess;
                            guesses.push(thisGuess);
                            amountOfGuesses++;
                            showBody();
                        }
                    }
                    if (word.indexOf(thisGuess) === -1) {
                        lives--;
                        wrongGuesses.push(thisGuess);
                        showBody();
                    }
                }
            }
        }
    }

    var result = function () {
        let hold = document.getElementById('random-word');
        let answer = document.createElement('ul');

        for (let counter = 0; counter < word.length; counter++) {
            answer.setAttribute('id', 'correct-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[counter] === '-' || word[counter] === ' ') {
                guess.innerHTML = word[counter];
                amountOfGuesses++;
            } else {
                guess.innerHTML = '_';
            }

            guesses.push(guess);
            hold.appendChild(answer);
            answer.appendChild(guess);
        }
    }

    var showBody = function () {
        getLives.innerHTML = "Mistakes: " + lives;
        getWrongs.innerHTML = "Incorrect Inputs: <br>" + wrongGuesses;
        if (lives < 1) {
            play = false;
            winLoss.innerHTML = 'LOSER';
            document.getElementById("random-word").innerHTML = word;
            document.getElementById("random-word").setAttribute('class', 'got-wrong wrapper');
            showBody();
        }
        if (amountOfGuesses === word.length) {
            winLoss.innerHTML = 'WINNER';
            play = false;
            showBody();

        }
    }

    var start = function () {
        word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        buttons();
        showBody();
        guesses = [];
        lives = 10;
        amountOfGuesses = 0;
        result();
    }

    start();
}

function restart() {
    window.location.href = '';
}
