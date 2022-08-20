let comprar = document.getElementById("compra");
let nombre = document.getElementById("nombre").value="Carlos";
let factura = document.getElementById("fact").value=2012 ;
let parrafo = document.getElementById("pf");

comprar.style.background = "black";
comprar.style.color = "white";
comprar.style.width = "40%";
comprar.style.textAlign= "center";

parrafo.innerHTML="Lista de productos:"

class articulos{
    constructor(producto,cantidad,valor){
        this.producto = producto;
        this.cantidad = cantidad;
        this.valor = valor;


}
}



let lista = document.getElementById("list");

for (let index = 0; index < 3; index++) {
     let producto = prompt("ingrese un articulo a comprar");
     let cantidad = prompt("ingrese la cantidad a comprar");
     let valor = prompt("ingrese el costo del producto");

     const articulo = new articulos(producto,cantidad,valor)


    let li = document.createElement("li");
    li.innerHTML = articulo.producto + " Cantidad " + articulo.cantidad + " unidades, por Valor unitario de: "+ articulo.valor ;
    lista.appendChild(li)

    
}










