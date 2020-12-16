var _this = this;
// Variable, die das eingegeben aus dem HTML aufnimmt
var input = document.getElementById("myInput");
// Funktion, die den Text in ein Element packt
function addToHTML() {
    // Derzeitiges Element festlegen
    var currentElement = document.getElementById("myInput").value;
    // Variable, die neues Element erschafft
    var newElement = document.createElement("li");
    var newCheckbox = document.createElement("checkbox");
    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;
    newElement.className = "Task";
    // Neues Element zum Body hinzufügen
    document.body.appendChild(newElement);
    newElement.appendChild(newCheckbox);
    console.log(newCheckbox);
}
// Löscht Zeile nach Enter
function clear() {
    document.getElementById("myInput").value = "";
}
// Index
var index = 0;
// Counter
function counter() {
    document.querySelector("#counter").innerHTML = index + " open tasks";
}
counter();
// Event, dass bei Enter press die Funktion aufruft+Zeile cleart+count anführt
input.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addToHTML();
        clear();
        _this.currentElement = null;
        index++;
        counter();
    }
});
//# sourceMappingURL=09_script.js.map