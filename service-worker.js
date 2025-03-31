chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.setIcon({
    path: {
      16: 'images/icon-16.png',
      48: 'images/icon-48.png'
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
      16: 'images/icon-16.png',
      48: 'images/icon-48.png'
    }
  });
});