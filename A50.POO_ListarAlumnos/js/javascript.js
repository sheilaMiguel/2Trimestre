
//CONSTRUCTOR
function Alumno(nombre,apellido,edad, escuela){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.escuela=escuela;
    //this.saludar=()=>alert(`hola, ${nombre}`)
    }

    var alumnosMatriculados=new Array();
    indice=0; 

   

window.onload=function(){
document.forms[0].onsubmit=function(event){
    event.preventDefault();
   nombre= document.forms[0].nombre.value;
   apellido = document.forms[0].apellido.value;
   edad = document.forms[0]["edad"].value;
   escuela = document.forms[0]["escuela"].value;

    alumnosMatriculados[indice] = new Alumno(nombre, apellido, edad, escuela);
   indice++;

  // lista.innerHTML+="nuevo alumno guardado";
}

document.querySelector("h3").onclick=function(){
    lista.innerHTML="";
for(i=0; i<alumnosMatriculados.length;i++){


    for (let clave in alumnosMatriculados[i]){
        console.log(alumnosMatriculados[i][clave]);
        }

    lista.innerHTML+=
    "<p>"+ alumnosMatriculados[i].nombre
    +" "+ alumnosMatriculados[i].apellido
    +" "+ alumnosMatriculados[i].edad
    +" "+ alumnosMatriculados[i].escuela+"</p>";
}
}
}

//alumnosMatriculados[1].edad=23;
//Alumno.prototype.empresa="laqsea";
