// bakery clicker

// variables

// elements
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
upgradeBtn.addEventListener("click", upgradeClicker);
inputScoreBtn.addEventListener("click", inputScore);
gvWkBtn.addEventListener("click", give10Workers);

addEventListener("keydown", keyDownHandler);
addEventListener("keyup", keyUpHandler);


// event functions
function onClick() { // main clicker handler
    score += clickVal;
    scorePar.innerHTML = score;
}

function upgradeClicker() { // upgrades clicker to next level
    if (clickVal == 1 && score >= 50) { // could probably be cleaner
        clickVal = 2;
        score -= 50;
        scorePar.innerHTML = score;
        clicker.src = "img/loaf.png";
        upgradeBtn.innerHTML = "Upgrade to Donut";
        upgradeBtn.title = "Cost: 250";
    } else if (clickVal == 2 && score >= 250) {
        clickVal = 4;
        score -= 250;
        scorePar.innerHTML = score;
        clicker.src = "img/donut.png";
        upgradeBtn.innerHTML = "Upgrade to Muffin";
        upgradeBtn.title = "Cost: 5000";
    } else if (clickVal == 4 && score >= 5000) {
        clickVal = 8;
        score -= 5000;
        scorePar.innerHTML = score;
        clicker.src = "img/muffin.png";
        upgradeBtn.innerHTML = "Upgrade to Cake";
        upgradeBtn.title = "Cost: 50000";
    } else if (clickVal == 8 && score >= 50000) {
        clickVal = 16;
        score -= 50000;
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
    devMenuDisplay = (devMenuDisplay == 'block' ? 'none' : 'block'); // wow im amazing
    devMenuEl.style.display = devMenuDisplay;
}

function inputScore() { // input score from dev menu
    score = +scoreInput.value;
    scorePar.innerHTML = score;
}

function give10Workers() {
    bkNum += 10;
    bkPar.innerHTML = bkNum;
    hbNum += 10;
    hbPar.innerHTML = hbNum;
    lbNum += 10;
    lbPar.innerHTML = lbNum;
    cfbNum += 10;
    cfbPar.innerHTML = cfbNum;

}


// bakers kid
let bkBtn = document.getElementById("bkBtn"); // variables
let bkPar = document.getElementById("bkPar");
let bkNum = 0;
let bkCost = 15;
bkBtn.addEventListener("click", buyBakersKid); // event listener
function buyBakersKid() { // buy 1 bakers kid
    if (score >= bkCost) {
        score -= bkCost;
        scorePar.innerHTML = score;
        bkNum++;
        bkPar.innerHTML = bkNum;
        bkCost = Math.round(bkCost * 1.15);
        bkBtn.title = "Cost: " + bkCost;
    } else {
        alert("Not enough money!")
    }
    
}
setInterval(function(){
    score += bkNum; 
    scorePar.innerHTML = score;
}, 10000);

// home baker
let hbBtn = document.getElementById("hbBtn"); // variables
let hbPar = document.getElementById("hbPar");
let hbNum = 0;
let hbCost = 100;
hbBtn.addEventListener("click", buyHomeBaker); // event listener
function buyHomeBaker() { // buy 1 home baker
    if (score >= hbCost) {
        score -= hbCost;
        scorePar.innerHTML = score;
        hbNum++;
        hbPar.innerHTML = hbNum;
        hbCost = Math.round(hbCost * 1.15);
        hbBtn.title = "Cost: " + hbCost;
    } else {
        alert("Not enough money!")
    }
    
}
setInterval(function(){
    score += hbNum; 
    scorePar.innerHTML = score;
}, 1000);

// local baker
let lbBtn = document.getElementById("lbBtn"); // variables
let lbPar = document.getElementById("lbPar");
let lbNum = 0;
let lbCost = 1100;
lbBtn.addEventListener("click", buyLocalBaker); // event listener
function buyLocalBaker() { // buy 1 home baker
    if (score >= lbCost) {
        score -= lbCost;
        scorePar.innerHTML = score;
        lbNum++;
        lbPar.innerHTML = lbNum;
        lbCost = Math.round(lbCost * 1.15);
        lbBtn.title = "Cost: " + lbCost;
    } else {
        alert("Not enough money!")
    }
    
}
setInterval(function(){
    score += lbNum; 
    scorePar.innerHTML = score;
}, 125);

// city famous baker
let cfbBtn = document.getElementById("cfbBtn"); // variables
let cfbPar = document.getElementById("cfbPar");
let cfbNum = 0;
let cfbCost = 12000;
cfbBtn.addEventListener("click", buyCityFamousBaker); // event listener
function buyCityFamousBaker() { // buy 1 home baker
    if (score >= cfbCost) {
        score -= cfbCost;
        scorePar.innerHTML = score;
        cfbNum++;
        cfbPar.innerHTML = cfbNum;
        cfbCost = Math.round(cfbCost * 1.15);
        cfbBtn.title = "Cost: " + cfbCost;
    } else {
        alert("Not enough money!")
    }
    
}
setInterval(function(){
    score += cfbNum; 
    scorePar.innerHTML = score;
}, 21.2765957);