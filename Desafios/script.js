/*A lista produtos deve conter os seguintes
produtos: Computador, Telefone, Mouse,
Teclado Exiba essa lista no console quando abrir o index.html.*/

const listaProdutos = ['Computador', 'Telefone', 'Mouse', 'Teclado']
console.log(listaProdutos);

/*Mostre no console quantos produtos tem nessa lista*/

console.log(`A lista possui ${listaProdutos.length} elementos`);

/*Retire o produto Mouse da lista e retorne no console
a lista com os produtos restantes.*/

const novaLista = listaProdutos;

let indice = novaLista.indexOf("Mouse");

while (indice >= 0) {
    novaLista.splice(indice, 1);
    indice = novaLista.indexOf("Mouse");
}

console.log(novaLista);


/*Faça uma busca na sua lista por algum produto,
por exemplo procure por Computador e caso exista
esse produto na sua lista exiba um console falando
que este produto existe e mostre tambem o nome deste
produto caso não exista mostre uma mensagem avisão que
o produto não foi encontrado.*/

if (novaLista.indexOf("Computador") !=  -1){
    console.log("Produto Encontrado!")
} else {
    console.log("Produto não encontrado.")

};

/*Remova o segundo item da sua lista.*/

novaLista.splice(1,1)
console.log(novaLista)


/*Crie uma lista de apenas numeros 1,3,5,7,0,9​*/
const list = [1,3,5,7,0,9]

/*Ordene essa lista do menor para o maior.*/

const orderList = list.sort()
console.log(orderList)

/*Retire o primeiro numero desta lista.*/

const newOrderList = orderList.slice(1)
console.log(newOrderList)

/*Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9]
para [9,7,5,3,1]*/
console.log(newOrderList.reverse())


/*Crie uma string que contenha o dia de hoje, exemplo: */

let hoje = (new Date())
console.log(hoje.toLocaleDateString())
console.log(hoje.getDate())
console.log(hoje.getMonth())
console.log(hoje.getFullYear())
