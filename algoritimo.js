// o algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.
const livros = require("./listaLivros");



function menorValor (arrayDeProdutos, posicaoInicial){
    let menorPreco = posicaoInicial;

    for(let produtoAtual = posicaoInicial ; produtoAtual < arrayDeProdutos.length; produtoAtual++){
        if(arrayDeProdutos[produtoAtual].preco < arrayDeProdutos[menorPreco].preco){
            menorPreco = produtoAtual;
        }
    }
    return menorPreco;
}

console.log("-----------------------------------------------------")



// function verTodosOslivros(){
//     for(let todosOsLivros = 0; todosOsLivros < livros.length; todosOsLivros++){
//         console.log(`Temos o livro: ${livros[todosOsLivros].titulo} e seu preço é $${livros[todosOsLivros].preco} reais`)
//     }
// }

// verTodosOslivros();

module.exports = menorValor;