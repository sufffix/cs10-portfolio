// library script for cookie clicker ripoff 

// general variables

// elements
var gameR = document.getElementById("gameR");
var scorePar = document.getElementById("score");
var devMenuEl = document.getElementById("gameL");
var scoreInput = document.getElementById("scoreInput");
var clicker = document.getElementById("clicker");
var inputScoreBtn = document.getElementById("inputScoreBtn");
var cpsPar = document.getElementById("cps");

// other variables
var clickVal = 1;
var score = 0;
var shiftDown = false;
var devMenuDisplay = "none";
var cps = 0;

// notification
var modal = document.getElementById("moneyModal");
var btn = document.getElementById("modalBtnTest");
var span = document.getElementsByClassName("close")[0];

function noMoney() { // opens notification box
    modal.style.display = "block";
}
span.onclick = function() { // closes when you press the x
    modal.style.display = "none";
}
window.onclick = function(event) { // lets you click anywhere outside of the box to close notif
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

// function give10Workers() { currently disabled due to variable issues 
//     for (let i = 1; i <= 10; i++) {
//         cursorNum++;
//         cursorPar.innerHTML = cursorNum;
//         cursorCost = Math.round(cursorCost * 1.15);
//         cursorCostPar.innerHTML = cursorCost.toLocaleString();
//         cursorBtn.disabled = false;

//         grandmaNum++;
//         grandmaPar.innerHTML = grandmaNum;
//         grandmaCost = Math.round(grandmaCost * 1.15);
//         grandmaCostPar.innerHTML = grandmaCost.toLocaleString();
//         grandmaBtn.disabled = false;

//         farmNum++;
//         farmPar.innerHTML = farmNum;
//         farmCost = Math.round(farmCost * 1.15);
//         farmCostPar.innerHTML = farmCost.toLocaleString();
//         farmBtn.disabled = false;

//         mineNum++;
//         minePar.innerHTML = mineNum;
//         mineCost = Math.round(mineCost * 1.15);
//         mineCostPar.innerHTML = mineCost.toLocaleString();
//         mineBtn.disabled = false;
//     }
// }

function getCPS() { // get cps and display
    cps = (cursorNum * hasRIF * hasCTPC / 10) + (grandmaNum * hasFFG) + (farmNum * hasCH * 10) + (mineNum * hasSG * 50); 
    cpsPar.innerHTML = cps.toLocaleString();
}

function enableUpgrade(num, reqnum, upg, upbtn) { // enable upgrade buttons when you meet the reqs
    if (num >= reqnum && upg == 1) {
        upbtn.style.display = "block";
    }
}

// buildings

// cursor
var cursorBtn = document.getElementById("cursorBtn"); // variables
var cursorPar = document.getElementById("cursorPar");
var cursorCostPar = document.getElementById("cursorCost");
var cursorNum = 0;
var cursorCost = 15;
function buyCursor() { // buy 1 cursor
    if (score >= cursorCost) {
        score -= cursorCost;
        scorePar.innerHTML = score.toLocaleString();
        cursorNum++;
        cursorPar.innerHTML = cursorNum;
        cursorCost = Math.round(cursorCost * 1.15);
        cursorCostPar.innerHTML = cursorCost.toLocaleString();
        enableUpgrade(cursorNum,1,hasRIF,rifBtn);
        enableUpgrade(cursorNum,1,hasCTPC,ctpcBtn);
        getCPS();
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
function buyGrandma() { // buy 1 grandma
    if (score >= grandmaCost) {
        score -= grandmaCost;
        scorePar.innerHTML = score.toLocaleString();
        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaCostPar.innerHTML = grandmaCost.toLocaleString();
        enableUpgrade(grandmaNum,1,hasFFG,ffgBtn);
        getCPS();
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
function buyFarm() { // buy 1 farm
    if (score >= farmCost) {
        score -= farmCost;
        scorePar.innerHTML = score.toLocaleString();
        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmCostPar.innerHTML = farmCost.toLocaleString();
        enableUpgrade(farmNum,1,hasCH,chBtn);
        getCPS();
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
function buyMine() { // buy 1 mine
    if (score >= mineCost) {
        score -= mineCost;
        scorePar.innerHTML = score.toLocaleString();
        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineCostPar.innerHTML = mineCost.toLocaleString();
        enableUpgrade(mineNum,1,hasSG,sgBtn);
        getCPS();
        // if (factoryBtn.disabled == true) {factoryBtn.disabled = false};
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
        getCPS();
        rifBtn.style.display = "none";
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
        getCPS();
        ctpcBtn.style.display = "none";
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
        getCPS();
        ffgBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// buy cheap hoes
var chBtn = document.getElementById("chBtn");
var hasCH = 1;
function buyCH() {
    if (score >= 11000) {
        score -= 11000;
        hasCH = 2;
        getCPS();
        chBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// buy sugar gas
var sgBtn = document.getElementById("sgBtn");
var hasSG = 1;
function buySG() {
    if (score >= 120000) {
        score -= 120000;
        hasSG = 2;
        getCPS();
        sgBtn.style.display = "none";
    } else {
        noMoney();
    }
}
