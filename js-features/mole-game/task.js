const holes = document.querySelectorAll('.hole');
const deadDisplay = document.getElementById('dead');
const lostDisplay = document.getElementById('lost');
let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function whackMole(e) {
    if (e.target.classList.contains('hole_has-mole')) {
        dead++;
        deadDisplay.textContent = dead;
    } else {
        lost++;
        lostDisplay.textContent = lost;
    }

    if (dead === 10) {
        alert("Поздравляем! Вы победили!");
        dead = 0;
        lost = 0;
        deadDisplay.textContent = dead;
        lostDisplay.textContent = lost;
    }

    if (lost === 5) {
        alert("Игра окончена. Вы проиграли.");
        dead = 0;
        lost = 0;
        deadDisplay.textContent = dead;
        lostDisplay.textContent = lost;
    }
}

holes.forEach(hole => {
    hole.addEventListener('click', whackMole);
});