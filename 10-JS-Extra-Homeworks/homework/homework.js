// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var MatrizNueva = Object.entries(objeto);
  return MatrizNueva;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var objstring = {};
var contador = 0;
for (var i=0; i < string.length; i++){
  contador = 0;
  for (var f=0; f < string.length; f++){
    if (string[i]===string[f]){contador++;}
  }
  objstring[string[i]] = contador;
}
return objstring;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (var i = 0 ; i < s.length ; i++){
    if (s[i] === s[i].toUpperCase()) {
      mayus = mayus + s[i]
    } else {
      minus = minus + s[i]
    }
  }
return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrfrase = [];
  var palabra = "";
  var frainv = "";

  for (var i = 0 ; i <= str.length ; i++){
    if (str[i] === " " || i === str.length) {
      arrfrase.push(palabra);
      palabra = "";
    } else {
      palabra = palabra + str[i];
    }
  }

  for (h = 0; h < arrfrase.length ; h++) {
    palabra = "";
    for (var i = arrfrase[h].length ; i > 0 ; i--){
      palabra = palabra + arrfrase[h][i-1];
    }
    frainv = frainv + palabra;
    if (h < arrfrase.length - 1) {frainv = frainv + " ";}
  }

  return frainv;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  txtnumero = numero.toString()
  for (var i = 0; i <= Math.ceil(txtnumero.length/2) ; i++){
    if (txtnumero[i] !== txtnumero[(txtnumero.length-1)-i]){
      return "No es capicua";
    } else if ( i = Math.ceil(txtnumero.length/2)-1) {
      return "Es capicua";
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenanueva = "";

  /* //forma facil
  cadenanueva = cadena.replace("a","");
  cadenanueva = cadenanueva.replace("b","");
  cadenanueva = cadenanueva.replace("c","");
  */

  for (var i = 0 ; i < cadena.length ; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      cadenanueva = cadenanueva + cadena[i];
    }
  }

  return cadenanueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var maximo = 1;
  var arrordenado = [];
  for (let x = 0 ; x <= maximo; x++){
    for (const elemento of arr){
      if (maximo<elemento.length){maximo=elemento.length;}
      if (elemento.length===x){arrordenado.push(elemento)}
    }
  }
  return arrordenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrunion = [];
  for(let elemento1 of arreglo1){
    for(let elemento2 of arreglo2){
      if(elemento1===elemento2){
        for(let elemento3 of arrunion){
          if(elemento3===elemento2){continue;}
        }
        arrunion.push(elemento2);
      }
    }
  }
  return arrunion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

