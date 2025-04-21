chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl: chrome.runtime.getURL("libs/awesomplete.js")
    };
  },
  {
    urls: ["https://animemusicquiz.com/scripts/pages/gamePage/libraries/awesomplete.min.js"],
    types: ["script"]
  },
  ["blocking"]
);
