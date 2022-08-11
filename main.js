const goButton = document.getElementById("go");
const pauseButton = document.getElementById("pause");
const flagButton = document.getElementById("flag");
const stopButton = document.getElementById("stop");

const printTimer = document.getElementById("timer");
const printFlag = document.getElementById("printFlag");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let count = 0;
let interval;
printTimer.innerText = `0${minutes}:0${seconds}:0${miliseconds}`;

const cleanLook = (flag,param,tagId) => {
    if (hours > 0) {
        tagId.innerText = `${flag}${param} ${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}:${miliseconds > 9 ? miliseconds : "0" + miliseconds}`;
    } else {
        tagId.innerText = `${flag}${param} ${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}:${miliseconds > 9 ? miliseconds : "0" + miliseconds}`;
    }
}

const timer = () => {
    interval = setInterval(() => {
        miliseconds ++
        if(miliseconds === 100){
            miliseconds = 0;
            seconds ++
        }
        if(seconds === 60){
            seconds = 0;
            minutes ++;
            // console.log(`Minutes: ${minutes}`);
            if (minutes === 60){
                minutes = 0;
                hours ++;
                // console.log(`Hours: ${hours}`);
            }
        }
        // console.log(`Seconds: ${seconds}`);
        cleanLook("","",printTimer);
    }, 10);
    return goButton = pauseButton;
}


const pauseTimer = () => {
    clearInterval(interval);
    interval = null;
}

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    count = 0;
    printTimer.innerText = `0${minutes}:0${seconds}:0${miliseconds}`;
    printFlag.innerText = ``;
}

const flag = () => {
    count ++;

    const newParagraph = document.createElement("p");
    newParagraph.className = "new-input";
    printFlag.appendChild(newParagraph);
    cleanLook('🚩',count + ':',newParagraph);
}

goButton.addEventListener("click", timer);
pauseButton.addEventListener("click", pauseTimer);
flagButton.addEventListener("click", flag);
stopButton.addEventListener("click", stopTimer);