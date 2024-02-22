class GameTimer {
    /* ... */
}

const timer = new GameTimer('#timer-display');

document.getElementById('start-pause-btn').addEventListener('click', function() {
    if (timer.isRunning) {
        timer.pause();
        this.textContent = 'Start';
    } else {
        timer.start();
        this.textContent = 'Pause';
    }
});

document.getElementById('edit-btn').addEventListener('click', () => {
    // Implement edit functionality
});

document.getElementById('count-direction-checkbox').addEventListener('change', () => {
    timer.toggleCountDirection();
});

document.querySelectorAll('.quick-adjust-btn').forEach(button => {
    button.addEventListener('click', event => {
        const adjustment = parseInt(event.target.dataset.adjustment, 10);
        timer.adjustTime(adjustment);
    });
});