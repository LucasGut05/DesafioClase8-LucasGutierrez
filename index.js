//inicializar variable en entorno global para poder usarla fuera del condicional
let listaObjetos;

//condicional para confirmar si hay productos cargados
//en el caso de que haya productos guardados en el local storage, los guardo en la variable listaObjetos

if (localStorage.getItem("lista") == null) {
  alert("No hay productos disponibles");
} else {
  listaObjetos = JSON.parse(localStorage.getItem("lista"));
}

//muestro en la consola los productos de la lista

listaObjetos.forEach(element => {
  console.log(element.nombre + " " + element.categoria);
});




//funcion comprar, validamos si carrito esta vacio: inicializamos en 0; si hay archivos en el localstorage "carrito" lo traemos
const comprar =(dato) => {
    let carrito;

    if (localStorage.getItem("carrito") == null) {
        carrito = []
      } else {
        carrito = JSON.parse(localStorage.getItem("carrito"));
      }

      carrito.push(dato)
      localStorage.setItem("carrito", JSON.stringify(carrito))

}