// Variabler for DOM-elementer og stoppeklokkeparametere
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Starter stoppeklokken
function start(){
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

// Stopper stoppeklokken
function stop(){
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

// Nullstiller stoppeklokken
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

// Oppdaterer visningen av stoppeklokken
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Beregner timer, minutter, sekunder og millisekunder
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    // Legger til nuller foran tall hvis de er mindre enn 10
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Oppdaterer visningen av stoppeklokken
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
