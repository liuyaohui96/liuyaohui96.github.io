
// get file and get markdown to html
const filePath = localStorage.getItem('file_path');

readTextFile(filePath, (textDetail) => {
    const content = document.getElementById('content');
    content.innerHTML = marked.parse(textDetail);
    hljs.highlightAll();
})

function readTextFile(filePath, callback) {
    const xhrFile = new XMLHttpRequest();
    xhrFile.open("GET", filePath, true);
    xhrFile.onload  = function() {
        const allText = xhrFile.response;
        callback(allText)
    }
    xhrFile.send();
}

// get address from localstorage
const more_link = document.querySelector('section#more a');
const address = localStorage.getItem('address');
more_link.setAttribute('href', address);