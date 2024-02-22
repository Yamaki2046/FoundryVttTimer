Hooks.once('init', () => {
    console.log('Timer Module Initialized');
});

Hooks.once('ready', () => {
    // Check if the current user is GM and then render the timer control UI
    if (game.user.isGM) {
        // Render timer control UI for the GM
    }
});

Hooks.on("renderChatLog", (chatLog, html, data) => {
  // Button creation and event
  const button = $(`<button type="button"><i class="fas fa-clock"></i> Open Timer</button>`);

  button.click(() => {
    // Dialog for the timer
    const template = `
      <form>
        <div class="form-group">
          <label>Timer:</label>
          <input type="text" id="timer-value" value="00:00:00">
        </div>
        <div class="form-group">
          <button type="button" id="start-timer">Start</button>
        </div>
      </form>
    `;

    new Dialog({
      title: "Timer Control",
      content: template,
      buttons: {
        ok: {
          icon: '<i class="fas fa-check"></i>',
          label: "Close"
        }
      },
      default: "ok",
      close: () => console.log("Timer dialog closed")
    }).render(true);
  });

  html.find(".chat-control-icon").append(button);
});

Hooks.on('renderSidebarTab', async (app, html) => {
    // This time, let's target the title bar or a similar area for the button
    const buttonHtml = `<button id="simple-timer-button" title="Open Simple Timer"><i class="fas fa-clock"></i></button>`;
    
    // Example: Append to the title bar. Adjust the selector as needed for your UI.
    const titleBar = html.closest(".app").find(".window-title");
    if (titleBar.length) {
      titleBar.after(buttonHtml);
    }
  
    // Event listener for button click
    document.getElementById('simple-timer-button').addEventListener('click', () => {
      // Code to open your module's UI here
      console.log("Simple Timer button clicked"); // Placeholder for your UI opening logic
    });
  });
  
