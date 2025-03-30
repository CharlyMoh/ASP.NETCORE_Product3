// Arreglo inicial
let arreglo = ["perro1", "perro2", "perro3"];

// Mostrar el arreglo actual en lista y canvas
function mostrarArreglo() {
    const contenedor = document.getElementById("arreglo-actual");
    contenedor.innerHTML = "";

    arreglo.forEach((item, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-arreglo";
        tarjeta.innerHTML = `<span class="indice">[${index}]</span><br><strong>${item}</strong>`;
        contenedor.appendChild(tarjeta);
    });

    // Canvas actualizado
    dibujarArregloTiempoReal(arreglo);
}


// Modificar un elemento en el arreglo
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

// Ordenar el arreglo
function ordenarArreglo() {
    arreglo.sort();
    mostrarArreglo();
    document.getElementById("resultado-operacion").textContent = "Arreglo ordenado alfabéticamente.";
}

// Invertir el arreglo
function invertirArreglo() {
    arreglo.reverse();
    mostrarArreglo();
    document.getElementById("resultado-operacion").textContent = "Arreglo invertido.";
}

// Dibujar el arreglo en canvas con corchetes
function dibujarArregloTiempoReal(arreglo) {
    const canvas = document.getElementById("canvas-arreglo-tiempo-real");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cuadroAncho = 100;
    const cuadroAlto = 60;
    const espacio = 20;
    const inicioX = 30;
    const inicioY = 50;

    ctx.font = "14px Segoe UI";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    arreglo.forEach((valor, index) => {
        const x = inicioX + index * (cuadroAncho + espacio);

        // Fondo del cuadro
        ctx.fillStyle = "#f0f8ff";
        ctx.fillRect(x, inicioY, cuadroAncho, cuadroAlto);

        // Borde del cuadro
        ctx.strokeStyle = "#003366";
        ctx.strokeRect(x, inicioY, cuadroAncho, cuadroAlto);

        // Índice
        ctx.fillStyle = "#555";
        ctx.font = "12px Segoe UI";
        ctx.fillText(`[${index}]`, x + cuadroAncho / 2, inicioY - 12);

        // Valor
        ctx.fillStyle = "#003366";
        ctx.font = "bold 16px Segoe UI";
        ctx.fillText(valor, x + cuadroAncho / 2, inicioY + cuadroAlto / 2);
    });
}





// Mostrar al cargar
window.onload = mostrarArreglo;
