let myArray = [

    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var player = 1;
var winner = false;
var maxPlays= 42;
var tie = false;

function spottaken(colNum) {

        if (winner !== true && tie!== true) {
            var row = 5;
            while (myArray[row][colNum] !== 0 && row >= 0) {
                row--;
            }
            if (row >= 0) {
                myArray[row][colNum] = player;
                document.getElementById("SpaceRow" + row + "Col" + colNum).innerHTML = player;
                if(document.getElementById("SpaceRow" + row + "Col" + colNum).innerHTML == 1) {
                    document.getElementById("SpaceRow" + row + "Col" + colNum).style.backgroundColor = "#FF5768";
                    document.getElementById("SpaceRow" + row + "Col" + colNum).style.color = "#FF5768";

                }
                else if(document.getElementById("SpaceRow" + row + "Col" + colNum).innerHTML==2)
                {
                    document.getElementById("SpaceRow" + row + "Col" + colNum).style.backgroundColor = "#00A5E3";
                    document.getElementById("SpaceRow" + row + "Col" + colNum).style.color = "#00A5E3";

                }
                else
                {

                }
                setTimeout(didWin, 10);
                player = player % 2 + 1;
                maxPlays--;


            }
        }
    }

function didWin() {

    if (winner !== true) {
        for (var i = 0; i <= 5; i++) {
            for (var b = 0; b <= 3; b++) {
                if (myArray[i][b] === myArray[i][b + 1] && myArray[i][b + 1] === myArray[i][b + 2] && myArray[i][b + 1] === myArray[i][b + 3]) {
                    if (myArray[i][b] !== 0) {
                        winner = true;
                        // alert("win horizontal" + myArray[i][b]);
                        document.getElementById("Turn").innerHTML = "Player " + myArray[i][b] + "'s won";

                        return;
                    }
                }


            }
        }
        for (var i = 0; i <= 2; i++) {
            for (var b = 0; b <= 3; b++) {
                if (myArray[i][b] === myArray[i + 1][b + 1] && myArray[i + 1][b + 1] === myArray[i + 2][b + 2] && myArray[i + 1][b + 1] === myArray[i + 3][b + 3]) {
                    if (myArray[i][b] !== 0) {
                        // alert("win diagonal" + myArray[i][b]);
                        document.getElementById("Turn").innerHTML = "Player " + myArray[i][b] + "'s won";
                        winner = true;
                        return;

                    }
                }
            }
        }
        for (var i = 0; i <= 2; i++) {
            for (var b = 0; b <= 6; b++) {
                if (myArray[i][b] === myArray[i + 1][b] && myArray[i + 1][b] === myArray[i + 2][b] && myArray[i + 1][b] === myArray[i + 3][b]) {
                    if (myArray[i][b] !== 0) {
                        // alert("win vertical" + myArray[i][b]);
                        document.getElementById("Turn").innerHTML = "Player " + myArray[i][b] + "'s won";
                        winner = true;
                        return;
                    }
                }


            }
        }
        for (var i = 0; i <= 2; i++) {
            for (var b = 6; b >= 3; b--) {
                if (myArray[i][b] === myArray[i + 1][b - 1] && myArray[i + 1][b - 1] === myArray[i + 2][b - 2] && myArray[i + 1][b - 1] === myArray[i + 3][b - 3]) {
                    if (myArray[i][b] !== 0) {
                        // alert("win diagonal" + myArray[i][b]);
                        document.getElementById("Turn").innerHTML = "Player " + myArray[i][b] + "'s won";
                        winner = true;
                        return;
                    }
                }
            }
        }
        if(maxPlays<= 0)
        {
            document.getElementById("Turn").innerHTML = "Tie";
            // alert("tie");
        }
        else {
            document.getElementById("Turn").innerHTML = "Player " + player + "'s turn";
        }


    }
}