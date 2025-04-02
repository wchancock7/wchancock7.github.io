function changeBackgorundColor() {
    if (document.getElementById("button").innerHTML == "Switch to light") {
        document.body.style.backgroundColor = "darkkhaki";
        document.getElementById("button").innerHTML = "Switch to dark";
    } else {
        document.body.style.backgroundColor = "#171717";
        document.getElementById("button").innerHTML = "Switch to light";
    }
}