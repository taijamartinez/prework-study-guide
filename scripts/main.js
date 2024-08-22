const myImage = document.querySelector("img");

myImage.onclick = () => {
    // Clear local storage
    localStorage.clear();

    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/firefox-icon.png") {
        myImage.setAttribute("src", "assets/firefox2.png");
    } else {
        myImage.setAttribute("src", "assets/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool, ${myName}';
}

if (!localStorage.getImage("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContext = 'Mozilla is cool, ${storedName}';
}

myButton.onClick = () => {
    setUserName();
};