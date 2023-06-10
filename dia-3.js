const prompt = require('prompt-sync')({sigint: true})

const area = parseInt(prompt("Deseja seguir para desenvolvimento Front-End(1) ou Back-end(2?) "))

if (area === 1 ) {
    console.log(prompt("Vai aprender qual tecnologia Front-End: React(1) ou Vue(2) "))
}else if(area === 2) {
    console.log(prompt("Vai aprender qual tecnologia Back-End: C#(1) ou Java(2) "))
}else {
    console.log("Você não digitou um número válido")
}

const seguirEspecializando = parseInt(prompt("Após os passos iniciais, você pretende seguir se especializando na área escolhida (1) ou vai se desenvolver para se tornar Fullstack (2)? ) "))

if (seguirEspecializando === 1){
    console.log("Muito bom!")
} else {
    console.log("Fullstack é ótimo!")
}

do {
    controladora = 1

    const tecnologiasFuturas = prompt("Qual a próxima tecnologia que você gostaria de aprender? ")
    const respostaTecnologiaFutura = prompt("Fale algo sobre a tecnologia que você desejar aprender: ")
    const resposta = parseInt(prompt("Há mais alguma tecnologia que você pretende aprender? digite (1) para sim e (2) para não "))

    if (resposta === 2 ){
        controladora = controladora + 1
    }

} while (controladora === 1)

console.log("Muito bem! boa sorte!")