function leerFormulario() {
 
    /*INPUTTTTTTTTT NORMAL*/
     // Acceso por ID
    let  formularioPorId = document.getElementById("miFormulario").nombre.value;
    console.log("Acceso por ID - Nombre:", formularioPorId);

    // Acceso por Índice en el array forms
    let formularioPorIndice = document.forms[0].nombre.value;
    console.log("Acceso por Índice - Nombre:", formularioPorIndice);




    /*RADIOOOOOOOOOOOOOOO*/
    // Acceso a Radio 1
    let radioValue = document.querySelector('input[name="miRadio"]:checked').value;
    console.log("Opción Radio seleccionada:", radioValue);

    //2
    var radios = document.getElementsByName('miRadio');
    var radioSeleccionado;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSeleccionado = radios[i].value;
            break;
        }
    }  
    console.log("radio Select: " + radioSeleccionado);

    //3
    let = nuevora=document.getElementById("miFormulario").elements["miRadio"].value;
    console.log("OTro radioo: " + nuevora);

    //4
     let = ra2=document.forms[0].elements["miRadio"].value;
    console.log("OTro ra: " + ra2);



    /*CheckboxXXXXXXXXXXXX*/
    // Acceso a Checkbox
    //1
    document.forms[0].miCheck.checked ? alert("Marcado") : alert("No marcado");
    console.log("Acceso por Índice - Checkbox:", document.forms[0].miCheck.checked);

    //2
    var miCheck = document.getElementById('miCheck').checked;
    console.log("Estado Checkbox:", miCheck); 

    //3
    /*PARA VER LOS VALORES DEL CHECKBOXES*/
    var checkboxes = document.getElementsByName("opciones");
        var valoresSeleccionados = [];

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                valoresSeleccionados.push(checkboxes[i].value);
            }
        }

        if (valoresSeleccionados.length > 0) {
            alert("Valores seleccionados: " + valoresSeleccionados.join(", "));
        } else {
            alert("Ningún checkbox seleccionado.");
        }


    /*SELECTTTTTTTTTTTTTTTTtt*/
    //1
    // Acceso a Select---COGE LO QE PONGA EN VALUE
    let selectIndex = document.forms[0].miSelect.selectedIndex;
    let selectOption = document.forms[0].miSelect.options[selectIndex].value;
    console.log("Opción Select seleccionada:", selectOption);

    //TEXTO EN VEZ DE COGER EL VALUE: TEXT
    var selec = document.getElementById("miSelect");
    var textoSeleccionado = selec.options[selec.selectedIndex].text;

    

    console.log("Texto seleccionado: " + textoSeleccionado);

    //2---COGE LO QE PONGA EN VALUE
    var valorSeleccionado =  document.getElementById("sele").selectElement.value;
    console.log("Valor seleccionado:A " + valorSeleccionado);
}