//Switch
/*
b = 2

switch (b) {

    case 0:
        alert(`O b vale ${b} !`);
        break;
    case 1:
        alert(`O b vale ${b} !`)
        break;
    case 2:
        alert(`O b vale ${b} !`)
        break;

}
*/

document.write("</br> Escolha o seu pedido: </br>");
document.write("</br> 0 : Hamburguer</br>");
document.write("</br> 1 : Sorvete</br>");
document.write("</br> 2 : Suco</br>");
document.write("</br> 3 : Biscoito</br>");

function pedir() {

    z = parseInt(prompt("O que deseja pedir?"))

    switch (z) {

        case 0:
            alert(`Voce escolheu ${0} Hamburguer`);
            break;
        case 1:
            alert(`Voce escolheu ${1} Sorvete`);
            break;
        case 2:
            alert(`Voce escolheu ${2} Suco`);
            break;
        case 3:
            alert(`Voce escolheu ${3} Biscoito`);
            break;
        default:
            alert("Não temos essa opção");
            break;
    }

}