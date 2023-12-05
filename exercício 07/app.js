function fahrenheit(){
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    resultado = (fahrenheit - 32) /1.8

    document.getElementById("resultado").innerText = " fahrenheit convertido em celsiues é: " + resultado;

    


}