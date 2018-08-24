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
            include("librerias/funciones.php");
        
            //datos de conexion a la base de datos
            define("servidor_ip" , "db750156060.db.1and1.com");
            define("usuario", "dbo750156060");
            define("password" , "@Fer607372785");
            define("nombrebase", "db750156060");
        
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                 
                $nombre = $_POST["nombre"];
                $inicial = $_POST["inicial"];
                $final = $_POST["final"];
                $descripcion = $_POST["descripcion"];
                
                define("sql" , "INSERT INTO eventos(eventos_id,nombre, "
                        . "fecha_ini,fecha_fin,descripcion)"
                . " VALUES ('$nombre','$inicial','$final','$descripcion')");
                echo sql;
                var_dump($_POST);
                //conexión a la base de datos
                $conexion = conexionMysql(servidor_ip,usuario,password,nombrebase);
                
                //insertamos un evento a la base de datos
                insertar($conexion,sql);
                
                
    
            }
        
        ?>
    </body>
</html>
