let hidingEnabled = true;

browser.runtime.onMessage.addListener((message) => {
  if (message.hideReels !== undefined) {
    hidingEnabled = message.hideReels;
    if (hidingEnabled) {
      hideReels();
    } else {
      showReels();
    }
  }
});

// Function to hide Reels
const hideReels = () => {
  if (!hidingEnabled) return;

  const reelsSelectors = [
    '[aria-label="Reels"]',
    '[aria-label="Reels"] + div',
    'div[data-pagelet="ReelsTrayFeedUnit"]'
  ];

  reelsSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = "none";
    });
  });
};

// Function to show Reels
const showReels = () => {
  const reelsSelectors = [
    '[aria-label="Reels"]',
    '[aria-label="Reels"] + div',
    'div[data-pagelet="ReelsTrayFeedUnit"]'
  ];

  reelsSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = "";
    });
  });
};

// Observe DOM changes
const observer = new MutationObserver(hideReels);
observer.observe(document.body, { childList: true, subtree: true });

// Initial call
hideReels();
