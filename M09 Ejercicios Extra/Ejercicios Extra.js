/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = [];
   for( var  prop in objeto) {
      var arrayHijo= [];
      arrayHijo.push(prop); //prop asi se accede al nombre de la propiedad (o sea la clave)
      arrayHijo.push(objeto[prop]);  //objeto[prop] asi se accede al VALOR, pero cuando queremos redefinir el valor es:

//objeto[prop] = askdjasdkasdjasd

      arrayPadre.push(arrayHijo);
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético. //sort()
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
let arrayString = [];
let objetoAretornar = {};

for(let i=0; i<string.length; i++) {
   arrayString.push(string[i]);  //pusheamos en un array  [a, a, d, f, g, f, g]
}
arrayString.sort();  // [a, a, d, f, f, g, g]

for(let i=0; i<arrayString.length; i++) { //iteramos el array para guardarlo en el objeto como propiedad y su valor
   let letras = objetoAretornar[arrayString[i]] || 0; //guardamos en una variable el valor de la propiedad "arrayString[i]", si no existe esa propiedad, entonces su valor va a ser 0.
   objetoAretornar[arrayString[i]] = letras + 1 ;
}
return objetoAretornar
}
   
  //objetoAretornar  -> {a:2, d:1, f:2}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
var stringMay='';
var stringMin='';

   for(let i=0; i<string.length; i++){
      if(string[i]===string[i].toUpperCase()){
         stringMay += string[i]  
      }
      else {
         stringMin += string[i]; 
      }
   }
   return stringMay + stringMin;

}



function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var resultado = palabras.map(function(palabra) {
     return palabra.split("").reverse().join("");
   });
   return resultado.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var numeroReverso = numeroString.split("").reverse().join("");
   if (numeroString === numeroReverso) {
     return "Es capicua";
   } else {
     return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resultado = string.replace(/[abc]/g, "");
   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var resultado = arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
    return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = array1.filter(function(elemento) {
      return array2.includes(elemento);
    });
    return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};




// var obj ={};
// for( let i=0; i<string.length; i++){
//    if (objeto[string[i]] === undefined) {
//       objeto[string[i]] = 1;
//    } else {
//       objeto[string[i]]++;
//    }
// }
// var objetoOrdenado = {};
// Object.keys(objeto).sort().forEach(function(key) {
//    objetoOrdenado[key] = objeto[key];
// });
// return objetoOrdenado;
// }


// let arrayString = [];
// let objetoAretornar = {};

// for(let i=0; i<string.length; i++) {
//    arrayString.push(string[i]);  //pusheamos en un array
// }
// arrayString.sort();

// for(let i=0; i<arrayString.length; i++) { //iteramos el array para guardarlo en el objeto como propiedad y su valor
//    let letras =objetoAretornar[arrayString[i]]; 
//    objetoAretornar[arrayString[i]] = letras + 1;
// }
// return objetoAretornar


// function numberOfCharacters(string) {
//    let objetoAretornar = {};

//    for(let i = 0; i < string.length; i++) {
//       let letra = string[i];
//       if (objetoAretornar[letra]) {
//          objetoAretornar[letra] += 1;
//       } else {
//          objetoAretornar[letra] = 1;
//       }
//    }

//    let propiedadesOrdenadas = Object.keys(objetoAretornar).sort();
//    let objetoOrdenado = {};

//    for(let i = 0; i < propiedadesOrdenadas.length; i++) {
//       let propiedad = propiedadesOrdenadas[i];
//       objetoOrdenado[propiedad] = objetoAretornar[propiedad];
//    }

//    return objetoOrdenado;
// }
