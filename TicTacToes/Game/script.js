var stolen = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var stolen2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


let turn = 1
let player = "X"
let computer = "O"
let computerEnabled = null
let computerHard = null
let neverLose= null
function attach(r, c) {
    if (stolen[r][c] === 0) {
        if (turn === 1 && computerEnabled !== null) {
            turn = 0
            document.getElementById(r.toString() + c.toString()).innerHTML = player;
            stolen[r][c] = 1
            stolen2[r][c] = 2
            document.getElementById("turn").innerHTML = "PLAYER2'S TURN";
        }
        else if (turn === 0 && computerEnabled === false) {
            turn = 1
            document.getElementById(r.toString() + c.toString()).innerHTML = computer;
            stolen[r][c] = 1
            stolen2[r][c] = 3
            document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
        }
    }

    winOrLoss()
    computer1()
    winOrLoss()
}
function neverLoseC() {
    if (neverLose === true) {
        while (true) {
            if (turn === 0) {
                //if player goes in corner, computer goes in middle
                if (stolen2[0][0] === 2) {
                    if (stolen2[2][2] === 2) {
                        if(){

                        }
                        else{
                            turn = 1
                            document.getElementById("11").innerHTML = computer;
                            stolen[0][1] = 1
                            stolen2[1][1] = 3
                            document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
                        }
                    }
                    else{
                        turn = 1
                        document.getElementById("11").innerHTML = computer;
                        stolen[1][1] = 1
                        stolen2[1][1] = 3
                        document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
                        break
                    }
                }
                else if(stolen2[0][2] === 2) {

                }
                else if(stolen2[2][0] === 2){

                }
                else if(stolen2[2][2] === 2){

                }
                //if player goes in middle, go in corner
                else if (stolen2[1][1] === 2) {
                    turn = 1
                    document.getElementById("11").innerHTML = computer;
                    stolen[2][2] = 1
                    stolen2[2][2] = 3
                    document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
                    break;
                }


            }
        }
    }
}

function computerNL(){
neverLose = true
}
function computer1() {
    if(turn===0&& computerEnabled === true){

        while(true) {
            let r1=Math.floor(Math.random()*3)
            let c1=Math.floor(Math.random()*3)
            if (stolen[r1][c1] === 0) {
                if(turn===0){
                    turn=1
                    document.getElementById(r1.toString() + c1.toString()).innerHTML = computer;
                    stolen[r1][c1] = 1
                    stolen2[r1][c1] = 3
                    document.getElementById("turn").innerHTML = "PLAYER1'S TURN";
                    break;
                }
            }
        }
    }

}
function computerEnabler() {
    computerEnabled =true
}
function computerDisabler(){
    computerEnabled = false
}

function winOrLoss() {
    //intention:if draw=true
    let draw=true;
    if (stolen2[0][2] === 2 && stolen2[1][1] === 2 && stolen2[2][0] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
        draw=false;
    } else if (stolen2[0][0] === 2 && stolen2[1][1] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
        draw=false;
    } else if (stolen2[0][0] === 2 && stolen2[0][1] === 2 && stolen2[0][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[1][0] === 2 && stolen2[1][1] === 2 && stolen2[1][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[2][0] === 2 && stolen2[2][1] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][0] === 2 && stolen2[1][0] === 2 && stolen2[2][0] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][1] === 2 && stolen2[1][1] === 2 && stolen2[2][1] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][2] === 2 && stolen2[1][2] === 2 && stolen2[2][2] === 2) {
        document.getElementById("displayWinner").innerHTML = "PLAYER1 WINS"
        noMore()
    } else if (stolen2[0][2] === 3 && stolen2[1][1] === 3 && stolen2[2][0] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[1][1] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[0][1] === 3 && stolen2[0][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[1][0] === 3 && stolen2[1][1] === 3 && stolen2[1][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[2][0] === 3 && stolen2[2][1] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][0] === 3 && stolen2[1][0] === 3 && stolen2[2][0] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][1] === 3 && stolen2[1][1] === 3 && stolen2[2][1] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else if (stolen2[0][2] === 3 && stolen2[1][2] === 3 && stolen2[2][2] === 3) {
        document.getElementById("displayWinner").innerHTML = "PLAYER2 WINS"
        noMore()
    } else {
        let full = true
        for (let r = 0; r >= 0 && r < 3;r++) {
            for (let c = 0; c >= 0 && c < 3;c++) {
                if (stolen[r][c] ===0) {
                    full = false
                }
            }
        }
        if(full===true){
            document.getElementById("displayWinner").innerHTML = "TIE"
            noMore()
        }
    }
}


function noMore() {
    stolen = [0][0] = 1
    stolen = [0][1] = 1
    stolen = [0][2] = 1
    stolen = [1][0] = 1
    stolen = [1][1] = 1
    stolen = [1][2] = 1
    stolen = [2][0] = 1
    stolen = [2][1] = 1
    stolen = [2][2] = 1
}



