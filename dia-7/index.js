
let saldo = 100;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransaçoes = 0;
let continuar = false

do {
    const nome = prompt("Insira seu nome:");
    const cpf = prompt("Insira seu CPF:");
    const valor = Number(prompt("Digite o valor de transção:"));
    const operacao = prompt("Qual operação desejar realizar? S / D")

    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.")
        
    }else if (operacao == "S" && valor > saldo){
        console.log("Saldo insuficiente. A transação não foi realizada");
    }else if (operacao == "S"){
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${Saldo}.`);
        saldo -= valor;
        totalTransaçoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransaçoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }
    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar:");
    if (opcao === "1"){
        continuar = true
    }else if (opcao === "2"){
        continuar = false
    }else {
        console.log("Opção invávilda. Programa encerrada.");
        continuar = false
    }
    } while (continuar)
        console.log(`Saldo final: R$${saldo}`);
        console.log(`Maior valor inserido: R$${maiorValorInserido}`);
        console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransaçoes)}`);
