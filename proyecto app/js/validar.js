
function validacion(){
    respuesta = document.getElementById("opciones").selectedIndex;
if( respuesta == null || respuesta == 0 || respuesta >= 2) {
  alert("incorrecto");
  return false;
}
else if(respuesta == 1){
    alert("correcto");
    return true;
}
    
}

