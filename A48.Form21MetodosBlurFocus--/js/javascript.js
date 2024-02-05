
//FUNCION FLECHA
window.onload=()=>{

/*
document.forms[0].ciudad.focus();*/

document.forms[0].nombre.select();
document.forms[0].nombre.onchange=miFuncion; //cnd te vas del foco desencadena 
document.forms[0].apellido.onfocus=miFuncion2;

document.querySelector("div").onclick=function(){
  document.forms[0].ciudad.focus();
}
    
}  
///cuadno esta selected esta focus, no puedes ponerlo en dos diferentes (focus ciudad selected nombre SOLO VA UNO)

function miFuncion(){
  if(document.forms[0].nombre.value==""){
    alert("no lo dejes vacio");
    document.forms[0].nombre.focus(); //que quede marcado
  }
}



function miFuncion2(){
  boton.innerHTML="Apellido tiene foco"
}



/*ACCEDO AL LOCAL STORAGE Y COMPRUEBO SI ESTA FUARDADO, SI ES ASI, LO PONGO DIRECTAMENTE, RECOORRO EL FORM Y SI TENGO VALOR LO PONGO COMO VALUE
AUTOCOMPLETE ON: TE LO COMPLETA CON LOS DATOS Q YA HA GUARDADOS TUYOS*/


/*EN FUNCION DE LO Q PONE SE CREAN UNOS NUEVOS VALIDO UN CAMPO CON ONCHANGE, SI ES ESPAÑA, QUE SE AÑADA OTRO CAMPO QUE PONGA CIUDAD*/