/**
    **Ejercicio 07**
    
    Invertir el orden de una cadena de texto almacenada en una array, considerar que el tamaño de la cadena es un numero ***par***. 
    `world=[’o’,’ñ’,’e’’l’,’i’,’u’,’q’,’a’,’y’,’a’,’u’,’g’]`
 */

let word = ['o','n','a','c','n','e','u','c'];
let size = word.length;
let j = size-1;

console.log("El vector (", word, ") invertido sería: ");

for(let i = 0; i<size; i++){
    console.log(i,word[j]);
    j--;
}