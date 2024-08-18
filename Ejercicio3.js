/*Dado un conjunto de números ingresados por el usuario, crear una función que tome un array como parámetro y retorne el
 segundo número más grande del conjunto. Debe haber como mínimo dos números para hacer la comparación. Ejemplos*/


 //se crea una array vacia que se llenara con los datos ingresados por el usuario 
 const ArrayPersonalizada = [];
 

 //creamos un ciclo for para que el usuario ingrese la cantidad de numeros esperadas (3)
for (let i = 0; i < 3;) {
    const numero = prompt("Ingrese un numero");
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
          console.log(parseInt(numero));
          //esta es la funcion que hace que agregue el numero al array (push)
          ArrayPersonalizada.push(numero);
          i++;
      }
}

//Funcion en donde se lleva acabo todo el proceso 

function Laqueresuelve(array) {
    /*se usa el metodo sort que nos ayuda a ordenar el array, pero este por si solo toma en cuenta la primer cifra, asi que se complementa
    para que tome "a" y "b" y retorna el numero que sea mayor*/
    let max =0;
    //sort es la funcion que ordena los numero
    array.sort((a, b)=>{
        return a-b;
     });
/* una vez ordenado el array eliminamos el ultimo numero, asi tendriamos el penultimo numero mayor*/
//(pop) es la que nos ayuda a eliminar el ultimo nmumero de la array
     array.pop();
/* recorremos la array a modo que la variable "max" va tomando el numero mayor, es decir, que al finalizar tendra el valor mayor tras haber eliminado
el mayor que le cede seria el valor del penultimo numero mayor */
     for (let i = 0; i < array.length; i++) {
        if (array[i]>max) {
            max = array[i];
        }
        
     }

     return max;

     //para finalmente retornar ese numero 
}
//Luego haciendo uso de la concadenacion obtenemos el resultado estipulado en el ejercicio
console.log(`${ArrayPersonalizada} => ${Laqueresuelve(ArrayPersonalizada)}`);