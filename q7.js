altura = Number.parseFloat(prompt("Digite sua altura: "))
peso = Number.parseFloat(prompt("Digite o seu peso: "))

let imc = peso / (altura ** 2)

if (imc < 18.5) {
    alert("Abaixo do peso, imc: " + imc)
}

else if (imc > 18.5 && imc < 25) {
    alert("Peso normal, imc: " + imc)
}

else if (imc > 25 && imc < 30) {
    alert("Acima do peso, imc: " + imc)
}

else {
    alert("Obeso, imc: " + imc)
}