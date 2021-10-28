// main script for cookie clicker ripoff

// button click listeners
clicker.onclick = function() {onClick();}
inputScoreBtn.onclick = function() {inputScore();}

// key press listeners
addEventListener("keydown", keyDownHandler2);
function keyDownHandler2() {keyDownHandler();}
addEventListener("keyup", keyUpHandler2);
function keyUpHandler2() {keyUpHandler();}

// building click listeners
cursorBtn.onclick = function() {buyCursor();}
grandmaBtn.onclick = function() {buyGrandma();}
farmBtn.onclick = function() {buyFarm();}
mineBtn.onclick = function() {buyMine();}

// upgrade click listeners
rifBtn.onclick = function() {buyRIF();}
ctpcBtn.onclick = function() {buyCTPC();}
ffgBtn.onclick = function() {buyFFG();}
chBtn.onclick = function() {buyCH();}
sgBtn.onclick = function() {buySG();}

// give score for employees
setInterval(function(){ // cursor function because i didnt want to use decimals in the one second function and im too lazy to find a better way
    score += cursorNum * hasRIF * hasCTPC;
    scorePar.innerHTML = score.toLocaleString();
}, 10000)
setInterval(function(){ // same thing as cursor but for grandmas
    score += grandmaNum * hasFFG;
    scorePar.innerHTML = score.toLocaleString();
}, 1000)

setInterval(function(){ // divide cps by 10 (fires 10 times / second)
    score += farmNum * hasCH;
    score += mineNum * hasSG * 5;

    scorePar.innerHTML = score.toLocaleString();
}, 100);

