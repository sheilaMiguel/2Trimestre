
//FUNCION FLECHA
window.onload=()=>{

  document.forms[0].onsubmit=(event)=>{
    event.preventDefault;

    patron=/^[6,7,9][0-9]{8}$/;
    patron.test(document.forms[0].tel.value)?alert("ok"):alert("KO")
    
}

document.forms[0].pais.onchange=miFuncion3; 
document.forms[0].tel.onchange=miFuncion4; 
}  
///cuadno esta selected esta focus, no puedes ponerlo en dos diferentes (focus ciudad selected nombre SOLO VA UNO)

function miFuncion3(){
  if(document.forms[0].pais.value=="españa"){
    nuevoInput=document.createElement("input");
   

nuevoInput.type = "text"; // Tipo de input (puedes cambiarlo según tus necesidades)
nuevoInput.id = "ciudad";
nuevoInput.name = "ciudad";
//nuevoInput.value = "ciudad";
nuevoInput.placeholder = "ciudad";

nuevoCampo.appendChild(nuevoInput);
  }
   
}

function miFuncion4() {
  let num = document.forms[0].tel.value;
  
 // alert(num.toString().length);
  if(num.toString().length ==9){
    document.getElementById('texto').innerHTML="Correcto, es un teléf";
  }else{
    document.getElementById('texto').innerHTML="MAL";
  }
}







/*ACCEDO AL LOCAL STORAGE Y COMPRUEBO SI ESTA FUARDADO, SI ES ASI, LO PONGO DIRECTAMENTE, RECOORRO EL FORM Y SI TENGO VALOR LO PONGO COMO VALUE
AUTOCOMPLETE ON: TE LO COMPLETA CON LOS DATOS Q YA HA GUARDADOS TUYOS*/


/*EN FUNCION DE LO Q PONE SE CREAN UNOS NUEVOS VALIDO UN CAMPO CON ONCHANGE, SI ES ESPAÑA, QUE SE AÑADA OTRO CAMPO QUE PONGA CIUDAD*/

/*ESCRIBE PATRON PA VALIDAR UN TELEF, UN CORREO, ...*/