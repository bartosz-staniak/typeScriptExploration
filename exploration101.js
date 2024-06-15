"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showText() {
    var textDisplayDiv = document.getElementById("textDisplay");
    var textToDisplay = "testing";
    if (textDisplayDiv)
        textDisplayDiv.innerHTML = textToDisplay;
}
