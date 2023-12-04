function converter(){
    let metros, centimetros
    metros = document.getElementById("metros").value
    centimetros = (metros) * 100
    document.getElementById("resultado").innerText = "A conversão é: " + centimetros + " centimetros"
}