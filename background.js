chrome.storage.local.get("hasCustomSkin", customSkin => {
    if(customSkin.hasCustomSkin === "true") {
        chrome.storage.local.get("mino", result => {
            chrome.webRequest.onBeforeRequest.addListener(() => { return { redirectUrl: result.mino}}, {urls: ["https://tetr.io/res/skins/minos/connected.png"]}, ["blocking"])
            chrome.webRequest.onBeforeRequest.addListener(() => { return { redirectUrl: chrome.runtime.getURL("res/user/skin.connected.ghost.png")}}, {urls: ["https://tetr.io/res/skins/ghost/connected.png"]}, ["blocking"])
            chrome.webRequest.onBeforeRequest.addListener(() => { return { redirectUrl: chrome.runtime.getURL("res/user/skin.board.png")}}, {urls: ["https://tetr.io/res/skins/board/generic/board.png"]}, ["blocking"])
            chrome.webRequest.onBeforeRequest.addListener(() => { return { cancel: true}}, {urls: ["https://tetr.io/res/skins/board/generic/queue.png"]}, ["blocking"])
        })
    }
})
