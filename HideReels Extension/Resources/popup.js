let isHidingEnabled = true;

document.getElementById('toggleReels').addEventListener('change', (event) => {
  isHidingEnabled = event.target.checked;

  // Send message to background script
  browser.runtime.sendMessage({ hideReels: isHidingEnabled });
});
