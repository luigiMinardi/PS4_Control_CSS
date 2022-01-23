function bgBlue() {
    let body = document.body
    if (body.style.backgroundColor == "rgb(67, 107, 253)") {
        body.style.backgroundColor = "#282a36";
    } else {
        body.style.backgroundColor = "rgb(67, 107, 253)";
    }
}
function bgPink() {
    let body = document.body
    if (body.style.backgroundColor == "rgb(255, 73, 154)") {
        body.style.backgroundColor = "#282a36";
    } else {
        body.style.backgroundColor = "rgb(255, 73, 154)";
    }
}
function bgGreen() {
    let body = document.body
    if (body.style.backgroundColor == "rgb(25, 226, 101)") {
        body.style.backgroundColor = "#282a36";
    } else {
        body.style.backgroundColor = "rgb(25, 226, 101)";
    }
}
function bgRed() {
    let body = document.body
    if (body.style.backgroundColor == "rgb(248, 72, 67)") {
        body.style.backgroundColor = "#282a36";
    } else {
        body.style.backgroundColor = "rgb(248, 72, 67)";
    }
}
function showExample() {
    let example = document.getElementById('example')
    if (example.style.display == "unset") {
        example.style.display = "none";
    } else {
        example.style.display = "unset";
    }
}
function copyURL() {
    let text = "https://luigiminardi.github.io/PS4_Control_CSS/"
    navigator.clipboard.writeText(text);
    alert("URL copied, you can share it wherever you want!")
}
function turnOn() {
    let touchpad = document.getElementById('touchpad')
    if (touchpad.style.background == "linear-gradient(0deg, black 70%, blue 78%, gray 90%, black 100%)") {
        touchpad.style.background = "linear-gradient(0deg, black 70%, black 78%, gray 90%, black 100%)";
    } else {
        touchpad.style.background = "linear-gradient(0deg, black 70%, blue 78%, gray 90%, black 100%)";
    }
}