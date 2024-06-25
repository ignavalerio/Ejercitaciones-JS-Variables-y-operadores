// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.
// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.


// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.
// Declara la variable 'frase' y asigna el valor "JavaScript es genial"
let frase = "JavaScript es genial";
// Usa el método 'length' para obtener la longitud de la cadena
let longitud = frase.length;
// Muestra la longitud de la cadena en la consola
console.log("Longitud de la frase:", longitud);

// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
// Usa el método 'indexOf' para encontrar la posición de la palabra "genial"
let posicion = frase.indexOf("genial");
// Muestra la posición de la palabra en la consola
console.log("Posición de 'genial' en la frase:", posicion);

// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
// Usa el método 'slice' para extraer la palabra "JavaScript"
let palabraExtraida = frase.slice(0, 10);
// Muestra la palabra extraída en la consola
console.log("Palabra extraída:", palabraExtraida);

// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
// Declara la variable 'nombreCompleto' y asigna el valor "   Juan Pérez   "
let nombreCompleto = "   Juan Pérez   ";
// Usa el método 'trim' para eliminar los espacios en blanco al principio y al final
let nombreSinEspacios = nombreCompleto.trim();
// Muestra el nombre sin espacios en blanco en la consola
console.log("Nombre completo sin espacios:", nombreSinEspacios);


// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.
// Declara la variable 'cancion' y asigna el valor "Twinkle, twinkle, little star"
let cancion = "Twinkle, twinkle, little star";
// Usa el método 'split' para dividir la cadena en palabras individuales
let palabras = cancion.split(", ");
// Muestra las palabras individuales en la consola
console.log("Palabras individuales:", palabras);
