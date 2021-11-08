const lista = [1,2,3,4,5,6,7];

//soma index
const novaLista = lista.map(function(item, index){
    return item + index;
})

console.log(novaLista)


//soma
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
})

console.log(soma);

//busca
const find = lista.find(function(item){
    return item === 6;

});

console.log(find);