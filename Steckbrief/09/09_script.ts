// Variable, die das eingegeben aus dem HTML aufnimmt
var input: HTMLElement = document.getElementById("myInput");

// Funktion, die den Text in ein Element packt
function addToHTML (): void {

    // Derzeitiges Element festlegen
    var currentElement: string = (<HTMLInputElement>document.getElementById("myInput")).value;

    // Variable, die neues Element erschafft
    var newElement: HTMLElement = document.createElement("li");
    
    var newCheckbox: HTMLElement = document.createElement("checkbox");

    // Neues Element wird gleich dem Inhalt des Alten gesetzt
    newElement.innerHTML = currentElement;
    newElement.className = "Task";

    // Neues Element zum Body hinzufügen
    document.body.appendChild(newElement);
    newElement.appendChild(newCheckbox);

    console.log(newCheckbox);
}


// Löscht Zeile nach Enter
function clear(): void {
    (<HTMLInputElement>document.getElementById("myInput")).value = "";
}

// Index
var index: number = 0;

// Counter
function counter(): void {
    document.querySelector("#counter").innerHTML = index + " open tasks";
}

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
