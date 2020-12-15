// Variable, die das eingegeben aus dem HTML aufnimmt
var input: HTMLElement = document.getElementById("myInput");

// Funktion, die den Text in ein Element packt
function addToHTML (): void {

    // Derzeitiges Element festlegen
    var currentElement: string = (<HTMLInputElement>document.getElementById("myInput")).value;

    // Variable, die neues Element erschafft
    var newElement: HTMLElement = document.createElement("Task");

    // Neues Element zum Body hinzufügen
    document.body.appendChild(newElement);

    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;

    console.log(currentElement);
}

// Event, dass bei Enter press die Funktion aufruft
input.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addToHTML();
    }

}
);
