//localStorage.setItem("nome", "Dog");
//localStorage.setItem("sobrenome", "Cat");
//sessionStorage.setItem("nome", "Dog");
//sessionStorage.setItem("sobrenome", "Cat");
//setItem
//getItem
//removeItem

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite o seu nome")
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML=nome;