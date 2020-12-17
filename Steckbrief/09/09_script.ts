// Variable, die das eingegeben aus dem HTML aufnimmt
var input: HTMLElement = document.getElementById("myInput");

var newElement: HTMLElement = document.createElement("li");

let trashIcon: HTMLElement = document.createElement("i");

// Index
var index: number = 0;

// Funktion, die den Text in ein Element packt
function addToHTML (): void {

    var wrapper: HTMLElement = document.getElementById("Flexbox");

    // Derzeitiges Element festlegen
    var currentElement: string = (<HTMLInputElement>document.getElementById("myInput")).value;

    // Variable, die neues Element erschafft
    var newElement: HTMLElement = document.createElement("label");
    
    var newCheckbox: HTMLInputElement = document.createElement("input");

    let trashIcon: HTMLElement = document.createElement("i");

    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;
    newElement.className = "Task";

    trashIcon.className = "fas fa-trash-alt trash";

    newCheckbox.type = "checkbox";
    newCheckbox.className = "checkbox";

    // Neues Element(Task) zum Body hinzufügen
    wrapper.appendChild(newElement);
    // Elemente zum Task hinzufügen
    wrapper.appendChild(trashIcon);
    wrapper.appendChild(newCheckbox);

    trashIcon.addEventListener("click", function(): void {
        newElement.remove();
        index--;
    }
    );
}

// Löscht Zeile nach Enter
function clear(): void {
    (<HTMLInputElement>document.getElementById("myInput")).value = "";
}

// Counter
function counter(): void {
    document.querySelector("#counter").innerHTML = index + " open tasks";
}

// Counter immer am Anfang schon einmal ausführen
counter();

// Event, dass bei Enter press die Funktion aufruft+Zeile cleart+count anführt
input.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addToHTML();
        clear();
        this.currentElement = null;
        index++;
        counter();
    }
}
);