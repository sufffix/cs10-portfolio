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

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
    cps = (cursorNum * hasRIF * hasCTPC / 10 * frenzy) + 
    (grandmaNum * hasFFG * hasSPRP * frenzy) + 
    (farmNum * hasCH * hasF * 10 * frenzy) + 
    (mineNum * hasSG * hasMD * 50 * frenzy) + 
    (factoryNum * hasSCB * hasEL * 260 * frenzy) + 
    (bankNum * hasTT * hasSRCC * 1400 * frenzy) + 
    (templeNum * hasGI * hasS * 7800 * frenzy); 
    cpsPar.innerHTML = cps.toLocaleString();
}



function updateScore() {
    scorePar.innerHTML = score.toLocaleString();
}

function enableUpgrade(num, reqNum, hasUpgrade, upgradeBtn) { // enable upgrade buttons when you meet the requirements
    if (num >= reqNum && hasUpgrade == 1) {
        upgradeBtn.style.display = "block";
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
        if (bankBtn.disabled == true) {bankBtn.disabled = false};
    } else {
        noMoney();
    }
}

// bank
var bankBtn = document.getElementById("bankBtn"); // variables
var bankPar = document.getElementById("bankPar");
var bankCostPar = document.getElementById("bankCost");
var bankNum = 0;
var bankCost = 1400000;
function buyBank() { // buy 1 bank
    if (score >= bankCost) {
        score -= bankCost;
        updateScore();
        bankNum++;
        bankPar.innerHTML = bankNum;
        bankCost = Math.round(bankCost * 1.15);
        bankCostPar.innerHTML = bankCost.toLocaleString();
        enableUpgrade(bankNum,1,hasTT,ttBtn);
        enableUpgrade(bankNum,5,hasSRCC,srccBtn);
        getCPS();
        if (templeBtn.disabled == true) {templeBtn.disabled = false};
    } else {
        noMoney();
    }
}

// temple
var templeBtn = document.getElementById("templeBtn"); // variables
var templePar = document.getElementById("templePar");
var templeCostPar = document.getElementById("templeCost");
var templeNum = 0;
var templeCost = 20000000;
function buyTemple() { // buy 1 temple
    if (score >= templeCost) {
        score -= templeCost;
        updateScore();
        templeNum++;
        templePar.innerHTML = templeNum;
        templeCost = Math.round(templeCost * 1.15);
        templeCostPar.innerHTML = templeCost.toLocaleString();
        enableUpgrade(templeNum,1,hasGI,giBtn);
        enableUpgrade(templeNum,5,hasS,sBtn);
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

// bank upgrades
// buy taller tellers
var ttBtn = document.getElementById("ttBtn");
var hasTT = 1;
function buyTT() {
    if (score >= 14000000) {
        score -= 14000000;
        hasTT = 2;
        getCPS();
        ttBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// buy scissor resistant credit cards
var srccBtn = document.getElementById("srccBtn");
var hasSRCC = 1;
function buySRCC() {
    if (score >= 70000000) {
        score -= 70000000;
        hasSRCC = 2;
        getCPS();
        srccBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// temple upgrades
// buy golden idols
var giBtn = document.getElementById("giBtn");
var hasGI = 1;
function buyGI() {
    if (score >= 200000000) {
        score -= 200000000;
        hasGI = 2;
        getCPS();
        giBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// buy sacrifices
var sBtn = document.getElementById("sBtn");
var hasS = 1;
function buyS() {
    if (score >= 1000000000) {
        score -= 1000000000;
        hasS = 2;
        getCPS();
        sBtn.style.display = "none";
    } else {
        noMoney();
    }
}

// golden cookie
var gCookieEl = document.getElementById("gcookie");
var gCookieText = document.getElementById("gcookieText");
var frenzy = 1;
let gcookieTop; let gcookieLeft;
function goldCookie() {
    gcookieTop = getRandomInt(1, 90) + '%';
    gcookieLeft = getRandomInt(1, 90) + '%';

    gCookieEl.style.display = "block";
    gCookieEl.style.top = gcookieTop;
    gCookieEl.style.left = gcookieLeft;
    gCookieText.style.top = gcookieTop;
    gCookieText.style.left = gcookieLeft;

    setTimeout(function(){
        gCookieEl.style.display = "none";
    }, 13000)
    let rand = getRandomInt(300, 900);
    setTimeout(goldCookie, rand * 1000);
}
setTimeout(goldCookie, 1);

function goldCookieClicked() {
    goldCookieText();
    let i = getRandomInt(0, 100);
    console.log(i);
    if (i < 47) { // frenzy
        gCookieText.innerHTML = "Frenzy! x7 cookie production for 77 seconds."
        frenzy = 7;
        getCPS();
        setTimeout(function(){
            frenzy = 1;
            getCPS();
            console.log("frenzy over");
        }, 77000);
    } else if (i < 94) { // lucky
        if ((cps * 900 + 13) < (score * 0.15 + 13)) {
            gCookieText.innerHTML = "Lucky! +" + (cps * 900 + 13).toLocaleString() + " cookies."
            score += cps * 900 + 13
        } else {
            gCookieText.innerHTML = "Lucky! +" + (score * 0.15 + 13).toLocaleString() + " cookies."
            score += score * 0.15 + 13
        }
        updateScore();
    } else if (i > 94) { // click frenzy
        gCookieText.innerHTML = "Click Frenzy! x777 cookies per click for 13 seconds."
        clickVal *= 777;
        setTimeout(function(){
            clickVal /= 777;
            console.log("click frenzy over");
        }, 13000);
    }
    gCookieEl.style.display = "none";
}

function goldCookieText() {
    gCookieText.style.display = "block";
    setTimeout(function(){
        gCookieText.style.display = "none";
        gCookieText.innerHTML = "";
    }, 3000);
}