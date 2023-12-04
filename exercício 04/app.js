function calcularmedia(){
    let nota01, nota02, nota03, nota04, media
    nota01 = document.getElementById("nota01").value
    nota02 = document.getElementById("nota02").value
    nota03 = document.getElementById("nota03").value
    nota04 = document.getElementById("nota04").value
    media = (parseFloat(nota01) + parseFloat(nota02) + parseFloat(nota03) + parseFloat(nota04)) /4
    document.getElementById("resultado").innerText = "Sua média é: " + media
}