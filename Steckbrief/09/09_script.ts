// Leere Liste
var list: string [] = [];

// Variable, die das eingegeben aus dem HTML aufnimmt
var input = document.getElementById("myInput");

// Funktion, die das aufgenommene Element pusht
function addToList (event: any) {
console.log(event);
list.push(event);
}

// Event, dass bei Input die Funktion aufruft
input.addEventListener("input", addToList)

// Liste wird in Konsole ausgegeben
console.log(list);





 //   input.addEventListener("input", (event) => {
 //       console.log("Input received: ", event.target.value);
 //   }
 //   )

