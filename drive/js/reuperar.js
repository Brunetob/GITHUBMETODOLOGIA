let doc = document.getElementById("img01")/**Carga al documento toda la informaciòn de la etiqueta img01 */
let url = prompt ('Ingrse id Url gdrive');

let pos = [0,0];
let cont = 0;

for(let i = 0; i<url.length; i++ ){
    console.log(url.substring(i,i+2));
    if(url.substring(i,i+2) == "d/" || url.substring(i,i+2) == "/v"){
        pos[cont] = i;
        cont++;
    }
}

console.log(pos);
doc.src=`https://drive.google.com/uc?export=view&id=${url.substring(Number(pos[0]+2,pos[1]))}`;