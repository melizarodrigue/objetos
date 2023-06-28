/*1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su
respectivo producto.
 */

let suspermercado = {"papa" : 5.000 , "Arroz" : 3.200 , "Lentejas" : 4.300 , "Aceite" : 6.500}

for ( clave in suspermercado) {
    console.log("clave", clave , "valor", suspermercado[clave]);
    }
    