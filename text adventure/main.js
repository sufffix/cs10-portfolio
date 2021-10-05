// text adventure js


// global variables
let game = document.getElementById("game");
let dagger = false;

// add event listeners
document.getElementById("start").addEventListener("click", startGame);

// event functions

// game
function startGame() { 
    let ans = prompt("You awake in a sewer with tunnels to the east and west.");

    if (ans == "go east") {
        stage0();
    } else if (ans == "go west") {
        stage1();
    }

    
    function stage0() {
        ans = prompt("You come to a large open room. You hear eerie noises coming from the north end.");
         
        if (ans == "go east" || ans == "go south") {
            alert("There's a wall");
            stage0();

        } else if (ans == "go north") {
            stage00();
        } else if (ans == "go west") {
            startGame();
        } else {
            alert("Unknown command.")
            stage0();
        }
    }

    function stage00() {
        ans = prompt("After walking for about a minute, you see a sillhouette through the darkness.")

        if (ans == "go north") {
            stage000();
        } else if (ans == "go south") {
            alert("You walk back.");
            stage0();
        } else if (ans == "go west" || ans == "go east") {
            alert("There's a wall.");
            stage00();
        } else if (ans == "attack sillhouette") {
            stage001();
        } else {
            alert("Unknown command.");
            stage00();
        }
    }

    function stage000() {
        ans = prompt("As you get closer the sillhouette fades away. You see you're at the end of the room. There is a tunnel to the east and north.");
        if (ans == "go north") {
            stage0000();
        } else if (ans == "go east") {
            stage0001();
        } else {
            alert("Unknown command.");
            stage000();
        }
    }

    function stage001() {
        if (dagger == true) {
            alert("You lunge at the sillhouette with your dagger. It attempts to parry the blow but fails.");
            ans = confirm("Pull back the hood?");
            if (ans == true) {
                alert("The person has a misshapen face. They have nothing of use on them.");     
                stage0010();           
            } else {
                stage0010();
            }
        } else {
            alert("You lunge at the sillhouette. It sees you coming, parries the blow and knocks you out. Game over.");
        }
    }

    function stage0010(){
        ans = prompt("You see a tunnel to the north and east.")
        if (ans == "go north") {
            stage0000();
        } else if (ans == "go east") {
            stage0001();
        } else {
            alert("Unknown command.");      
        }
    }

    function stage0000() {
        alert("You see light at the end of the tunnel. You win.");
    }

    function stage0001() {
        alert("You come through and see the sillhouette once again. It lunges at you and knocks you out. Game over.");
    }

    function stage1() {
        ans = prompt("You come out into a room. You see a dagger on the floor.")

        if (ans == "take dagger") {
            dagger = true;
            alert("You pick up the dagger.");
            stage1();
        } else if (ans == "go east") {
            startGame();
        }
        
    }
        
    
}

