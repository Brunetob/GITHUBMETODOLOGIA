var factura = "001-002-000000123";
let pos = [0,0];
let cont = 0;


for(let i = 0; i<factura.length; i++){
    if(factura[i] == "-"){
        /*if(cont < 2){*/
        pos[cont] = i;
        /*}*/
        cont++;
        /*console.log("El guión se encuentra en la posición: ", i);*/
    }
}
console.log(factura.substring(pos[0], pos[1]));