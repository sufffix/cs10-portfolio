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
bankBtn.onclick = function() {buyBank();}
templeBtn.onclick = function() {buyTemple();}

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

ttBtn.onclick = function() {buyTT();}
srccBtn.onclick = function() {buySRCC();}

giBtn.onclick = function() {buyGI();}
sBtn.onclick = function() {buyS();}

// golden cookie click listener
gCookieEl.onclick = function() {goldCookieClicked();}


// give score for employees
setInterval(function(){ // cursor function for less decimals
    score += cursorNum * hasRIF * hasCTPC * frenzy;
    updateScore();
}, 10000)
setInterval(function(){ // same thing as cursor but for grandmas
    score += grandmaNum * hasFFG * hasSPRP * frenzy;
    updateScore();
}, 1000)

setInterval(function(){ // divide cps by 10 (fires 10 times / second)
    score += farmNum * hasCH * hasF * frenzy;
    score += mineNum * hasSG * hasMD * 5 * frenzy;
    score += factoryNum * hasSCB * hasEL * 26 * frenzy;
    score += bankNum * hasTT * hasSRCC * 140 * frenzy;
    score += templeNum * hasGI * hasS * 780 * frenzy;

    updateScore();
}, 100);

