/**
 * 1. **Ejercicio 01**
    
    Usando una variable contador y bucle que recorra el array, determinar el tamaño del siguiente array.
    nums = [7, 4, 0, 9, 7, 6, 3, 8]
 */
let nums = [7, 4, 0, 9, 7, 6, 3, 8];
let cont = 0;

do{
    console.log(cont + 1, " (", nums[cont], ") ", cont);
    cont++;
}while(cont < nums.length);

console.log("El tamaño del vector es de " + cont + " unidades");