//Declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informações ao usuario e atribuindo os valores as variaveis
nome = prompt("Qual é seu nome: ")
idade = parseInt(prompt("Qual é sua idade: "))
altura = parseFloat(prompt("Qual é sua altura:" ))
peso = parseInt(prompt("Qual é seu peso"))

//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibundo as informações no console
console.log("Olá" + nome + ", voce tem" + idade + "anos, nasceu em" + anoNasc + 
    ", tem" + altura + " de altura, pesa" + peso + "kg e seu IMC é" + imc + "kg/m²"
)