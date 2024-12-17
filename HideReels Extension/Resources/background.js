let hidingEnabled = true;

// Listen for messages from popup.js
browser.runtime.onMessage.addListener((message) => {
  if (message.hideReels !== undefined) {
    hidingEnabled = message.hideReels;

    // Send updated status to the content script
    browser.tabs.query({ url: "https://www.facebook.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        browser.tabs.sendMessage(tab.id, { hideReels: hidingEnabled });
      });
    });
  }
});
