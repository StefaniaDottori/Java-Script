// Escritura (asignar o actualizar valores)
// Creacion de Objetos con sus propiedades
var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
      console.log(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function () {
      console.log('Hola, Soy ' + persona.nombre[0] + '. ');
    }
  };
  
  console.log('Hola, Soy ' + persona.nombre[0] + '. ');

  // Notacion de corchetes: 

  