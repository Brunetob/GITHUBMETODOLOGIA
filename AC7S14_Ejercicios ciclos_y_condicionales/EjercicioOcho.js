/**
 * 8. Mostrar la suma de los elementos donde el
índice sea mayor al elemento
nums=[0,2,1,1]
//2
 */

let nums = [0,2,1,1,6,5,3];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(i > nums[i]){
        aux += nums[i];
    }
    console.log(i, nums[i]);
}

console.log("La suma de los elementos donde el índice es mayor al elemento, dentro del vector: ", nums, " es: ", aux);