# app-notes-jl
Ejercicio de una app-web con NodeJS y MongoDB 

*****
express
este modulo es un framework de node que nos va ayudar a crear un servidor.

connect-flash
este modulo nos va servir para poder enviar algunos mensajes entre las vistas, porq cuando creamos un servidor las páginas no se comunican entre sí, entonces necesitamos conectar las páinas.

bcryptjs
es un modulo de cifrado y q nos va ayudar a ejecutar algunos algoritmos y estos algoritmos se encargan de decifrar algún texto, es decir, ayuda a encriptar y desencriptar cadenas de texto como pueden ser contraseñas.

express-handlebars
nos ayuda a crear alunas vistas, pueden ser archivos hbs (similar a como se utilizaría php con html) q vamos a enviar. 

express-session
nos va ayudar a guardar algunos datos desde la memoria del servidor, esto nos sirve cuando un usuario hace login.

method-override
nos va a servir para poder enviar peticiones PUT, DELETE desde la vista. 

mongoose
este modulo me va ayudar a poder manejar la BDD MongoDB.

passport
es un modulo q nos va a permitir poder autenticar al usuario, poder darle al usuario un login y cuando envíe vamos a utilizar un metodo q se encargue de verificar ese usuario y contraseña.

passport-local
para decirle q voy a utilizar bdd local


-- MODULOS PARA DESARROLLO --
dotenv
nos ayuda a poder utilizar variables de entorno a nuestros proramas y podemos arearlo a -gitignore para q si alguien ve mi repositorio no pueda ver el valor de mis variables.

nodemon
nos va ayudar a reiniciar el servidor automáticamente cada vez q hacemos un cambio.

npm-check-updates 
nos va ayudar a supervisar si hay nuevos modulos o si hay nuevas actualizaciones

-D
indica q las anteriores son dependencias úniamente de desarrollo.



GIT
(--allow-unrelated-histories)

*****
