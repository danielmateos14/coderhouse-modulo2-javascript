const localidadSeleccionado = prompt('Escribe una localidad: ');
const localidades = ['argentina', 'brasil', 'mexico', 'estados unidos', 'colombia'];
let loc = false

for (i = 0; i < localidades.length; i++) {
    if (localidadSeleccionado.toLowerCase() == localidades[i].toLowerCase()) {
        loc = true
        break;
    }
}

if (loc == true) {
    alert("El clima en tu localidad es de 30 grados");
} else {
    alert("Localidad no encontrada");
}