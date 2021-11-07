
function carregou(){
    alert("Página carregada!")
}

function focado(){
    console.log("Campo Focado!")
}

function opcaoSelecionada(objeto){
    console.log(`Cidade selecionada ${objeto.value}`)

}

function desfocado(){
    console.log("Campo desfocado!")
}

function ApertaMouse(){
    console.log("O botão do mouse foi apertado!")
}

function SoltaMouse(){
    console.log("Soltou o botão do mouse!")
}

function PassouMouse(){
    console.log("Passou o mouse!")
}

function TirouMouse(){
    console.log("Tirou o mouse!")
}

function MoveMouse(){
    console.log("Moveu o mouse!")
}

function onClick(){
    console.log("Clicou no botão")
}

function botaoDireito(){
    console.log("Clicou no botão direito")
}


function TecladoApertado(event){
    console.log("Teclado Apertado " + event.keyCode)
    console.log("Teclado Apertado " + event.shiftKey)
    if(event.keyCode == 13){
        alert("Voce apertou Enter!")
    }
}

function TecladoSolto(event){
    console.log("Teclado solto");
}

// Mini jogo


function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() + 600);
    var y = Math.floor(Math.random() + 400);

    balao.setAttribute("style", "left:" +x+"px;top: "+y+"px;" );
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(objeto){
    document.body.removeChild(objeto);
}