/*
 *9. Mostrar la suma de los índices donde el
índice sea menor al elemento
nums=[0,2,1,4]
//6 
 */

let nums = [0,2,1,1,6,5,3,12];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(i < nums[i]){
        aux += i;
    }
    console.log(i, nums[i]);
}

console.log("La suma de los índices donde el índice es menor al elemento, dentro del vector: ", nums, " es: ", aux);