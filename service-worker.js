chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.setIcon({
    path: {
      19: 'images/icon-16.png',
      38: 'images/icon-48.png'
    }
  });
  if (details.reason ===  "install"){
    chrome.tabs.create({url: "first_setting.html"});
  } else if (details.reason === "update"){
    
  }
});