const goButton = document.getElementById("go");
const pauseButton = document.getElementById("pause");
const flagButton = document.getElementById("flag");
const stopButton = document.getElementById("stop");

const printTimer = document.getElementById("timer");
const printFlag = document.getElementById("printFlag");


// stopButton.addEventListener("click")

let seconds = 0;
let minutes = 0;
let hours = 0;
let count = 0;
let interval;
printTimer.innerText = `${hours}:${minutes}:${seconds}`;

const timer = () => {
    interval = setInterval(() => {
        seconds ++
        if(seconds === 5){
            seconds = 0;
            minutes ++;
            console.log(`Minutes: ${minutes}`);
            if (minutes === 5){
                minutes = 0;
                hours ++;
                console.log(`Hours: ${hours}`);
            }
        }
        console.log(`Seconds: ${seconds}`);
        printTimer.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

const pauseTimer = () => {
    clearInterval(interval);
    interval = null;
}

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    count = 0;
    printTimer.innerText = `${hours}:${minutes}:${seconds}`;
    printFlag.innerText = ``;
}

const flag = () => {
    const saveFlag = [];
    count ++;
    
    saveFlag.push({hours, minutes, seconds});
    saveFlag.forEach((value) => {
        const newParagraph = document.createElement("p");
        newParagraph.className = "new-input";
        printFlag.appendChild(newParagraph);
        newParagraph.innerText = `🚩${count}: ${value.hours}:${value.minutes}:${value.seconds} \n`;
        saveFlag.shift();
    })
}

goButton.addEventListener("click", timer);
pauseButton.addEventListener("click", pauseTimer);
flagButton.addEventListener("click", flag);
stopButton.addEventListener("click", stopTimer);