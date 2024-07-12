document.addEventListener('DOMContentLoaded', cargarDatos);

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

    guardarDatos();
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

    guardarDatos();
}

// Función para eliminar un dato
function eliminarDato(fila) {
    fila.parentNode.removeChild(fila);
    guardarDatos();
}

// Función para guardar datos en localStorage
function guardarDatos() {
    const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    const filas = tabla.getElementsByTagName('tr');
    let datos = [];

    for (let fila of filas) {
        let dato = {
            nombre: fila.cells[0].innerText,
            año: fila.cells[1].innerText,
            fecha: fila.cells[2].innerText,
            link: fila.cells[3].querySelector('a').href
        };
        datos.push(dato);
    }

    localStorage.setItem('datosTablaV2', JSON.stringify(datos));
}

// Función para cargar datos desde localStorage
function cargarDatos() {
    const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    const datos = JSON.parse(localStorage.getItem('datosTablaV2')) || [];

    for (let dato of datos) {
        let fila = tabla.insertRow();
        fila.insertCell().innerText = dato.nombre;
        fila.insertCell().innerText = dato.año;
        fila.insertCell().innerText = dato.fecha;
        fila.insertCell().innerHTML = `<a href="${dato.link}" target="_blank">${dato.link}</a>`;
        let acciones = fila.insertCell();
        acciones.appendChild(crearBoton('Editar', () => editarDato(fila)));
        acciones.appendChild(crearBoton('Eliminar', () => eliminarDato(fila)));
    }
}
