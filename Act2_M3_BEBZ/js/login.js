/*Login ejercicio 5*/

//
const admin = "Bruno", secret = "bebz2810";

let user = prompt("Ingrese el usuario"), password = prompt("Ingrese la contraseña");

if(user == admin && password == secret){
    console.log("Bienvenido, sus credenciales son correctas");
}else{
    alert("Lo sentimos, clave o contraseña incorrecta");
}