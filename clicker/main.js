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
upgradeBtn.addEventListener("click", upgradeClicker);
inputScoreBtn.addEventListener("click", inputScore);
gvWkBtn.addEventListener("click", give10Workers);

addEventListener("keydown", keyDownHandler);
addEventListener("keyup", keyUpHandler);


// event functions
function onClick() { // main clicker handler
    score += clickVal;
    scorePar.innerHTML = score.toLocaleString();
}

function upgradeClicker() { // upgrades clicker to next level
    if (clickVal == 1 && score >= 50) { // could probably be cleaner
        clickVal = 2;
        score -= 50;
        scorePar.innerHTML = score.toLocaleString();
        clicker.src = "img/loaf.png";
        upgradeBtn.innerHTML = "Upgrade to Donut";
        upgradeBtn.title = "Cost: 250";
    } else if (clickVal == 2 && score >= 250) {
        clickVal = 4;
        score -= 250;
        scorePar.innerHTML = score.toLocaleString();
        clicker.src = "img/donut.png";
        upgradeBtn.innerHTML = "Upgrade to Muffin";
        upgradeBtn.title = "Cost: 5000";
    } else if (clickVal == 4 && score >= 5000) {
        clickVal = 8;
        score -= 5000;
        scorePar.innerHTML = score.toLocaleString();
        clicker.src = "img/muffin.png";
        upgradeBtn.innerHTML = "Upgrade to Cake";
        upgradeBtn.title = "Cost: 50000";
    } else if (clickVal == 8 && score >= 50000) {
        clickVal = 16;
        score -= 50000;
        scorePar.innerHTML = score.toLocaleString();
        clicker.src = "img/cake.png";
        upgradeBtn.innerHTML = "Fully upgraded!";
        upgradeBtn.disabled = true;
        upgradeBtn.title = "Fully upgraded!";
    } else {
        alert("Not enough money!"); // maybe dont use alert? stops other functions while alert open
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
    devMenuDisplay = (devMenuDisplay == 'block' ? 'none' : 'block');
    devMenuEl.style.display = devMenuDisplay;
}

function inputScore() { // input score from dev menu
    score = +scoreInput.value;
    scorePar.innerHTML = score.toLocaleString();
}

function give10Workers() {
    for (let i = 1; i <= 10; i++) {
        bkNum++;
        bkPar.innerHTML = bkNum;
        bkCost = Math.round(bkCost * 1.15);
        bkBtn.title = "Cost:" + bkCost.toLocaleString();
        bkBtn.disabled = false;

        hbNum++;
        hbPar.innerHTML = hbNum;
        hbCost = Math.round(hbCost * 1.15);
        hbBtn.title = "Cost:" + hbCost.toLocaleString();
        hbBtn.disabled = false;

        lbNum++;
        lbPar.innerHTML = lbNum;
        lbCost = Math.round(lbCost * 1.15);
        lbBtn.title = "Cost:" + lbCost.toLocaleString();
        lbBtn.disabled = false;

        cfbNum++;
        cfbPar.innerHTML = cfbNum;
        cfbCost = Math.round(cfbCost * 1.15);
        cfbBtn.title = "Cost:" + cfbCost.toLocaleString();
        cfbBtn.disabled = false;

        lcoNum++;
        lcoPar.innerHTML = lcoNum;
        lcoCost = Math.round(lcoCost * 1.15);
        lcoBtn.title = "Cost:" + lcoCost.toLocaleString();
        lcoBtn.disabled = false;

        pcoNum++;
        pcoPar.innerHTML = pcoNum;
        pcoCost = Math.round(pcoCost * 1.15);
        pcoBtn.title = "Cost:" + pcoCost.toLocaleString();
        pcoBtn.disabled = false;

        ccoNum++;
        ccoPar.innerHTML = ccoNum;
        ccoCost = Math.round(ccoCost * 1.15);
        ccoBtn.title = "Cost:" + ccoCost.toLocaleString();
        ccoBtn.disabled = false;

        wcoNum++;
        wcoPar.innerHTML = wcoNum;
        wcoCost = Math.round(wcoCost * 1.15);
        wcoBtn.title = "Cost:" + wcoCost.toLocaleString();
        wcoBtn.disabled = false;

        msbNum++;
        msbPar.innerHTML = msbNum;
        msbCost = Math.round(msbCost * 1.15);
        msbBtn.title = "Cost:" + msbCost.toLocaleString();
        msbBtn.disabled = false;
    }
}


// bakers kid
let bkBtn = document.getElementById("bkBtn"); // variables
let bkPar = document.getElementById("bkPar");
let bkNum = 0;
let bkCost = 15;
bkBtn.addEventListener("click", buyBakersKid); // event listener
function buyBakersKid() { // buy 1 
    if (score >= bkCost) {
        score -= bkCost;
        scorePar.innerHTML = score.toLocaleString();
        bkNum++;
        bkPar.innerHTML = bkNum;
        bkCost = Math.round(bkCost * 1.15);
        bkBtn.title = "Cost: " + bkCost.toLocaleString();
        if (bkNum >= 1) {
            let miniChefHatBtn = document.createElement("button");
            miniChefHatBtn.innerHTML = "Buy Mini Chef Hat";
            miniChefHatBtn.title = "Mouse and baker's kids are twice as efficient."
            gameR.appendChild(miniChefHatBtn);
            
        }
        if (hbBtn.disabled == true) {hbBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// home baker
let hbBtn = document.getElementById("hbBtn"); // variables
let hbPar = document.getElementById("hbPar");
let hbNum = 0;
let hbCost = 100;
hbBtn.addEventListener("click", buyHomeBaker); // event listener
function buyHomeBaker() { // buy 1 
    if (score >= hbCost) {
        score -= hbCost;
        scorePar.innerHTML = score.toLocaleString();
        hbNum++;
        hbPar.innerHTML = hbNum;
        hbCost = Math.round(hbCost * 1.15);
        hbBtn.title = "Cost: " + hbCost.toLocaleString();
        if (lbBtn.disabled == true) {lbBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// local baker
let lbBtn = document.getElementById("lbBtn"); // variables
let lbPar = document.getElementById("lbPar");
let lbNum = 0;
let lbCost = 1100;
lbBtn.addEventListener("click", buyLocalBaker); // event listener
function buyLocalBaker() { // buy 
    if (score >= lbCost) {
        score -= lbCost;
        scorePar.innerHTML = score.toLocaleString();
        lbNum++;
        lbPar.innerHTML = lbNum;
        lbCost = Math.round(lbCost * 1.15);
        lbBtn.title = "Cost: " + lbCost.toLocaleString();
        if (cfbBtn.disabled == true) {cfbBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// city famous baker
let cfbBtn = document.getElementById("cfbBtn"); // variables
let cfbPar = document.getElementById("cfbPar");
let cfbNum = 0;
let cfbCost = 12000;
cfbBtn.addEventListener("click", buyCityFamousBaker); // event listener
function buyCityFamousBaker() { // buy 1 
    if (score >= cfbCost) {
        score -= cfbCost;
        scorePar.innerHTML = score.toLocaleString();
        cfbNum++;
        cfbPar.innerHTML = cfbNum;
        cfbCost = Math.round(cfbCost * 1.15);
        cfbBtn.title = "Cost: " + cfbCost.toLocaleString();
        if (lcoBtn.disabled == true) {lcoBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// local chain owner
let lcoBtn = document.getElementById("lcoBtn"); // variables
let lcoPar = document.getElementById("lcoPar");
let lcoNum = 0;
let lcoCost = 130000;
lcoBtn.addEventListener("click", buyLocalChainOwner); // event listener
function buyLocalChainOwner() { // buy 1 
    if (score >= lcoCost) {
        score -= lcoCost;
        scorePar.innerHTML = score.toLocaleString();
        lcoNum++;
        lcoPar.innerHTML = lcoNum;
        lcoCost = Math.round(lcoCost * 1.15);
        lcoBtn.title = "Cost: " + lcoCost.toLocaleString();
        if (pcoBtn.disabled == true) {pcoBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// province wide chain owner
let pcoBtn = document.getElementById("pcoBtn"); // variables
let pcoPar = document.getElementById("pcoPar");
let pcoNum = 0;
let pcoCost = 1400000;
pcoBtn.addEventListener("click", buyProvinceChainOwner); // event listener
function buyProvinceChainOwner() { // buy 1 
    if (score >= pcoCost) {
        score -= pcoCost;
        scorePar.innerHTML = score.toLocaleString();
        pcoNum++;
        pcoPar.innerHTML = pcoNum;
        pcoCost = Math.round(pcoCost * 1.15);
        pcoBtn.title = "Cost: " + pcoCost.toLocaleString();
        if (ccoBtn.disabled == true) {ccoBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// country wide chain owner
let ccoBtn = document.getElementById("ccoBtn"); // variables
let ccoPar = document.getElementById("ccoPar");
let ccoNum = 0;
let ccoCost = 20000000;
ccoBtn.addEventListener("click", buyCountryChainOwner); // event listener
function buyCountryChainOwner() { // buy 1
    if (score >= ccoCost) {
        score -= ccoCost;
        scorePar.innerHTML = score.toLocaleString();
        ccoNum++;
        ccoPar.innerHTML = ccoNum;
        ccoCost = Math.round(ccoCost * 1.15);
        ccoBtn.title = "Cost: " + ccoCost.toLocaleString();
        if (wcoBtn.disabled == true) {wcoBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// worldwide chain owner
let wcoBtn = document.getElementById("wcoBtn"); // variables
let wcoPar = document.getElementById("wcoPar");
let wcoNum = 0;
let wcoCost = 330000000;
wcoBtn.addEventListener("click", buyWorldChainOwner); // event listener
function buyWorldChainOwner() { // buy 1
    if (score >= wcoCost) {
        score -= wcoCost;
        scorePar.innerHTML = score.toLocaleString();
        wcoNum++;
        wcoPar.innerHTML = wcoNum;
        wcoCost = Math.round(wcoCost * 1.15);
        wcoBtn.title = "Cost: " + wcoCost.toLocaleString();
        if (msbBtn.disabled == true) {msbBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}

// michelin star baker
let msbBtn = document.getElementById("msbBtn"); // variables
let msbPar = document.getElementById("msbPar");
let msbNum = 0;
let msbCost = 5100000000;
msbBtn.addEventListener("click", buyMichelinStarBaker); // event listener
function buyMichelinStarBaker() { // buy 1
    if (score >= msbCost) {
        score -= msbCost;
        scorePar.innerHTML = score.toLocaleString();
        msbNum++;
        msbPar.innerHTML = msbNum;
        msbCost = Math.round(msbCost * 1.15);
        msbBtn.title = "Cost: " + msbCost.toLocaleString();
        // if (hbBtn.disabled == true) {hbBtn.disabled = false};
    } else {
        alert("Not enough money!")
    }
}
// give score for employees
setInterval(function(){ // bakers kid function because i didnt want to use decimals in the one second function and im too lazy to find a better way
    score += bkNum;
    scorePar.innerHTML = score.toLocaleString();
}, 10000)
setInterval(function(){ // same thing as bakers kid but for home bakers
    score += hbNum;
    scorePar.innerHTML = score.toLocaleString();
}, 1000)

setInterval(function(){ // divide cps by 10 (fires 10 times / second)
    score += lbNum;
    score += cfbNum * 5; 
    score += lcoNum * 26;
    score += pcoNum * 140;
    score += ccoNum * 780;
    score += wcoNum * 4400;
    score += msbNum * 26000

    scorePar.innerHTML = score.toLocaleString();

}, 100);