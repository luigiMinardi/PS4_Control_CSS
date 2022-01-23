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
    let hdmi = document.getElementById('hdmi')
    let hdmiText = document.getElementById('hdmiText')
    if (hdmi.style.display == "flex") {
        alert("Turn on the ps4 before clicking to see the options")
    } else {
        if (example.style.display == "unset") {
            example.style.display = "none";
            PS4Start.style.display = "unset";
        } else {
            hdmi.style.display = "none";
            hdmiText.style.display = "none";
            example.style.display = "unset";
            PS4Start.style.display = "none";
        }
    }
}
function copyURL() {
    let text = "https://luigiminardi.github.io/PS4_Control_CSS/"
    navigator.clipboard.writeText(text);
    alert("URL copied, you can share it wherever you want!")
}
function turnOn() {
    let touchpad = document.getElementById('touchpad')
    let PS4Start = document.getElementById('PS4Start')
    let hdmi = document.getElementById('hdmi')
    let hdmiText = document.getElementById('hdmiText')
    if (touchpad.style.background == "linear-gradient(0deg, black 70%, blue 78%, gray 90%, black 100%)") {
        touchpad.style.background = "linear-gradient(0deg, black 70%, black 78%, gray 90%, black 100%)";
        PS4Start.style.display = "none";
        hdmi.style.display = "flex";
        hdmiText.style.display = "flex";
        PS4Start.src = "img/ps4_start.gif";
    } else {
        touchpad.style.background = "linear-gradient(0deg, black 70%, blue 78%, gray 90%, black 100%)";
        ps4Start.style.display = "unset";
        hdmi.style.display = "none";
        hdmiText.style.display = "none";
        setTimeout(function () {
            PS4Start.src = "img/ps4_home.jpg";
        }, 1300);
    }
}