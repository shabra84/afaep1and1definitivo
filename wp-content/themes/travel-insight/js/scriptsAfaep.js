//hecho por fernando mangas
function evento(x) {
  	x.firstChild.style.display = "block";
}

function eventoFuera(x) {
  	x.firstChild.style.display = "none";
}


jQuery(document).ready(function($){



var controlMenu = true;
var otroControlMenu = true;
var ancho = $(window).width();

        
        //pongo color blanco a la letra donde hay eventos
  /*      for(var i=1;i<=31;i++){
            if($(i).length ){
                $('td').removeAttr("style");
                $('td').attr("style","color:#fff;");
            }
        }
*/

        $("#menu-item-150").click(function(){
        if(controlMenu)
              $("#menu-item-150 .sub-menu").css("display","block");
        else
              $("#menu-item-150 .sub-menu").css("display","none");

        controlMenu = !controlMenu;

        });

        $("#menu-item-192").click(function(){
        if(otroControlMenu)
              $("#menu-item-192 .sub-menu").css("display","block");
        else
              $("#menu-item-192 .sub-menu").css("display","none");

        otroControlMenu = !otroControlMenu;

        });

	$("#menu-item-150 > a").removeAttr("href");
        $("#menu-item-192 > a").removeAttr("href");


        //$("#calendar-9").css("display","none");
        
        //alto para las vistas que no son el home
        $("#breadcrumb-list").css("height","379px");
        $("#calendar-10").removeAttr("style");
        

/*ESTO HAY QUE CAMBIARLO CUANDO SE CUELGUE EN EL SERVIDOR!!!*/
    var url = "http://localhost/afeap84/";
    var otraurl = "http://www.pelambres.es/afeap84/";
    var urlfinal = "http://www.afaep.es";
    //detectamos si es la página home de la web
    if(location.href==url || location.href==otraurl || location.href==urlfinal){
            
           //página principal
            
           /* $("#divevento").css("display","none");  

            //margen al texto de bienvenida
            $(".entry-content").removeAttr("style");
            $(".entry-content").attr("style","color:silver;text-align:center;padding-top:19%;");
       	    $(".entry-content svg").attr("id","ocultarIcono");
            $(".entry-content svg").removeAttr("class");
            $(".entry-content").html("<h6 style='padding-top:5px;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>");
        

            if(ancho<=720){
                //margen al texto de bienvenida
                $(".entry-content").removeAttr("style");
                $(".entry-content").attr("style","color:silver;text-align:center;padding-top:8%;");
                $(".entry-content svg").attr("id","ocultarIcono");
                $(".entry-content svg").removeAttr("class");
                $(".entry-content").html("<h6 style='padding-top:0%;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>");
            }
            if(ancho>720 && ancho<=1024){
                $("#content").removeAttr("id"); 
                $(".entry-content").html("<h6 style='margin-bottom:0%;padding-top:0%;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>"); 
            }
            else if(ancho>=1080 && ancho<1290){
       		//margen al texto de bienvenida
      		$(".entry-content").removeAttr("style");
      		$(".entry-content").attr("style","color:silver;text-align:center;padding-top:4%;");
                $(".entry-content svg").attr("id","ocultarIcono");
      		$(".entry-content svg").removeAttr("class");
                $(".entry-content").html("<h6 style='padding-top:0%;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>");                   
            }
            else if(ancho>=1290){
              //margen al texto de bienvenida
      		$(".entry-content").removeAttr("style");
      		$(".entry-content").attr("style","color:silver;text-align:center;padding-top:8%;");
                $(".entry-content svg").attr("id","ocultarIcono");
      		$(".entry-content svg").removeAttr("class");
                $(".entry-content").html("<h6 style='padding-top:0%;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>");
                           
            }
     */
        }
  	else{
            
                //margen de las vistas que no son la web principal
                $("#colophon .widget").removeAttr("style");
                $("#colophon .widget").attr("style","padding-top:0%;padding-bottom:0%;");
            
      		//margen superior a las vistas que no sean la principal
		$("#content").removeAttr("style");
      		$("#content").attr("style","margin-top:0px;");
	
                //elimino la fotito de la entrada
                $("#media_image-2").empty();
      	
                //elimino el calendario
          	$("#calendar-10").empty();     

      	//varia el margen dependiendo de la resolución
        if(ancho<768){
          	//otorga cierto margen a la página principal
          	$("#content").removeAttr("class");
          	$("#content").attr("class","margenResponsive site-footer page-section no-padding-bottom");
         }
        else if(ancho<=1024 && ancho>=768){
          $("#primary").removeAttr("style");
          $("#primary").attr("style","margin-top: -175px;margin-bottom: -87px;");
        }
      	else if(ancho>=1290){
          $(".page-section").attr("style","padding-top:5%;margin-bottom:0%;");
        }
   
      
      
    }


});
/*bug fix*/