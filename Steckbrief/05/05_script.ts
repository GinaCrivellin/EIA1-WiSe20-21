console.log("Hello World")

var total : number = 4209.3 + 2100.5+ 16275 + 1261.5 + 
                     6035.6 + 1235.5


var countries : object = {
    Europa: [4209.3, 4965.7],
    Australien: [2100.5, 1993],
    Asien: [16274.1, 12954.7],
    "Süd Amerika": [1261.5, 1261.5],
    "Nord Amerika": [6025.6, 6600.4],
    Africa: [1235.5, 1028],
}


for (var [country,values] of Object.entries(countries)) {
    var newer : number = values[0]
    var old : number = values[1]
    console.log("Die Emission von " + country + " ist: " + newer + "kg CO2")
    console.log("Relativ zur Gesamtemission der Welt verursacht " + country + " damit "+ (old/total*100) + "%")
    console.log("Für " + country + " hat sich 2018 im Vergleich zu 2008 die Emission um " + (newer/old*100) + "% verändert") 
    console.log("2018 im Vergleich zu 2008 sind das "+ (newer-old) +"kg CO2")
}