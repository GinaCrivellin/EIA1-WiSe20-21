var buttonPlay1 = new Audio("assets/hihat.mp3");
var buttonPlay2 = new Audio("assets/kick.mp3");
var buttonPlay3 = new Audio("assets/snare.mp3");
var buttonPlay4 = new Audio("assets/A.mp3");
var buttonPlay5 = new Audio("assets/C.mp3");
var buttonPlay6 = new Audio("assets/F.mp3");
var buttonPlay7 = new Audio("assets/G.mp3");
var buttonPlay8 = new Audio("assets/laugh-1.mp3");
var buttonPlay9 = new Audio("assets/laugh-2.mp3");
function myFunction(varButton) {
    varButton.play();
}
document.querySelector(".FlexButton1").addEventListener("click", myFunction.bind(null, buttonPlay1));
document.querySelector(".FlexButton2").addEventListener("click", myFunction.bind(null, buttonPlay2));
document.querySelector(".FlexButton3").addEventListener("click", myFunction.bind(null, buttonPlay3));
document.querySelector(".FlexButton4").addEventListener("click", myFunction.bind(null, buttonPlay4));
document.querySelector(".FlexButton5").addEventListener("click", myFunction.bind(null, buttonPlay5));
document.querySelector(".FlexButton6").addEventListener("click", myFunction.bind(null, buttonPlay6));
document.querySelector(".FlexButton7").addEventListener("click", myFunction.bind(null, buttonPlay7));
document.querySelector(".FlexButton8").addEventListener("click", myFunction.bind(null, buttonPlay8));
document.querySelector(".FlexButton9").addEventListener("click", myFunction.bind(null, buttonPlay9));
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
var switchPlay = document.querySelector(".FlexPlayButton");
var switchPause = document.querySelector(".FlexPauseButton");
/*var Beat : HTMLAudioElement[] = [ButtonPlay1, ButtonPlay2,ButtonPlay3];*/
var beatTones = [buttonPlay1, buttonPlay2, buttonPlay3];
function addToList(varAudioEl) {
    if (isRecording == true) {
        beatTones.push(varAudioEl);
    }
    console.log("List is now: ", beatTones);
}
document.querySelector(".FlexButton1").addEventListener("click", function () { addToList(buttonPlay1); });
document.querySelector(".FlexButton2").addEventListener("click", function () { addToList(buttonPlay2); });
document.querySelector(".FlexButton3").addEventListener("click", function () { addToList(buttonPlay3); });
document.querySelector(".FlexButton4").addEventListener("click", function () { addToList(buttonPlay4); });
document.querySelector(".FlexButton5").addEventListener("click", function () { addToList(buttonPlay5); });
document.querySelector(".FlexButton6").addEventListener("click", function () { addToList(buttonPlay6); });
document.querySelector(".FlexButton7").addEventListener("click", function () { addToList(buttonPlay7); });
document.querySelector(".FlexButton8").addEventListener("click", function () { addToList(buttonPlay8); });
document.querySelector(".FlexButton9").addEventListener("click", function () { addToList(buttonPlay9); });
document.querySelector("#MikroButton").addEventListener("click", recordBeat);
document.querySelector("#DeleteButton").addEventListener("click", deleteBeat);
function changeButton() {
    if (switchPlay.classList.contains("inactive")) {
        switchPlay.classList.remove("inactive");
        switchPause.classList.add("inactive");
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