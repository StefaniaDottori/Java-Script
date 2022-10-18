// # Ejercicio 1
// ## Confeccionar una clase Empleado, definir como atributos su nombre y sueldo.
// ## Definir un método “inicializar” que envíe como dato el nombre y sueldo. 
// ## Plantear un segundo método que imprima el nombre y un mensaje si debe o no pagar impuestos (si el sueldo supera a 3000 paga impuestos)
// ## Comprobar con instancias.

class Empleado {
    constructor (nombre, sueldo) {
        this.nombre = nombre,
        this.sueldo = sueldo
    }
    get_inicializar (nvo_nombre, nvo_sueldo) {
        this.nombre = nvo_nombre,
        this.sueldo = nvo_sueldo
    }

    pagar_impuestos () {
        if (this.sueldo > 3000) {
            console.log("Usted debe pagar impuestos");
        } else {
            console.log("Excento de impuestos");
        }
        }
    }; 
const Empleado1 = new Empleado ("Laura", 3500) ;
console.log(Empleado1);
console.log("---------------------------------");
Empleado1.pagar_impuestos(); 


console.log("--------------otra forma de hacerlo sin constructor----------------------------");

class Empleado_profe {
    // El constructor sirve la mayor parte de las veces para inicializar
    // las props de un objecto justo al instanciar en la clase.
    // constructor(nombre, sueldo) {
    //     this.nombre = nombre;
    //     this.sueldo = sueldo;
    // }

    // En este caso, no hay constructor, e inicializamos las props mediante 
    // un metodo
    inicializar(nombre_p, sueldo_p) {
        this.nombre_p = nombre_p;
        this.sueldo_p = sueldo_p;
    }
    hacienda() {
        if (this.sueldo_p > 3000) {
            console.log("Debes pagar impuestos " + this.nombre_p);
        } else {
            console.log("No debes pagar impuestos " + this.nombre_p);
        }
    }
}

// const empleado1 = new Empleado("Pepe", 2000); // con constructor
const empleado1 = new Empleado_profe();
console.log(empleado1);
empleado1.inicializar("Pepe", 2000);
empleado1.hacienda();
const empleado2 = new Empleado_profe();
empleado2.inicializar("Maria", 3500);
empleado2.hacienda();


console.log("-----------------Ejercicio 2----------------");

// # Ejercicio 2

// ## Confeccionar una clase Empleado, definir como atributos su nombre y sueldo. El constructor recibe como parámetros el nombre y el sueldo, en caso de no pasar el valor del sueldo inicializarlo con el valor 1000.
// ## Confeccionar otro método que imprima el nombre y el sueldo.
// ## Crear luego dos objetos de la clase Empleado, a uno de ellos no enviarle el sueldo.

class Employees {
    constructor (name, salary = 1000) {
        this.name = name,
        this.salary = salary
    }
    get_nameSalary_print () {
        console.log(`El usuario tiene estos datos: ${this.name} y ${this.salary}`);
    }
}

const Employee1 = new Employees ("Julia", 3600); 
console.log(Employee1);
Employee1.get_nameSalary_print(); 
console.log("-----------------------------------");

const Employee2 = new Employees ("Enrique", );
console.log(Employee2);
Employee2.get_nameSalary_print(); 

console.log("------------------------------------------");


console.log("-------------------Ejercicio 3-----------------------");

// ## Ejercicio 3

// ## Confeccionar una clase Persona que tenga como atributos el nombre y la edad. Definir como métodos uno que cargue los datos personales y otro que los imprima. Plantear una segunda clase Empleado que herede de la clase Persona. Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir su sueldo. Definir un objeto de la clase Persona y llamar a sus métodos. También crear un objeto de la clase Empleado y llamar a sus métodos.
// ## Comprobar herencia.

class Persona {
    constructor_nva_persona (nom, age) {
        this.nom = nom,
        this.age = age
    }
      print_nva_persona () {
        return ("La persona ingresada se llama ${this.nom} y tiene ${this.age}");
    }
}

// comprobaciones = aca creamos nueva persona pero para agregar datos llamamos al metodo const.nva.pers
const persona1 = new Persona ();
persona1.constructor_nva_persona ("jorge", 35); 
console.log(persona1);
 
console.log("------------------------------------");

// continua:: Plantear una segunda clase Empleado que herede de la clase Persona. Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir su sueldo.

class Trabajadores extends Persona {
        set_payslip (payslip) {
            this.payslip = payslip;
        }   
        get_new_payslip () {
            return (" El salario del trabajador ${this.nom} es ${this.payslip} euros ");
    } 
    
 }; 



const trabajor1 = new Trabajadores (); 
trabajor1.constructor_nva_persona("marta", 41); 
console.log(trabajor1);

trabajor1.set_payslip(3256); 

console.log(trabajor1);

console.log("-------------------------------------");

console.log("----------------Ejercicio 4-------------");


// # Ejercicio 4
// ## Crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:
// ## Un constructor, donde se inicializan las propiedades.
// ## Los setters y getters para cada uno de las propiedades. 
// ## mostrar(): Muestra los datos de la persona.
// ## esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.


class humanos {
    set_nvo_humano (n, e, dni) {
        this.n = n;
        this.e= e;
        this.dni=dni;
    }
    set_neim (n) {
        this.n= n;
    }
    set_edad (e) {
        this.n= e;
    }
    set_dni (dni) {
        this.dni= dni;
    }
    get_neim (n) {
        return this.n;
    }
    get_edad (e) {
            return this.e;
        }
    get_dni(dni) {
            return this.dni;
    }

    get_mostrar_datos () {
        return (`El nuevo humano tiene estas catact: ${this.n}, ${this.e} y ${this.dni}`)
    }
    get_esMayorDeEdad() {
        if (this.e >= 18) {
            return  false;
        } else {
            return true; 
        }
    }
}

const humano1 = new humanos("Roberta", 12, 65846632); 
console.log(humano1);

humano1.set_neim("pepe"); 
humano1.set_edad(12);
console.log(humano1);
humano1.get_esMayorDeEdad(); 
console.log(humano1.get_esMayorDeEdad());

