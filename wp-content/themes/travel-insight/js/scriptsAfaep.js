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
    var url = "http://www.pelambres.es/afeap84/";
    if(location.href==url){

            $("#divevento").css("display","none");  

            //arreglo margen y alto en la vista principal
            $(".wrapper.page-section.no-padding-bottom").css("margin-top","-15%");

			//margen al texto de bienvenida
      		$(".entry-content").removeAttr("style");
      		$(".entry-content").attr("style","color:silver;text-align:center;padding-top:76px;");
       	    $(".entry-content svg").attr("id","ocultarIcono");
      		$(".entry-content svg").removeAttr("class");
            $(".entry-content").html("<h6 style='padding-top:5px;color:#8f8c9d;'>ASOCIACIÓN DE FAMILIARES Y ENFERMOS PSíQUICOS</h6>");
        

      		/*if(ancho<=1024 && ancho>=768){
              $("#primary").removeAttr("style");
              $("#primary").attr("style","margin-bottom: -87px;");
            }*/
      
    }
  	else{
            
                //margen de las vistas que no son la web principal
                $("#colophon .widget").removeAttr("style");
                $("#colophon .widget").attr("style","margin-top:0%;padding-bottom:0%;");
            
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
      
      
    }


});
