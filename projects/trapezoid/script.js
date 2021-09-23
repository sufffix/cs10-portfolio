// Trapezoid Area Calculator

// Event Listener
document.getElementById("calcBtn").addEventListener("click", calcArea);

// Event Function
function calcArea() {

    // Input
    let sideA = +document.getElementById("sideaIn").value;
    let sideB = +document.getElementById("sidebIn").value;
    let height = +document.getElementById("heightIn").value;

    // Process
    let area = (1/2 * (sideA + sideB) * height);

    // Output
    document.getElementById("areaOut").innerHTML = area;

}