
//FUNCION FLECHA
window.onload=()=>{

    document.forms[0].onsubmit=function(event){
        event.preventDefault(); // evita el comportamiento por defecto, hace que no se envie      
        valido=true; //por defecto es valido

      if(document.forms[0].nombre.value==""){
        alert("le falta rellenar campo nombre");
        valido=false; //al no ser valido, es falso
      }
 
      //PARA UN SELECT
      let paisesSelect= document.forms[0].paises.options[document.forms[0].paises.selectedIndex].value;
      if(paisesSelect==0){
        alert("Seleccione un país");
        valido=false;
      }

      //PARA UN INPUT
      if(document.forms[0].socio.checked){
        alert("eres socio");
        document.forms[0].action="socios.php" //action es dnd lo envias
        

      }else{
        document.forms[0].action="Nosocios.php"
      }


      //SI EL FORM ES CORRECTO SE ENVIA 
    if(valido==true){
        document.forms[0].submit();
    }

    }
}      