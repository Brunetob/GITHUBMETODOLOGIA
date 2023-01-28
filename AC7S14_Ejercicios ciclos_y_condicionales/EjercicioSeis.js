/**
 * 6. Mostrar la suma elementos que no sean
múltiplos de 7
nums=[12,14,5,7]
//19
 */

let nums = [12,14,5,7];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] % 7 == 0){
        aux += nums[i];
    }
}

console.log("La suma de los elementos que no sean múltiplos de 7, dentro del vector: ", nums, " es: ", aux);