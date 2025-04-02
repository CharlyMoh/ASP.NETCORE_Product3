namespace Product3_Web_NETCORE.Models
{
    public static class EncuestaPreguntas
    {
        public static List<(string Pregunta, string[] Opciones)> ObtenerPreguntas(string tema)
        {
            if (tema == "Arrays")
            {
                return new List<(string, string[])>
                {
                    ("¿Qué es un arreglo?", new[] { "Una variable simple", "Una estructura de datos que almacena varios elementos", "Un método para ordenar datos" }),
                    ("¿Cuál es la principal diferencia entre un arreglo y una lista?", new[] { "Los arreglos son dinámicos, las listas no", "Las listas tienen tamaño fijo", "Los arreglos tienen tamaño fijo, las listas no" }),
                    ("¿Cómo se accede a un elemento específico en un arreglo?", new[] { "Usando el índice entre corchetes", "Usando un método especial", "No se puede acceder directamente" }),
                    ("¿Qué método se usa para ordenar un arreglo?", new[] { "Sort()", "orderArray()", "Orden()" }),
                    ("¿Qué valor tiene el índice del primer elemento en un arreglo?", new[] { "1", "0", "Depende del tipo" }),
                    ("¿Qué pasa si accedes a un índice que no existe en el arreglo?", new[] { "Se lanza una excepción", "El arreglo se ajusta", "Devuelve null" }),
                    ("¿Qué tipo de datos puede contener un arreglo?", new[] { "Solo números", "Cualquier tipo definido", "Solo strings" }),
                    ("¿Qué estructura de control se utiliza para recorrer un arreglo?", new[] { "if-else", "for o foreach", "switch" }),
                    ("¿Cómo se cambia el valor de un elemento en un arreglo?", new[] { "Con el método update()", "Usando el índice: arreglo[i] = nuevoValor", "No se puede cambiar" }),
                    ("¿Cuál es el tamaño de un arreglo después de ser declarado?", new[] { "Se puede cambiar después de declarar", "Es fijo al declararse", "Depende del compilador" })
                };
            }
            else if (tema == "Listas")
            {
                return new List<(string, string[])>
                {
                    ("¿Qué es una lista?", new[] { "Una estructura de datos que permite almacenar una colección de elementos.", "Un tipo especial de arreglo.", "Un método para recorrer datos." }),
                    ("¿Cuál es una característica principal de las listas en la mayoría de lenguajes?", new[] { "Son de tamaño fijo.", "Son dinámicas, se pueden agregar y quitar elementos.", "Solo permiten números." }),
                    ("¿Qué método se usa para agregar elementos a una lista en C#?", new[] { "addElement()", "insert()", "Add()" }),
                    ("¿Cuál de los siguientes métodos elimina un elemento de la lista?", new[] { "Remove()", "Delete()", "Clear()" }),
                    ("¿Qué hace el método Insert() en una lista?", new[] { "Inserta un elemento en una posición específica.", "Ordena la lista.", "Elimina elementos duplicados." }),
                    ("¿Qué método se usa para vaciar una lista completamente?", new[] { "Clear()", "RemoveAll()", "DeleteAll()" }),
                    ("¿Cómo accedemos a un elemento en una lista?", new[] { "Usando llaves {}", "Usando el índice entre corchetes []", "Con el método getElement()" }),
                    ("¿Qué estructura se usa comúnmente para recorrer una lista?", new[] { "if-else", "switch-case", "for o foreach" }),
                    ("¿Cuál es una aplicación común de las listas?", new[] { "Almacenamiento estático", "Implementación de pilas y colas", "Ordenamiento de registros en tiempo real" }),
                    ("¿Qué pasa si eliminas un elemento en medio de la lista?", new[] { "El índice de los siguientes elementos se actualiza.", "Todos los elementos se eliminan.", "La lista se bloquea hasta reiniciar." })
                };
            }

            return new List<(string, string[])>(); // Por si el tema no coincide
        }

        public static List<string> ObtenerRespuestasCorrectas(string tema)
        {
            if (tema == "Arrays")
            {
                return new List<string>
        {
            "Una estructura de datos que almacena varios elementos",
            "Los arreglos son dinámicos, las listas no",
            "Usando el índice entre corchetes",
            "orderArray()",
            "0",
            "Se lanza una excepción",
            "Cualquier tipo definido",
            "for o foreach",
            "Usando el índice: arreglo[i] = nuevoValor",
            "Es fijo al declararse"
        };
            }
            else if (tema == "Listas")
            {
                return new List<string>
        {
            "Una estructura de datos que permite almacenar una colección de elementos",
            "Son dinámicas, se pueden agregar y quitar elementos.",
            "Add()",
            "Remove()",
            "Inserta un elemento en una posición específica.",
            "Clear()",
            "Usando el índice entre corchetes []",
            "for o foreach",
            "Implementación de pilas y colas",
            "El índice de los siguientes elementos se actualiza."
        };
            }
            return new List<string>();
        }

    }
}
