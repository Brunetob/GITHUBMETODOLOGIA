/*Estructura del método substring */

"Hola Mundo!".substring(2,6);
/*Cadena de texto a extraer una parte.substring(parámetro de inicio, parámetro de fin);*/

/*********************************************************************************** */

/*Primer excepción 
let dato = "Hola cuenca".substring(-1,5);
console.log(dato);*/

/*Segunda excepción
let string = "Que más ve".substring(4,4);
console.log(string);*/

/*let string = "Que más ve".substring(2);
console.log(string);*/

/*let string = "Que más ve".substring(3,6);
console.log(string); */

/*let string = "Que más ve".substring(12,15);
console.log(string);*/

/*let string = "Que más ve".substring(12,6);
console.log(string);*/

/*let string = "Que más ve".substring(6,12);
console.log(string);*/

/*Ejemplos Prácticos 2*/

/*let text = "El instituto sudamericano es el mejor de todos";

for(let i = 0; i<text.length; i++){
    console.log(text.substring(i));
}*/

var textShort = "Hola que más ve";

for(let i = textShort.length; i>4; i--){
    console.log(textShort.substring(i));
}
