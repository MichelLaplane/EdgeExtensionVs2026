// Background service worker for the Edge extension

chrome.runtime.onInstalled.addListener(() => {
  console.log('Simple Edge Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'buttonClicked') {
    console.log('Button clicked at:', message.timestamp);
  }
});
