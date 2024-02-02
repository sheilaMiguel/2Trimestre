
window.onload=(event)=>{


texto1.oncopy=function(event){
  event.preventDefault();  //evita que se copie
let texto=window.getSelection();  // se utiliza para obtener el texto seleccionado por el usuario en la página web.
alert("no copies coño "+ texto);
}

caja.onpaste=function(e){
  e.preventDefault(); //evito que pegue
  let elTexto= e.clipboardData.getData("text/plain"); //recupero el texto plano (en html) PERO no le dejo q lo copie
  alert("escribelo tu puta vaga" +elTexto);
}


}


//cnd copie texto, cambie el texto que ha copiado y añadir copiright y mi nombre 
//(el use rpiensa q lo ha copiado y cnd lo pega añade el texto ese)