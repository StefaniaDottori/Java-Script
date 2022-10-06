// Veras dos Ejemplos de construccion de un Objeto (User y Producto) y funciones, modificaciones. 
/*DEFINICIONES: Objeto Literal Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código. Los objetos pueden almacenar métodos en su interior. Para acceder a las propiedades de un objeto dentro de un método es necesario usar la palabra reservada -this- por scope de las variables.SE LLAMA OBJETO LITERAL POR QUE RECOGE LAS CARACT QUE YO LE DEFINO DIRECTAMENTE, NO SURGE DE UNA Plantilla tipo CLASE*/


const User = {
    // props
    email: "stefania@gmail.com",
    password: "Ela1234",
    nacionalidad: "Argentina",
    edad: 36,
    telefono: "610038513", //no olvidar la coma
    // metodos -ahora definimos metodos
    login: function () {
        return "Login correcto";
    },
    get_email_password: function () {
        return this.email + " " + this.password;
    }
}

console.log(User.get_email_password());

console.log(User);

// la sintaxis de construccion de una funcion-metodo dentro de un objeto se declara diferente de cuando se la declara individualmente. 

function variacionPassword(password) {
    console.log(password + 5);
}

// en este caso no se hace una SUMA como tal, sino una concatenacion de dos elementos: password  y el numero 5.
variacionPassword(625500);

function variacionPassword2(password, c) {
    console.log(password + c);
}

variacionPassword2(625500, 100);

// en este caso si se hace una suma por que le indicamos que hay dos parametros de entrada (password, c)

// Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla. Ejemplos aritmeticos. Luego se sigue con el ejemplo de User.

function multiplicacion(a) {
    console.log(a * a);
}

multiplicacion(5);
multiplicacion(2);

function suma(a, b) {
    console.log(a + b)
}
suma(1, 3);

// Sintaxis para declarar una nueva funcion al objeto (User) a posterior que lo hemos creado: hasta ahora tenemos las funciones Login y get_email_passw, adicionamos Logout.

User.logout = function (CierreSesion) {
    return ("Has cerrado sesion correctamente");
};

console.log(User);

console.log("-----------------------------------------------------");

// Otro ejemplo de Creacion de Objeto y Funciones: 

const producto = {
    nombre: ["manzana", "roja"],
    categoria: ["fruta", "verdura", "setas"],
    precio: 1.99,
    variedad: ["moño azul", "sidra"],

    resumen_verdura: function () {
        console.log(`La ${this.nombre[0]}, es una ${this.categoria[1]} muy sana y su precio ${this.precio} es muy barato. Las marcas mas conocidas se llaman ${this.variedad[0]} y ${this.variedad[1]}`);
    }
};

// no olvidar que en METODOS van las comillas INVERTIDAS ````````

//para acceder a info de los metodos. va NOMBREobjeto.nombremetodo(function)
producto.resumen_verdura();
// para acceder a informacion de PROPIEDADES del objeto que podria concatenarse para formar tb una frase 
console.log("Una" + " " + producto.nombre[0] + " " + "al dia es mejor que ir al dentista");

console.log("La empresa" + " " + producto.variedad[0] + " " + "exporta sus conocidas" + " " + producto.nombre[0] + " por todo el mundo.");

console.log(producto.categoria);

console.log("Dentro de los alimentos principales que deberiamos comer todo los dias, es fundamental tener en cuenta" + " " + "la" + producto.categoria[0] + "," + producto.categoria[1] + "y" + producto.categoria[3] + " " + "durante toda la vida.");

// TENER EN CUENTA LOS DETALLES, LAS COMILLAS, LOS PUNTOS Y COMAS, ETC. como un metodo esta dentro del objeto al que pertenece. directamente lo podemos llamar citando el objeto que lo contiene. 

producto.resumen_verdura();
// aca actualizamos un dato. pasamos de manzana roja a manzana verde. 
producto.nombre = "manzana verde";
console.log(producto.nombre);
console.log(producto);

//para agregar nuevos datos. Ej agregamos dato Origen
producto.origen = ["Neuquen", "Mendoza"];
console.log(producto.origen);
console.log(producto);
// esta es una manera de imprimir el objeto literal entero. 




