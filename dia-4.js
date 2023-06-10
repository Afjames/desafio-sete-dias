const prompt = require('prompt-sync')({sigint: true})
let numero = Math.floor(Math.random() * (10 - 1 + 1) + 1 )

for (let i = 2; i >= 0; i--) {    
    let chute = parseInt(prompt("Qual o número de 1 até 10 você vai chutar? "))

    if (chute === numero) {
        console.log("Parabéns! Você acertou")
        break
    } else if (i > 0) {
        console.log(`ERROU! Você tem mais ${i} tentativas` )        
    } else{
        console.log(`Suas tentativas acabaram! O número correto é: ${numero}`)
    } 
}

