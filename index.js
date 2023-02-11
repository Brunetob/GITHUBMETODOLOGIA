let piso = prompt("Ingrese.12 el código d.e la oficina");

let pos = [0,1,2,3,4,5,6,7];
let cont = 0;
let i = piso.length;// Variable global que guarde el dato de los caracteres totales de la cadena de texto ingresada y almacenada en 
let aux = 0;z


for(i; i>0; i--){
    if(piso.substring(i,i+1) == "."){
        pos[cont] = i;
        cont++;
    }
}
console.log(piso.substring(Number(pos[0]),Number(aux)));

