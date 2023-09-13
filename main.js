var chance = "X";
let game = ["", "", "", "", "", "", "", "", ""]
var scorex=0;
var scorey=0;
winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function mainLogic(){
document.querySelector(".bottom").addEventListener("click", function (details) {
    chance_game();
    var clkItem = details.target.id;
    let chk = document.getElementById(clkItem).innerHTML;
    if (chk == "X" || chk == "O") {
        // alert("Select correct option");
    }
    else {
        document.getElementById(clkItem).innerHTML = chance;
        arrupdate(clkItem);
        for (let i = 0; i < winconditions.length; i++) {
            element = winconditions[i]
            winCondition = element;
            a = game[element[0]]
            b = game[element[1]]
            c = game[element[2]]
            if (a != "" && b != "" && c != "") {
                if (a == b && b == c) {
                    change_chance();
                    incrementScore(chance);
                    document.querySelector(".bottom").innerHTML=`
                    <h1 id="gameover">Game Over</h1>
                    <button id="gameover1">Play Again</button>
                    `;
                    gameReset();
                    document.querySelector("#chance").innerHTML=`player ${chance} won`;
                    console.log("player", chance, "won")
                    break;
                }
            }
            else{
                chance_game(chance);
                continue;
            }
        }
    }
}
);
}
mainLogic();

function arrupdate(clkItem) {
    switch (clkItem) {
        case "one":
            game[0] = chance;
            change_chance();
            break;

        case "two":
            game[1] = chance;
            change_chance();
            break;

        case "three":
            game[2] = chance;
            change_chance();
            break;

        case "four":
            game[3] = chance;
            change_chance();
            break;

        case "five":
            game[4] = chance;
            change_chance();
            break;

        case "six":
            game[5] = chance;
            change_chance();
            break;

        case "seven":
            game[6] = chance;
            change_chance();
            break;

        case "eight":
            game[7] = chance;
            change_chance();
            break;

        case "nine":
            game[8] = chance;
            change_chance();
            break;
    }
}
function change_chance(){
    if (chance == "X") {
        chance = "O";
    }
    else {
        chance = "X";
    }
    chance_game();
}
let chance_game = () => {
    document.getElementById("chance").innerHTML = `chance of ${chance}`
};

function gameReset(){
    document.getElementById("gameover1").onclick=function(){
        document.querySelector(".bottom").innerHTML=`
        <div id="one">
        </div>
        <div id="two">
        </div>
        <div id="three">
        </div>
        <div id="four">
        </div>
        <div id="five">
        </div>
        <div id="six">
        </div>
        <div id="seven">
        </div>
        <div id="eight">
        </div>
        <div id="nine">
        </div>
        `;
     game = ["", "", "", "", "", "", "", "", ""];
     chance = "X";
     mainLogic();
    }
}
function incrementScore(player){
if(player=="X"){
    scorex+=1;
}
else if(player=="O"){
    scorey+=1;
}
document.querySelector("scorex").innerHTML=scorex;
document.querySelector("scorey").innerHTML=scorey;
}