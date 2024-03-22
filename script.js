let process = '';


function add(digit){
    document.getElementById('screen').value += digit;
}

function erase(){
    document.getElementById('screen').value = '';
    process = '';
}

function operate(digit){
    process += document.getElementById('screen').value + digit;
    document.getElementById('screen').value = '';
}

function result(){
    process += document.getElementById('screen').value;
    let resultado = eval(process);
    document.getElementById('screen').value = resultado;
    process = '';
}