

document.getElementById("suma").addEventListener("click", suma);
document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
document.getElementById("division").addEventListener("click", division);
document.getElementById("resta").addEventListener("click", resta);

function suma() {
    var numeroA = document.getElementById("numA").value;
    var numeroB = document.getElementById("numB").value;
    var resp = parseInt(numeroA) + parseInt(numeroB);
    console.log(resp)
    var hActual = {
        result: resp,
        num1: numeroA,
        num2: numeroB
    }
    document.getElementById("resultados").value = resp;
    historial(hActual.num1,hActual.num2,"+",hActual.result);
};

function resta() {
    var numeroA = document.getElementById("numA").value;
    var numeroB = document.getElementById("numB").value;
    var resp = parseInt(numeroA) - parseInt(numeroB);
    var hActual = {
        result: resp,
        num1: numeroA,
        num2: numeroB
    }
    document.getElementById("resultados").value = resp;
    historial(hActual.num1,hActual.num2,"+",hActual.result);
};

function multiplicacion() {
    var numeroA = document.getElementById("numA").value;
    var numeroB = document.getElementById("numB").value;
    var resp = parseInt(numeroA) * parseInt(numeroB);
    var hActual = {
        result: resp,
        num1: numeroA,
        num2: numeroB
    }
    document.getElementById("resultados").value = resp;
    historial(hActual.num1,hActual.num2,"+",hActual.result);
};

function division() {
    var numeroA = document.getElementById("numA").value;
    var numeroB = document.getElementById("numB").value;
    var resp = parseInt(numeroA) / parseInt(numeroB);
    var hActual = {
        result: resp,
        num1: numeroA,
        num2: numeroB
    }
    document.getElementById("resultados").value = resp;
    historial(hActual.num1,hActual.num2,"+",hActual.result);
}



function historial(A, B, operacion, res){
    document.getElementById("historial").value += A + operacion + B+ "=" + res+ "; "  ;
}