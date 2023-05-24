let nombre =  prompt("Ingresa tu nombre: ");
let edad =  prompt("Ingresa tu edad: ");
let numero =  prompt("Ingresa tu número: ");

function mostrar( name,  age, telef,  consulta){
    if(name == null){
        alert("ingresa tus datos en el sistema!")
    }else{
        document.write("Tu nombre: "+ name + "<br>","Tu edad: " +
        age+ "<br>","Tu edad: "+telef+ "<br>","resultado: "+consulta);
    }
    
}

function mayorEdad(age){
    
    if (edad < 18) {
        return "Eres menor de edad"
    } else{
        return "Eres Mayor de edad"
    }
}




mostrar(nombre, edad, numero,  mayorEdad(edad));