

///ejercicio para hacer: con un formulario traes los datos, que se guarden en un array, y vaya mostrandolos. 
alumno={
  nombre:"jacinto",
  apellido: "perez",
  edad:45,
  ciudad:"madrid"
}
//EN CASO DE QUE HAYA MAS DE UN OBJETO
//alumno= new Array(alumno1, alumno2, alumno3)

//HACER EL ARRAY DENTRO DE UN OBEJTO
const alumnos={escuela:"CDMFP",
                  results:[
                    {nombre: "pepe",apellido:"perez"},
                    {nombre:"sheila",apellido:"garcia"}]
              }
//alumnos.results[0].nombre me devuelve el nombre
//alumnos.results[2]."creo uno mas"

window.onload=()=>{
if(localStorage.getItem("miAlumnoAlmacenado2")){
  objetoRecuperado=JSON.parse(localStorage.getItem("miAlumnoAlmacenado2")); //parsear el json
  datos.innerHTML="Alumno: "+ objetoRecuperado.nombre+ " "+objetoRecuperado.apellido+" de "+objetoRecuperado.edad + " años y de "+ objetoRecuperado.ciudad;

}else{
  mialumnoJson=JSON.stringify(alumno);

  localStorage.setItem("miAlumnoAlmacenado2", mialumnoJson);
  datos.innerHTML="Alumno guardado"
}



/* CUANDO LO ABRES POR PRIMERA VEZ TE DICE ALUMNO GUARDADO, PORQUE ENTRA EN SET ITEM, 
LUEGO, UNA VEZ QUE VUELVES A ENTRAR YA TE SALE EL NOMBRE Y TALES COSITAS

SI LO CAMBIAS A SESION STORAGE, LO
*/
}