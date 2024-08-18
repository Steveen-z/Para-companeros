/*Solicitarle al usuario la cantidad de números que desea ingresar, luego debe guardar esos números en un array y devolver la suma 
de todos los números positivos. Si la matriz no contiene números positivos, devuelve 0. No puede usar for para recorrer el array final, solo 
puede usar for para almacenar los datos que el usuario digite. Ejemplos*/

const ArrayPersonalizada = [];
let repeticiones = prompt("Ingrese la cantidad de numeros que quiera ingresar en el array")

if (repeticiones.length == 0) {
    alert("No puede estar vacio");
}
else if (isNaN(repeticiones)) {
    alert("Ingrese numeros validos");
}
else{

    parseInt(repeticiones + 1);
    console.log(`cantidad de numero a ingresar: ${repeticiones}`);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creamos un ciclo for para que el usuario ingrese la cantidad de numeros que quiera ingresar
for (let i = 0; i < (repeticiones);) {
   const numero = prompt("Ingrese un numero para la array");
   // se evalua si el espacio esta vacio, en caso de que si, mostrara un error y no lo sumara al contador 
    if (numero.length == 0) {
         alert("No puede estar vacio");
     }
     //en caso que el usuario ingrese una letra, o caracter de tipo string este mostrara otro error
     else if (isNaN(numero)) {
         alert("Ingrese numeros validos");
     }
     //en caso de que el usuario inmgrese un valor esperado, se agrega el numero ingresado al array previamante creado y suma 1 en el contrador 
     else{
       // se hace uso de "parseint" para que la entrada se convierta de string a int 
            ArrayPersonalizada.push(parseInt(numero));
            i++;
     }
}
//hasta aca funciona

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filterNumber(array) {
    //Se filtran los numero positivos haciendo uso de la funcion filter que recorre la array extryendo los numero mayores a 0
    return array.filter((Element) => Element > 0)
    //el reduce toma en cuenta los elementos y sum (suma) en donde suma toma el valor anterior a elemento pasa sumarse asi el anterior con el posterior
    //el 0 es el valor inicial, es decir que el conteo inicia desde 0
    //al final el reduce retorna la suma de todos los elementos
                .reduce((sum, Element) => sum + Element, 0);  // Sumamos solo los positivos
}

const sumaPositivos = filterNumber(ArrayPersonalizada);
console.log(`La suma de los números positivos es: ${sumaPositivos}`);