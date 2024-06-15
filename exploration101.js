// export{} //solves duplicate function error
var _a;
var textDisplayParagraph = (_a = document.getElementById("textDisplay")) === null || _a === void 0 ? void 0 : _a.innerHTML;
function showText() {
    var textToDisplay = "testing";
    textDisplayParagraph = textToDisplay;
}
