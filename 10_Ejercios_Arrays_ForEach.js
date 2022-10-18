// EJEMPLOS / EJERCICIOS PROPUESTOS EN CLASE
// Crear un objeto literal de usuarios y analizar sus propiedades recorriendolo con "foreach"

const Usuario_BD = [{
    nombre: "juan",
    email: "juan21@gmail.com",
    telefono: "610038513"
},
{
    nombre: "Maria",
    email: " ",
    telefono: "612235981"
}
];

console.log(Usuario_BD);

// nos piden un For para recorrer el array de objetos . Recordamos: sintaxis 1: setear el FOR

for (let i = 0; i < Usuario_BD.length; i++) {
    if (Usuario_BD[i].email === " ") {
        console.log("El " + Usuario_BD[i].Maria + " aun no ha tiene correo");
    }
};

console.log("------------------------------------------------------------------");

Usuario_BD.forEach(usuario => {
    if (usuario.email.length === 0) {
        console.log("El " + usuario.Maria + " aun no ha completado este campo");
    }
});

console.log("----------------------------------------------");


/* Resumen de for and for each- definir sintaxis de inicializacion, es decir para FOR definimos i, vueltas de recorrido y cuenta vueltas. En el for each eso ya esta definido dentro de esa funcion. Se llama entonces al: nombre_array_objetos.ForEach (nombre_gral_objs => {
    condicion de IF ( ) { 
        console.log(" texto con datos")
    }
}); */

// EJERCICIO con un array mas grande. Definir Foreach

const usersRANDOM_API =
    [
        {
            "id": 3262,
            "uid": "7a7d350d-3eac-4310-a6a8-8a56d10b09ea",
            "password": "TJoPNVMxcq",
            "first_name": "Lazaro",
            "last_name": "Wunsch",
            "username": "lazaro.wunsch",
            "email": "lazaro.wunsch@email.com",
            "avatar": "https://robohash.org/voluptatibusdelenitipariatur.png?size=300x300&set=set1",
            "gender": "Genderfluid",
            "phone_number": "+27 337.669.6259 x79565",
            "social_insurance_number": "468970512",
            "date_of_birth": "1965-10-10",
            "employment": {
                "title": "Direct Accounting Coordinator",
                "key_skill": "Teamwork"
            },
            "address": {
                "city": "North Franklyn",
                "street_name": "Johnetta Brook",
                "street_address": "950 Casper Ford",
                "zip_code": "45273-2556",
                "state": "New York",
                "country": "United States",
                "coordinates": {
                    "lat": 51.765997909406735,
                    "lng": -18.02097295721879
                }
            },
            "credit_card": {
                "cc_number": "5469-0346-1318-3914"
            },
            "subscription": {
                "plan": "Essential",
                "status": "Pending",
                "payment_method": "Google Pay",
                "term": "Payment in advance"
            }
        },
        {
            "id": 2726,
            "uid": "3cc32a0c-7b50-4e3e-b0d3-ca2f5b3ec3ec",
            "password": "yzBN",
            "first_name": "Tera",
            "last_name": "Tremblay",
            "username": "tera.tremblay",
            "email": "tera.tremblay@email.com",
            "avatar": "https://robohash.org/exercitationemearumsit.png?size=300x300&set=set1",
            "gender": "Male",
            "phone_number": "+84 297.621.9721 x2909",
            "social_insurance_number": "715723706",
            "date_of_birth": "1970-01-25",
            "employment": {
                "title": "Consulting Specialist",
                "key_skill": "Networking skills"
            },
            "address": {
                "city": "Gutmannborough",
                "street_name": "Weber Brook",
                "street_address": "1926 Blaine Dale",
                "zip_code": "26496-7986",
                "state": "Arizona",
                "country": "United States",
                "coordinates": {
                    "lat": -51.86068315501505,
                    "lng": 115.51103761833656
                }
            },
            "credit_card": {
                "cc_number": "6771-8990-3820-7998"
            },
            "subscription": {
                "plan": "Platinum",
                "status": "Blocked",
                "payment_method": "Google Pay",
                "term": "Monthly"
            }
        }
    ]
 
    usersRANDOM_API.forEach (users => {
        if(users.password.length > 8) {
            console.log("Su contraseña es segura");
        } else {
            console.log("Por favor diseñe una password mas segura");
        }
    }); 

    console.log("----------------------------------------------");
 // ojo, si salta el error de que hay una propiedad a la que invocamos-password en el caso anterior. pero no le definimos a que hacemos referencia, osea a los objetos Users, el sistema no tiene a que relacionar esa condicion IF. por que eso va, nombre general de los objs- users.password. Osea de los objetos users, evalua la propiedad password. 

 usersRANDOM_API.forEach(users => {
    if(users.subscription.status === "Pending") {
        console.log(users.uid, users.first_name);
        console.log("Su suscripcion aun no fue confirmada");
    }
 })

 console.log("---------------------------------------------");

 // Crear un Array de objetos de usuario nuevo mediante una
// funcion

const Array_de_users = [];
function rellenar_array_de_objetos (nombre, sexo, altura) {
    Array_de_users.push ({
        nombre: nombre,
        sexo: sexo,
        altura: altura,

    });
    return "Objeto insertado correctamente";
}

console.log(rellenar_array_de_objetos("gema", "femenino", 72));

console.log("----------------------------------------");

// Mediante objetos en JS, realizar el cálculo del área de un rectangulo.

class Rectangulo {
    constructor (base, altura) {
        this.base = base;
        this.altura = altura;
    }
    static area(obj) {
        return obj.base * obj.altura;
    }
}

let cuadrado = new Rectangulo(4,4);
let rectangulo = new Rectangulo(4,8);

// console.log(cuadrado.area());
// console.log(rectangulo.area());
console.log(Rectangulo.area(cuadrado));
// Solo para probar opcion: --->console.log(cuadrado.area()); no se condidera una forma de llamar a una furncion porq en estas tenemos que dar parametros de ingreso, tal cual como las lineas 177  y 178. 


console.log("----------------------------------");


/* NETFLIX - no me toma la base de datos indicada para hacer el ej. Aun asi, se puede ver que tenmos una clase usuario netflix con sus propiedades definidas, luego dos funciones - ver pelo y test prueba, estas se evaluan de acuerdo a ifs y a las props.
const database = require("./database.js");
class Usuario_Netflix {
    constructor(a,b,c,d) {
        this.username = a;
        this.email = b;
        this.password = c;
        this.phone = d;
        this.fecha = new Date();
        this.prueba = true;
        this.login = false;
    }
    verPeli() {
        this.testPrueba();  // llamada a un metodo propio
        if ((this.prueba || this.cuenta == "Premium") && this.login) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
    }

    testPrueba() {
        // ha pasado 1 mes (restando la prop: this.fecha con la fecha actual)
        this.prueba = true; // NO
        // this.prueba = false; // SI
    }

    login_() {
        database.database.forEach(user => {
            if (user.email === this.email && user.password === this.password ) {
                this.login = true;
            }
        })
    }
}
 

// aqui hacemos una copia de la superclase Usuario_Netflix y le indicamos para ello que es una extension de esa Superclase, que el constructor es el mismo y que de la superclase tome esos parametros a copiar. ademas se agrega la propiedad THIS.cuenta. 
class Usuario_Netflix_Prueba extends Usuario_Netflix {
    constructor(a,b,c,d) {
        super(a,b,c,d);
        this.cuenta = "Prueba";
    }
}

// aqui lo mismo. se genera un nuevo objeo de la superclase Usuario_Netflix indicando el const y el seteo a premium de la nva prop. 
class Usuario_Netflix_Premium extends Usuario_Netflix {
    constructor(a,b,c,d) {
        super(a,b,c,d);
        this.cuenta = "Premium";
    }
}
// registro. Creamos de hecho el nuevo usuaio con los datos que nos pide el constructor a-nombre, b-mail, c-pass, d-telefono.

const newUser = new Usuario_Netflix_Prueba("user1", "vasiliki.hettinger@email.com", "AnuDicEsSp", "666555444");

// login *- aqui llamamos al metodo login dentro del nuevo usuario a ver si con sus datos pasa esa funcion-
newUser.login_(); // recordar que newUser es el nombre del NUEVO objeto y se referencia en EXTENDS a la superclasee
// ver peli
newUser.verPeli(); */













