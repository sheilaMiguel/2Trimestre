//alert("hola")
window.onload = () => {

    document.forms[0].agrego.onclick = envioForm; //POR EL NAME
    document.forms[0].addEventListener('reset', resetFormulario);
    document.forms[0].paso.onclick = pasarAPracticas; //POR EL NAME
    document.forms[0].elimMatriculados.onclick = elimMatriculados; //POR EL NAME
    document.forms[0].elimPracticas.onclick = elimPracticas; //POR EL NAME
    
      

    function envioForm(event) {
        //alert("Hola");
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        let matricular = document.forms[0].matricular.value;
        console.log(matricular);

        if (matricular.trim() !== "") {
        let nuevoOPTION = document.createElement("option");
        nuevoOPTION.text = matricular;
        nuevoOPTION.name = matricular;
        nuevoOPTION.value = matricular; // Se recomienda establecer el valor
        document.getElementById("alumnosMatriculados").add(nuevoOPTION);
        }
    }

    

    //EL RESET
    function resetFormulario(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        console.log("Formulario reseteado");

           let formulario = document.forms[0];
           for (let i = 0; i < formulario.elements.length; i++) {
               let elemento = formulario.elements[i];
               // Restablece el valor del elemento
               if (elemento.type !== "submit" && elemento.type !== "reset" && elemento.type !== "button") {
                   elemento.value = "";
               }
           }
           
           // Elimina los elementos de la lista de matriculados y practicas
           document.getElementById("alumnosMatriculados").innerHTML = "";
           document.getElementById("alumnosPracticas").innerHTML = "";
       }


      
     //PASAR A PRACTICAS

function pasarAPracticas(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    let selectedOptions = document.querySelectorAll("#alumnosMatriculados option:checked");

    //PARA MULTIPLE SELECT
     if (selectedOptions.length > 0) {
        console.log("¡Sí! Al menos una opción está seleccionada.");
        
       selectedOptions.forEach(option => {
            let nuevoOPTION = document.createElement("option");
            nuevoOPTION.text = option.text;
            nuevoOPTION.name = option.text;
            nuevoOPTION.value = option.text; // Se recomienda establecer el valor
            document.getElementById("alumnosPracticas").add(nuevoOPTION);
        });

                                /* //si quisiera que se eliminen de matriculados
                                    selectedOptions.forEach(option => { 
                                    option.remove(); 
                                    });*/

           /* PARA UN SELECT DE UNO EN UNO
           console.log(document.querySelector("#alumnosMatriculados option:checked").text);
            let opcionChecked=document.querySelector("#alumnosMatriculados option:checked").text;

            if(opcionChecked){
            let nuevoOPTION = document.createElement("option");
            nuevoOPTION.text = opcionChecked;
            nuevoOPTION.name = opcionChecked;
            nuevoOPTION.value = opcionChecked; // Se recomienda establecer el valor
            document.getElementById("alumnosPracticas").add(nuevoOPTION);*/ 
            

            } else {
                console.log("No hay opciones seleccionadas.");
            }

}
//ELIMMM MATRICUlados
function elimMatriculados(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    let selectedOptions = document.querySelectorAll("#alumnosMatriculados option:checked");
     //PARA MULTIPLE SELECT
     if (selectedOptions.length > 0) {
        console.log("¡Sí! Al menos una opción está seleccionada.");

        //si quisiera que se eliminen de matriculados
            selectedOptions.forEach(option => { 
              option.remove(); 
        });
}
}

//ELIMINAR DE PRACTICAS

function elimPracticas(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    let selectedOptions = document.querySelectorAll("#alumnosPracticas option:checked");
     //PARA MULTIPLE SELECT
     if (selectedOptions.length > 0) {
        console.log("¡Sí! Al menos una opción está seleccionada.");

        //si quisiera que se eliminen de matriculados
            selectedOptions.forEach(option => { 
              option.remove(); 
        });
}
}


}