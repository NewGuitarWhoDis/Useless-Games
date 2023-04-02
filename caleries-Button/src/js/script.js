function burncalorie() {
    var text = document.getElementById("text").value;
    var result = parseFloat(text) + parseFloat(1.4);
    var resultRounded = Math.round(result * 100) / 100;
    document.getElementById("text").innerHTML = String(resultRounded);
    document.getElementById("text").value = String(resultRounded);
}
