// Busca na Div app ul
var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

var todos = ['Estudar JavaScript',
    'ir ao mercado',
    'Ir ao curso'];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletarTodo(' + posicao + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function adicionarTodo() {
    if (inputElement.value == '') {
        alert("Digite alguma tarefa!");
        return false;
    }
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salvarDados();
}

buttonElement.onclick = adicionarTodo;


function deletarTodo(posicao) {

    todos.splice(posicao, 1);
    renderTodos();
    salvarDados();

}

function salvarDados(){

    localStorage.setItem('lista_todos', JSON.stringify(todos));

}