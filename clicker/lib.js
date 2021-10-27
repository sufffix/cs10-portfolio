// library script for cookie clicker ripoff 

// general variables

// elements
var gameR = document.getElementById("gameR");
var scorePar = document.getElementById("score");
var devMenuEl = document.getElementById("gameL");
var scoreInput = document.getElementById("scoreInput");
var clicker = document.getElementById("clicker");
var inputScoreBtn = document.getElementById("inputScoreBtn");


// other variables
var clickVal = 1;
var score = 0;
var shiftDown = false;
var devMenuDisplay = "none";

// notification
var modal = document.getElementById("moneyModal");
var btn = document.getElementById("modalBtnTest");
var span = document.getElementsByClassName("close")[0];

function noMoney() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// misc functions
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
        cursorCostPar.innerHTML = cursorCost.toLocaleString();
        cursorBtn.disabled = false;

        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaCostPar.innerHTML = grandmaCost.toLocaleString();
        grandmaBtn.disabled = false;

        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmCostPar.innerHTML = farmCost.toLocaleString();
        farmBtn.disabled = false;

        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineCostPar.innerHTML = mineCost.toLocaleString();
        mineBtn.disabled = false;
    }
}

// buildings

// cursor
var cursorBtn = document.getElementById("cursorBtn"); // variables
var cursorPar = document.getElementById("cursorPar");
var cursorCostPar = document.getElementById("cursorCost");
var cursorNum = 0;
var cursorCost = 15;
function buyCursor() { // buy 1 
    if (score >= cursorCost) {
        score -= cursorCost;
        scorePar.innerHTML = score.toLocaleString();
        cursorNum++;
        cursorPar.innerHTML = cursorNum;
        cursorCost = Math.round(cursorCost * 1.15);
        cursorCostPar.innerHTML = cursorCost.toLocaleString();
        if (cursorNum >= 1) {
            rifBtn.style.display = "block";
            ctpcBtn.style.display = "block";

        }
        if (grandmaBtn.disabled == true) {grandmaBtn.disabled = false};
    } else {
        noMoney();
    }
}

// grandma
var grandmaBtn = document.getElementById("grandmaBtn"); // variables
var grandmaPar = document.getElementById("grandmaPar");
var grandmaCostPar = document.getElementById("grandmaCost");
var grandmaNum = 0;
var grandmaCost = 100;
function buyGrandma() { // buy 1 
    if (score >= grandmaCost) {
        score -= grandmaCost;
        scorePar.innerHTML = score.toLocaleString();
        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaCostPar.innerHTML = grandmaCost.toLocaleString();
        if (grandmaNum >= 1) {
            ffgBtn.style.display = "block";
        }
        if (farmBtn.disabled == true) {farmBtn.disabled = false};
    } else {
        noMoney();
    }
}

// farm
var farmBtn = document.getElementById("farmBtn"); // variables
var farmPar = document.getElementById("farmPar");
var farmCostPar = document.getElementById("farmCost");
var farmNum = 0;
var farmCost = 1100;
function buyFarm() { // buy 
    if (score >= farmCost) {
        score -= farmCost;
        scorePar.innerHTML = score.toLocaleString();
        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmCostPar.innerHTML = farmCost.toLocaleString();
        if (mineBtn.disabled == true) {mineBtn.disabled = false};
    } else {
        noMoney();
    }
}

// mine
var mineBtn = document.getElementById("mineBtn"); // variables
var minePar = document.getElementById("minePar");
var mineCostPar = document.getElementById("mineCost");
var mineNum = 0;
var mineCost = 12000;
function buyMine() { // buy 1 
    if (score >= mineCost) {
        score -= mineCost;
        scorePar.innerHTML = score.toLocaleString();
        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineCostPar.innerHTML = mineCost.toLocaleString();
        // if (lcoBtn.disabled == true) {lcoBtn.disabled = false};
    } else {
        noMoney();
    }
}

// upgrades

// buy reinforced index finger
var rifBtn = document.getElementById("rifBtn");
var hasRIF = 1;
function buyRIF() {
    if (score >= 100) {
        score -= 100;
        hasRIF = 2;
        rifBtn.disabled = true;
    } else {
        noMoney();
    }
}

// buy carpal tunnel prevention cream
var ctpcBtn = document.getElementById("ctpcBtn");
var hasCTPC = 1;
function buyCTPC() {
    if (score >= 500) {
        score -= 500;
        hasCTPC = 2;
        ctpcBtn.disabled = true;
    } else {
        noMoney();
    }
}

// buy forwards from grandma
var ffgBtn = document.getElementById("ffgBtn");
var hasFFG = 1;
function buyFFG() {
    if (score >= 1000) {
        score -= 1000;
        hasFFG = 2;
        ffgBtn.disabled = true;
    } else {
        noMoney();
    }
}

