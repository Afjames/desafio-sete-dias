const prompt = require('prompt-sync')({sigint: true})
let fruta = [] 
let laticinio = []
let congelado = []
let resposta = "Sim"
let categoria
let comida;


while (resposta === "Sim" || resposta === "sim") {

    resposta = prompt("Você quer adicionar algum item na sua lista de compra?")
    if (resposta === "nao" || resposta === "Nao"){
        break
    }    
    comida = prompt("Qual comida você deseja comprar? ")

    categoria = prompt("Qual é a categoria da comida dessa comida? ")

    if (categoria === "fruta"){
        fruta.push(comida)
    } else if (categoria === "congelado"){
        congelado.push(comida)
    } else {
        laticinio.push(comida) 
    }

} 



console.log(` Sua lista de compras é frutas: ${fruta}. Laticinios: ${laticinio}. Congelados ${congelado}`);


