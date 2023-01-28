/*
 *  Adicionalmente resolver un programa que emule el funcionamiento de un cajero automatico utilizando DO-WHILE en javascript (investigar).
 */

const admin = "Bruno", secret = "1234";

let user = prompt("Bienvenido, Ingrese su usuario"), password = prompt("Ingrese su contraseña");

if(user!=admin || password!=secret){
    do{
        user = prompt("Usuario incorrecto, vuelva a ingresarlo");
    }while(user!=admin);
    
    do{
        password = prompt("Contraseña incorrecta, ingrésela de nuevo");
    }while(password!=secret);
    alert("Credenciales validades, Bienvenido ", user);
}else{
    alert("Credenciales validades, Bienvenido ", user);
}