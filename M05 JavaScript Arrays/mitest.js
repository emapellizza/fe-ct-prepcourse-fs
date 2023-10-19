
// El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   /*
    
   let arrayOfNums = [1,2,3,4]
   let sumados = arrayOfNums.reduce((sum,item)=> sum + item, 0)

 console.log(sumados)


 */
    // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

 

 function encontrarNumeroMasGrande(arr) {
      if (arr.length === 0) {
        return undefined; // Devuelve undefined si el array está vacío
      }
    
      return arr.reduce(function (max, numero) {
        if (numero > max) {
          return numero;
        } else {
          return max;
        }
      }, arr[0]);
    }
    
    // Ejemplo de uso:
    const numeros = [10, 5, 25, 3, 99, 1, 809];
    const numeroMasGrande = encontrarNumeroMasGrande(numeros);
    console.log("El número más grande es: " + numeroMasGrande);