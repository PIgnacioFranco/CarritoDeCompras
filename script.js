var productos = [
    { nombre: "Harina", precio: 35 },
    { nombre: "Pan", precio: 25 },
    { nombre: "Papa", precio: 52 },
    { nombre: "Palta", precio: 55 },
    { nombre: "Fideos", precio: 85 },
    { nombre: "Aceite", precio: 350 },
    { nombre: "Sopa", precio: 86 },
    { nombre: "Mermelada", precio: 108 },
    { nombre: "Porotos", precio: 69 },
    { nombre: "Lentejas", precio: 85 },
    { nombre: "Mandarina", precio: 43 },
    { nombre: "Banana", precio: 79 },
    { nombre: "Leche de almedras", precio: 145 },
    { nombre: "Papel higienico", precio: 147 },
    { nombre: "Lavandina", precio: 55 },
    { nombre: "Alcohol en gel", precio: 123 },
    { nombre: "Shampoo", precio: 400 },
    { nombre: "Arroz", precio: 66 },
    { nombre: "Harina maiz", precio: 35 },
    { nombre: "Salsa de tomate", precio: 35 }
];

// Array donde gurado los productos comprados
// Inicializo el Array con todos ceros
var carrito = [];
for (var i = 0; i < productos.length; i++) {
    carrito[i] = 0;
}

// Funcion que completa la tabla con los productos
// Nombre, precio, boton de agregar y boton de quitar
function cargaInicial () {

    let tbBody = document.getElementById ("tabla").getElementsByTagName ("tbody")[0];

    for (let i = 0; i < productos.length; i++) {
        var row = document.createElement ("tr");

        var cel0 = document.createElement ("td");
        var content0 = document.createTextNode (productos[i].nombre);
        cel0.appendChild (content0);
        row.appendChild (cel0);

        var cel1 = document.createElement ("td");
        var content1 = document.createTextNode (productos[i].precio);
        cel1.appendChild (content1);
        row.appendChild (cel1);

        var cel2 = document.createElement ("td");
        let butt0 = document.createElement ("button");
        var content2 = document.createTextNode ("Agregar");
        butt0.setAttribute ("id", 'A' + i);
        butt0.setAttribute ("onClick", "agregar (event)");
        butt0.appendChild (content2);
        cel2.appendChild (butt0);
        row.appendChild (cel2);

        var cel3 = document.createElement ("td");
        let butt1 = document.createElement ("button");
        var content3 = document.createTextNode ("Quitar");
        butt1.setAttribute ("id", 'Q' + i);
        butt1.setAttribute ("onClick", "quitar (event)");
        butt1.setAttribute ("disabled", "");
        butt1.appendChild (content3);
        cel3.appendChild (butt1);
        row.appendChild (cel3);

        tbBody.appendChild (row);
    }

}
// Funcion del boton agregar
// carga el Array carrito con los precios de los productos seleccionados
// tambien agrega una fila en la tabla del carrito con el producto
function agregar (e) {
    let idB = e.target.getAttribute ("id").slice(1);

    carrito[idB] = productos[idB].precio;

    e.target.setAttribute ("disabled", "");

    let butQ = document.getElementById ('Q' + idB);
    butQ.removeAttribute ("disabled");

    let tbBody = document.getElementById ("tablacarrito").getElementsByTagName ("tbody")[0];
    // let tablaC = document.getElementById ("tablacarrito");
    var row = document.createElement ("tr");
    row.setAttribute ("id", 'F' + idB);

    var cel0 = document.createElement ("td");
    var content0 = document.createTextNode (productos[idB].nombre);
    cel0.appendChild (content0);
    row.appendChild (cel0);

    var cel1 = document.createElement ("td");
    var content1 = document.createTextNode (productos[idB].precio);
    cel1.appendChild (content1);
    row.appendChild (cel1)

    tbBody.appendChild (row);
}
// Funcion del boton quitar
// Descuenta el Array carrito y quita una fila de la tabla carrito
function quitar (e) {
    let idQ = e.target.getAttribute("id").slice(1);
    carrito[idQ] = 0;

    e.target.setAttribute ("disabled", "");

    let butA = document.getElementById ('A' + idQ);
    butA.removeAttribute ("disabled");

    console.log(idQ);

    let row = document.getElementById ('F' + idQ);
    row.parentNode.removeChild(row);

}
// Funcion del botor comprar
// suma todos los elementos de Array carrrito
// y lo muestra en pantalla
function comprar () {
    let total = 0;
    carrito.forEach( valor => {
        total += valor;
    });

    alert ("El total es: $" + total );
}
