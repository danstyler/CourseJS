let nomes = ["Daniel", "Santos", "Lucas"]

nomes.some(nomes => nomes === "Daniel");

console.log(nomes.some(nomes => nomes === "Daniel"))


let nomes2 = [{nome: "Daniel", idade: 50},
             {nome: "lucas", idade: 30},
             {nome: "Santos", idade: 18}]

console.log(nomes2.every(nome => nome.idade >= 18));

if(nomes2.every(nome => nome.idade >= 28)){
    console.log('Todos são maiores de 28')
}else{
    console.log('Alguem não é maior de 28')
}