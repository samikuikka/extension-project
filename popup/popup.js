
function popup() {
    console.log("In popup!")
}

browser.tabs.executeScript({ file: "/youtube.js"})
    .then(popup)
    