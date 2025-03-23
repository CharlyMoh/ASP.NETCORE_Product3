function generarListaAleatoria() {
    const elementos = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango"];
    const listaAleatoria = [];
    for (let i = 0; i < 5; i++) {
        const indiceAleatorio = Math.floor(Math.random() * elementos.length);
        listaAleatoria.push(elementos[indiceAleatorio]);
    }
    return listaAleatoria;
}

function mostrarListaAleatoria() {
    const lista = generarListaAleatoria();
    const listaHTML = lista.map(item => `<li>${item}</li>`).join("");
    document.getElementById("lista-aleatoria").innerHTML = listaHTML;
}

// Llamar a la función al cargar la página
window.onload = mostrarListaAleatoria;