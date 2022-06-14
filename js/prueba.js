let verdura=0;
let fruta=0;

let nombre = prompt("Nombre?");
alert("Hola "+nombre+"! Tanto tiempo :)");
let nroPedidos = parseInt ( prompt("Cuantos pedidos van a ser hoy?") );

function cuenta(nroPedidos){

    for(let i=0; i<nroPedidos; i++){

        let opcion =  prompt("Elige: (V)erdura o (F)ruta");    
        
        if ( opcion.toUpperCase() == 'V'){
            verdura++;
            }

        else{
            if(opcion.toUpperCase() == 'F'){
                fruta++;
                }
            else{
                alert("Respuesta incorrecta, vuelve a elegir u.u");
                i--;
            }    
            }
    } 
    
}

cuenta(nroPedidos);

alert("Bien, "+nombre+": en total fueron "+nroPedidos+" pedidos, de los cuales "+verdura+" fueron de verduras y "+fruta+" de frutas")

alert("Hasta la proxima, "+nombre+"!");