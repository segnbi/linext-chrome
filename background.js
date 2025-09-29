chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'link',
    title: 'Copy link text',
    contexts: ['link'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, 'copy');
});
