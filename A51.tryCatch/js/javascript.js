var x = 1;
var y = 5;

alert(x);

try {
    // Si todo va bien, entra aquí
    if (x === 2) {
        throw "no existe el mensaje";
    }

    if (y === 5) {
        throw "sí";
    }
} catch (error) {
    // Lo que hará si falla el try
    alert(error);
} finally {
    alert("se acabó");
}