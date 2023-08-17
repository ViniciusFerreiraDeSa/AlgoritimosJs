const livros = require("./listaLivros");

function insertionSort(lista){

    
    for(let indice = 0; indice < livros.length; indice++){
        let itemAnalisadoAtualmente = indice;
        while (itemAnalisadoAtualmente > 0 && lista[itemAnalisadoAtualmente].preco < lista[itemAnalisadoAtualmente - 1].preco){

            let itemAnalise = lista[itemAnalisadoAtualmente];
            let itemAnterior = lista[itemAnalisadoAtualmente - 1];

            lista[itemAnalisadoAtualmente] = itemAnterior;
            lista[itemAnalisadoAtualmente - 1] = itemAnalise;

            itemAnalisadoAtualmente-- // Esse trecho de codigo faz com que saia do While pois oque estava a valer 1 agora volta a valer 0, com isso o primeiro Objeto que seria o JS passa a virar PHP pois PHP foi para a posição 0 do ARRAY e quando ele valer 1 vira JS que vai passar por toda a lista e achar o livro com menor preço, quando isso ocorrer o while passa a valer 0 denovo e refaz todo o código até acabar a lista de objetos.  
        }
    }

    console.log(lista);
}   

insertionSort(livros);