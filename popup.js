import * as key from './keyobject.js';

document.addEventListener("DOMContentLoaded", async () => {
    var skipKeys = [key.makeKeyObject('KeyS', true)];
    var focusKeys = [key.makeKeyObject('KeyF', true)];
    var submitKeys = key.makeKeyObjectsAllModifiers("Enter")
    var nextKeys = key.makeKeyObjectsAllModifiers("ArrowDown")
    var previousKeys = key.makeKeyObjectsAllModifiers("ArrowUp")
    var cancelKeys = key.makeKeyObjectsAllModifiers("Escape")
});

const stored = await chrome.storage.local.get(["shortcuts", "enabled"]);

skipKeys = stored.shortcuts.skipKeys

