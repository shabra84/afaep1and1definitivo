<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Eventos del calendario</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <style>
            
            .ancho {
                width:500px;
            }
            
        </style>
    </head>
    <body>
        <fieldset style="width:35%;margin:0 auto;display:table;" name="Eventos">
            <legend>Eventos</legend>
            <form style="margin:0 auto;display:table;" action="eventos.php" method="post">
            <div>
                <label for="nombre">Nombre del evento:</label></br></br>
                <input type="text" name="nombre" class="ancho" required/>
            </div></br>
            <div>
                <label for="fechaini">Fecha inicial:</label></br></br>
                <input type="date" name="inicial" class="ancho" required/>
            </div></br>
            <div>
                <label for="fechafin">Fecha final:</label></br></br>
                <input type="date" name="final" class="ancho" required/>
            </div></br>
            <div>
                <label for="fechafin">Descripción:</label></br></br>
                <textarea name="descripcion" class="ancho" required></textarea>
            </div>
            <input type="submit" style="" value="Enviar"/>
        </form>
        </fieldset>   
        
        
        <?php 
            //agregamos la libreria con funciones para la conexión a la base de datos
            require("librerias/funciones.php");
        
            //si estamos en local cargamos la conexión del xamp, e.o.c 1and1.
            if($_SERVER['HTTP_HOST']=="127.0.0.1"){
                
                //definimos el nombre de la base de datos
                define("nombrebasealeternativa", "afaepeventos");
                
                //agregamos conexión a la base de datos
                require("librerias/conexion_local.php");
            }
            else{
                require("librerias/conexion.php");
            }
            
        
            if (isset($_POST["nombre"]) && $_SERVER['REQUEST_METHOD'] === 'POST') {
                 
                $nombre = $_POST["nombre"];
                $inicial = $_POST["inicial"];
                $final = $_POST["final"];
                $descripcion = $_POST["descripcion"];
                
                define("sql" , "INSERT INTO eventos(nombre,"
                        . "fecha_ini,fecha_fin,descripcion)"
                . " VALUES ('$nombre','$inicial','$final','$descripcion')");
              
                //conexión a la base de datos
                $conexion = conexionMysql(servidor_ip,usuario,password,nombrebasealeternativa);
                
                //insertamos un evento a la base de datos
                $exito = insertar($conexion,sql);

                if(!$exito)
                    echo "<h1 style='color:green;font-family:verdana;margin:0 auto;"
                . "display:table;'>¡Se ha insertado con exito!</h1>";
                else
                   echo "<h1 style='color:red;font-family:verdana;margin:0 auto;"
                . "display:table;'>¡Error, no se ha podido insertar!</h1>"; 
            }
        
        ?>
    </body>
</html>
