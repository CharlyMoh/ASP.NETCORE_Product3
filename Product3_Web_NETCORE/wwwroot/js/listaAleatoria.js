const alimentos = [
    "Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango", "Piña", "Sandía", "Cereza", "Melón",
    "Zanahoria", "Brócoli", "Espinaca", "Pepino", "Lechuga", "Papa", "Tomate", "Cebolla", "Calabaza", "Chayote"
];

function generarListaAleatoria() {
    const copia = [...alimentos];
    const lista = [];

    for (let i = 0; i < 5; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        lista.push(copia.splice(indice, 1)[0]);
    }

    return lista;
}

function mostrarListaAleatoria() {
    const lista = generarListaAleatoria();
    const contenedor = document.getElementById("lista-aleatoria");
    contenedor.innerHTML = "";

    lista.forEach((item, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-arreglo"; // reutilizamos la clase de tarjetas
        tarjeta.innerHTML = `<span class="indice">[${index}]</span><br><strong>${item}</strong>`;
        contenedor.appendChild(tarjeta);
    });

    dibujarListaCanvas(lista);
}

// Canvas vertical
function dibujarListaCanvas(lista) {
    const canvas = document.getElementById("canvas-lista-aleatoria"); // <- este canvas es solo para la lista generada
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const ancho = 200;
    const alto = 60;
    const espacio = 20;
    const inicioX = 40;
    const inicioY = 30;

    ctx.font = "14px Segoe UI";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    lista.forEach((valor, index) => {
        const y = inicioY + index * (alto + espacio);

        // Dibujo de fondo
        ctx.fillStyle = "#f0f8ff";
        ctx.fillRect(inicioX, y, ancho, alto);

        // Borde
        ctx.strokeStyle = "#003366";
        ctx.strokeRect(inicioX, y, ancho, alto);

        // Índice
        ctx.fillStyle = "#555";
        ctx.font = "12px Segoe UI";
        ctx.fillText(`[${index}]`, inicioX + ancho / 2, y - 10);

        // Valor
        ctx.fillStyle = "#003366";
        ctx.font = "bold 16px Segoe UI";
        ctx.fillText(valor, inicioX + ancho / 2, y + alto / 2);
    });
}



//window.onload = mostrarListaAleatoria;
