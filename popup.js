onkeydown = e => e.key == "Enter" && close(chrome.tabs.update({ url: "https://search.bilibili.com/all?keyword=" + e.target.value }));
