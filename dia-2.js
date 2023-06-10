const prompt = require('prompt-sync')({sigint: true})

let nome = prompt("Qual o seu nome? ")
let idade = typeof(prompt("Qual a sua idade? "))    
let linguagem = prompt("Qual linguagem você de programação você está estudando? ")

console.log(`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`)


let gostaEstudar = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM e 2 para Não: `))

if (gostaEstudar === 1) {
    console.log("Muito bom! Continue estudando e voê terá muito sucesso")
}else {
    console.log("Já tentou aprender outras linguagens?")
}