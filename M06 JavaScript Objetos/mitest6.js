function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agregamos la propiedad "calcularPrecioDescuento" como una función
   
    objetoProducto.calcularPrecioDescuento = function () {
        let precioProducto = objetoProducto.precio
        let porcentajeDescuento = objetoProducto.porcentajeDeDescuento
  
         let precioFinal = precioProducto - (precioProducto * porcentajeDescuento)
         return precioFinal
       
     }
    
  
    // Retornamos el precio final calculado
    return objetoProducto.calcularPrecioDescuento();
  }
  
  // Ejemplo de uso:
  const producto = {
    precio: 10,
    porcentajeDeDescuento: 0.2
  };
  
  const precioFinal = agregarMetodoCalculoDescuento(producto);
  console.log(precioFinal);