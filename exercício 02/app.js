function mostrarnumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("resposta").innerText = "o número informado foi: " + numero
    document.getElementById("numero").value = ""
}