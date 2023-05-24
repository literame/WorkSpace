var numero = prompt("ingresa tu numero en consulta: ");
var inicio = 0;

function Suma(dato) {
    for (let increment = 0; increment <= dato; increment++) {
       inicio =inicio + increment;
        
    };
    return inicio;
}

function MostrarConsola(datoIngresado){
    console.log("La suma de los numeros del 0 al "+ datoIngresado+ " es igual a "+ Suma(datoIngresado));
}

MostrarConsola(numero);