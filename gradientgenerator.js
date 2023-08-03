var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var gradient = document.querySelector("h3")
var body = document.getElementById("body")


function gard() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    gradient.textContent = body.style.background + ";"

}

color1.addEventListener("input", gard);
color2.addEventListener("input", gard);


