let primeiros = [1, 2, 3]
console.log(primeiros)

let numeros = [...primeiros, 4, 5, 6];
console.log(numeros)

let numeros2 = [primeiros, 4, 5, 6]
console.log(numeros2)


let pessoa = {
    nome: "Daniel",
    idade: 50,
    cargo: "Programador"
};

let novaPessoa = {
    ...pessoa,
    anoAtual:2050,
    cidade: "Campo Grande"
};

console.log(novaPessoa)