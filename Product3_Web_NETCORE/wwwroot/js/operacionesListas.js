// Datos de operaciones por lenguaje
const operaciones = {
    csharp: `
        <h3>Operaciones en C#</h3>
        <ul>
            <li><strong>Crear una lista</strong>: <code>List&lt;T&gt; lista = new List&lt;T&gt;();</code></li>
            <li><strong>Acceso a elementos</strong>: <code>lista[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>lista[index] = valor;</code></li>
            <li><strong>Añadir elementos</strong>: <code>lista.Add(elemento);</code></li>
            <li><strong>Eliminar elementos</strong>: <code>lista.Remove(elemento);</code></li>
            <li><strong>Recorrer la lista</strong>: <code>foreach (var item in lista) { ... }</code></li>
        </ul>
    `,
    python: `
        <h3>Operaciones en Python</h3>
        <ul>
            <li><strong>Crear una lista</strong>: <code>lista = []</code></li>
            <li><strong>Acceso a elementos</strong>: <code>lista[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>lista[index] = valor</code></li>
            <li><strong>Añadir elementos</strong>: <code>lista.append(elemento)</code></li>
            <li><strong>Eliminar elementos</strong>: <code>lista.remove(elemento)</code></li>
            <li><strong>Recorrer la lista</strong>: <code>for item in lista: ...</code></li>
        </ul>
    `,
    javascript: `
        <h3>Operaciones en JavaScript</h3>
        <ul>
            <li><strong>Crear una lista</strong>: <code>let lista = [];</code></li>
            <li><strong>Acceso a elementos</strong>: <code>lista[index]</code></li>
            <li><strong>Modificación de elementos</strong>: <code>lista[index] = valor;</code></li>
            <li><strong>Añadir elementos</strong>: <code>lista.push(elemento);</code></li>
            <li><strong>Eliminar elementos</strong>: <code>lista.splice(index, 1);</code></li>
            <li><strong>Recorrer la lista</strong>: <code>lista.forEach(item => { ... });</code></li>
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

window.onload = () => {
    // Mostrar lista aleatoria si existe
    if (document.getElementById("lista-aleatoria")) {
        mostrarListaAleatoria();
    }

    // Mostrar lista con métodos si existe
    if (document.getElementById("lista-visual")) {
        mostrarLista();
    }
};
