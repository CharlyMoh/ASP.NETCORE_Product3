let lista = [
    "Manzana", "Banana", "Naranja", "Pera", "Mango"
];

function mostrarLista() {
    const ul = document.getElementById("lista-actual");
    ul.innerHTML = "";

    const tarjetas = document.getElementById("lista-visual");
    tarjetas.innerHTML = "";

    lista.forEach((item, index) => {
        // Lista textual
        const li = document.createElement("li");
        li.textContent = `${index}: ${item}`;
        ul.appendChild(li);

        // Tarjetas animadas
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-arreglo";
        tarjeta.innerHTML = `<span class="indice">[${index}]</span><br><strong>${item}</strong>`;
        tarjetas.appendChild(tarjeta);
    });

    dibujarCanvasMetodosLista(lista);

}

// Métodos
function agregarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const indice = document.getElementById("indice").value.trim();
    const resultado = document.getElementById("resultado-contains");

    if (lista.length >= 8) {
        resultado.textContent = "⚠️ No puedes agregar más de 8 elementos.";
        return;
    }

    if (elemento === "") {
        resultado.textContent = "⚠️ Ingresa un elemento válido.";
        return;
    }

    if (indice !== "") {
        const idx = parseInt(indice);
        if (!isNaN(idx) && idx >= 0 && idx < lista.length) {
            resultado.textContent = `⚠️ El índice ${idx} ya está ocupado. Usa 'Insert' si quieres colocarlo ahí.`;
            return;
        }
    }

    lista.push(elemento);
    mostrarLista();
    resultado.textContent = "";
}

function eliminarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const resultado = document.getElementById("resultado-contains");

    const index = lista.indexOf(elemento);
    if (index !== -1) {
        lista.splice(index, 1);
        resultado.textContent = `Elemento "${elemento}" eliminado.`;
    } else {
        resultado.textContent = `⚠️ Elemento "${elemento}" no encontrado.`;
    }
    mostrarLista();
}

function insertarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const indice = parseInt(document.getElementById("indice").value.trim());
    const resultado = document.getElementById("resultado-contains");

    if (lista.length >= 8) {
        resultado.textContent = "⚠️ No puedes agregar más de 8 elementos.";
        return;
    }

    if (!isNaN(indice) && elemento !== "" && indice >= 0 && indice <= lista.length) {
        lista.splice(indice, 0, elemento);
        mostrarLista();
        resultado.textContent = `Elemento "${elemento}" insertado en la posición ${indice}.`;
    } else {
        resultado.textContent = "⚠️ Índice inválido o elemento vacío.";
    }
}

function limpiarLista() {
    lista = [];
    mostrarLista();
    document.getElementById("resultado-contains").textContent = "Lista limpiada.";
}

function verificarElemento() {
    const elemento = document.getElementById("elemento").value.trim();
    const resultado = document.getElementById("resultado-contains");

    if (lista.includes(elemento)) {
        resultado.textContent = `✅ La lista contiene "${elemento}".`;
    } else {
        resultado.textContent = `❌ La lista no contiene "${elemento}".`;
    }
}

function ordenarLista() {
    lista.sort();
    mostrarLista();
    document.getElementById("resultado-contains").textContent = "Lista ordenada alfabéticamente.";
}

// Canvas
function dibujarCanvasMetodosLista(lista) {
    const canvas = document.getElementById("canvas-lista-derecha"); // canvas SOLO de métodos
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const ancho = 180;
    const alto = 50;
    const espacio = 20;
    const inicioX = 40;
    const inicioY = 20;

    ctx.font = "14px Segoe UI";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    lista.forEach((valor, index) => {
        const y = inicioY + index * (alto + espacio);

        ctx.fillStyle = "#f0f8ff";
        ctx.fillRect(inicioX, y, ancho, alto);

        ctx.strokeStyle = "#003366";
        ctx.strokeRect(inicioX, y, ancho, alto);

        ctx.fillStyle = "#555";
        ctx.font = "12px Segoe UI";
        ctx.fillText(`[${index}]`, inicioX + ancho / 2, y - 10);

        ctx.fillStyle = "#003366";
        ctx.font = "bold 16px Segoe UI";
        ctx.fillText(valor, inicioX + ancho / 2, y + alto / 2);
    });
}



// Inicial
window.onload = mostrarLista;
