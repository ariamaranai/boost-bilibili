chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Search",
    contexts: ["all"],
    documentUrlPatterns: ["https://*.bilibili.com/*"]
  })
);
chrome.omnibox.onInputEntered.addListener(q =>
  chrome.tabs.update({ url: "https://search.bilibili.com/all?keyword=" + q })
);
chrome.action.setPopup({ popup: "popup.htm" });
chrome.contextMenus.onClicked.addListener(() => chrome.action.openPopup());