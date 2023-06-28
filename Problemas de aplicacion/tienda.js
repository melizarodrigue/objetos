/*Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use objetos */

const productos ={
    "arroz": 4000,
    "panela": 5000,
    "leche": 4500,
    "huevo": 800,
    "azucar": 2000,
};

function precioProducto(){
    const nombreProducto = prompt("Ingrese el nombre del producto. \n arroz \n panela \n leche \n huevo \n azucar ").toLocaleLowerCase();
    if(productos.hasOwnProperty(nombreProducto)){
        const precio = productos[nombreProducto];
        console.log("el precio de",nombreProducto,"es:",precio);
    }else{
        console.log("El producto no se encuentra en nuestro inventario");
    }
}

precioProducto();