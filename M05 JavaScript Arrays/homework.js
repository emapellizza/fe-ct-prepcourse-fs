/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return(array[array.length - 1])
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length)
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var miArray=[];

   for(let i = 0; array.length > i; i++){
    miArray[i]= array[i]+1
   }
   return(miArray)
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let miString=[]

   for(let i = 0; palabras.length > i; i++){
   
      //console.log(array[i])
      miString [i]= palabras[i]+" " 
   }
   
   miString = miString.toString();
   miString = miString.replaceAll(',','')
   miString = miString.slice(0,-1)
   
   return(miString)

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   //const found = array1.find((element) => element > 10);
   if(array.includes(elemento)){
      return true
   }else
   return false

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   return (arrayOfNums.reduce((sum,item)=> sum + item, 0) )
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumados = resultadosTest.reduce((sum,item)=> sum + item, 0)
   sumados= sumados / resultadosTest.length
   return(sumados)
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      if (arrayOfNums.length === 0) {
        return undefined; // Devuelve undefined si el array está vacío
      }
    
      return arrayOfNums.reduce(function (max, numero) {
        if (numero > max) {
          return numero;
        } else {
          return max;
        }
      }, arrayOfNums[0]);
    }
    
   

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   const res = [];

   if (arguments.length == 0) {
     return(0);
   } 
   else {
     for (var i = 0; i < arguments.length; i++) {
       res[i] = arguments[i];
 
     }
     return(res.reduce((p, c) => p * c));
    }

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let res = array.filter((i) => i > 18);
   return res.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
        return "Es fin de semana";
        break;
      case 2:
        return "Es dia laboral";
        break;
      case 3:
        return "Es dia laboral";
        break;
      case 4:
        return "Es dia laboral";
        break;
      case 5:
        return "Es dia laboral";
        break;
      case 6:
        return "Es dia laboral";
        break;
      case 7:
        return "Es fin de semana";
        break;
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let resultado = (num) => num.toString()[0] === "9";

  return resultado(num);
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let contador = 0;

  for (var i = 0; i <= array.length; i++) {
    if (array[i] == array[i + 1]) {
      contador++;
    }
  }

  if (contador == array.length) {
    return true;
  } else {
    return false;
  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const nuevoArray = [];

   for (let i = 0; i < array.length; i++) {
     switch (array[i]) {
       case "Enero":
         nuevoArray[0] = array[i];
         break;
       case "Marzo":
         nuevoArray[1] = array[i];
         break;
       case "Noviembre":
         nuevoArray[2] = array[i];
         break;
     }
   }
 
   if (
     nuevoArray.includes("Enero") &&
     nuevoArray.includes("Marzo") &&
     nuevoArray.includes("Noviembre")
   ) {
     return nuevoArray;
   } else return "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let multiplicar = [];
   for (let i = 0; i <= 10; i++) {
     multiplicar[i] = 6 * i;
   }
   return multiplicar;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let res = array.filter((i) => i > 100);
   return res;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const arr=[]
 for(var i =0 ; i < 10; i++){
   num = num + 2;
   arr[i]= num
   if(arr[i] == 10){
      return ("Se interrumpió la ejecución")
      break;
   }
 }
 return(arr)
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
