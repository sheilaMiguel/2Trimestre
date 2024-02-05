
//FUNCION FLECHA
window.onload=()=>{

    document.forms[0].onsubmit=function(event){
        event.preventDefault(); // evita el comportamiento por defecto, hace que no se envie      
       
        for(i=0;i<document.forms[0].elements.length-1;i++){//-1 pa q no coja el elemento de enviar
            switch(document.forms[0].elements[i].type){
              case "text":
                case "email":
                  case "tel":
                    case "radio":
              texto.innerHTML+="<p>"+ document.forms[0].elements[i].name+": "+document.forms[0].elements[i].value+"</p>";
              break;

              case "select-one":
              texto.innerHTML+="<p>"+ document.forms[0].elements[i].name+": "+document.forms[0].elements[i].options[document.forms[0].elements[i].selectedIndex].text+"</p>";
              break;

              case "checkbox":
                if(document.forms[0].elements[i].checked){
                  texto.innerHTML+="<p>"+document.forms[0].elements[i].name+": sí </p>";
                }
            
            case "select-multiple":
            let opcionesSeleccionadas = [];
            for (let j = 0; j < document.forms[0].elements[i].options.length; j++) {
                if (document.forms[0].elements[i].options[j].selected) {
                    opcionesSeleccionadas.push(document.forms[0].elements[i].options[j].text);
                }
            }
            texto.innerHTML += "<p>" + document.forms[0].elements[i].name + ": " + opcionesSeleccionadas.join(", ") + "</p>";
            break;
           }

        }
    }
}      



/*ACCEDO AL LOCAL STORAGE Y COMPRUEBO SI ESTA FUARDADO, SI ES ASI, LO PONGO DIRECTAMENTE, RECOORRO EL FORM Y SI TENGO VALOR LO PONGO COMO VALUE
AUTOCOMPLETE ON: TE LO COMPLETA CON LOS DATOS Q YA HA GUARDADOS TUYOS*/