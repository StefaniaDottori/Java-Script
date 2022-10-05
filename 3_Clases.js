// Mediante estructura funcional standard podemos crear objetos LITERALES
function User_(email) {
    let obj = {};
    obj.email = email;
    return obj;
}

const user_1 = User_("email@gmail.com");


// - Clase: Plantilla / Fábrica que define las caracteristicas de un objeto.
// En JS todo se puede tratar como un objeto ya que es un lenguaje "prototipado" y vemos un ejemplo con un array:

let array1 = ["Hola", "Adios"];
let array2 = new Array("Hola", "Adios"); // lo mismo

let numero1 = 5;
let numero2 = new Number(5);  // lo mismo

let texto1 = "Hola mundo!";
let texto2 =  new String("Hola mundo!");  // lo mismo

// Creando una clase (fabrica) propia
class User {
    // - Constructor: Método especial. Se llama automaticamente en la instancia de una clase.
    // Su principal funcion es para inicilizar las props del objeto
    constructor (email, password) {
        this.email = email;
        this.password = password;
        this.confirm_login = false;
    }
}

let user1 = new User("armando@gmail.com", "1234");
console.log(user1.confirm_login);
user1.x = 5;
console.log(user1);
let user2 = new User("maria@gmail.com", "1234");
console.log(user2);

console.log("--------------------------------------");

// Clase coche que fabrica coches de una misma marca
class Coche {
    constructor(a, c, m="Mercedes") {
        this.any = a;
        this.color = c;
        this.marca = m;
        this.ensamblado = false;
    }
    // metodo que devuelve la antiguedad del coche
    get_antig_coche() {
        const fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
    // getter: metodo que devuelve un valor de una prop
    get_ensamblado() {
        if (this.ensamblado) {
            console.log("Ensamblado existoso!");
        } else {
            console.log("Aun no se han completado todos los procesos");
        }
    }
    // setter: mediante la llegada de un parametro modifica el 
    // valor de una prop
    set_pintura (col) {
        this.color = col;
    }

}

let coche1 = new Coche(2022, "Azul");
let coche2 = new Coche(2020, "Rojo");

console.log("La antiguedad es : " +  coche1.get_antig_coche() + " años");
coche1.get_ensamblado();
coche1.ensamblado = true;
coche1.get_ensamblado();
coche1.set_pintura("Verde");
console.log(coche1);

console.log('La aniguedad de su coche es de '+ ' ' + get_antig_coche () + ' años');