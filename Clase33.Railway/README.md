COMANDOS UTILES:

- git clone <url-del-repo> - Nos clonamos un repositorio remoto a nuestra pc y generamos un repositotio local
- git fetch - Nos traemos las branch que esten en el repositorio remoto y no tengamos en el local
- git branch - Lista las branches que tenemos en nuestro repositorio local
- git checkout <nombre-de-branch-existente> - Nos movemos a la branch local que queramos
- git checkout -b <nombre-de-branch-nueva> - Creamos una branch nueva y nos movemos a ella
- git status - Ver el estado de nuestros archivos en git
- git add . - Añade todos los archivos modificados al staging area
- git add <ruta-al-archivo> - Añade el archivo modificado al staging area
- git commit -m '<mensaje>' - Creamos un commit con un mensaje
- git push origin <branch> - Mandamos nuestros cambios de nuestro repo local al repo remoto en la branch que especifiquemos
- git pull origin <branch> - Nos traemos el codigo nuevo que tenga el repositorio remoto en la branch que hallamos elegido a la branch local en la que estemos