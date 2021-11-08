//const variável imutável
//Let apenas dentro do escopo

var nome = "Daniel"

var lista = [1, 2, 3];

if(nome == "Daniel"){
    var idade = 20;
    console.log("Tem " + idade);
}

if(nome == "Daniel"){
    let sobrenome = "Santos";
    console.log(nome+" "+sobrenome );
}

for(var i in lista){
    console.log(lista[i]);
}


console.log(i)

for(let p in lista){
    console.log(lista[p]);
}

console.log(p)