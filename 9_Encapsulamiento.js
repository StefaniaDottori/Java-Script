// Clase Coche . Desde esta clase, definimos constructor y propiedades m, c y a. Luego aplicamos dos metodos, antiguedad del coche creando una constante para la fecha q se ingresara y la diferencia de tiempo c el 2022. Luego otro metodo para SETEAR, osea, parametro de entrada, cuando combustible tiene en el tanque. Dentro del mismo aplicamos un IF para definir si para nosotros el tanque se considera lleno o no . Se crea una variable para sumarle al tanque los litros que queramos y eso hace el total que tiene.
class Coche {
    // constructor
    constructor(m, c, a) {
        this.marca = m;
        this.color = c;
        this.any = a;
        this.nivel_combustible = 0;
    }
    // metodo que devuelve la antigüedad del coche
    get_ant_coche() {
        const d = new Date();
        return d.getFullYear() - this.any;
    }
    // metodo que gestiona el deposito de combustible
    set_combustible(litros) {
        let total = this.nivel_combustible + litros;
        // si el deposito esta lleno (suponemos que todos los coches tienen como max 100 litros)
        if (total > 100) {
            this.nivel_combustible = 100;
            return "Deposito lleno!";
        } else {
            this.nivel_combustible = total;
            return "El deposito tiene "+ total + " litros";
        }
    }

}
// interaccion con la clase
const coche1 = new Coche("Seat", "rojo", 2021);
console.log(coche1);
console.log("--------------------------------------------");
const coche2 = new Coche("Audi", "negro", 2020);
console.log("--------------------------------------------");
console.log(coche2.get_ant_coche);
console.log("--------------------------------------------");
coche1.set_combustible(91);
console.log("--------------------------------------------");
console.log(coche1.set_combustible(10));
console.log("--------------------------------------------");

// La prop. nivel_combustible esta expuesta en la interfaz que utilizamos para interactuar con nuestro objeto, pudiendo modificarlo
coche1.nivel_combustible = 200;
console.log(coche1);
// Gracias a la encapsulacion, podemos configurarla como privada y que sea imposible interactuar con ella a traves del objeto

// Clase Coche Encapsulada. Esto quiere decir que podemos definir propiedades antes del constructor, la propiedad privada tb se replicara, pero no estara a la vista, estara oculta. Para definir prop priv colocamos ALMOHADILLA delante y asi la vamos invocando despues #nombrePropPrivada. 

class Coche_encapsulacion {
    // declaramos una prop privada. Esta fuera del constructor y al instanciar un objeto, no inicializa esa props a dicho objeto
    #nivel_combustible = 0;
    // constructor
    constructor(m, c, a) {
        this.marca = m;
        this.color = c;
        this.any = a;
    }
    // metodo que devuelve la antigüedad del coche
    get_ant_coche() {
        const d = new Date();
        return d.getFullYear() - this.any;
    }
    // metodo que gestiona el deposito de combustible
    set_combustible(litros) {
        let total = this.#nivel_combustible + litros;
        // si el deposito esta lleno (suponemos que todos los coches tienen como max 100 litros)
        if (total > 100) {
            this.#nivel_combustible = 100;
            return "Deposito lleno!";
        } else {
            this.#nivel_combustible = total;
            return "El deposito tiene "+ total + " litros";
        }
    }

    // Para leer o escribir propiedades privadas, utilizamos los metodos setters o getters
    get_nivel_deposito() {
        return this.#nivel_combustible;
    }

    set_nivel_deposito(l) {
        this.#nivel_combustible = l;
    }

}
// interaccion con la clase
const coche3 = new Coche_encapsulacion("Fiat", "verde", 2021);
console.log(coche3);
console.log(coche3.set_combustible(20));
console.log(coche3);
// comprobar prop privada
// console.log(coche3.#nivel_combustible);
// comprobar setter y getter
console.log(coche3.get_nivel_deposito());
coche3.set_nivel_deposito(30);
