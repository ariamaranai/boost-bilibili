chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Search",
    contexts: ["all"],
    documentUrlPatterns: ["https://*.bilibili.com/*"]
  })
);
chrome.omnibox.onInputEntered.addListener(q =>
  chrome.tabs.update({
    url: "https://search.bilibili.com/all?keyword=" + q
  })
);
chrome.action.setPopup({
  popup: "popup.htm"
});
chrome.contextMenus.onClicked.addListener((_, { windowId }) =>
  chrome.windows.get(windowId, async window => (
    window.state == "fullscreen" &&
    await chrome.windows.update(windowId, {
      state: "maximized"
    }),
    chrome.action.openPopup()
  ))
);