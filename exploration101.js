"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var textDisplayParagraph = (_a = document.getElementById("textDisplay")) === null || _a === void 0 ? void 0 : _a.innerHTML;
function showText() {
    var textToDisplay = "testing";
    textDisplayParagraph = textToDisplay;
}
