// Variable, die das eingegeben aus dem HTML aufnimmt
var input = document.getElementById("myInput");
// Funktion, die den Text in ein Element packt
function addToHTML() {
    // Derzeitiges Element festlegen
    var currentElement = document.getElementById("myInput").value;
    // Variable, die neues Element erschafft
    var newElement = document.createElement("Task");
    // Neues Element zum Body hinzufügen
    document.body.appendChild(newElement);
    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;
    console.log(currentElement);
}
// Event, dass bei Enter press die Funktion aufruft
input.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addToHTML();
    }
});
//# sourceMappingURL=09_script.js.map