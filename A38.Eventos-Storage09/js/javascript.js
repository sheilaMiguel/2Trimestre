window.onload=function(){

    /*Cogemos datos*/
    let defColor=localStorage.getItem("color");
    let defTamaño = localStorage.getItem("tamaño");
    let defTipog = localStorage.getItem("tipografia");

    document.getElementById("color").value = defColor;
    document.getElementById("tamaño").value = defTamaño;
    document.forms[0].tipografia.value = defTipog;

    guardarPreferencias();

}

function guardarPreferencias(){
    let color = document.getElementById("color").value;
    let tamaño = document.getElementById("tamaño").value;
    let tipografia = document.forms[0].tipografia.value;

    document.getElementById("titulo").style.color = color;
    document.getElementById("parrafo").style.color = color;

    document.getElementById("titulo").style.fontSize = tamaño + "px";
    document.getElementById("parrafo").style.fontSize = tamaño  + "px";

    document.getElementById("titulo").style.fontFamily = tipografia;
    document.getElementById("parrafo").style.fontFamily = tipografia;

    localStorage.setItem("color", color);
    localStorage.setItem("tamaño", tamaño);
    localStorage.setItem("tipografia", tipografia);
}

