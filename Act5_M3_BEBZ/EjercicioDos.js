/**
 * Ejercicio 02
 * Concatenar con cada elemento del array
 * 
 */

let nums = [6,5,4,3]

let i = 0, j = 0;
let size = nums.length;


for(i; i<size; i++){
    if(i<size){
        for(j; j<size; j++){
            console.log(nums[i], nums[j]);
        }
        console.log("-------------");
        j=0;
    }
}
