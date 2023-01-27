/**
 * *Ejercicio 09*
    
    A partir del array `nums = [0, 0, 0, 0]` remplazar por una secuencia de números que empiece en numero `x` y en cada vez que avance el índice duplicar el valor. Empezar desde el ultimo elemento.
    
    Ejemplo: 
    
    valores iniciales: `nums = [0, 0, 0, 0]`   x = 1
    
    valores finales: `nums= [8, 4, 2, 1]`
 */

let nums = [5,6,7,8];
let size = nums.length;
/*let i = (size-1);*/

let num = prompt("Ingrese un número por favor");

for(let i = (size-1); i>=0; i--){
    nums[i] = num;
    console.log(i, nums[i]);
    num*=2;
}