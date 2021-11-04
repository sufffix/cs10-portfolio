// main script for cookie clicker clone

// button click listeners
clicker.onclick = function() {onClick();}
inputScoreBtn.onclick = function() {inputScore();}

// key press listeners
addEventListener("keydown", keyDownHandler2);
function keyDownHandler2() {keyDownHandler();} // weird workaround for function not defined error
addEventListener("keyup", keyUpHandler2);
function keyUpHandler2() {keyUpHandler();} // workaround probably could be done better

// building click listeners
cursorBtn.onclick = function() {buyCursor();}
grandmaBtn.onclick = function() {buyGrandma();}
farmBtn.onclick = function() {buyFarm();}
mineBtn.onclick = function() {buyMine();}
factoryBtn.onclick = function() {buyFactory();}

// upgrade click listeners
rifBtn.onclick = function() {buyRIF();}
ctpcBtn.onclick = function() {buyCTPC();}

ffgBtn.onclick = function() {buyFFG();}
sprpBtn.onclick = function() {buySPRP();}

chBtn.onclick = function() {buyCH();}
fBtn.onclick = function() {buyF();}

sgBtn.onclick = function() {buySG();}
mdBtn.onclick = function() {buyMD();}

scbBtn.onclick = function() {buySCB();}
elBtn.onclick = function() {buyEL();}


// give score for employees
setInterval(function(){ // cursor function because i didnt want to use decimals in the one second function and im too lazy to find a better way
    score += cursorNum * hasRIF * hasCTPC;
    updateScore();
}, 10000)
setInterval(function(){ // same thing as cursor but for grandmas
    score += grandmaNum * hasFFG * hasSPRP;
    updateScore();
}, 1000)

setInterval(function(){ // divide cps by 10 (fires 10 times / second)
    score += farmNum * hasCH * hasF;
    score += mineNum * hasSG * hasMD * 5;
    score += factoryNum * hasSCB * hasEL * 26;

    updateScore();
}, 100);

