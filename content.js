const script = document.createElement("script");
script.src = chrome.runtime.getURL("skip.js");
script.onload = () => script.remove(); // optional cleanup
document.documentElement.appendChild(script);
