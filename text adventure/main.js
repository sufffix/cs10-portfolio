// text adventure js


// global variables
let game = document.getElementById("game");
let prompt = document.getElementsByClassName("activePrompt")[0];
let response = document.getElementsByClassName("activeResponse")[0];

// add event listeners
document.getElementById("start").addEventListener("click", startGame);
document.addEventListener("keydown", keydownHandler);

// event functions
function startGame() {
    game.style.display="block";

    let promptPreset = Math.random();
    console.log(promptPreset);

    if (promptPreset > 0.5) {
        prompt.innerHTML = "You are in a dark sewer with paths to your left and right.";
    } else {
        prompt.innerHTML = "the other one";
    }
}

function keydownHandler(event) {
    if (event.code == "Enter") {
        response.disabled = true;
        prompt.classList.remove("activePrompt");
        response.classList.remove("activeResponse");

        
    }
}