function Carro(){

    this.marca = "VolksWagen";
    this.nome = "Gol";
    this.ano = "2021";
    this.potencia = "110cv";
    this.velocidadeAtual = 0;

    this.ligar = function(){
        console.log(this.nome +' agora esta ligado!')
    }

    this.andar = function(velocidade){
        this.velocidadeAtual = this.velocidadeAtual + velocidade;
        console.log(`Carro andando a ${this.velocidadeAtual}km/h`);
    }

    this.parar = function(){
        console.log('Carro parado!')
        this.velocidadeAtual = 0
    }



}
 

var carro1 = new Carro();

carro1.ano = "2018"

var carro2= new Carro()

carro2.potencia = '90cv'

