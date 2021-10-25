// bakery clicker

// variables

// elements
let gameR = document.getElementById("gameR");
let clicker = document.getElementById("clicker");
let scorePar = document.getElementById("score");
let upgradeBtn = document.getElementById("upgradeClicker");
let devMenuEl = document.getElementById("gameL");
let inputScoreBtn = document.getElementById("inputScoreBtn");
let scoreInput = document.getElementById("scoreInput");
let gvWkBtn = document.getElementById("give10Workers");

// other variables
let clickVal = 1;
let score = 0;
let shiftDown = false;
let devMenuDisplay = "none";


// add event listeners
clicker.addEventListener("click", onClick);
inputScoreBtn.addEventListener("click", inputScore);
gvWkBtn.addEventListener("click", give10Workers);

addEventListener("keydown", keyDownHandler);
addEventListener("keyup", keyUpHandler);


// event functions
function onClick() { // main clicker handler
    score += clickVal * hasRIF * hasCTPC;
    scorePar.innerHTML = score.toLocaleString();
}

function keyDownHandler() { // handles key down presses
    if (event.code == "ShiftLeft" && shiftDown == false) {
        shiftDown = true;
    }

    if (event.code == "F9" && shiftDown == true) { // maybe should be in keypress not keydown?
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
    scorePar.innerHTML = score.toLocaleString();
}

function give10Workers() {
    for (let i = 1; i <= 10; i++) {
        cursorNum++;
        cursorPar.innerHTML = cursorNum;
        cursorCost = Math.round(cursorCost * 1.15);
        cursorBtn.title = "Cost:" + cursorCost.toLocaleString();
        cursorBtn.disabled = false;

        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaBtn.title = "Cost:" + grandmaCost.toLocaleString();
        grandmaBtn.disabled = false;

        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmBtn.title = "Cost:" + farmCost.toLocaleString();
        farmBtn.disabled = false;

        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineBtn.title = "Cost:" + mineCost.toLocaleString();
        mineBtn.disabled = false;
    }
}


// cursor
let cursorBtn = document.getElementById("cursorBtn"); // variables
let cursorPar = document.getElementById("cursorPar");
let cursorNum = 0;
let cursorCost = 15;
cursorBtn.addEventListener("click", buyCursor); // event listener
function buyCursor() { // buy 1 
    if (score >= cursorCost) {
        score -= cursorCost;
        scorePar.innerHTML = score.toLocaleString();
        cursorNum++;
        cursorPar.innerHTML = cursorNum;
        cursorCost = Math.round(cursorCost * 1.15);
        cursorBtn.title = "Cost: " + cursorCost.toLocaleString();
        if (cursorNum >= 1) {
            rifBtn.style.display = "block";
            ctpcBtn.style.display = "block";

        }
        if (grandmaBtn.disabled == true) {grandmaBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// grandma
let grandmaBtn = document.getElementById("grandmaBtn"); // variables
let grandmaPar = document.getElementById("grandmaPar");
let grandmaNum = 0;
let grandmaCost = 100;
grandmaBtn.addEventListener("click", buyGrandma); // event listener
function buyGrandma() { // buy 1 
    if (score >= grandmaCost) {
        score -= grandmaCost;
        scorePar.innerHTML = score.toLocaleString();
        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaBtn.title = "Cost: " + grandmaCost.toLocaleString();
        if (grandmaNum >= 1) {
            ffgBtn.style.display = "block";
        }
        if (farmBtn.disabled == true) {farmBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// farm
let farmBtn = document.getElementById("farmBtn"); // variables
let farmPar = document.getElementById("farmPar");
let farmNum = 0;
let farmCost = 1100;
farmBtn.addEventListener("click", buyFarm); // event listener
function buyFarm() { // buy 
    if (score >= farmCost) {
        score -= farmCost;
        scorePar.innerHTML = score.toLocaleString();
        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmBtn.title = "Cost: " + farmCost.toLocaleString();
        if (mineBtn.disabled == true) {mineBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// mine
let mineBtn = document.getElementById("mineBtn"); // variables
let minePar = document.getElementById("minePar");
let mineNum = 0;
let mineCost = 12000;
mineBtn.addEventListener("click", buyMine); // event listener
function buyMine() { // buy 1 
    if (score >= mineCost) {
        score -= mineCost;
        scorePar.innerHTML = score.toLocaleString();
        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineBtn.title = "Cost: " + mineCost.toLocaleString();
        // if (lcoBtn.disabled == true) {lcoBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}


// give score for employees
setInterval(function(){ // bakers kid function because i didnt want to use decimals in the one second function and im too lazy to find a better way
    score += cursorNum * hasRIF * hasCTPC;
    scorePar.innerHTML = score.toLocaleString();
}, 10000)
setInterval(function(){ // same thing as bakers kid but for home bakers
    score += grandmaNum * hasFFG;
    scorePar.innerHTML = score.toLocaleString();
}, 1000)

setInterval(function(){ // divide cps by 10 (fires 10 times / second)
    score += farmNum;
    score += mineNum * 5; 

    scorePar.innerHTML = score.toLocaleString();
}, 100);

// upgrades

// buy reinforced index finger
let rifBtn = document.getElementById("rifBtn");
let hasRIF = 1;
rifBtn.addEventListener("click", buyRIF);
function buyRIF() {
    if (score >= 100) {
        score -= 100;
        hasRIF = 2;
        rifBtn.disabled = true;
    } else {
        alert("Not enough money!");
    }
}

// buy carpal tunnel prevention cream
let ctpcBtn = document.getElementById("ctpcBtn");
let hasCTPC = 1;
ctpcBtn.addEventListener("click", buyCTPC);
function buyCTPC() {
    if (score >= 500) {
        score -= 500;
        hasCTPC = 2;
        ctpcBtn.disabled = true;
    } else {
        alert("Not enough money!");
    }
}

// buy forwards from grandma
let ffgBtn = document.getElementById("ffgBtn");
let hasFFG = 1;
ffgBtn.addEventListener("click", buyFFG);
function buyFFG() {
    if (score >= 1000) {
        score -= 1000;
        hasFFG = 2;
        ffgBtn.disabled = true;
    } else {
        alert("Not enough money!");
    }
}

