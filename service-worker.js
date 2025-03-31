chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.setIcon({
    path: {
      19: 'images/icon19.png',
      38: 'images/icon38.png'
    }
  });
  if (details.reason ===  "install"){
    chrome.tabs.create({url: "first_setting.html"});
  } else if (details.reason === "update"){
    
  }
});

chrome.tabs.onCreated.addListener((tab) => {
  chrome.action.setIcon({
    path: {
      19: 'images/icon16.png',
      38: 'images/icon48.png'
    }
  });
});