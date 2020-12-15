var buttonPlay1: HTMLAudioElement = new Audio("assets/hihat.mp3");

var buttonPlay2: HTMLAudioElement = new Audio("assets/kick.mp3");

var buttonPlay3: HTMLAudioElement = new Audio("assets/snare.mp3");

var buttonPlay4: HTMLAudioElement = new Audio("assets/A.mp3");

var buttonPlay5: HTMLAudioElement = new Audio("assets/C.mp3");

var buttonPlay6: HTMLAudioElement = new Audio("assets/F.mp3");

var buttonPlay7: HTMLAudioElement = new Audio("assets/G.mp3");

var buttonPlay8: HTMLAudioElement = new Audio("assets/laugh-1.mp3");

var buttonPlay9: HTMLAudioElement = new Audio("assets/laugh-2.mp3");

function myFunction (varButton: HTMLAudioElement): void {
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

var beatTones: HTMLAudioElement[] = [buttonPlay1, buttonPlay2, buttonPlay3];

var isRecording: boolean = false;

function recordBeat(): void {
    isRecording = true;
    beatTones = [];
}

function deleteBeat(): void {
    isRecording = false;
    beatTones = [];
}



var myInterval: number;

var switchPlay: HTMLElement = document.querySelector(".FlexPlayButton");
var switchPause: HTMLElement = document.querySelector(".FlexPauseButton");


function addToList (varAudioEl: HTMLAudioElement): void {
    if (isRecording == true) {
        beatTones.push(varAudioEl);
    }

    console.log("List is now: ", beatTones);
}

document.querySelector(".FlexButton1").addEventListener("click", function(): void { addToList(buttonPlay1); });
document.querySelector(".FlexButton2").addEventListener("click", function(): void { addToList(buttonPlay2); });
document.querySelector(".FlexButton3").addEventListener("click", function(): void  { addToList(buttonPlay3); });
document.querySelector(".FlexButton4").addEventListener("click", function(): void  { addToList(buttonPlay4); });
document.querySelector(".FlexButton5").addEventListener("click", function(): void  { addToList(buttonPlay5); });
document.querySelector(".FlexButton6").addEventListener("click", function(): void  { addToList(buttonPlay6); });
document.querySelector(".FlexButton7").addEventListener("click", function(): void  { addToList(buttonPlay7); });
document.querySelector(".FlexButton8").addEventListener("click", function(): void  { addToList(buttonPlay8); });
document.querySelector(".FlexButton9").addEventListener("click", function(): void { addToList(buttonPlay9); });


document.querySelector("#MikroButton").addEventListener("click", recordBeat);
document.querySelector("#DeleteButton").addEventListener("click", deleteBeat)

function changeButton (): void {
    if (switchPlay.classList.contains("inactive")) {
        switchPlay.classList.remove("inactive");
        switchPause.classList.add("inactive");
        clearInterval(myInterval);
    }
    
    else {
        switchPlay.classList.add("inactive");
        switchPause.classList.remove("inactive");
    }
}

var index: number = 0;

document.querySelector(".FlexPlayButton").addEventListener("click", intervalFunction);

function intervalFunction (): void {
    myInterval = setInterval(() => {
        if (index < beatTones.length) {
            beatTones[index].play();
            index++;
        }
        else {
            index = 0;
            beatTones[index].play(); 
            index++;
        }
},                           600);
    
    changeButton();

}

document.querySelector(".FlexPauseButton").addEventListener("click", changeButton);

//KeyPress Function ab hier