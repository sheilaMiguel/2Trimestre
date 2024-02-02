
window.onload = () => {
    document.getElementById("miFormulario").addEventListener("submit", (event) => {
        event.preventDefault(); // evita el comportamiento por defecto de enviar el formulario
        alert("prevenidp");

       
        var elementos = document.getElementById("miFormulario").elements;
        //OTRA FORMa: document.forms[0].elements.length

        console.log("LENGHT: " + document.forms[0].elements.length);
        
        for (var i = 0; i < elementos.length; i++) {
            var elementoActual = elementos[i];
            console.log("Tipo de campo: " + elementoActual.type);
            console.log("ID del campo: " + elementoActual.id);
            console.log("Nombre del campo: " + elementoActual.name);
            console.log("Valor del campo: " + elementoActual.value);
            console.log("------------------------");
        }
    });
};