// chrome.storage.local.set({"hello": "world"});

const fileReader = new FileReader();
fileReader.onload = function() {
    chrome.storage.local.set({"hasCustomSkin": "true"});
    chrome.storage.local.set({"mino": fileReader.result});
}

window.onload = function() {
    const fileIn = document.getElementsByClassName("file-in")[0]

    fileIn.onchange = function(e) {
        const selectedFile = fileIn.files[0];

        fileReader.readAsDataURL(selectedFile);
    }

}