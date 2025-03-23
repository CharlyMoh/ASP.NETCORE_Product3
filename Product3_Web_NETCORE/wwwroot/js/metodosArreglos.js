// Arreglo inicial
let arreglo = ["Manzana", "Banana", "Naranja"];

// Función para mostrar el arreglo actual
function mostrarArreglo() {
    const arregloHTML = arreglo.map((item, index) => `<li>${index}: ${item}</li>`).join("");
    document.getElementById("arreglo-actual").innerHTML = arregloHTML;
}

// Método Modificar: Cambia un elemento en una posición específica
function modificarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const indice = parseInt(document.getElementById("indice").value);
    if (elemento && !isNaN(indice) && indice >= 0 && indice < arreglo.length) {
        arreglo[indice] = elemento;
        mostrarArreglo();
        document.getElementById("resultado-operacion").textContent = `Elemento en la posición ${indice} modificado.`;
    } else {
        document.getElementById("resultado-operacion").textContent = "Índice inválido o elemento vacío.";
    }
}

// Método Sort: Ordena el arreglo alfabéticamente
function ordenarArreglo() {
    arreglo.sort();
    mostrarArreglo();
    document.getElementById("resultado-operacion").textContent = "Arreglo ordenado alfabéticamente.";
}

// Método Reverse: Invierte el orden del arreglo
function invertirArreglo() {
    arreglo.reverse();
    mostrarArreglo();
    document.getElementById("resultado-operacion").textContent = "Arreglo invertido.";
}

// Mostrar el arreglo al cargar la página
window.onload = mostrarArreglo;