// export{} //solves duplicate function error

function showText() {
    
    const textDisplayParagraph = document.getElementById("textDisplay");

    var textToDisplay = "testing";

    textDisplayParagraph?.textContent = textToDisplay;
}