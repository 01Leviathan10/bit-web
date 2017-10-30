var mario1 = document.querySelector("#run");
var mario2 = document.querySelector("#stand");
document.onclick = function () {
    mario1.classList.toggle("blind");
    mario2.classList.toggle("blind")
}