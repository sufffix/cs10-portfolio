// bakery clicker

// global variables
let clicker = document.getElementById("clicker");
let scorePar = document.getElementById("score");
let upgradeBtn = document.getElementById("upgradeClicker");
let clickVal = 1;
let score = 0;

// add event listeners
clicker.addEventListener("click", onClick);
upgradeBtn.addEventListener("click", upgradeClicker);


// event functions
function onClick() {
    score += clickVal;
    scorePar.innerHTML = score;    
}

function upgradeClicker() {
    console.log("upgrade");
    if (clickVal == 1) {
        clickVal = 2;
        clicker.src = "img/loaf.png";
        upgradeBtn.innerHTML = "Upgrade to Donut";
    } else if (clickVal == 2) {
        clickVal = 3;
        clicker.src = "img/donut.png";
        upgradeBtn.innerHTML = "Upgrade to Muffin";
    } else if (clickVal == 3) {
        clickVal = 4;
        clicker.src = "img/muffin.png";
        upgradeBtn.innerHTML = "Upgrade to Cake";
    } else {
        clickVal = 5;
        clicker.src = "img/cake.png";
        upgradeBtn.innerHTML = "Fully upgraded!";
        upgradeBtn.disabled = true;
    }
    
}