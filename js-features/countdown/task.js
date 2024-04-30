let timerValue = 59;

// function countdown() {
//     if (timerValue > 0) {
//         timerValue--;
//         setTimeout(countdown, 1000); 
//     } else {
//         alert("Вы победили в конкурсе!");
//     }
// }

// countdown();

function formatTime(seconds) {
    let hours = Math.floor((seconds / 3600) / 60);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateTimer() {
    document.getElementById('timer').innerText = formatTime(timerValue);
    if (timerValue > 0) {
        timerValue--;
        setTimeout(updateTimer, 1000);
    } else {
        startFileDownload();
    }
}

function  startFileDownload() {
    let downloadLink = document.createElement('a');
    downloadLink.href = 'http://hello.kitty';
    downloadLink.download = 'hello.kitty';
    downloadLink.targrt = '_blank';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);

    alert("Вы победили в конкурсе!");
}

updateTimer();