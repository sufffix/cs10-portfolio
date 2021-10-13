// simple slot machine

// global variables
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let scoreEl = document.getElementById("score"); let score = 1000;

let apple = "img/apple.png";
let bell = "img/bell.png";
let cherries = "img/cherries.png";
let diamond = "img/diamond.png";
let grapes = "img/grapes.png";
let lemon = "img/lemon.png";
let orange = "img/orange.png";
let watermelon = "img/watermelon.png";

let ran1; let ran2; let ran3;


// add event listener
document.getElementById("spin").addEventListener("click", spin);
document.getElementById("spin10").addEventListener("click", spin10);


// event functions
function spin() {
    
    ran1 = Math.random();
    ran2 = Math.random();
    ran3 = Math.random();

    // check if any slots are the same

    if (score > 9) {
        randomSlot();
    } else {
        alert("You dont have enough money!")
        scoreEl.innerHTML = score;
    }    
    
}

function spin10() {
    for (let i = 1; i <= 10; i++) {
        spin();
    }
}

function randomSlot() {
    if (ran1 < 0.125) {
        img1.src=apple;
    } else if (ran1 < 0.25) {
        img1.src=bell;
    } else if (ran1 < 0.375) {
        img1.src=cherries;
    } else if (ran1 < 0.5) {
        img1.src=diamond;
    } else if (ran1 < 0.625) {
        img1.src=grapes;
    } else if (ran1 < 0.75) {
        img1.src=lemon;
    } else if (ran1 < 0.875) {
        img1.src=orange;
    } else {
        img1.src=watermelon;
    }

    if (ran2 < 0.125) {
        img2.src=apple;
    } else if (ran2 < 0.25) {
        img2.src=bell;
    } else if (ran2 < 0.375) {
        img2.src=cherries;
    } else if (ran2 < 0.5) {
        img2.src=diamond;
    } else if (ran2 < 0.625) {
        img2.src=grapes;
    } else if (ran2 < 0.75) {
        img2.src=lemon;
    } else if (ran2 < 0.875) {
        img2.src=orange;
    } else {
        img2.src=watermelon;
    } 

    if (ran3 < 0.125) {
        img3.src=apple;
    } else if (ran3 < 0.25) {
        img3.src=bell;
    } else if (ran3 < 0.375) {
        img3.src=cherries;
    } else if (ran3 < 0.5) {
        img3.src=diamond;
    } else if (ran3 < 0.625) {
        img3.src=grapes;
    } else if (ran3 < 0.75) {
        img3.src=lemon;
    } else if (ran3 < 0.875) {
        img3.src=orange;
    } else {
        img3.src=watermelon;
    }

    if (img1.src == img2.src && img2.src != img3.src) {
        score += 40;
        score -= 20;
        scoreEl.innerHTML = score;
    } else if (img2.src == img3.src && img1.src != img2.src) {
        score += 40;
        score -= 20;
        scoreEl.innerHTML = score;
    } else if (img3.src == img1.src && img1.src != img2.src) {
        score += 40;
        score -= 20;
        scoreEl.innerHTML = score;
    } else if (img1.src == img2.src && img2.src == img3.src) {
        score += 1000;
        score -= 20;
        scoreEl.innerHTML = score;
    } else {
        score -= 20;
        scoreEl.innerHTML = score;
    }
}