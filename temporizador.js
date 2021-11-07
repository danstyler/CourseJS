function acao(){
    document.write("Executando...<br/>")
}

//Executa de tempo em tempo
setInterval(acao, 1000);

//Executa uma única vez
setTimeout(acao, 3000)