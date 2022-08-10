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
    tagId.innerText = `${flag}${param} 0${minutes}:0${seconds}:0${miliseconds}`;

    if(miliseconds > 9){
        tagId.innerText = `${flag}${param} 0${minutes}:0${seconds}:${miliseconds}`;
    }
    if (seconds > 9) {
        tagId.innerText = `${flag}${param} 0${minutes}:${seconds}:${miliseconds}`;
    }
    if (minutes > 9) {
        tagId.innerText = `${flag}${param} ${minutes}:${seconds}:${miliseconds}`;
    }
    if (hours > 0) {
        tagId.innerText = `${flag}${param} 0${hours}:${minutes}:${seconds}:${miliseconds}`;
    } else if (hours > 9) {
        tagId.innerText = `${flag}${param} ${hours}:${minutes}:${seconds}:${miliseconds}`;
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