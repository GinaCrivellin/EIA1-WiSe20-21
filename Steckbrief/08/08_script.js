var ButtonPlay1 = new Audio('assets/hihat.mp3');
var ButtonPlay2 = new Audio('assets/kick.mp3');
var ButtonPlay3 = new Audio('assets/snare.mp3');
var ButtonPlay4 = new Audio('assets/A.mp3');
var ButtonPlay5 = new Audio('assets/C.mp3');
var ButtonPlay6 = new Audio('assets/F.mp3');
var ButtonPlay7 = new Audio('assets/G.mp3');
var ButtonPlay8 = new Audio('assets/laugh-1.mp3');
var ButtonPlay9 = new Audio('assets/laugh-2.mp3');
function myFunction(VarButton) {
    VarButton.play();
}
document.querySelector(".FlexButton1").addEventListener("click", myFunction.bind(null, ButtonPlay1));
document.querySelector(".FlexButton2").addEventListener("click", myFunction.bind(null, ButtonPlay2));
document.querySelector(".FlexButton3").addEventListener("click", myFunction.bind(null, ButtonPlay3));
document.querySelector(".FlexButton4").addEventListener("click", myFunction.bind(null, ButtonPlay4));
document.querySelector(".FlexButton5").addEventListener("click", myFunction.bind(null, ButtonPlay5));
document.querySelector(".FlexButton6").addEventListener("click", myFunction.bind(null, ButtonPlay6));
document.querySelector(".FlexButton7").addEventListener("click", myFunction.bind(null, ButtonPlay7));
document.querySelector(".FlexButton8").addEventListener("click", myFunction.bind(null, ButtonPlay8));
document.querySelector(".FlexButton9").addEventListener("click", myFunction.bind(null, ButtonPlay9));
/*
var indexWhile = 0;

while (indexWhile < 5){


    var Beat : HTMLAudioElement[] = [ButtonPlay1, ButtonPlay2,ButtonPlay3];

    var index = 0;

    function BeatInterval() : void {
        Beat[index].play();
        index=index+1;
    }

    function IntervallFunction() {
        setInterval(BeatInterval, 500);
    }

    document.querySelector(".FlexPlayButton").addEventListener("click", IntervallFunction);

indexWhile++;

}
*/
// Hier werden die Funktionen "definiert":
function foo() {
    console.log("Hello :)");
}
var bar = function () {
    console.log("Hello :)");
};
var baz = function () {
    console.log("Hello :)");
};
// Jetzt werden die Funktionen "aufgerufen" oder "ausgeführt":
foo();
bar();
baz();
var index = 0;
var myInterval;
var switchPlay = document.querySelector('.FlexPlayButton');
var switchPause = document.querySelector('.FlexPauseButton');
var Beat = [ButtonPlay1, ButtonPlay2, ButtonPlay3];
document.querySelector(".FlexPlayButton").addEventListener("click", function () {
    myInterval = setInterval(function () {
        if (index <= 2) {
            Beat[index].play();
            index++;
        }
        else {
            index = 0;
            Beat[index].play();
            index++;
        }
    }, 600);
    if (switchPlay.classList.contains('inactive')) {
        switchPlay.classList.remove('inactive');
        switchPause.classList.add('innactive');
        clearInterval(myInterval);
    }
    else {
        switchPlay.classList.add('inactive');
        switchPause.classList.remove('inactive');
    }
});
document.querySelector(".FlexPauseButton").addEventListener("click", function () {
    if (switchPlay.classList.contains('inactive')) {
        switchPlay.classList.remove('inactive');
        switchPause.classList.add('inactive');
        clearInterval(myInterval);
    }
    else {
        switchPlay.classList.add('inactive');
        switchPause.classList.add('inactive');
    }
});
console.log(switchPlay.getAttribute('class'));
//# sourceMappingURL=08_script.js.map