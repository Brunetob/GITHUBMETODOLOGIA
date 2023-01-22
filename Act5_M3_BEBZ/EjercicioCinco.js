/**
 * **Ejercicio 05**
    
    Contar cuantos números impares tiene el siguiente array: `nums=[3, 5, 6, 7, 3, 5, 6, 7]`
    
    **Nota:** Usar el operador mod, este operador devuelve el residuo de dividir dos números.
    
    Ejemplos: `9 mod 2 = 1` `8 mod 2 = 0`
 */

let nums = [100,5,4,7,3,5,6,7];

let i = 0, j = 0, cont = 0; 
let size = nums.length;
const cond = 0, two = 2;

for(i; i<size; i++){
    if(nums[i] % two == cond){
        cont++;
    }
}
console.log("En el vector existen ", cont, " números pares");
