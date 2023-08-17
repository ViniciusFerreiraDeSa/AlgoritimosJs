// Sort ordenar 

const livros = require("./listaLivros");
const menorPreco = require("./algoritimo");
                                                    // esse -1 faz com que ele n verefique o ultimo livro
for (let indiceAtual = 0; indiceAtual < livros.length - 1; indiceAtual++){
    let menor = menorPreco(livros, indiceAtual);

    let livroAtual = livros[indiceAtual];
    console.log("Posição Atual", indiceAtual)
    console.log("O livro atual é", livros[indiceAtual]);
    console.log(`-------------------------------------------`);
    let livroComMenorPreco = livros[menor];
    console.log("O livro com menor preço é", livros[menor]);
    console.log(`-------------------------------------------`);
    livros[indiceAtual] = livroComMenorPreco;
    livros[menor] = livroAtual;
}


console.log(livros);
console.log(`-------------------------------------------`);


/* --Forma de fazer usando o forEach()--
            // Podemos substituir esse "livro", por um underline pois ele n está sendo utilizado em nada
livros.forEach((livro, indiceAtual) =>{
    let menor = menorPreco(livros, indiceAtual);

    let livroAtual = livros[indiceAtual];
    let livroComMenorPreco = livros[menor]

    livros[indiceAtual] = livroComMenorPreco
    livros[menor] = livroAtual
})


*/
