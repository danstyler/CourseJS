function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Daniel", "lucas", "santos", "Joao")


function meusNumeros(...numeros){
    console.log(numeros);
}

meusNumeros(1, 2, 3, 4, 5)



function cadastrar(usuarios, ...novosUsuarios){

    let Totalusuarios =[...usuarios, ...novosUsuarios];

    console.log(Totalusuarios)

}

let usuarios = ["Daniel", "lucas"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");