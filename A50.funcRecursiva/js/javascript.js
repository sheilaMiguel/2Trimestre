


let miArray=[["nombre","zapato"],["precio", "35"], ["colores", ["azul","marron","negro" ]],["descripcion", "Zapatos para deportes"]];

miObjeto={uno:"loquesea", dos:miArray,tres:"leches"}


//recursiva: porque se llama asi misma
function recursiva(objeto){
  datos=Object.keys(objeto)
  datos.forEach(dato => {
    typeof objeto[dato]=="object"?(detalle.innerHTML+="<p><b>" +dato+ "</b>:</p> ", recursiva(objeto[dato])):detalle.innerHTML+="<p>"  +dato+": " +objeto[dato]+" </p>";
  });
}

  window.onload=function(){
    recursiva(miObjeto)
  }


