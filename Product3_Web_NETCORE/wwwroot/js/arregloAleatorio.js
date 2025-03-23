// Función para generar un arreglo aleatorio
function generarArregloAleatorio() {
    const elementos = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango"];
    const arregloAleatorio = [];
    for (let i = 0; i < 5; i++) {
        const indiceAleatorio = Math.floor(Math.random() * elementos.length);
        arregloAleatorio.push(elementos[indiceAleatorio]);
    }
    return arregloAleatorio;
}

// Función para mostrar el arreglo aleatorio
function mostrarArregloAleatorio() {
    const arreglo = generarArregloAleatorio();
    const arregloHTML = arreglo.map((item, index) => `<li>${index}: ${item}</li>`).join("");
    document.getElementById("arreglo-aleatorio").innerHTML = arregloHTML;
}

// Mostrar un arreglo aleatorio al cargar la página
window.onload = mostrarArregloAleatorio;