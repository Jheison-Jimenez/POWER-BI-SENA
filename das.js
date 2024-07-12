// Función para agregar un dato a la tabla
function agregarDato() {
    const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    const nombre = prompt("Ingrese el nombre:");
    const año = prompt("Ingrese el año:");
    const fecha = prompt("Ingrese la fecha (formato YYYY-MM-DD):");
    const link = prompt("Ingrese el link:");

    let fila = tabla.insertRow();
    fila.insertCell().innerText = nombre;
    fila.insertCell().innerText = año;
    fila.insertCell().innerText = fecha;
    fila.insertCell().innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    let acciones = fila.insertCell();
    acciones.appendChild(crearBoton('Editar', () => editarDato(fila)));
    acciones.appendChild(crearBoton('Eliminar', () => eliminarDato(fila)));
}

// Función para crear un botón
function crearBoton(texto, handler) {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.onclick = handler;
    return boton;
}

// Función para editar un dato
function editarDato(fila) {
    const nombre = prompt("Editar nombre:", fila.cells[0].innerText);
    const año = prompt("Editar año:", fila.cells[1].innerText);
    const fecha = prompt("Editar fecha (formato YYYY-MM-DD):", fila.cells[2].innerText);
    const link = prompt("Editar link:", fila.cells[3].querySelector('a').href);

    fila.cells[0].innerText = nombre;
    fila.cells[1].innerText = año;
    fila.cells[2].innerText = fecha;
    fila.cells[3].innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}

// Función para eliminar un dato
function eliminarDato(fila) {
    fila.parentNode.removeChild(fila);
}
