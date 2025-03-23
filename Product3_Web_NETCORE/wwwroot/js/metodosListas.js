// Lista inicial (puedes modificarla)
let lista = ["Manzana", "Banana", "Naranja"];

// Función para mostrar la lista actual
function mostrarLista() {
    const listaHTML = lista.map((item, index) => `<li>${index}: ${item}</li>`).join("");
    document.getElementById("lista-actual").innerHTML = listaHTML;
}

// Método Add: Agrega un elemento al final de la lista
function agregarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    if (elemento) {
        lista.push(elemento);
        mostrarLista();
    }
}

// Método Remove: Elimina un elemento de la lista
function eliminarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    if (elemento) {
        lista = lista.filter(item => item !== elemento);
        mostrarLista();
    }
}

// Método Insert: Inserta un elemento en una posición específica
function insertarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const indice = parseInt(document.getElementById("indice").value);
    if (elemento && !isNaN(indice)) {
        lista.splice(indice, 0, elemento);
        mostrarLista();
    }
}

// Método Clear: Limpia la lista
function limpiarLista() {
    lista = [];
    mostrarLista();
}

// Método Contains: Verifica si un elemento está en la lista
function verificarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    if (elemento) {
        const contiene = lista.includes(elemento);
        document.getElementById("resultado-contains").textContent = contiene
            ? `La lista contiene "${elemento}".`
            : `La lista NO contiene "${elemento}".`;
    }
}

// Método Sort: Ordena la lista alfabéticamente
function ordenarLista() {
    lista.sort();
    mostrarLista();
}

// Mostrar la lista al cargar la página
window.onload = mostrarLista;