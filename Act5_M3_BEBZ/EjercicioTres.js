/**
 * **Ejercicio 03**
    
    El mismo ***Ejercicio 02***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:
    
    02 04 08
    
    24 28
    
    48
 */

let nums = [6,5,4,3]

let i = 0, j = 1;
let size = nums.length;
    
    
for(i; i<size; i++){
    console.log("-------------");
    j=i+1;
    if(i<size){
        for(j; j<size; j++){
             console.log(nums[i], nums[j]);
        }
    }
}