// bakery clicker

// global variables
let clicker = document.getElementById("clicker");
let scorePar = document.getElementById("score");
let upgradeBtn = document.getElementById("upgradeClicker");
let devMenuEl = document.getElementById("gameL");
let inputScoreBtn = document.getElementById("inputScoreBtn");
let scoreInput = document.getElementById("scoreInput");

let bakersKidBtn = document.getElementById("bakersKidBtn");
let bakersKidPar = document.getElementById("bakersKidPar");
let bakersKidCostPar = document.getElementById("bakersKidCostPar");
let bakersKidNum = 0;
let bakersKidCost = 50;

let clickVal = 1;
let score = 0;
let shiftDown = false;
let devMenuDisplay = "none";

// add event listeners
clicker.addEventListener("click", onClick);
upgradeBtn.addEventListener("click", upgradeClicker);
inputScoreBtn.addEventListener("click", inputScore);
bakersKidBtn.addEventListener("click", buyBakersKid);

addEventListener("keydown", keyDownHandler);
addEventListener("keyup", keyUpHandler);


// event functions
function onClick() { // main clicker handler
    score += clickVal;
    scorePar.innerHTML = score;
}

function upgradeClicker() { // upgrades clicker to next level
    if (clickVal == 1 && score >= 25) {
        clickVal = 2;
        score -= 25;
        scorePar.innerHTML = score;
        clicker.src = "img/loaf.png";
        upgradeBtn.innerHTML = "Upgrade to Donut Cost: 75";
    } else if (clickVal == 2 && score >= 75) {
        clickVal = 3;
        score -= 75;
        scorePar.innerHTML = score;
        clicker.src = "img/donut.png";
        upgradeBtn.innerHTML = "Upgrade to Muffin Cost: 200";
    } else if (clickVal == 3 && score >= 200) {
        clickVal = 4;
        score -= 200;
        scorePar.innerHTML = score;
        clicker.src = "img/muffin.png";
        upgradeBtn.innerHTML = "Upgrade to Cake Cost: 500";
    } else if (clickVal == 4 && score >= 500) {
        clickVal = 5;
        score -= 500;
        scorePar.innerHTML = score;
        clicker.src = "img/cake.png";
        upgradeBtn.innerHTML = "Fully upgraded!";
        upgradeBtn.disabled = true;
    } else {
        alert("Not enough money!");
    }
    
}

function keyDownHandler() { // handles key down presses
    if (event.code == "ShiftLeft" && shiftDown == false) {
        shiftDown = true;
    }

    if (event.code == "F9" && shiftDown == true) {
        devMenu();
    }
}

function keyUpHandler() { // handles key lifts
    if (event.code == "ShiftLeft") {
        shiftDown = false;
    }
}

function devMenu() { // toggles dev menu
    devMenuDisplay = (devMenuDisplay == 'block' ? 'none' : 'block');
    devMenuEl.style.display = devMenuDisplay;
}

function inputScore() { // input score from dev menu
    score = +scoreInput.value;
    scorePar.innerHTML = score;
}

function buyBakersKid() { // buy 1 bakers kid
    if (score >= bakersKidCost) {
        score -= bakersKidCost;
        scorePar.innerHTML = score;
        bakersKidNum++;
        bakersKidPar.innerHTML = bakersKidNum;
        bakersKidCost = Math.round(bakersKidCost * 1.1);
        bakersKidCostPar.innerHTML = bakersKidCost;
    } else {
        alert("Not enough money!")
    }
    
}

setInterval(function(){
    score += bakersKidNum; 
    scorePar.innerHTML = score;
}, 2000);