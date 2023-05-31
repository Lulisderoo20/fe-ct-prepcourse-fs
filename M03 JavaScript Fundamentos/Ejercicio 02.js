/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
  //  if (typeof parametro === 'string') { 

  //     return parametro;
  //   } else {
  //     return 'El argumento no es un string.';
  //   }
  return string;

}

// var cadena = "lucia";
// var nume= 5;
// var numecadena = "5";

// devolverString(cadena) // lucia
// devolverString(nume) // el argumento no es un string
// devolverString(numecadena) // 5


// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   if (typeof x === 'number' && typeof y === 'number') { 
      return x + y; 
    } else {
      return 'algo salio mal';
    }
  // return x + y;
}

// var cinco = 5;
// var cuatro = "4";
// suma(cinco, cuatro) // algo salio mal




function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
  //  if (typeof x === 'number' && typeof y === 'number') { 
  //     return x - y; 
  //   } else {
  //     return 'algo salio mal';
  //   }
  return x - y;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
  //  if (typeof x === 'number' && typeof y === 'number') { 
  //     return x / y; 
  //   } else {
  //     return 'algo salio mal';
  //   }
  return x / y;
}

// var lucia = 5; //operador de asignacion
// 5 == '5' // true
// 5 === "5" //false

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
  //  if (typeof x === 'number' && typeof y === 'number') { 
  //     return x * y; 
  //   } else {
  //     return 'algo salio mal';
  //   }
  return x * y;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
  //  if (typeof x === 'number' && typeof y === 'number') { 
  //     return x % y; 
  //   } else {
  //     return 'algo salio mal';
  //   }
  return x % y;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

/*


  if (typeof string === 'string') { // 'number'
     return string;
   } else {
     return 'El argumento no es un string.';
   }


   */