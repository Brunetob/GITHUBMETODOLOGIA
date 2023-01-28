/**
 * Mostrar suma índices pares
nums=[10,50,8,4]
//18
 */

let nums = [120,2,8,5,7,19];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(i % 2 == 0){
        aux += nums[i];
    }
}

console.log("La suma de los elementos en los índices pares dentro del vector: ", nums, " es: ", aux);