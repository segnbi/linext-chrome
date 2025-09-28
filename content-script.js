function resetLinks() {
  for (const link of links) {
    link.removeEventListener('contextmenu', setText);
  }

  links = document.getElementsByTagName('a');

  for (const link of links) {
    link.addEventListener('contextmenu', setText);
  }
}

function setText(e) {
  text = e.target.textContent;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

let text = '';
let links = document.getElementsByTagName('a');

const body = document.body
const observer = new MutationObserver((records, observer) => {
  resetLinks()
})

for (const link of links) {
  link.addEventListener('contextmenu', setText);
}

observer.observe(body, {
  subtree: true,
  childList: true
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  copyText(text);

  sendResponse('ok');
});