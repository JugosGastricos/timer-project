const goButton = document.getElementById("go");
const pauseButton = document.getElementById("pause");
const flagButton = document.getElementById("flag");
const stopButton = document.getElementById("stop");

const printTimer = document.getElementById("timer");
const printFlag = document.getElementById("printFlag");

let mili = 0;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let count = 0;
let interval;
let flagedTimes = [];

const hideButton = (button) => {
    button.setAttribute("hidden", true);
}

const showButton = (button) => {
    button.removeAttribute("hidden");
}

printTimer.innerText = `0${minutes}:0${seconds}.0${miliseconds}`;

const cleanLook = (flag,count,tagId) => {
    if (hours > 0) {
        tagId.innerText = `${flag}${count} ${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}.${miliseconds > 9 ? miliseconds : "0" + miliseconds}`;
    } else {
        tagId.innerText = `${flag}${count} ${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}.${miliseconds > 9 ? miliseconds : "0" + miliseconds}`;
    }
}

const timer = () => {
    interval = setInterval(() => {
        mili ++
        miliseconds ++
        if(mili % 100 === 0){
            miliseconds = 0;
            seconds ++
            if(mili % 6000 === 0){
                seconds = 0;
                minutes ++;
                if (mili % 60000 === 0){
                    minutes = 0;
                    hours ++;
                }
            }
        }
        cleanLook("","",printTimer);
    }, 10);
    
    hideButton(goButton);
    hideButton(stopButton);
    showButton(pauseButton);
    showButton(flagButton);
}

const pauseTimer = () => {
    clearInterval(interval);
    interval = null;
    
    hideButton(pauseButton);
    hideButton(flagButton);
    showButton(goButton);
    showButton(stopButton);
}

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    count = 0;
    printTimer.innerText = `0${minutes}:0${seconds}.0${miliseconds}`;
    printFlag.innerText = ``;
    flagedTimes = [];
    mili = 0;
    
    hideButton(stopButton);
}


const flag = () => {
    count ++;
    flagedTimes.push(mili);
    console.log(flagedTimes);

    const newParagraph = document.createElement("p");
    const newDiv = document.createElement("div");
    newDiv.className = "new-div";
    newParagraph.className = "new-input";
    newDiv.appendChild(newParagraph);
    printFlag.appendChild(newDiv);
    cleanLook('🚩',count + ':',newParagraph);
    
    const newSpan = document.createElement("span");
    newSpan.className = "new-input new-span";
    newDiv.appendChild(newSpan);
    
    const timeDifference = () => {
        let x;
        let y;
        let z;
        let add;

        const substract = mili - flagedTimes[flagedTimes.length - 2];

        console.log(substract)
        z = Number(Math.floor(substract)/100);
        
        if(flagedTimes.length > 1){
            newSpan.innerText = `+ 00:${z}`;
            console.log(`00:${z}`)
        }

        if (z > 60) {
            x = Math.floor(z/10)*10;
            y = (z - x).toFixed(2)
            console.log(y,z);
            add = Math.floor(x / 60);
            console.log(`0${add}:${y}`);
            newSpan.innerText = `+ ${add < 9 ? "0" + add : add}:${z}`;
        }
        
    };
    timeDifference();
}

goButton.addEventListener("click", timer);
pauseButton.addEventListener("click", pauseTimer);
flagButton.addEventListener("click", flag);
stopButton.addEventListener("click", stopTimer);