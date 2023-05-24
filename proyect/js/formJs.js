
function Consultar() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    
    comprobar(usuario, contraseña);

    
};

function comprobar(user, pass) {
    if(user == "CIBERTEC001" & pass == "@CIB2023"){
        
        document.write("Bienvenido a la plataforma!");
        console.log("paso");
        
    }else{

        document.write("ingrese un usuario valido. vuelva a la pagina anterior!");
        console.log("no paso");

    }
}

