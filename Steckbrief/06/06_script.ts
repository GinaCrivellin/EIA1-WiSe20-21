

    var Europa18: number = 4209.3;
    var Australien18: number = 2100.5;
    var Asien18: number = 16274.1;
    var SüdAmerica18: number = 1261.5;
    var NordAmerica18: number = 6035.6;
    var Africa18: number = 1235.5;

    var Europa08: number = 4965.7;
    var Australien08: number = 1993;
    var Asien08: number = 12954.7;
    var SüdAmerica08: number = 1132.6;
    var NordAmerica08: number = 6600.4;
    var Africa08: number = 1028;

    var Total: number = (Europa18+Australien18+Asien18+SüdAmerica18+NordAmerica18+Africa18);

    console.log(Total)

    var europeRel: number = Math.round(Europa18/Total*100);
    var australiaRel: number = Math.round(Australien18/Total*100);
    var asiaRel: number= Math.round(Asien18/Total*100);
    var southAmericaRel: number = Math.round(SüdAmerica18/Total*100);
    var northAmericaRel: number = Math.round(NordAmerica18/Total*100);
    var africaRel: number = Math.round(Africa18/Total*100);

    var europeGrow: number = Math.round(Europa18/Europa08*100);
    var australiaGrow: number= Math.round(Australien18/Australien08*100);
    var asiaGrow: number = Math.round(Asien18/Asien08*100);
    var southAmericaGrow: number = Math.round(SüdAmerica18/SüdAmerica08*100);
    var northAmericaGrow: number = Math.round(NordAmerica18/NordAmerica08*100);
    var africaGrow: number = Math.round(Africa08/Africa18*100);

    var europeMinus: number = Math.round(Europa18-Europa08);
    var australiaMinus: number = Math.round(Australien18-Australien08);
    var asiaMinus: number = Math.round(Asien18-Asien08);
    var southAmericaMinus: number = Math.round(SüdAmerica18-SüdAmerica08);
    var northAmericaMinus: number = Math.round(NordAmerica18-NordAmerica08);
    var africaMinus: number = Math.round(Africa18-Africa08);



function myFunctionE(continent: string, 
                     emissions18: number, 
                     emissionsRel: number, 
                     emissionsGrow: number, 
                     emissionsMinus: number)
                     {

    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in "+ continent;

    document.querySelector("p").innerHTML= "Emission absolute of " + continent + " in 2018";
    document.querySelector("h2").innerHTML= emissions18;

    document.querySelector("#h22").innerHTML= emissionsRel + "%";

    document.querySelector("#h23").innerHTML= emissionsGrow + "%";

    document.querySelector("#h24").innerHTML= emissionsMinus + "kg CO2";

    document.querySelector(".chart").setAttribute('style', 'height:' + (emissions18/Total*100) + '%')
}

document.querySelector(".europe").addEventListener("click", myFunctionE.bind(null, "Europe", Europa18, europeRel, europeGrow, europeMinus));

document.querySelector(".northamerica").addEventListener("click", myFunctionE.bind(null, "North America", NordAmerica18, northAmericaRel, northAmericaGrow, northAmericaMinus));

document.querySelector(".southamerica").addEventListener("click", myFunctionE.bind(null, "South America", SüdAmerica18, southAmericaRel, southAmericaGrow, southAmericaMinus));

document.querySelector(".africa").addEventListener("click", myFunctionE.bind(null, "Africa", Africa18, africaRel, africaGrow, africaMinus));

document.querySelector(".asia").addEventListener("click", myFunctionE.bind(null, "Asia", Asien18, asiaRel, asiaGrow, asiaMinus));

document.querySelector(".australia").addEventListener("click", myFunctionE.bind(null, "Australia", Australien18, australiaRel, australiaGrow, australiaMinus));
