//CONDICIONALES: existen 3 estructuras posibles. Cada una alberga una posibilidad MAS al IF y son: 
// IF/ELSE
// 3 estructuras
/*
1)
if (condition) {
} - si tocan el timbre- suena la alarma

2)
if (condition) {
} else {  
} -- si hay SOl_ "es de dia", sino /else- es de noche 

3)
if (condition) {
} else if (condition) {
} else if (condition) {
} else {
}*/

//Ejercicio 1:  semaforo- puedes pasar o no segun 3 condiciones.

let color = "VIOLETA";
let color_filtrado_minus = color.toLowerCase(); //definimos esto x q js es case sensitive
console.log(color);

if (color_filtrado_minus === "rojo") {
    console.log("No puedes pasar");
} else if (color_filtrado_minus === "amarillo") {
    console.log("Precaucion");
} else if (color_filtrado_minus === "verde") {
    console.log("Puedes pasar");
} else {
    console.log("Color incorrecto");
}

console.log("-----------------------------------------------------");

/* Ejercicio 2 -> Enviar a un procedimiento un número. Mostrar si es par o impar */

let num1 = 5;
if (num1 % 2 === 0) {
    console.log("El " + num1 + " es par");
} else {
    console.log("El " + num1 + " no es par");

}

console.log("----------------------------------");

/* Ejercicio 3 -> Enviar a un procedimiento 3 números. Indicar si el tercero es la suma de los dos primeros o no. */

const a = 10;
const b = 4;
const c = 14;
if (b + a === c) {
    console.log("La suma es equivalente a la suma de los dos primeros, a+b =c");
} else {
    console.log("a+b != c");

}

console.log("----------------------------------");

/* Ejercicio 4 -> Enviar a una FUNCION (es decir que tendremos INPUTS y obtendremos un Output) un precio a pagar y el dinero disponible y mostrar si le falta dinero, indicarle cuanto, 
si le sobra indicar cuánto y si esta justo mostrar gracias por la compra */

function calculo_precios(precio, dinero) {
    if (precio > dinero) {
        console.log("Te faltan " + (precio - dinero) + " €");
    } else if (precio < dinero) {
        console.log("Tu vuelto es " + (dinero - precio) + " €");
    } else {  // (precio === dinero) 
    console.log("Tienes el precio justo");
           
    };
}

calculo_precios(23, 23);

/* Ejercicio 5 -> Ordenar descendentemente 3 numeros. Aplicaremos IF anidados.Uno dentro de otro segun la condicion*/

var n1 = 12;
var n2 = 4;
var n3 = 10;
// Planteo del caso en que N1 es el mayor de todos
if (n1 > n2 && n1 > n3) {
    if (n2 > n3)
        console.log(n1 + " es el numero mayor del conjunto, luego n2 y finalmente n3");
    else
        console.log(`${n1} > ${n3} > ${n2}`);
} else if (n2 > n1 && n2 > n3) { // n2 mayor
        if (n1 > n3)
        console.log(`${n2} > ${n1} > ${n3}`);
        else
        console.log(`${n2} > ${n3} > ${n1}`);
} else if (n3 > n1 && n3 > n2) { // N3 es el mayor #
        if (n2 > n1);
        console.log(`${n3} > ${n2} > ${n1}`);
}       else
        console.log(`${n3} > ${n1} > ${n2}`);

// para constatar, cambiamos los valores de n1 x ej para ver si funciona 

console.log("-------------------------------");

// Ejercicio 6; crear condicionales de respuesta para la aceptacion de Politicas de la web.

let respuesta = "Si"
if (respuesta === "Si") {
    console.log("Gracias por aceptar nuestra Politica de cookies");
} else if (respuesta === "No") {
    console.log("Puedes ampliar la informacion accediendo a este Link");
} else {
    console.log("No hemos entendido la respuesta");
}

// Ejercicio 7 : ingresar 3 productos (nombre y precio) y calcular el costo del ticket segun el pedido del cliente. Ejemplo del funcionamiento de una caja de un supermercado. Esto seria mas adecuado solucionarlo con una funcion, lo aplica aqui con metodos pedagogicos. 

let nombre1 = "refresco";
let precio1 = "1.00";
let cantidad = 2;

if (nombre1 === "refresco") {
    precio1 = 1.00;
} else if (nombre1 === "cerveza") {
    precio1 = 2.20;
} else if (nombre1 === "cafe") {
    precio1 = 1.20;
}

let precioTotal = precio1 * cantidad;

console.log("Tiene que pagar " + precioTotal + " €");

/* Ejercicio 8: definir si Un año es bisciesto o no. 
-Condiciones año bisiesto: que sea divisible por  4 o 400 pero
 NO por 100 (!= divisiblePor100). Es decir que podemos plantear el RESTO = 0 si se lo divide por 4 o por 400 
 Aqui tmb usamos un IF anidado. */

let año = 2012;

if ((año % 4) === 0) {
    let divisiblePor100 = (año % 100 === 0);
    let divisiblePor400 = (año % 400 === 0);

    if (!divisiblePor100 || divisiblePor400) {
        console.log("El año " + año + " ES bisiesto");
    } else {
    console.log("El año proporcionado NO es bisiesto");
}

/* Ejercicio 9: Crear instrucciones para el ticket final de una compra en supermercado.
Condiciones por cliente:
-Si eres socio:
-1€ gratis a partir de 25€
-5% desc a partir de 50€
-15€ gratis a apartir de 100€
-Si no es socio : 5€ gratis a partir de 100€ 
Tener en cuenta que el ELSEIF se ejecuta si la/s condiciones previas no se cumplen. Aqui ordenamos los IFs de mayor a menor monto asi el codigo no aplica descuentos de forma acumulable. Por que todos cumplen con la condicion de mayor de 25 y 50 si gastaste 75 x ejemplo. Otra opcion es poner los valores entre rangs ( montoTicket <= 25 o | >= 50 & <= 100 montoTicket */

let esSocio = true
let montoTicket = 120;

if (esSocio) {
    if (montoTicket >= 100) {
        montoTicket = (montoTicket - 15);

    } else if (montoTicket >= 50) {
        montoTicket = (montoTicket * 0.95);

    } else if (montoTicket >= 25) {
        montoTicket = (montoTicket - 1);
    }

} else { // no es socio

    if (montoTicket >= 100) {
        montoTicket = (montoTicket - 5);
    }

}

console.log("Su total a pagar como es " + montoTicket + " €");

// Ejercicio 10 : crear instrucciones para determinar la BEBIDA/TRAGO segun edad. Para menores de edad - Batidos- y para adultos; GinTonic. Aqui lo que define el resultado es la evaluacion de la edad. Se pueden definir variables sin valor previo, sino definirlas despues dentro del if por ejemplo .

let edad = 19;
let trago = '';

if (edad >= 18) {
    trago = 'Gin&Tonic'
} else {
    trago = "Batido frutal"
}

console.log(trago);

// Ejercicio 11; Comprobar DNI correcto en funcion de la letra DNI. Enviar a una funcion el número del DNI. TIPS: #DNI % 23 = posicion letra DNI para la comprobacion. - Hay que pasar el valor del DNI char a INT para poder involucrarlo en la division. En las sibstrings se indica : (numero de la posicion del dato, cuantos datos quieres q te muestre a partir de ese punto). Notar que la funcion se compone principalmente de ordenar los datos. Define Array, Define 2 substrings, solo el numero, luego solo la letra. Luego pasa el numero obtenido del substring a INT para despues usarlo en la division que lo coloca directamente dentro del array. Es decir que podemos indicarle una operacion dentro del array cuyo resultado nos indique la posicion de la letra. Luego de definir todo, se coloca finalmente el IF, ELSE.*/

const dni_array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

console.log(dni_array[5]);

function calculo_letra_dni(dni_param) {
    if (dni_param.leng
        const letra_dni_user = dni_param.substr(8, 1);
    const numero_dni_user = dni_param.substr(0, 8);
    // para poder hacer la division del numero de dni en 23. Primero tenemos que pasarlo a INT, a entero, solo el conj de numeros. El sistema no puede tomar 1234567A para dividir.    

    const numero_dni_user_int = parseInt(numero_dni_user);
    const letra_dni_calculo = dni_array[(numero_dni_user_int % 23)];

    if (letra_dni_calculo === letra_dni_user) {
        console.log("DNI correcto");
    } else {
        console.log("DNI incorrecto");
    }
}

calculo_letra_dni("12345678A");

console.log("-------------------------------------------------------");

/* Ejercicio 12 -> Enviar a un procedimiento un día, mes, año (numéricos). Comprobar que sean correctos. */

const deHoy = new Date();

let dia = 15;
const mes = 13;
const any = deHoy.getFullYear();

if (dia < 1 || dia >= 31) {
    console.log("Día Imposible");
}
if (mes < 1 || mes >= 12) {
    console.log("Este mes, será de película amiguito");
}
if (any > 2022) {
    console.log("Yo también quiero vivir en el futuro");
}


// SWITCH : La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen. Maneja el control de flujo.
// TIPS: analiza cada caso y corta el break. Siempre debe agregarse la clausula Default al terminar los cases. Si queremos que tome el valor predefinido en LET = Nivel_Satisfaccion = 0,solo dejamos escrito - default : | Al Case hay que asignarle un nombre, ese nombre debe ser uno de los parametros que evaluamos. Asi, case 1, esta diciendo que su valor es 1 y que lo compare con el default valor cero. ver caso semaforo tb
// SWITCH - Estructura
/* switch (key) {
    case value:
        
        break;
    default:
        break;
} */

// Ejercicio 1- Switch
let = Nivel_Satisfaccion = 0;

switch (Nivel_Satisfaccion) {
    case 1: 
        console.log("Muy descontento");
        break; 
    case 2:
        console.log("No muy contento");
        break;
    case 4:
        console.log("Muy contento");
        break;
    default: 
        console.log("Indignado");
}   

// Ejercicio - Switch: semaforo

let color_semaforo = "amarillo"

switch (color_semaforo) {
    case "rojo": 
        console.log("Si pasa en rojo, tendrá una multa");
        break;
    case "verde": 
        console.log("Ud. esta habilitadísimo para pasar");
        break;
    case "amarillo": 
        console.log("Es peligroso, asuma las consecuencias");
        break;
    default:
        break;
}

// Switch se usa para elegir un camino de varios prestablecidos. Hay dos tipos. La sintaxis simple, que hemos visto antes. Cada CASE representa uno de esos caminos/casos.
//Sintaxis multiple, se aplica el mismo codigo en diferentes casos. 
/* switch (evaluacion) {
    case n1:
    case n2:
    case n3:
    break;
    default: 
}*/

let num = 2;

switch(num) {
    case 1: 
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es PAR`);
    break;
    default:
}