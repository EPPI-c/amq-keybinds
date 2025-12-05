const script = document.createElement("script");
script.src = chrome.runtime.getURL("skip.js");
script.type = "module";
script.onload = () => script.remove(); // optional cleanup
document.documentElement.appendChild(script);

function waitForElement(selector, callback) {
    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
            observer.disconnect();
            callback(el);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement('#settingModal > div > div > div.tabContainer', (tabContainer) => {

    let settingsModal = document.querySelector("#settingModal > div > div > div.modal-body")

    let keyBindTab = document.createElement("div")
    keyBindTab.id = "smKeyBindTab"
    keyBindTab.classList.add("tab")
    keyBindTab.classList.add("clickAble")
    keyBindTab.setAttribute("onclick", "options.selectTab('settingsKeyBindContainer', this)")
    let keyBindTabH5 = document.createElement("h5")
    keyBindTabH5.innerText = " Key Binds "
    keyBindTab.appendChild(keyBindTabH5)
    tabContainer.appendChild(keyBindTab)

    let keyBindContainer = document.createElement("div")
    keyBindContainer.id = "settingsKeyBindContainer"
    keyBindContainer.classList.add("settingsContentContainer")
    keyBindContainer.classList.add("hide")
    submit = createKeyBindMenu('submit')
    keyBindContainer.appendChild(submit)
    settingsModal.appendChild(keyBindContainer)

    const s = document.createElement('script');
    s.src = chrome.runtime.getURL("update-options.js");
    (document.head || document.documentElement).appendChild(s);
    s.onload = () => s.remove();

});

function createKeyBindMenu(name) {
    let div = document.createElement("div")
    div.id = name + "Div"
    let row = document.createElement("div")
    row.classList.add("row")
    div.appendChild(row)

    let action = document.createElement("div")
    action.classList.add("col-xs-6")
    let actionText = document.createElement("h3")
    actionText.innerText = name
    action.appendChild(actionText)
    row.appendChild(action)

    let modifiers = document.createElement("div")
    modifiers.classList.add("col-xs-3")
    modifiers.classList.add("text-center")
    let modifiersText = document.createElement("h3")
    modifiersText.innerText = "Modifiers"
    modifiers.appendChild(modifiersText)
    row.appendChild(modifiers)

    let remove = document.createElement("div")
    remove.classList.add("col-xs-3")
    let removeText = document.createElement("h3")
    removeText.innerText = "Remove"
    remove.appendChild(removeText)
    row.appendChild(remove)


    return div
}

function createKeyBindInput() {
    let row
}
