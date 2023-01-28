/**
 * 3. Mostrar la suma elementos mayores a 10
 * nums=[10,50,8,4]
 * //50
 */

let nums=[12,50,8,4,6,10,11];

let aux = 0;

for(let i = 0; i<nums.length; i++){
    if(nums[i] > 10){
        aux += nums[i];
    }
}

console.log("La suma de los elementos mayores a 10 dentro del vector: ", nums, " es: ", aux);