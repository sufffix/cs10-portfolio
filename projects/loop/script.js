// js loop basics

// html element variables
let happyBtn = document.getElementById("happyBtn");
let multipleBtn = document.getElementById("multipleBtn");
let oddBtn = document.getElementById("oddBtn");
let sum5Btn = document.getElementById("sum5Btn");
let sum10Btn = document.getElementById("sum10Btn");

// add event listeners
happyBtn.addEventListener("click", logHappy);
multipleBtn.addEventListener("click", logMultiple);
oddBtn.addEventListener("click", logOdd);
sum5Btn.addEventListener("click", logSum5);
sum10Btn.addEventListener("click", logSum10);

// event functions

// log "I'm so happy!" x500
function logHappy() {
    for (let i = 1; i <=500; i++) {
        console.log("I'm so happy!");
    }
}

// log multiples of 4, 12-800
function logMultiple() {
    for (let i = 3; i <= 800; i++) {
        if (4 * i <= 800) {
            console.log(4 * i);
        }
    }
}

// log odd numbers from 11-55
function logOdd() {
    for (let i = 11; i <= 55; i += 2) {
        console.log(i);
    }
}

// log sum of 5-50
function logSum5() {
    let total = 0;
    for (let i = 5; i <= 50; i++) {
        total += i;
    }
    console.log(total);
}

// log sum of 10-100 by tens
function logSum10() {
    let total = 0;
    for (let i = 10; i <= 100; i += 10) {
        total += i;
    }
    console.log(total);
}