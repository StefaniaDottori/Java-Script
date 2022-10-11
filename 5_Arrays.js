/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Arrays: El Arrayobjeto, al igual que con las matrices en otros lenguajes de programación, permite almacenar una colección de varios elementos bajo un solo nombre de variable y tiene miembros para realizar operaciones de matriz comunes .
Las matrices de JavaScript están indexadas a cero : el primer elemento de una matriz está en el índice 0, el segundo está en el índice 1, y así sucesivamente.
Las operaciones de copia de matriz de JavaScript crean copias superficiales .Quiere decir que al hacer un cambio en un dato de una propiedad, cambiara an ambas matrices, la madre y la copia. Una manera de solucionarlo es especificar en que matriz queremos el cambio. 
copy[0].list = ["oil","flour"], entonces el elemento correspondiente en el objeto de origen también cambiará, porque cambió selectivamente una propiedad de un objeto compartido por ambos. el objeto de origen y la copia superficial.

Sin embargo, si lo hace copy[0] = {"list":["oil","flour"]}, el elemento correspondiente en el objeto de origen no cambiará , porque en ese caso, no solo está cambiando selectivamente, en realidad está asignando un valor completamente nuevo a ese copy[0]elemento de matriz, solo en la copia superficial.

PRACTICA 

Como crear un Array; */

const array_de_notas = [7,8,9,3,2,10,7,8,10];
// si queremos conocer cuantos elementos compone el array--> Usamos popriedad -length-//
console.log(array_de_notas.length); // 9

//Para conocer el valor de una posicion en concreto de un array: recordar que indexa desde CERO//

console.log(array_de_notas [5]);// 1

console.log("-------------------");

// recorrer el array con bucle FOR- recordar que es un bucle, tiene su sintaxis de repeticion de vueltas. Como el array tiene elementos dentro, las vueltas estaran definidas por el numero de elementos que lo compone. Por ello en la sintaxis, en lugar de poner index < num- inicializado, usamos array.leght, que equivale tb a un numero. //

for (let index = 0; index < array_de_notas.length; index++) {
    const notas = array_de_notas[index];
    if (notas >= 5) {
        console.log(notas);
    }
    
}

// extra IMPRIME LAS NOTAS APROBADAS con el IF. Si en lo que recorre el bucle-for- encuentra la condicion planteda en if, imprime eso. es un extra, por que no es literal parte de la funcion for, sino una combinacion de dos estructuras. 

// agregar ejercicios de Arrays


console.log("--------------------------------");

// -----------------PUSH ---------el metodo "push": El push()método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.//

array_de_notas.push(7,5.5);
console.log(array_de_notas);

console.log("--------------------------------");

const Array_animales = ["conejo", "gallina", "gato"];

console.log(Array_animales.length); // 3
console.log("--------------------------------");

Array_animales.push(6, "comadreja");
console.log(Array_animales);
console.log("--------------------------------");

console.log(Array_animales.length);
console.log("--------------------------------");


// escribir una posicion - cambiar de valor un dato por ejemplo. Recordar que indexa desde cero, por lo tanto, la posicion 2 del array, es el tercer elemento de lectura humana. 

Array_animales[2] = "Elefante rosa"
console.log(Array_animales);
console.log("--------------------------------");

// rellenar o escribir un array con texto dato1, dato2...

const array_rellenar = [];
for (let index = 0; index < 10; index++) {
    array_rellenar[index] = "dato " + (index+1);
}

// aqui no se coloca array.leght, por que tengo mi array vacio. es la primer constante que denifi, lo quiero ir rellenando con la palabra dato y el numero de vuelta, aprovecho y uso la estructura for con el contador y concateno con la palabra dato x ejemplo. Tips. puedo definir un array vacio y rellenarlo desues con lo que quiera. 

console.log(array_rellenar);
console.log("--------------------------------");

// Ejemplo: Sumar todos los numeros del 1 al 5 = 15 con arrays

console.log("------------mi version array --------------------");
const suma_array_1_5 = [];
for (let index = 0; index < 5; index++) {
    suma_array_1_5 [index] = index +1;
    
}
console.log(suma_array_1_5);
// [1,2,3,4,5]

let suma = 0;
for (let index = 0; index < suma_array_1_5.length; index++) { // suma = suma + suma_array
    suma += suma_array_1_5[index];
    
}
console.log(suma_array_1_5);

console.log("------------- profe----------------------");
// version del profesor: 

const suma_1_5 = [];
for (let index = 0; index < 5; index++) {
    suma_1_5[index] = index + 1;
}
console.log(suma_1_5);

let suma1 = 0;
for (let index = 0; index < suma_1_5.length; index++) {
    // suma = suma + suma_1_5[index];
    suma1 += suma_1_5[index];
}
console.log(suma1);

// seguir-me quede en array linea 34

