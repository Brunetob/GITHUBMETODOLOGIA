/**
 * 7. Mostrar la suma de los elementos donde estos y el
índice sean iguales
nums=[2,1,4,3]
//4

 */

let nums = [2,1,4,3,4,3,6];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] == i){
        aux += nums[i];
    }
    console.log(i, nums[i]);
}

console.log("La suma de los elementos donde estos y el índice son iguales, dentro del vector: ", nums, " es: ", aux);