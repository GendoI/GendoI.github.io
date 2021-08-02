let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/nerv-logo.jpg') {
        myImage.setAttribute('src', 'images/seele-logo.jpg');
    } else {
        myImage.setAttribute('src', 'images/seele-logo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('item', myName);
        myHeading.textContent = 'Nerv is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nerv is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}