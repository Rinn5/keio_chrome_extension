chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason ===  "install"){
    chrome.tabs.create({url: "first_setting.html"})
  } else if (details.reason === "update"){
    
  }
});