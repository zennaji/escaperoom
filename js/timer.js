

const timer = document.querySelector(".timer");
const timerStart = 10;
let time = timerStart * 60;

export function updateTimer(){
    const minutes = Math.floor(time/60);
    let seconds = time %60;
    timer.textContent = `${minutes}:${seconds}`

    if( minutes !== -1 && seconds !== -1 ){
        time--
    }
    if( minutes == -1 && seconds == -1 ){
        timer.textContent = "00:00";
    }
}

export function getTimer(){
    timer.classList.remove("hidden");
    timer.classList.add("block");
}

