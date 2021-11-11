function inserir(num){
    document.getElementById('resultado').value += num;
}

function limpar(){
    document.getElementById('resultado').value = " ";
}

function apagarCaracter(){
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').value;
    if(resultado){
        document.getElementById('resultado').value = eval(resultado);
    }
    else{
        document.getElementById('resultado').value = "0";
    }    
}