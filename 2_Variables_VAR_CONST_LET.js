// TEORIA: Diferencia entre LET, VAR y CONST: 

// PRE-CONCEPTOS NECESARIOS
// Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado. console. log(a); // Lanza un error de tipo "ReferenceError".

// VAR: Las variables VAR pueden ser modificadas y re-declaradas dentro de su ámbito; La palabra reservada var tiene algunas funciones ocultas que pueden dañar nuestro código sin que lo sepamos, dicha palabra nos permite usar variables… ¡sin antes ser declarada!, esto sucede gracias a un proceso llamado hoisting, no nos pongamos técnicos, esto lo que hará es declarar la variable por ti.

// lET: las variables LET pueden ser modificadas, pero no re-declaradas; let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.

// CONST: no pueden ser modificadas ni re-declaradas. Todas ellas se elevan a la parte superior de su ámbito. Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara. Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.

// DIFERENCIAS ENTRE VAR / LET / CONST
// VAR
var x = 5; // declaracion con var: Podemos redeclarar, ambito global
console.log(x);
if (true) {
    console.log(x); 
}
console.log(x);
// LET
let y = "Hola"; // declaracion con let: NO podemos redeclarar, ambito local
// let y = "Adios";
if (true) {
    // una variable declarada con let fuera del bloque (scope) deja acceder a ella dentro.
    console.log(y);
    let z = "Adiós";
}
// error: z is not defined
// console.log(z);

// CONST
const pi = 3.14159;
console.log(pi);
// pi = 3.1416; // error: Assignment to constant variable.

// OPERADORES
var num1 = 30;
var num2 = 20;
var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var resto = num1 % num2;

// CONCATENACION con + y templates strings
const texto = "El numero es ";
const numero = 2;
const concatenacion = texto + numero; // sino son dos datos numericos, es una concatenacion
console.log(concatenacion);

console.log("El numero es " + 2);
// plantillas literales
const dia = 16;
const mes = "Septiembre";
const any = 2022;

console.log("Hoy es " + dia + " de " + mes + " de " + any);
console.log(`Hoy es ${dia} de ${mes} de ${any}`);

