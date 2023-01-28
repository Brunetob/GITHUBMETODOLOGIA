/**
 1. Mostrar la suma elementos impares
nums=[10,50,8,4]
//0
nums=[3,5,8,4]
//8

 */

/*let nums = [12,6,24,4];*/ /*Vector falso */
let nums = [7,9,2,10]; /*Vector verdadero */

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] % 2 != 0){
        aux += nums[i];
    }
}

console.log("La suma de los elementos impares dentro del vector: ", nums, " es: ", aux);