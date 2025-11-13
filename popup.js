document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('clickButton');
  const status = document.getElementById('status');
  
  button.addEventListener('click', function() {
    status.textContent = 'Button clicked! Extension is working.';
    
    // Send message to background script
    chrome.runtime.sendMessage({
      action: 'buttonClicked',
      timestamp: new Date().toISOString()
    });
  });
});
