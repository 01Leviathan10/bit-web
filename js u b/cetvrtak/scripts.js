
function selektor() {

    var paket = document.querySelector(".select");
    var dodeliPaketu = paket.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    paket.className = "";
    dodeliPaketu.className = "select";

}

function function1() {
    var element = document.querySelectorAll("li")[0].textContent;
    alert(element);
}

function function2(text) {
    var element = document.querySelectorAll("li")[2].textContent = text;
}

function appendSelect(node, options) {
    var content = "<select>";
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        content += "<option>" + element + "</option>";
    }
    content += "</select>";
    node.innerHTML += content;
}


//var nodeArray = [document.querySelectorAll("div")[0], document.querySelectorAll("div")[1]];
//var optionsArray = [["prva", "druga", "treca"], ["1", "2", "3"]];

function appendSelect2(nodeArray, optionsArray) {
    var content1 = "<select>";
    for (var i = 0; i < optionsArray[0].length; i++) {
        var element = optionsArray[0][i];
        content1 += "<option>" + element + "</option>";
    }
    content1 += "</select>";
    var content2 = "<select>";
    for (var j = 0; j < optionsArray[1].length; j++) {
        var element = optionsArray[1][j];
        content2 += "<option>" + element + "</option>";
    }
    content2 += "</select>";
    nodeArray[0].innerHTML += content1;
    nodeArray[1].innerHTML += content2;
}


function appendSelect3(node, options) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        var option = document.createElement("option");
        var text = document.createTextNode(element);
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select); 
}



function appendSelect4(node, options) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
        var element = options[i];
        var option = document.createElement("option");
        var text = document.createTextNode(element);
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select);
}