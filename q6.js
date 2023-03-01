altura = Number.parseFloat(prompt("Digite a altura: "))
sexo = prompt("Digite seu (M ou F): ")

pesoMasc = (72.7 * altura) - 58
pesoFem = (62.1 * altura) - 44.7

if (sexo == "M") {
    alert("Peso ideal masculino: " + pesoMasc)
} else {
    alert("Peso ideal feminino: " + pesoFem)
}