const cookie = document.getElementById('cookie');
const clickCountElement = document.getElementById('clicker__counter');
const clickSpeedElement = document.getElementById('click__speed');

let clickCount = 0;
let lastClickTime = null;

function handleCookieClick() {
    clickCount++;
    clickCountElement.textContent = clickCount;

    cookie.style.transform = (clickCount % 2 === 0) ? 'scale(0.8)' : 'scale(1.2)';

    const currentTime = new Date().getTime();
    if (lastClickTime !== null) {
        const timeDiff = (currentTime - lastClickTime) / 1000; // Время в секундах
        const clickSpeed = 1 / timeDiff;
        clickSpeedElement.textContent = clickSpeed.toFixed(2);
    }
    lastClickTime = currentTime;
}

cookie.addEventListener('click', handleCookieClick);