/**
 * Mostrar la suma de los índices donde el
elemento es 0
nums=[1,1,0,0]
//5
 */

let nums = [1,1,0,0,0,0,1,1,0,0,0,1,0];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] == 0){
        aux += i;
    }
}

console.log("La suma de los índices donde el elemento es 0, dentro del vector: ", nums, " es: ", aux);