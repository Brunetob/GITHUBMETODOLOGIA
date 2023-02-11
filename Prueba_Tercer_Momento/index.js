let doc = document.getElementById("perfil")/**Carga al documento toda la informaciòn de la etiqueta img01 */
let url = prompt ('Ingrese el perfil de Facebook');

let pos = [0,0], cont = 0;

for(let i = 0; i<url.length; i++ ){     
    if(url.substring(i,i+2) == "do"){
        pos[cont] = i;
        cont++;
        cont = cont +1;
    }
}
console.log(url.substring(Number(pos[0]+2)));