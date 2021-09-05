const stopWatch = document.getElementById('stopwatch');
const playPausedButton = document.getElementById('play-paused');
const secondsSphere = document.getElementById('second-sphere');

let runningTime = 0;
let stopWhatchInterval;

const playPaused = () => {
    const isPaused = !playPausedButton.classList.contains('running');
    if (isPaused) {
        playPausedButton.classList.add('running');
        start();
    } else {
        playPausedButton.classList.remove('running');
        paused();
    }
}

const paused =  () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopWhatchInterval);
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    secondsSphere.style.animationPlayState = 'running';
    let startTime = Date.now() - runningTime;
    stopWhatchInterval = setInterval ( () => {
        runningTime = Date.now() - startTime;
        stopWatch.textContent = calculeTime(runningTime);
    }, 1000)
}

const calculeTime = (runningTime) => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours   = Math.floor(total_seconds / 3600);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minute  = (total_minutes % 60).toString().padStart(2, "0");
    const display_hours   = (total_hours).toString().padStart(2, "0");

    return `${display_hours}:${display_minute}:${display_seconds}`;
}

const stop = () => {
    stopWatch.textContent = '00:00:00';
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    runningTime = 0;
    clearInterval(stopWhatchInterval);


}


