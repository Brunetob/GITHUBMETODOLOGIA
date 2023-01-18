let nums = [12,3,14,3,1,5,6,7,2,34,87,56,90,98,100,332,1,2];

let itemsearch = prompt("Ingrese el número a buscar"), cont = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] == itemsearch){
        cont++;
    }
}

console.log("Existen ", cont, "número/s ", itemsearch);