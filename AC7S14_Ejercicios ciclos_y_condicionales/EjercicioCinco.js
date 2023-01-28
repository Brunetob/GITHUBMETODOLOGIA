/**
 * 5. Mostrar la suma elementos múltiplos de 3
nums=[12,3,5,7]
//15
 */

let nums = [12,3,5,7,6,9,20,13,18];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] % 3 == 0){
        aux += nums[i];
    }
}

console.log("La suma de los elementos múltiplos de 3 dentro del vector: ", nums, " es: ", aux);