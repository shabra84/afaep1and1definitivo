/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

contrario = Array();

function incializarEventos(){

  for(i=0;i<31;i++){
  
    contrario[i]=true;
    
  }

}

function cerrarEvento(i){

    //contenedor de info del evento
    div = document.getElementById("evento"+i);
        
    div.style.display = "none";
  
    //le ponemos color al evento
    document.getElementById(i).style.background = "#42a12c";
  
  	//cambio el valor a contrario
  	contrario[i-1] = !contrario[i-1];
  
}

/**
 * 
 * @param {type} i
 * @returns {undefined}
 * 
 */
function mensajedeevento(i){
  
    try {
        
        //contenedor de info del evento
        div = document.getElementById("evento"+i);
        
        div.style.display = "none";
        //le ponemos color al evento
        document.getElementById(i).style.background = "#42a12c";

        if(contrario[i-1]){
          div.style.display = "block";
          //le ponemos color al evento
          document.getElementById(i).style.background = "red";

        }
       
    }
    catch(err) {

    }

     //cambiamos al contrario
     contrario[i-1] = !contrario[i-1];
}

$(document).ready(function(){
 
    //tope de dias
    dimension = 31;
    
  	//iniciamos eventos a false
    incializarEventos();
    
    for(i=1;i<=dimension;i++){
   
        //ocultamos todos los eventos
        $("#evento"+i).css("display","none");
        
        //le pongo un evento
        $("#"+i).attr("onclick", "mensajedeevento("+i+");");

      	$("#cerrar"+i).attr("onclick","cerrarEvento("+i+");");
    } 
});

