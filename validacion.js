
function validarDatos(){
    window.event.preventDefault();
   
var nombre = document.querySelector("#nombreapellido").value
var mail = document.querySelector("#correoelectronico").value
var asunto=document.querySelector("#asunto").value
var mensaje= document.querySelector("#mensaje").value

var expresiones = /\w+@+\w+\.+[a-z]/;

	if(nombre.length > 50){
       document.getElementById("error1").innerHTML= " el nombre no debe contener mas de 50 caracteres";
		return false
    } else if (!expresiones.test(mail)){
        document.getElementById("error2").innerHTML="mail no valido"
        return false

    }else if (asunto.length >50){
        document.getElementById("error3").innerHTML= " el asunto no debe contener mas de 50 caracteres";
		return false

	}else if (mensaje.length >300){
        document.getElementById("error4").innerHTML= " El maximo de caracteres es 300";
		return false
	}
}

addEventListener("submit", validarDatos)


