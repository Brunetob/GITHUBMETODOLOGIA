/**
 * **Ejercicio 06**
    
    Intercambiar la posición entre el primero y el ultimo elemento del siguiente array: `name=[’a’,’o’,’l’,’h’]`. Usar una variable auxiliar.
 */

let word = ['o','m','i','g','a'];/*Declración del vector a intercambiar los elementos*/

let size = word.length;/*Declaración de una variable que guarde el tamaño del vector */

let i = 0, j = size; /*Declaración de variables que recorreran las posiciones del vector*/

let first = word[i];/*Se guarda en la variable 'first' el contenido del primer elemento */
console.log("Guarda el primer dato = " + first);/*Se informa cuál es el primer elemento guardado */

do{
   console.log(i, word[i]);/*Se muestra en pantalla la posición en el vector y su contenido */
   j--;/*Recorre el vector de forma descendente*/
   i++;/*Recorre el vector de forma ascendente*/
}while(i<size);/*Se recorre el vector mientras i sea menor que el tamaño de este */

word[j] = word[i-1];/*Se reempleza en la posición j del vector el contenido de este en la posición i */
word[i-1] = first;/*Se reemplaza el contenido del vector en la posición i con el primer elemento guardado en la variable 'first' */
console.log("Del intercambio entre el primer y último elemento queda: ", word); /*Se muestra el vector con el contenido reemplazado */