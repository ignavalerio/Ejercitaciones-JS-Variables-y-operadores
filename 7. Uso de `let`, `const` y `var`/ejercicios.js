// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.

// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.

{
    let mensaje = "Hola desde el bloque de código";
    console.log("Dentro del bloque:", mensaje);
}
// Fuera del bloque, la variable 'mensaje' no está disponible
// Comentar la siguiente línea para evitar error de sintaxis al ejecutar en un entorno que no lo soporte directamente
console.log("Fuera del bloque:", mensaje);

// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
const PI = 3.14159;
// Intentar reasignar otro valor a PI generará un error
PI = 3.14;


// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.

var mensaje = "Hola Mundo";
console.log("Antes de la función:", mensaje);
function cambiarMensaje() {
    var mensaje = "Hola desde la función";
    console.log("Dentro de la función:", mensaje);
}
cambiarMensaje();

console.log("Después de la función:", mensaje);
