onkeyup = e => e.keyCode == 13 && close(chrome.tabs.update({
  url: "https://search.bilibili.com/all?keyword=" + e.target.value
}));