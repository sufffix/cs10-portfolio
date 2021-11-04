// library script for cookie clicker clone 

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
    updateScore();
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
    updateScore();
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
    cps = (cursorNum * hasRIF * hasCTPC / 10) + 
    (grandmaNum * hasFFG * hasSPRP) + 
    (farmNum * hasCH * hasF * 10) + 
    (mineNum * hasSG * hasMD * 50) + 
    (factoryNum * hasSCB * hasEL * 260); 
    cpsPar.innerHTML = cps.toLocaleString();
}



function updateScore() {
    scorePar.innerHTML = score.toLocaleString();
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
        updateScore();
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
        updateScore();
        grandmaNum++;
        grandmaPar.innerHTML = grandmaNum;
        grandmaCost = Math.round(grandmaCost * 1.15);
        grandmaCostPar.innerHTML = grandmaCost.toLocaleString();
        enableUpgrade(grandmaNum,1,hasFFG,ffgBtn);
        enableUpgrade(grandmaNum,5,hasSPRP,sprpBtn);
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
        updateScore();
        farmNum++;
        farmPar.innerHTML = farmNum;
        farmCost = Math.round(farmCost * 1.15);
        farmCostPar.innerHTML = farmCost.toLocaleString();
        enableUpgrade(farmNum,1,hasCH,chBtn);
        enableUpgrade(farmNum,5,hasF,fBtn);
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
        updateScore();
        mineNum++;
        minePar.innerHTML = mineNum;
        mineCost = Math.round(mineCost * 1.15);
        mineCostPar.innerHTML = mineCost.toLocaleString();
        enableUpgrade(mineNum,1,hasSG,sgBtn);
        enableUpgrade(mineNum,5,hasMD,mdBtn);
        getCPS();
        if (factoryBtn.disabled == true) {factoryBtn.disabled = false};
    } else {
        noMoney();
    }
}

// factory
var factoryBtn = document.getElementById("factoryBtn"); // variables
var factoryPar = document.getElementById("factoryPar");
var factoryCostPar = document.getElementById("factoryCost");
var factoryNum = 0;
var factoryCost = 130000;
function buyFactory() { // buy 1 factory
    if (score >= factoryCost) {
        score -= factoryCost;
        updateScore();
        factoryNum++;
        factoryPar.innerHTML = factoryNum;
        factoryCost = Math.round(factoryCost * 1.15);
        factoryCostPar.innerHTML = factoryCost.toLocaleString();
        enableUpgrade(factoryNum,1,hasSCB,scbBtn);
        enableUpgrade(factoryNum,5,hasEL,elBtn);
        getCPS();
        // if (factoryBtn.disabled == true) {factoryBtn.disabled = false};
    } else {
        noMoney();
    }
}

// upgrades

// clicker upgrades
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

// grandma upgrades
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

// buy steel plated rolling pins
var sprpBtn = document.getElementById("sprpBtn");
var hasSPRP = 1;
function buySPRP() {
    if (score >= 5000) {
        score -= 5000;
        hasSPRP = 2;
        getCPS();
        sprpBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// farm upgrades
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

// buy fertilizer
var fBtn = document.getElementById("fBtn");
var hasF = 1;
function buyF() {
    if (score >= 55000) {
        score -= 55000;
        hasF = 2;
        getCPS();
        fBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// mine upgrades
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

// buy megadrill
var mdBtn = document.getElementById("mdBtn");
var hasMD = 1;
function buyMD() {
    if (score >= 600000) {
        score -= 600000;
        hasMD = 2;
        getCPS();
        mdBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// factory upgrades
// buy sturdier conveyor belts
var scbBtn = document.getElementById("scbBtn");
var hasSCB = 1;
function buySCB() {
    if (score >= 1300000) {
        score -= 1300000;
        hasSCB = 2;
        getCPS();
        scbBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// buy extra labour
var elBtn = document.getElementById("elBtn");
var hasEL = 1;
function buyEL() {
    if (score >= 6500000) {
        score -= 6500000;
        hasEL = 2;
        getCPS();
        elBtn.style.display = "none";
    } else {
        noMoney();
    }
}
