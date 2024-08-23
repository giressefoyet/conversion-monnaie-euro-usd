function convertir() {
    var inputNumber = document.getElementById('nombre').value;
    var choixConv = document.getElementById('devise').value;
    var resultConv;
    var message = document.getElementById('message');

    if (inputNumber > 0) {
        message.style.display = "none";
        if (choixConv === "usd") {
            resultConv = inputNumber * 550;
        } else if (choixConv === "euro") {
            resultConv = inputNumber * 655;
        }
        document.getElementById('resultat').textContent = resultConv;
    } else {
        message.textContent = "Veuillez entrer une valeur positive.";
        message.style.display = "block";
    }
}
