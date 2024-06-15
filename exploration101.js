"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// yet produces in the browser logs a "ReferenceError: exports is not defined"
function showText() {
    var textDisplayDiv = document.getElementById("textDisplay");
    var textToDisplay = "testing";
    if (textDisplayDiv)
        textDisplayDiv.innerHTML = textToDisplay;
}
