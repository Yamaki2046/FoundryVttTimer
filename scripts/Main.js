Hooks.once('init', () => {
    console.log('Timer Module Initialized');
});

Hooks.once('ready', () => {
    // Check if the current user is GM and then render the timer control UI
    if (game.user.isGM) {
        // Render timer control UI for the GM
    }
});