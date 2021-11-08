class Pessoa{
    constructor(){
        this.nome = '',
        this.sobrenome = ''
    }

    nomePessoa(primeironome){
        this.nome = primeironome;
        console.log(`Meu nome e: ${this.nome}`);
    }

    segundoNome(segundonome){
        this.sobrenome = segundonome;
        console.log(`Meu sobrenome e: ${this.sobrenome}`);
    }

    nomeCompleto(){
        let nomeCompleto = `${this.nome} ${this.sobrenome}`;
        console.log(nomeCompleto)
    }

};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Daniel');
pessoa1.segundoNome('Santos');

pessoa1.nomeCompleto();