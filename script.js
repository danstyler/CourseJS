// funcao entrar

function entrar(){
    var area = document.getElementById('area');
    var nome = prompt('Digite o seu nome: ');
    var sobrenome = prompt('Digite o seu sobrenome: ');

    if(nome == '' || nome == null, sobrenome == '' || sobrenome == null){
        alert('Por favor Digite o seu nome!');
        alert('Por favor Digite também o seu sobrenome!')
        area.innerHTML = 'Bem vindo ...';
    } else {

        area.innerHTML = `Bem Vindo ${nome} ${sobrenome} `;

    }
}