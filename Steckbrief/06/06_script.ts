

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

    var europeRel: string = Math.round(Europa18/Total*100)+ "%";
    var australiaRel: string = Math.round(Australien18/Total*100) +"%";
    var asiaRel: string = Math.round(Asien18/Total*100) + "%";
    var southAmericaRel: string = Math.round(SüdAmerica18/Total*100) + "%";
    var northAmericaRel: string = Math.round(NordAmerica18/Total*100) + "%";
    var africaRel: string = Math.round(Africa18/Total*100) + "%";

    var europeGrow: string = Math.round(Europa18/Europa08*100) + "%";
    var australiaGrow: string = Math.round(Australien18/Australien08*100) + "%";
    var asiaGrow: string = Math.round(Asien18/Asien08*100) + "%";
    var southAmericaGrow: string = Math.round(SüdAmerica18/SüdAmerica08*100) + "%";
    var northAmericaGrow: string = Math.round(NordAmerica18/NordAmerica08*100) + "%";
    var africaGrow: string = Math.round(Africa08/Africa18*100) + "%" ;

    var europeMinus: string = Math.round(Europa18-Europa08) + " kg CO2";
    var australiaMinus: string = Math.round(Australien18-Australien08) + " kg CO2";
    var asiaMinus: string = Math.round(Asien18-Asien08) + " kg CO2";
    var southAmericaMinus: string = Math.round(SüdAmerica18-SüdAmerica08) + " kg CO2";
    var northAmericaMinus: string = Math.round(NordAmerica18-NordAmerica08) + " kg CO2";
    var africaMinus: string = Math.round(Africa18-Africa08) + " kg CO2";



function myFunctionE(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in Europe";

    document.querySelector("p").innerHTML= "Emission absolute of Europe in 2018";
    document.querySelector("h2").innerHTML= Europa18 ;

    document.querySelector("#h22").innerHTML= europeRel ;

    document.querySelector("#h23").innerHTML= europeGrow ;

    document.querySelector("#h24").innerHTML= europeMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (Europa18/Total*100) + '%')
}

document.querySelector(".europe").addEventListener("click", myFunctionE);



function myFunctionN(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in North America";

    document.querySelector("p").innerHTML= "Emission absolute of North America in 2018";
    document.querySelector("h2").innerHTML= NordAmerica18;

    document.querySelector("#h22").innerHTML= northAmericaRel ;

    document.querySelector("#h23").innerHTML= northAmericaGrow ;

    document.querySelector("#h24").innerHTML= northAmericaMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (NordAmerica18/Total*100) + '%')
}

document.querySelector(".northamerica").addEventListener("click", myFunctionN);


function myFunctionS(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in South America";

    document.querySelector("p").innerHTML= "Emission absolute of South America in 2018";
    document.querySelector("h2").innerHTML= SüdAmerica18 ;

    document.querySelector("#h22").innerHTML= southAmericaRel ;

    document.querySelector("#h23").innerHTML= southAmericaGrow ;

    document.querySelector("#h24").innerHTML= southAmericaMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (SüdAmerica18/Total*100) + '%')
}

document.querySelector(".southamerica").addEventListener("click", myFunctionS);

function myFunctionA(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in Africa";

    document.querySelector("p").innerHTML= "Emission absolute of Africa in 2018";
    document.querySelector("h2").innerHTML= Africa18 ;

    document.querySelector("#h22").innerHTML= africaRel ;

    document.querySelector("#h23").innerHTML= africaGrow ;

    document.querySelector("#h24").innerHTML= africaMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (Africa18/Total*100) + '%')
}

document.querySelector(".africa").addEventListener("click", myFunctionA);

function myFunctionAs(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in Asia";

    document.querySelector("p").innerHTML= "Emission absolute of Asia in 2018";
    document.querySelector("h2").innerHTML= Asien18 ;

    document.querySelector("#h22").innerHTML= asiaRel ;

    document.querySelector("#h23").innerHTML= asiaGrow ;

    document.querySelector("#h24").innerHTML= asiaMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (Asien18/Total*100) + '%')
}

document.querySelector(".asia").addEventListener("click", myFunctionAs);

function myFunctionAu(){
    document.querySelector("h1").innerHTML= "Carbon Dioxide Emissions in Australia";

    document.querySelector("p").innerHTML= "Emission absolute of Australia in 2018";
    document.querySelector("h2").innerHTML= Australien18 ;

    document.querySelector("#h22").innerHTML= australiaRel ;

    document.querySelector("#h23").innerHTML= australiaGrow ;

    document.querySelector("#h24").innerHTML= australiaMinus ;

    document.querySelector(".chart").setAttribute('style', 'height:' + (Australien18/Total*100) + '%')
}

document.querySelector(".australia").addEventListener("click", myFunctionAu);

