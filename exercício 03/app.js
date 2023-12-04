function calcularsoma(){
    let nota1, nota2, soma
    nota1 = document.getElementById("nota1").value
    nota2 = document.getElementById("nota2").value
    soma = (parseFloat(nota1) + parseFloat(nota2))
    document.getElementById("resultado").innerText = "A soma é: " + soma
}


