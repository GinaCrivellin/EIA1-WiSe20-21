var _this = this;
// Variable, die das eingegeben aus dem HTML aufnimmt
var input = document.getElementById("myInput");
var newElement = document.createElement("li");
var trashIcon = document.createElement("i");
// Index
var index = 0;
// Funktion, die den Text in ein Element packt
function addToHTML() {
    // Derzeitiges Element festlegen
    var currentElement = document.getElementById("myInput").value;
    // Variable, die neues Element erschafft
    var newElement = document.createElement("label");
    var newCheckbox = document.createElement("input");
    var trashIcon = document.createElement("i");
    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;
    newElement.className = "Task";
    trashIcon.className = "fas fa-trash-alt trash";
    newCheckbox.type = "checkbox";
    newCheckbox.className = "checkbox";
    // Neues Element(Task) zum Body hinzufügen
    document.body.appendChild(newElement);
    // Elemente zum Task hinzufügen
    newElement.appendChild(trashIcon);
    newElement.appendChild(newCheckbox);
    trashIcon.addEventListener("click", function () {
        document.body.removeChild(newElement);
    });
}
// Löscht Zeile nach Enter
function clear() {
    document.getElementById("myInput").value = "";
}
// Counter
function counter() {
    document.querySelector("#counter").innerHTML = index + " open tasks";
}
// Counter immer am Anfang schon einmal ausführen
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