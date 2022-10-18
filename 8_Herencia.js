// Herencia: Una clase creada mediante una herencia (subclase o clase hija) hereda todas las props. y metodos de la clase heredada (superclase o clase madre).

class Vehiculo {
    constructor (color, marca, ano) {
        this.color = color;
        this.marca = marca;
        this.ano = ano;
    }
    
    get_antiguedad_vehiculo () {
        const d = new Date();
        console.log(d.getFullYear() - this.ano);
    }

}

const vehiculo_1 = new Vehiculo ("negro", "bm", 2012);
console.log(vehiculo_1);
vehiculo_1.get_antiguedad_vehiculo();

// como hacemos para que otra clase nueva, herede las propiedades de la clase Vehiculo ya creada

class Vehiculos_Nuevos extends Vehiculo {
    // vehiculo es la Super clase de la q hereda la estructura de las props
    constructor (color, marca, ano, num_ptas) {
        super (color, marca, ano);
        this.num_ptas = num_ptas;
    }

    abrir_maletero () {
        console.log("Has abierto el maletero");
    }
}  

const vehiculo_2 = new Vehiculos_Nuevos ("azul", "Peugeot", 2013, 5);
console.log(vehiculo_2);

// no solo copiamos las propiedades plantilla, sino tb los metodos. En la subclase heredada Vehiculos_Nuevos, que deriva de vehivulos, a pesar de no tenr el metodo get antiguedad del auto, la podemos llamar poruq esta definido en su clase madre

vehiculo_2.get_antiguedad_vehiculo();

// ahora llamamos a un metodo propio que es abrir la maleta

vehiculo_2.abrir_maletero();