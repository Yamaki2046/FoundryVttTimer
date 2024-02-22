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

  
  class SimpleTimer {
    constructor(displayElementId) {
      this.display = document.getElementById(displayElementId);
      this.remainingTime = 0; // Time in seconds
      this.timerId = null;
    }
  
    start(seconds) {
      this.remainingTime = seconds;
      this.timerId = setInterval(() => this.tick(), 1000);
      this.updateDisplay();
    }
  
    tick() {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateDisplay();
      } else {
        this.stop();
      }
    }
  
    stop() {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  
    updateDisplay() {
      const hours = Math.floor(this.remainingTime / 3600);
      const minutes = Math.floor((this.remainingTime % 3600) / 60);
      const seconds = this.remainingTime % 60;
  
      this.display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }
  
  // Assuming your timer display has an ID of 'timer-display'
  const timer = new SimpleTimer('timer-display');
  
  document.getElementById('start-timer-button').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('timer-hours').value) || 0;
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
  
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    timer.start(totalSeconds);
  });