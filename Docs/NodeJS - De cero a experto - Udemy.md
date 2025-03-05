# <font color="red">Sección 1: Introducción</font>

## <font color="yellow">1. Introducción</font>

## <font color="yellow">2. ¿Cómo funcionará el curso?</font>

## <font color="yellow">3. ¿Cómo hacer preguntas?</font>

## <font color="yellow">4. Instalaciones recomendadas</font>

### Necesarias

- [NodeJs](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/downloads/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)
- [Table Plus](https://tableplus.com/)
- [Git](https://git-scm.com/)

```powershell
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

- [Node](https://nodejs.org/es/)
- [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)
- [Docker Desktop](https://www.docker.com/get-started)

Descargar imágenes de Docker - Opcional, pero llegaremos a necesitarlas después

```powershell
docker pull mongo:6.0.6
docker pull postgres:15.3
```

### Extensiones de VSCode

#### Instalaciones adicionales

- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
- [.env](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Better DockerFile Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-dockerfile-syntax)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Docker VsCode](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal&ssr=false#overview)

#### Tema y wallpaper que estoy usando:

- [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)
- [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Wallpapers Developer](https://drive.google.com/drive/folders/1ItU8rbSGJjnh2USOBGwaCo9nYKifPJ6m?usp=sharing)

### Comunidad de Discord

- [Discord](https://gist.github.com/Klerith/ab9f091aea5dca80d37c7c9f731c0193#comunidad-de-discord)

## <font color="yellow">5. Node Version Manager - NVM</font>

### Linux y Apple

[NVM](https://github.com/nvm-sh/nvm)

```bash
sudo apt update && sudo apt upgrade
sudo apt-get install curl
sudo apt install nodejs
node --version
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm --version
nvm ls
nvm install --lts
nvm install node
nvm ls
```

## <font color="yellow">6. Node Version Manager - Windows</font>

[NVM](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file)

- [Releases](https://github.com/coreybutler/nvm-windows/releases)

## <font color="yellow">7. ¡Únete a Nuestra Comunidad de DevTalles en Discord!</font>

# <font color="red">Sección 2: Fundamentos de Node - Primeros pasos</font>

## <font color="yellow">8. Introducción a la sección</font>

## <font color="yellow">9. Temas puntuales de la sección</font>

Enfoque en varias introducciones a Node:

1. Preguntas comunes sobre Node
2. Hola Mundo en Node
3. Laboratorio con FileSystem
4. Code Execution
5. Event Loop

## <font color="yellow">10. Preguntas comunes sobre NodeJS</font>

### ¿Qué es NodeJS?

NodeJS es básicamente un ambiente de ejecución para correr JavaScript desligado del navegador web (Runtime environment).

### ¿Qué lo hace especial?

**Motor**

- Código abierto con el motor de V8 de Google y está diseñado para realizar tareas E/S (entrada y salida) junto con el manejo de archivos de la computadora cliente / servidor.

**Características**

- Asincronía
- Módulos nativos y de terceros
- Gestión de paquetes con NPM
- Construcción de servidores
- Escalabilidad
- Multiplataforma

### Non-Blocking I/O

Casi ninguna función en Node bloquea la lectura, por lo que podemos tener cientos de peticiones sin bloquear el servidor (librería libuv).

**I/O** se refiere principalmente a la interacción con el disco duro del sistema.

**Blocking** es básicamente cuando la ejecución del código debe de esperar a que se complete el progreso pero este a su vez, impide que se sigan ejecutando otras instrucciones en paralelo.

[Overview of Blocking vs Non-Blocking](https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)

### Utilidades

Node cuenta con más de 2 millones de paquetes.

El 100% de las herramientas de frontend se basan en Node.

Node supera el billón de descargas en su imagen de docker.

NPM (Node Package Manager) es el gestor de paquetes con mayor crecimiento y paquetes desplegados.

Node es muy usado para crear herramientas y ejecutar paquetes sin tener que instalarlos con NPX (Node Package Execute).

## <font color="yellow">11. Hello World - En Node</font>

Node permite ejecutar el mismo código que ya era posible correr en la consola del navegador pero ahora directamente sobre la terminal del ordenador.

Para que esto sea posible simplemente es necesario escribir "node" y a partir de ese punto ya es posible ejecutar código javascript.

```powershell
PS C:\Users\UserName> node --version
v22.14.0
PS C:\Users\UserName> node
Welcome to Node.js v22.14.0.
Type ".help" for more information.
> const message = 'Hola Mundo';
undefined
> message
'Hola Mundo'
> console.log(message);
Hola Mundo
undefined
>
```

## <font color="yellow">12. Archivos de JavaScript</font>

```javascript
// app.js

const message = 'Hola Mundo';

console.log(message);
```

```cmd
PS C:\NodeJs - De cero a experto> node .\01-fundamentos\app.js
Hola Mundo
PS C:\NodeJs - De cero a experto> cd .\01-fundamentos\
PS C:\NodeJs - De cero a experto\01-fundamentos> node .\app.js
Hola Mundo
PS C:\NodeJs - De cero a experto\01-fundamentos> node app     
Hola Mundo
```

## <font color="yellow">13. Leer archivos - FileSystem</font>

```javascript
// app2.js

// Replace all ocurrences of 'React' with 'Angular' in the README.md file and save the result in a new file called README-Angular.md

const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const newData = data.replace(/React/g, 'Angular');

fs.writeFileSync('README-Angular.md', newData);
```

```cmd
PS C:\NodeJs - De cero a experto\01-fundamentos> node app2
```

## <font color="yellow">14. Tarea - Contador de palabras</font>

```javascript
// app3.js

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

// 1. Obtener el número de palabras en el archivo README.md

console.log('Palabras: ', content.split(' ').length); // considera cualquier texto entre espacios como una palabra

// 2. Obtener el número de ocurrencias de la palabra 'React' en el archivo README.md

console.log('Ocurrencias de la palabra "React": ', content.split(' ').filter(word => word.toLowerCase() === 'react').length); // case insensitive, no considera cuando react forma parte de otra palabra

console.log('Ocurrencias de la palabra "React": ', content.split(' ').filter(word => word.toLowerCase().includes('react')).length); // considera cuando react forma parte de otra palabra

console.log('Ocurrencias de la palabra "React": ', content.match(/React/gi).length); // case insensitive, realizado mediante expresión regular

console.log('Ocurrencias de la palabra "React": ', content.match(/React/gi ?? []).length); // protegido contra null
```

```cmd
PS C:\NodeJs - De cero a experto\01-fundamentos> node app3
```

## <font color="yellow">15. Orden de ejecución - Introducción</font>

```javascript
// app4.js

console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout'); // 5
}, 3000 );

setTimeout( () => {
    console.log('Segundo Timeout'); // 3
}, 0 );

setTimeout( () => {
    console.log('Tercer Timeout'); // 4
}, 0 );

console.log('Fin de programa'); // 2
```

## <font color="yellow">16. Node - Code Execution</font>

[The Node.js Event Loop](https://nodejs.org/es/learn/asynchronous-work/event-loop-timers-and-nexttick)
[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

### Event Loop y Code Execution

JavaScript de inicio es blocking y single threaded por lo que no debería poder ejecutar código de forma asíncrona o simultánea.

Quien decide en qué orden se ejecuta el código es el Event Loop.

#### 3 componentes principales de Node

- JS library
- C/C++ features (Librerías de JS que se conectan con C++ desde el código y características de C++)
- Dependencies (dependencias externas):
	- V8, libuv, zlib, crypto, etc.

#### Libuv

Su rol principal es manejar todas las operaciones asíncronas.

#### Proceso de ejecución

De entrada JS inspecciona y ejecuta el código secuencialmente de arriba a abajo.

Cada comando se va cargando sucesivamente en el **"Call Stack"**.

Si es una línea síncrona o bloqueante esta se ejecuta directamente esperando mientras el resto del programa.

Sin embargo si es asíncrona y devuelve una promesa esta se manda al **"Libuv"** dónde se ejecuta en segundo plano, y en paralelo a las otras que se encuentren aquí, hasta que se finalice, una vez finalizada libuv funciona como una cola, first in first out, a medida que estas terminan.

Una vez que salen de libuv vuelven al call stack donde no interrumpen la ejecución el resto del programa, que hasta entonces ha seguido normalmente, para devolver su resultado.

Finalmente el programa continua su ejecución en la secuencia normal.

## <font color="yellow">17. Node - Event Loop</font>

[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

### La prioridad en el Event Loop sigue ciertas reglas

1. Callbacks en el microtask.
2. Callbacks dentro del timer queue (callbacks timers).
3. Callbacks en el microtask queue (primero tareas en el nextTick queue y luego tareas en el promise queue).
4. Callbacks de I/O.
5. Callbacks en el microtask queue y luego callbacks en el promise queue.
6. Callbacks en el check queue.
7. Callbacks en el microtask (después de cada check queue), (primero tareas en el nextTick queue y luego tareas en el promise queue).
8. Callbacks en el close queue.
9. Callbacks en el microtask (primero tareas en el nextTick queue y luego tareas en el promise queue).

Los callbacks son ejecutados sólo cuando el callstack está vacío.

El flujo normal de ejecución no se interrumpe para ejecutar una función de devolución de llamada.

Los callbacks de setTimeouts y setIntervals tienen prioridad, pero no interrumpen el flujo normal.

Los callbacks de temporizador se ejecutan antes que las devoluciones de llamada de I/O, incluso si ambas están listas exactamente al mismo tiempo.

## <font color="yellow">18. Código fuente de la sección</font>

[GitHub - Fin sección 2 - Primeros pasos](https://github.com/Klerith/node-intro/tree/fin-seccion-2)