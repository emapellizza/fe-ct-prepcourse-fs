
// El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

let array=["hola","buenos","dias","puto"]


let miString=[]


for(let i = 0; array.length > i; i++){

   //console.log(array[i])
   miString [i]= " " + array[i]
}

//miString=array[0]+" "+array[1]+" "+array[2]

miString = miString.toString();

console.log(miString)
