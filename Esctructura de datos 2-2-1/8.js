/*8. Dado el objeto {
162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}
Use dos ciclos for-in para recorrer los objetos más internos y mostrar sus llaves y valores. Por
ejemplo:
nombres Pepe
apellidos Perez
edad 40
---------
nombres Maria
apellidos Gomez
edad 31
---------
nombres Raul
apellidos Castro
edad 80 */

let personas = {
    162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
    4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
    786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
}

for (let clave1 in personas) {
    let interno = personas[clave1];
    for (let clave2 in interno) {
        let valor = interno[clave2];
        console.log( "clave " , clave2 , "valor " , valor);
    }
    console.log("-------");
}