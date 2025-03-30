const elementos = [
    "Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango",
    "Zanahoria", "Brócoli", "Espinaca", "Pepino", "Lechuga",
    "Piña", "Tomate", "Cebolla", "Sandía"
];

//function generarArregloAleatorio() {
//    const copia = [...elementos];
//    const arregloAleatorio = [];
//    const cantidad = Math.min(6, copia.length);

//    for (let i = 0; i < cantidad; i++) {
//        const indiceAleatorio = Math.floor(Math.random() * copia.length);
//        arregloAleatorio.push(copia.splice(indiceAleatorio, 1)[0]);
//    }

//    return arregloAleatorio;
//}
function generarArregloAleatorio() {
    const copia = [...elementos];
    const arregloAleatorio = [];
    const cantidad = Math.min(6, copia.length); // Genera máximo 6 elementos

    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copia.length);
        arregloAleatorio.push(copia.splice(indiceAleatorio, 1)[0]);
    }

    return arregloAleatorio;
}


function mostrarArregloAleatorio() {
    const arreglo = generarArregloAleatorio();
    const contenedor = document.getElementById("arreglo-aleatorio");
    contenedor.innerHTML = "";

    arreglo.forEach((item, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-arreglo";
        tarjeta.innerHTML = `<span class="indice">[${index}]</span><br>${item}`;
        contenedor.appendChild(tarjeta);
    });

    // 👇 DIBUJAR EN CANVAS
    dibujarEnCanvas(arreglo);
}

//function dibujarEnCanvas(arreglo) {
//    const canvas = document.getElementById("canvas-arreglo");
//    if (!canvas) return;

//    const ctx = canvas.getContext("2d");
//    ctx.clearRect(0, 0, canvas.width, canvas.height);

//    const cuadroAncho = 90;
//    const cuadroAlto = 60;
//    const espacio = 10;
//    const inicioX = 20;
//    const inicioY = 40;

//    ctx.font = "14px Segoe UI";
//    ctx.textAlign = "center";

//    arreglo.forEach((valor, index) => {
//        const x = inicioX + index * (cuadroAncho + espacio);

//        // Recuadro
//        ctx.strokeStyle = "#003366";
//        ctx.strokeRect(x, inicioY, cuadroAncho, cuadroAlto);

//        // Índice
//        ctx.fillStyle = "#888";
//        ctx.fillText(`[${index}]`, x + cuadroAncho / 2, inicioY - 5);

//        // Valor
//        ctx.fillStyle = "#000";
//        ctx.fillText(valor, x + cuadroAncho / 2, inicioY + cuadroAlto / 2 + 5);
//    });
//}

function dibujarEnCanvas(arreglo) {
    const canvas = document.getElementById("canvas-arreglo");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anchoCorchete = 70;
    const espacio = 15;
    const inicioX = 30;
    const inicioY = 60;

    ctx.font = "14px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";

    // Título del arreglo
    ctx.fillText("Índice", inicioX - 20, inicioY - 25);
    ctx.fillText("Valor", inicioX - 20, inicioY + 10);

    arreglo.forEach((valor, index) => {
        const x = inicioX + index * (anchoCorchete + espacio);

        // Dibujar corchetes: [ valor ]
        ctx.fillStyle = "#003366";
        ctx.font = "20px monospace";
        ctx.fillText("[", x, inicioY);
        ctx.fillText("]", x + anchoCorchete, inicioY);

        // Valor en el centro
        ctx.font = "16px Segoe UI";
        ctx.fillStyle = "#000";
        ctx.fillText(valor, x + anchoCorchete / 2, inicioY);

        // Índice arriba
        ctx.font = "13px Segoe UI";
        ctx.fillStyle = "#555";
        ctx.fillText(index, x + anchoCorchete / 2, inicioY - 20);
    });

    // Línea debajo del arreglo
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    ctx.moveTo(inicioX - 10, inicioY + 15);
    ctx.lineTo(inicioX + arreglo.length * (anchoCorchete + espacio), inicioY + 15);
    ctx.stroke();
}


window.onload = mostrarArregloAleatorio;
