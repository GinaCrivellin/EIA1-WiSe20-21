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
var isRecording = false;
function recordBeat() {
    isRecording = true;
    beatTones = [];
}
function deleteBeat() {
    isRecording = false;
    beatTones = [];
}
var myInterval;
var switchPlay = document.querySelector('.FlexPlayButton');
var switchPause = document.querySelector('.FlexPauseButton');
/*var Beat : HTMLAudioElement[] = [ButtonPlay1, ButtonPlay2,ButtonPlay3];*/
var beatTones = [ButtonPlay1, ButtonPlay2, ButtonPlay3];
function addToList(varAudioEl) {
    if (isRecording == true) {
        beatTones.push(varAudioEl);
    }
    console.log("List is now: ", beatTones);
}
document.querySelector(".FlexButton1").addEventListener("click", function () { addToList(ButtonPlay1); });
document.querySelector(".FlexButton2").addEventListener("click", function () { addToList(ButtonPlay2); });
document.querySelector(".FlexButton3").addEventListener("click", function () { addToList(ButtonPlay3); });
document.querySelector(".FlexButton4").addEventListener("click", function () { addToList(ButtonPlay4); });
document.querySelector(".FlexButton5").addEventListener("click", function () { addToList(ButtonPlay5); });
document.querySelector(".FlexButton6").addEventListener("click", function () { addToList(ButtonPlay6); });
document.querySelector(".FlexButton7").addEventListener("click", function () { addToList(ButtonPlay7); });
document.querySelector(".FlexButton8").addEventListener("click", function () { addToList(ButtonPlay8); });
document.querySelector(".FlexButton9").addEventListener("click", function () { addToList(ButtonPlay9); });
document.querySelector("#MikroButton").addEventListener("click", recordBeat);
document.querySelector("#DeleteButton").addEventListener("click", deleteBeat);
function changeButton() {
    if (switchPlay.classList.contains('inactive')) {
        switchPlay.classList.remove('inactive');
        switchPause.classList.add('inactive');
        clearInterval(myInterval);
    }
    else {
        switchPlay.classList.add('inactive');
        switchPause.classList.remove('inactive');
    }
}
var index = 0;
document.querySelector(".FlexPlayButton").addEventListener("click", intervalFunction);
function intervalFunction() {
    myInterval = setInterval(function () {
        if (index < beatTones.length) {
            beatTones[index].play();
            index++;
        }
        else {
            index = 0;
            beatTones[index].play();
            index++;
        }
    }, 600);
    changeButton();
}
document.querySelector(".FlexPauseButton").addEventListener("click", changeButton);
//KeyPress Function ab hier
//# sourceMappingURL=08_script.js.map