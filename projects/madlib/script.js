// Mad Lib

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib)

// Event Function
function buildMadLib() {
    // Input
    let schoolSubject = document.getElementById("schoolSubject").value;
    let colour = document.getElementById("colour").value;
    let noun = document.getElementById("noun").value;

    // Process:
    let result = 'In ' + schoolSubject + ' class, our teacher was wearing a ' + colour + ' ' + noun + '.';


    // Output
    document.getElementById("result").innerHTML = result;

}