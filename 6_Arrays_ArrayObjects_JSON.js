/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Arrays: El Arrayobjeto, al igual que con las matrices en otros lenguajes de programación, permite almacenar una colección de varios elementos bajo un solo nombre de variable y tiene miembros para realizar operaciones de matriz comunes .
Las matrices de JavaScript están indexadas a cero : el primer elemento de una matriz está en el índice 0, el segundo está en el índice 1, y así sucesivamente.
Las operaciones de copia de matriz de JavaScript crean copias superficiales .Quiere decir que al hacer un cambio en un dato de una propiedad, cambiara an ambas matrices, la madre y la copia. Una manera de solucionarlo es especificar en que matriz queremos el cambio. 
copy[0].list = ["oil","flour"], entonces el elemento correspondiente en el objeto de origen también cambiará, porque cambió selectivamente una propiedad de un objeto compartido por ambos. el objeto de origen y la copia superficial.

Sin embargo, si lo hace copy[0] = {"list":["oil","flour"]}, el elemento correspondiente en el objeto de origen no cambiará , porque en ese caso, no solo está cambiando selectivamente, en realidad está asignando un valor completamente nuevo a ese copy[0]elemento de matriz, solo en la copia superficial.

PRACTICA 

Como crear un Array; */

const array_de_notas = [7, 8, 9, 3, 2, 10, 7, 8, 10];
// si queremos conocer cuantos elementos compone el array--> Usamos popriedad -length-//
console.log(array_de_notas.length); // 9

//Para conocer el valor de una posicion en concreto de un array: recordar que indexa desde CERO//

console.log(array_de_notas[5]);// 1

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

array_de_notas.push(7, 5.5);
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
for (let index = 0; index < 22; index++) {
    array_rellenar[index] = "dato " + (index + 1);
}

// aqui no se coloca array.leght, por que tengo mi array vacio. es la primer constante que denifi, lo quiero ir rellenando con la palabra dato y el numero de vuelta, aprovecho y uso la estructura for con el contador y concateno con la palabra dato x ejemplo. Tips. puedo definir un array vacio y rellenarlo desues con lo que quiera. 

console.log(array_rellenar);
console.log("--------------------------------");

// Ejemplo: Sumar todos los numeros del 1 al 5 = 15 con arrays

console.log("------------mi version array --------------------");
const suma_array_1_5 = [];
for (let index = 0; index < 5; index++) {
    suma_array_1_5[index] = index + 1;

}
console.log(suma_array_1_5);
// [1,2,3,4,5]

let suma = 0;
for (let index = 0; index < suma_array_1_5.length; index++) { // suma = suma + suma_array
    suma += suma_array_1_5[index];

}
console.log(suma);

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

console.log("------------------");

// explicacion, teniamos resultsdos diferentes por que yo habia puesto que me haga el console log del array y no de la variable suma. Resumiendo, al igual que con una variable definida como numero, podemos hacer sumas con los arrays, esa variable definida es la que participa luego en la aritmetica. Cuando hacemos Suma+= estamos diciendo que a 0 le sume los valores que hay en el array, y como son numeros, suma uno detras del otro. 1+2+3+4+5+0=15//

// Ejemplo para ordenar numeros detro de un
// array con metodo SORT: El sort()método ordena los elementos de una matriz en su lugar y devuelve la referencia a la misma matriz, ahora ordenada. 

const a = 0;
const b = 1;
const c = 2;

const array_numeros = [a, b, c];

console.log(array_numeros);
array_numeros.sort(function (a, b) { return b - a });
console.log(array_numeros); // ordenado


console.log("---------profe------------");

// Ejercicio Array.sort- ordenar elementos en un array//
const months = ['wally', 'Wally', 'Anne', 'anne'];
months.sort();
console.log(months);

// cuando se trata de strings, ordenara en forma alfabetica primero en funcion de la letra mayuscula y si no hay mayuscula, de la palabra. 
console.log("-------------mio----------------");

const numeros_func = [81, 12, 18, 1, 07, 12, 8];
numeros_func.sort(function (a, b) { return b - a });
console.log(numeros_func);
// B es el mas grande aqui y A es el 
console.log("-------------mio c func----------------");

const numeros = [81, 12, 18, 1, 07, 12, 8];
numeros.sort(function (a, b) { return a - b });
console.log(numeros);
// A es el mas pequeno aqui, y B es el mas grande

// sort convierte los numeros en strings. por eso saltan desordenados, no responden a una secuencia ascendente.
// Tambien se puede usar la funcion SORT pero para ordenar el conjunto de datos. para ello usamos una funcion: numeros.sort(function(a,b){return a-b}); Aqui indico que ordene de menor(a) a mayor (b). numeros.sort(function(a,b){return b-a}); aqui le indico que ordene de mayor(b) a menor(a). 

// aqui tenemos dos objetos, y queremos ordenarlos en funcion de la variable 'y'.

let vals = [{
    x: 2,
    y: 10
}, {
    x: 5,
    y: 6
}];

console.log(vals);

console.log('-----------------------------');

// para poder hacer eso usamos la funcion COMPARE, ella nos pide dos parametros para entender como ordenar. 

// JS asigna valores a las letras del abecedario en minusculas y mayusculas y por ese valor es que las puede ordenar. Ejemplo: array de letras, algunas min y otras mayusculas. Va a ordenarlas en funcion de sus numeros que equivale a la poscion en el alfabeto .

const letters = ['a', 'c', 'j', 'A', 'P'];
letters.forEach((letters) => {
    return
    console.log(letters, ' ', letters.charC
        (0))
});
// no me funciona, pero era para demostrar la teoria anterior. Que es que a= 97, b=98, c=99, por eso los ordena. En cambio las mayusculas son P=80. Como es un numero menor que 97, ordena primero a las mayusculas. 


//------------ARRAY-ARRGLOS-OBJETOS JSON---------------
// JSON : java script object notation

// array de OBJETOS JSON: son objetos que se componen de muchos objetos dentro. Por ejemplo, ObjetoJSON Beers, tiene dentro un grupo de objetos-cada uno un tipo de cerveza con sus propiedades. Se identifican por su semantica de Corchetes+Llaves- para la agrupacion de las propiedades de un objeto. 

const objetoJSON = [
    {
        "prop_color": "rojo", "prop2_precio": "5", "prop3_marca": "BMW"
    },
    {
        "prop1_color": "violeta", "prop2_precio": "25", "prop3_marca": "VGagen"
    }
];
console.log(objetoJSON[0]);
//muestra todas la info del primer objeto [0].

// Tomado de RandomApi - datos de cervezas: 

const random_beers = [
    {
        "id": 2530,
        "uid": "ae2fc7d8-c1d0-4c12-85d5-21867ca89f9f",
        "brand": "Dos Equis",
        "name": "Chimay Grande Réserve",
        "style": "Fruit Beer",
        "hop": "Brewer’s Gold",
        "yeast": "1084 - Irish Ale",
        "malts": "Vienna",
        "ibu": "20 IBU",
        "alcohol": "7.8%",
        "blg": "6.0°Blg"
    },
    {
        "id": 1772,
        "uid": "d485dde8-ed41-4714-9040-3e22d8485c52",
        "brand": "Blue Moon",
        "name": "Arrogant Bastard Ale",
        "style": "English Pale Ale",
        "hop": "Palisade",
        "yeast": "3068 - Weihenstephan Weizen",
        "malts": "Special roast",
        "ibu": "44 IBU",
        "alcohol": "6.0%",
        "blg": "18.0°Blg"
    },
    {
        "id": 772,
        "uid": "dc391a13-156e-429f-9cd0-e71652808fc5",
        "brand": "Rolling Rock",
        "name": "Trappistes Rochefort 10",
        "style": "English Brown Ale",
        "hop": "Tahoma",
        "yeast": "3333 - German Wheat",
        "malts": "Victory",
        "ibu": "10 IBU",
        "alcohol": "2.5%",
        "blg": "9.9°Blg"
    },
    {
        "id": 2096,
        "uid": "d04cec54-e432-4b7e-8013-244316869f08",
        "brand": "Lowenbrau",
        "name": "Trois Pistoles",
        "style": "English Brown Ale",
        "hop": "Nugget",
        "yeast": "1056 - American Ale",
        "malts": "Carapils",
        "ibu": "74 IBU",
        "alcohol": "6.3%",
        "blg": "5.4°Blg"
    }
];

console.log(random_beers[0]);
console.log("--------------------------------");


// Recorrer el array y filtrar los datos FOREACH. Aca estamos haciendo un recorrido por los objetos que componen el objeto JSON, entre parentesis colocamos un nombre de referencia de lo que estamos recorriendo-por lo general es un nombre que agrupa a todos los elementos. y con => le indicamos que es una funcion. Es una manera de reemplazar la palabra -function-. 

random_beers.forEach(beer => {
    let alcohol = parseFloat(beer.alcohol.substring(0, 3));
    if (alcohol >= 5.0) {
        console.log(beer.name);
    }
};


// Tip para aclarar el panorama: usamos el bucle FOR para recorrer un array. Pero usamos ForEach para recorrer un objeto Json. 

// EJERCICIO de objeto Json con datos de RandomApi. Notar que este objeto Json, los objetos no iguales al ajemplo anterior. Aqui tenemos 'sub' objetos dentro del primer ID-user. Se abren llaves -azules- dentro de ese usuario para colocar como objetos tb datos de suscripciones, datos bancarios.

const users = [
    {
        "id": 5919,
        "uid": "f80b9b0d-c04d-4a77-86b5-43981186a788",
        "password": "U3g9oNejxf",
        "first_name": "Willodean",
        "last_name": "Welch",
        "username": "willodean.welch",
        "email": "willodean.welch@email.com",
        "avatar": "https://robohash.org/errorconsequaturasperiores.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+269 (502) 916-5132",
        "social_insurance_number": "546203720",
        "date_of_birth": "2001-10-14",
        "employment": {
            "title": "Corporate Executive",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "New Juliantown",
            "street_name": "Bogan View",
            "street_address": "3917 Carlos Shore",
            "zip_code": "02920-2516",
            "state": "Rhode Island",
            "country": "United States",
            "coordinates": {
                "lat": 58.515311144234516,
                "lng": -89.72266634828952
            }
        },
        "credit_card": {
            "cc_number": "5135-0141-1351-0729"
        },
        "subscription": {
            "plan": "Basic",
            "status": "Pending",
            "payment_method": "Cash",
            "term": "Payment in advance"
        }
    },
    {
        "id": 9203,
        "uid": "0bb79e76-35ba-4189-ac12-13816fa3ab80",
        "password": "knjgOYKCJH",
        "first_name": "Oswaldo",
        "last_name": "Watsica",
        "username": "oswaldo.watsica",
        "email": "oswaldo.watsica@email.com",
        "avatar": "https://robohash.org/voluptascorruptiaut.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+247 841-455-5624 x8822",
        "social_insurance_number": "705856474",
        "date_of_birth": "1977-06-09",
        "employment": {
            "title": "Chief Hospitality Executive",
            "key_skill": "Teamwork"
        },
        "address": {
            "city": "Margrettmouth",
            "street_name": "Harold View",
            "street_address": "46424 Wolff Junction",
            "zip_code": "14239-8584",
            "state": "Wyoming",
            "country": "United States",
            "coordinates": {
                "lat": -30.787496973538055,
                "lng": 116.2841126941484
            }
        },
        "credit_card": {
            "cc_number": "4140258795665"
        },
        "subscription": {
            "plan": "Premium",
            "status": "Idle",
            "payment_method": "Paypal",
            "term": "Monthly"
        }
    },
    {
        "id": 5418,
        "uid": "d7cc68d4-04e2-4651-a362-d122c02409ce",
        "password": "bIhstyLgW6",
        "first_name": "Dione",
        "last_name": "Dibbert",
        "username": "dione.dibbert",
        "email": "dione.dibbert@email.com",
        "avatar": "https://robohash.org/quaeratexpeditaqui.png?size=300x300&set=set1",
        "gender": "Polygender",
        "phone_number": "+670 825-486-9877 x22753",
        "social_insurance_number": "139012942",
        "date_of_birth": "1982-04-23",
        "employment": {
            "title": "Chief Legal Agent",
            "key_skill": "Proactive"
        },
        "address": {
            "city": "Lake Darlenestad",
            "street_name": "Nikolaus Lake",
            "street_address": "655 Vandervort Port",
            "zip_code": "36756",
            "state": "Alabama",
            "country": "United States",
            "coordinates": {
                "lat": 69.41328973381675,
                "lng": 48.08130774478346
            }
        },
        "credit_card": {
            "cc_number": "4698372800448"
        },
        "subscription": {
            "plan": "Business",
            "status": "Idle",
            "payment_method": "Bitcoins",
            "term": "Annual"
        }
    },
    {
        "id": 3202,
        "uid": "6c5b030e-39d3-45dd-a14d-44093a6306d5",
        "password": "iVAKa05YpM",
        "first_name": "Dolly",
        "last_name": "Thiel",
        "username": "dolly.thiel",
        "email": "dolly.thiel@email.com",
        "avatar": "https://robohash.org/eosutqui.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+504 159-758-3348 x638",
        "social_insurance_number": "959450172",
        "date_of_birth": "1965-04-14",
        "employment": {
            "title": "Construction Consultant",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "Randolphside",
            "street_name": "Carter Landing",
            "street_address": "3558 Marlon Isle",
            "zip_code": "19529-8470",
            "state": "Utah",
            "country": "United States",
            "coordinates": {
                "lat": -45.046566689368994,
                "lng": -33.41382596539208
            }
        },
        "credit_card": {
            "cc_number": "5336-4945-9618-2062"
        },
        "subscription": {
            "plan": "Student",
            "status": "Blocked",
            "payment_method": "WeChat Pay",
            "term": "Monthly"
        }
    }
]


users.forEach(user => {
    if(user.gender === "Polygender")
        console.log(user.first_name);
})

console.log("-------------------------------------------------------------");

users.forEach(user => {
    if (user.subscription.payment_method === "Paypal") {
        console.log(user.email);
    }
});

// notar la sintaxis para nombrar subobjetitos dentro del objeto raiz, ejemplo users.address/ users.user/users.suscription..etc.

/* COMO IMPORTAR DATOS DE ARCHIVOS JSON para tener data por ejemplo para practicar, o bien para traer al editor de codigo el file que contenga el paquete de datos. Con Fetch, funcion predefinida del lenguaje para traer al editor un conjunto de datos. ¿Qué es Fetch en node js? La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red. 

Una petición básica de fetch es realmente simple de realizar. Eche un vistazo al siguente código:

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la console log

PARA HACER ESTA IMPORTACION tenemos que instalar primero el paquete -node fetch, colocando el siguiente codigo en la terminal ; npm i node-fetch. De ese modo accede a los modulos de node para usar la funcionalidad Fetch */

/*import fetch from 'node-fetch';

fetch('https://random-data-api.com/api/v2/users?size=4')
  .then(response => response.json())
  .then(data => console.log(data)); */

  // resolver tema del fetch, ver tutorial. 

  // Otro ejercicio de recorrer arrays con una condicion. 

  const signos_zodiaco = [
    {
      "nombre": "Aries",
      "fecha_ini": "21/03",
      "fecha_fin": "19/04",
      "elemento": "fuego"
    },
    {
      "nombre": "Tauro",
      "fecha_ini": "20/04",
      "fecha_fin": "20/05",
      "elemento": "tierra"
    },
    {
      "nombre": "Géminis",
      "fecha_ini": "21/05",
      "fecha_fin": "20/06",
      "elemento": "aire"
    },
    {
      "nombre": "Cáncer",
      "fecha_ini": "21/06",
      "fecha_fin": "22/07",
      "elemento": "agua"
    }
  ];
  
  signos_zodiaco.forEach(signo => {
    console.log(signo.nombre);
  });
  
  for (let i = 0; i < signos_zodiaco.length; i++) {
    console.log(signos_zodiaco[i].elemento);
  }

  console.log("----------------------------------");

  signos_zodiaco.forEach(zodiaco => {
    console.log(zodiaco.elemento);
  });

  for (let i = 0; i < signos_zodiaco.length; i++){
    console.log(signos_zodiaco[1].elemento + " propiedad de categorizacion");
  };

  // No olvidar colocar los corchetes de simbolizacion de array al llamarlo dentro del for. Cuando ponemos signos_zodiaco[i], estamos diciendo que se aplique la instruccion a todos los elementos del array. Cuando entre corchetes definimos la posicon del array, solo aplica la instruccion a ese elemento. 
  