let doc = document.getElementById("perfil")/**Carga al documento toda la informaciòn de la etiqueta img01 */
let url = prompt ('Ingrese el perfil de Facebook');

let pos = [0,0];
let cont = 0;

/*for(let i = 0; i<url.length; i++){
    if(url.substring(i,i+5) == ".com"){
        console.log(url[i]);
    }
}*/


for(let i = 0; i<url.length; i++ ){
    /*console.log(url.substring(i,i+2));*/
    if(url.substring(i,i+2) == "m/" || url.substring(i,i+2) == "/"){
        pos[cont] = i;
        cont++;
    }
}

/*console.log(pos);*/
console.log(url.substring(Number(pos[0]+2,pos[1])));