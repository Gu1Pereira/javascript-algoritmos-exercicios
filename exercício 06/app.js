function calcularsalario(){
    let sal_hora, horas_trabalhadas, media
    sal_hora = document.getElementById("sal_hora").value
    horas_trabalhadas = document.getElementById("horas_trabalhadas").value
    media = (horas_trabalhadas * sal_hora)
    document.getElementById("resultado").innerText = "Seu salário mês é " + media
}
