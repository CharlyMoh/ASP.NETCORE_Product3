// Datos de operaciones por lenguaje
const operaciones = {
    csharp: `
        <h3>Operaciones en C#</h3>
        <ul>
            <li><strong>Crear un arreglo</strong>: <code>int[] arreglo = new int[5];</code></li>
            <li><strong>Acceso a elementos</strong>: <code>arreglo[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>arreglo[index] = valor;</code></li>
            <li><strong>Recorrer el arreglo</strong>: <code>for (int i = 0; i < arreglo.Length; i++) { ... }</code></li>
        </ul>
    `,
    python: `
        <h3>Operaciones en Python</h3>
        <ul>
            <li><strong>Crear un arreglo</strong>: <code>arreglo = [1, 2, 3, 4, 5]</code></li>
            <li><strong>Acceso a elementos</strong>: <code>arreglo[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>arreglo[index] = valor</code></li>
            <li><strong>Recorrer el arreglo</strong>: <code>for item in arreglo: ...</code></li>
        </ul>
    `,
    javascript: `
        <h3>Operaciones en JavaScript</h3>
        <ul>
            <li><strong>Crear un arreglo</strong>: <code>let arreglo = [1, 2, 3, 4, 5];</code></li>
            <li><strong>Acceso a elementos</strong>: <code>arreglo[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>arreglo[index] = valor;</code></li>
            <li><strong>Recorrer el arreglo</strong>: <code>arreglo.forEach(item => { ... });</code></li>
        </ul>
    `
};

// Función para actualizar las operaciones según el lenguaje seleccionado
function actualizarOperaciones() {
    const lenguaje = document.getElementById("selector-lenguaje").value;
    document.getElementById("operaciones-lenguaje").innerHTML = operaciones[lenguaje];
}

// Mostrar las operaciones iniciales (C# por defecto)
window.onload = actualizarOperaciones;

// Escuchar cambios en el selector de lenguaje
document.getElementById("selector-lenguaje").addEventListener("change", actualizarOperaciones);