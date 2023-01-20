/**
 * A partir de un array de calificaciones, comparar si la calificación es mayor o igual a 70 imprimir junto a la calificación la palaba "aprueba" caso contrario "reprueba".
 Ejemplos ratings = [25,73,70] 

Salida: 

 25 reprueba  

 73 aprueba  

 70 aprueba  
 */

 let ratings = [30,70,100,45];

 const min = 70;



 for(let i = 0; i<ratings.length; i++){
    if(ratings[i] >= min){
        console.log(ratings[i], " Aprueba");
    }else{
        console.log(ratings[i], " Reprueba");
    }
 }