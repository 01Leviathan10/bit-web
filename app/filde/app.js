 "use strict"
var player1 = document.querySelector('#player');
var bacground1 = document.querySelector('#bacground');
var butten1 = document.querySelector("#button");
bacground1.onclick = function (event) {
var x = event.clientX - player1.width/2;
var y = event.clientY -player1.height/2;
player1.style.top = y + "px";
player1.style.left = x + "px";
};
butten1.onclick = function () {
    bacground1.onclick = "";
}

