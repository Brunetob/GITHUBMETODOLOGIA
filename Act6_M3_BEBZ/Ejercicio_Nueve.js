/**
 * *Ejercicio 09*
    
    A partir del array `nums = [0, 0, 0, 0]` remplazar por una secuencia de números que empiece en numero `x` y en cada vez que avance el índice duplicar el valor. Empezar desde el ultimo elemento.
    
    Ejemplo: 
    
    valores iniciales: `nums = [0, 0, 0, 0]`   x = 1
    
    valores finales: `nums= [8, 4, 2, 1]`
 */

let nums = [5,6,7,8];
let size = nums.length;
let mult;
let i = (size-1);

let num = prompt("Ingrese un número por favor");
nums[i] = num;


for(i; i>=0; i--){
    console.log(i, nums[i]);
    mult = nums[i] * 2;
    nums[i] = mult;  
}