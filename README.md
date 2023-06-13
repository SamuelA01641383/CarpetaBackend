# MiniReto2Repo
 
# ¿Qué es este proyecto? 

Este proyecto permite que el usuario realice una lista de videojuegos, incluyendo una imagen, nombre, descripción, plataforma y fecha de lanzamiento de cada juego.

Puede ser utilizada para llevar un registro de cosas que hayas jugado o para listar tus juegos favoritos. 

El proyecto permite visualizar la lista, borrar, actualizar y añadir juegos.

# ¿Cómo iniciar la página?

Para iniciar el proyecto es necesario asegurarse que se tiene la base de datos “videojuegos” con la tabla “juegos” y un usuario y contraeña proporcionados por heroku.

Para el funcionamiento correcto es necesario instalar Node.js e instalar las siguientes herramientas:

express mysql nodemon 
react-router-dom 
axios
cors  

Heroku lo hace al leer las dependencas de los archivos package.json, por lo que para acceder a la pagina basta con acceder a este link:

DEPLOYMENT:

https://mini-reto-2.herokuapp.com/

Puedes ver el codigo aqui,

REPOSITORIO:

https://github.com/SamuelA01641383/CarpetaBackend

ADVERTENCIA: El repositorio en el archivo PDF en canvas no se encuentra actualizado, este contiene los cambios realizados para hacer deployment.

# ¿Cómo se usa? 

La página principal muestra la lista de juegos y sus características, cada juego además de eso está acompañado por el botón de actualizar y eliminar, si se presiona eliminar se borrará por completo ese juego y se recargara la pagina, si se presiona actualizar se mostrará una nueva pagina donde podras ingresar los nuevos datos para el juego, (para las imágenes es importante ingresar el link de la imagen) tras presionar actualizar en la nueva página volverás a la página principal donde el registro ya ha sido actualizado.

En la parte inferior en la página principal está el botón para añadir un nuevo juego, este botón te lleva a una nueva página donde debes ingresar los datos para el nuevo juego, al terminar presiona añadir y  volverás a la página principal, podrás encontrar el juegorecientemente añadido ahí.

