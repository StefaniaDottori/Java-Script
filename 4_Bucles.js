/*  Bucles: se usan cdo queremos que un paquete de codigo se repita. Pueden ser determinados o indeterminados dependiendo del nro de veces que indicaremos se repita. 

// BUCLE WHILE: es indeterminado. La sintaxis se compone de una unica parte: una condicion de salida.

 
La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.


//como funciona? >Concepto Sentencia _ Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia block ({ ... }) para agrupar aquellas sentencias.


/* WHILE solo es diferente > Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada ANTES de ejecutar la sentencia. Tip. para usar while, bucle, necesitamos de una variable auxiliar que nos INICIALIZA el bucle. 

Sintaxis : 

while (condicion)
  sentencia */

  n = 0;
  x = 0;
  while (n < 3) {
    n ++;
    x += n;
  }
  
  // Esplicacion: en esta instruccion, le estamos diciendo que a -n- le sume uno en cada vuelta, es el contador de vueltas hata cumplir la condicion en que n es menor a 3. Luego, cada valor de -n- debe sumar a x. // 
  
  // Ejercicio 1- Imprimir los numeros del 1 al 10 (WHILE). 1 ero se plantea la inicializacion. 2. se plantea la condicion a cumplir. 3. se indica que hacer: imprimir en console.log. 4. actualizacion de as vueltas i++//
  
  let i = 1; // inicializacion
  while (i < 11) { // condicion
      console.log(i); // sentencia-q hacer-imprimir.
      i++; // actualizacion-contador
  }
  
  console.log("---------------------------"); 
  // esplicacion: mientras i sea menor a 11, imprime el numero que se obtiene de ella al sumarle las vueltas n++.
  
  // Ejercicio 2; crear un programa que mientras NO se ingrese la palabra correcta, continue solicitandola. Ej. una password. 
  
 /* let contador = 0;
  while (palabra != "username") {
          var palabra = console.log("Ingrese su username");
          contador ++;
      } console.log("Has ingresado el usuario correcto");
  
  
*/

let password ="625500sdf"

while (password != "625500sdf") {
    password = console.log("Vuelve a introducir tu contraseña");
} 
console.log("Su contraseña es correcta-fin del bucle");

// el mismo ejemplo usando DO-WHILE. como ya definimos antes el LET de la variable contraseña correcta, usamos el mismo. 
// let password = "625500sdf"

do {
    password = console.log("Introduzca su contraseña");
} while (password != "625500sdf");

/*DO - WHILE . A dif del anterior, define primero el codigo a ejecutar (DO) y luego la condicion de salida, que hacer si cumple la condicion (WHILE). 
DOCUMENTACION: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while
 sintaxis - DO-WHILE

do
  sentencia
while (condición);

*/

// do-while. Imprimir #s del 1-10:

let x = 1;  // init
do {
    console.log(x);
    x++; // act
} while (x <= 10);
console.log("----------------");
 
// Ejercicio 2 : imprimir los #s

  
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
console.log("--------------------------");

// AGREGAR MAS EJERCICIOS DE WHILE

/* FOR : Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
SINTAXIS: 
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

> expresion-inicial: se utiliza como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave var. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado.
> condicion: Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de for.
> expresion-final: Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador.
>sentencia
Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia block ({ ... }) para agrupar aquellas sentecias.