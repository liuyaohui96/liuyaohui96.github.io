
// get file and parse markdown to html
const filePath = localStorage.getItem('file_path');

read_parse().then(markdown => {
    document.querySelector('#spinner').setAttribute('class', 'd-none');
    const content = document.getElementById('content');
    content.innerHTML = markdown;
    document.querySelector('main').classList.remove('d-none');
    document.querySelector('#more').classList.remove('d-none');
}).then(() => {
    hljs.highlightAll();
})


function read_parse() {
    return new Promise(resolve => {
        readTextFile(filePath, (textDetail) => {
            let markdown = marked.parse(textDetail);
            resolve(markdown);
        })
    })
}


function readTextFile(filePath, callback) {
    const xhrFile = new XMLHttpRequest();
    xhrFile.open("GET", filePath, true);
    xhrFile.onload = function () {
        const allText = xhrFile.response;
        callback(allText)
    }
    xhrFile.send();
}

// get address from localstorage
const more_link = document.querySelector('section#more a');
const address = localStorage.getItem('address');
more_link.setAttribute('href', address);