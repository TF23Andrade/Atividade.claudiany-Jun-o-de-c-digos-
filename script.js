
//Atividade sobre média escolar

const nota1 = 7.5
const nota2 = 8.0
const nota3 = 6.5

const Mediafinal = (nota1 + nota2 + nota3)/3

alert(`Sua média final é ${Mediafinal}, APROVADO`)


//Atividade sobre a comparação de valores

const valorA = 10
const valorB = "10"

if (valorA !== valorB) {
    console.log("os valores não são iguais")
}
else{
    alert("os valores são iguais")
}


//Cópia de pontuação


const pontuação = 85;

if (pontuação >=90) {

console.log("Classificação A");
} else if (pontuação >= 70) {

console.log("Classificação B")
} else{
    console.log("Classificação: HORRIVEL, PESSIMO, LIXO");
}


//Atividade parque de diversão

const idade =  prompt ("Qual sua idade?(Se mentir apanha)")
const altura = prompt("Qual sua altura?")
let podeEntrar = (idade >= 16) && (altura >= 1.60)


if(idade >= 16 && altura >= 1.60){

    podeEntrar = true

    console.log("Está apto a entrar")
}
else{
    podeEntrar = false
    console.log("Está inapto. CAI FORA")
}