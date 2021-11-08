const pessoa = {
    nome: "Daniel",
    sobrenome: "Santos",
    idade: "50",
    cargo: "Desenvolvedor MetaVerso"
};

//forma1
let {nome,
    sobrenome,
    idade,
    cargo       } = pessoa;

console.log(nome, sobrenome, idade, cargo);

//forma2
let nomes = ["Daniel", "Lucas", "Santos"]

console.log(nomes[0],nomes[1],nomes[2])

//forma3
let { 0:primeironome, 1:segundonome, 2:terceironome } = nomes;

console.log(primeironome, segundonome, terceironome)

//forma4
let [nome1, nome2, nome3] = nomes;

console.log(nome1, nome2, nome3)

