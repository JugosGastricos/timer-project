const goButton = document.getElementById("go");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const printTimer = document.getElementById("timer");


// stopButton.addEventListener("click")

let seconds = 0;
let minutes = 0;
let hours = 0;
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
    printTimer.innerText = `${hours}:${minutes}:${seconds}`;
}

goButton.addEventListener("click", timer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);