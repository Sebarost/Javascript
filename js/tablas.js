let nombre = prompt("Nombre?");
alert("Hola "+nombre+"! Tanto tiempo :)");
let nro= parseInt ( prompt("Ingresa la tabla de multiplicar que será impresa o si ingresas 0(cero) se imprimiran del 1 al 10 (SOLO NUMEROS♥): ") );
alert("Se imprimen por consola ->")

if(nro==0){
    let i=1;
    for(i ; i<=10; i++){
        console.log("Tabla del "+i);
        for(let j=0; j<=10; j++){
            console.log(i+"*"+j+"="+i*j);    
        }
    }
    }
else{
        console.log("Tabla del "+nro);
        for(i=0 ; i<=10; i++)
            console.log(nro+"*"+i+"="+nro*i);
}    