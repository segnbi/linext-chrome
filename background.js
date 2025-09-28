chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'link',
    title: 'copy',
    contexts: ['link'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, 'copy');
});
