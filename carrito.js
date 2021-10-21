//inicializar variable en entorno global para poder usarla fuera del condicional
let listaObjetos;

//condicional para confirmar si hay productos cargados
//en el caso de que haya productos guardados en el local storage, los guardo en la variable listaObjetos

if (localStorage.getItem("carrito") == null) {
  alert("Carrito vacio");
} else {
  listaObjetos = JSON.parse(localStorage.getItem("carrito"));
}

//muestro en la consola los productos de la lista

listaObjetos.forEach((element) => {
  console.log(element.nombre + " " + element.precio);
});

const finalizarCompra = () => {
  let monto = 0;
  listaObjetos.forEach((e) => {
    monto += e.precio;
  });
};

console.log("Monto a pagar" + monto);
localStorage.removeItem("carrito");
