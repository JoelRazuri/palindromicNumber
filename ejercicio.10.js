/*
    Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const palindromicNumber = (number = undefined) => {
    
    if (number === undefined) return console.warn("Debe ingresar un número");
    if (!Number.isInteger(number)) return console.warn("Debe ingresar un número");

    let numStr = number.toString().split("").reverse().join("");

    (number === Number(numStr)) ?console.info(true) :console.info(false);   
}

console.info("EJERCICIO 10");
palindromicNumber(2002);
palindromicNumber(15);




