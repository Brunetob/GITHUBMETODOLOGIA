/**
 *  **Ejercicio 04**
    
    A partir del array imprimir el índice de los elementos que sumados sean igual a la variable x.
    
    *Ejemplo:*
    
    `nums = [2, 3, 6, 5, 0]`
    
    `x=7`
 */


/*Declaración de variables*/
let x = prompt("Ingrese un número");
let elementos = [1,2,3,6,5];

let i = 0, j = 1, sum;
let size = elementos.length;
let order = "A partir del array imprimir el índice de los elementos que sumados sean igual a la variable x ("+ x + ")";
/**************************** */


console.log(order, elementos);

for(i; i<size; i++){
    j=i+1;
    if(i<size){
        for(j; j<size; j++){
            sum = (elementos[i] + elementos[j]);
            /*console.log(sum);*/
            if(sum == x){
                console.log("Los índices sumados equivalentes a ", x, " son: " , i, j);
            }
        }
    }else{
        alert("Ninguno de los valores en los índices al ser sumados son iguales a: ", x);
    }
}