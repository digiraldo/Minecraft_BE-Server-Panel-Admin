# Minecraft_BE-Server-Panel-Admin EN DESARROLLO
Instalación de Servidor dedicado Minecraft Bedrock Edition Server con Panel de Administración Web
# Minecraft Bedrock Edition Server con Panel de Administración Web v2.5

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## El Panel de Administración esta en Desarrollo.

## Instalar Servidor Dedicado de Minecraft Bedrock Edition

Antes de iniciar hay que aclarar que el Servidor dedicado de Minecraft Bedrock Edition, es una versión compatible para jugar desde PC con Minecraft para Windows 10, en consolas las ediciones de PlayStation, XBOX y Nintendo Switch y para dispositivos móviles con sistema operativo iPhone y/o Android (anteriormente Minecraft Pocket Edition). Si deseas saber más sobre la versión puede consultarla aquí:  [Minecraft Bedrock Wiki](https://translate.google.com/translate?sl=auto&tl=es&u=https://minecraft.gamepedia.com/Bedrock_Edition)

## Características del Servidor Dedicado:
* Configura el servidor Minecraft Bedrock Edition completamente operativo en un par de minutos
* Soporta distribuciones Ubuntu / Debian
* Configura Minecraft como un servicio del sistema con la opción de iniciarse automáticamente al arrancar
* Copias de seguridad automáticas cuando se reinicia el servidor
* Se actualiza automáticamente a la última versión cuando se inicia el servidor
* Reinicio diario programado opcional del servidor usando cron
* Fácil control del servidor con los scripts `start.sh`, `stop.sh` y `restart.sh`
* Configurar **server.properties** del servidor minecraft desde la web
* Realizar copia de Seguridad del mundo en la nube (Google Drive, Microsoft OneDrive) con el script `cloud.sh`
* Restaurar o recuperar copia de un mundo desde la web
* Instalacion del Panel de Administración Web.

## Requisitos Mínimos:
* Una computadora con un procesador x86_64 bit.
* 2 GB de RAM o más
* Ubuntu Server 18.04.2 o superior.

## Funciones habilitadas del Panel de Administración Web:
* Gestión y/o permisos de Usuarios inscritos: `Administrador`, `Editor` y `Usuario`.
* Administración y/o `permisos de usuarios` agregar, editar y eliminar con el Gamertag.
* Funcion de botones `Detener`, `Iniciar` y `Reiniciar` del Servidor en el Panel o Tablero de administración.
* Dar a los jugadores Items en su  inventario desde `allowlist`.
* Agregar Editar y Eliminar Items o inventarios para dar a los jugadores en `Propiedades`.
* Administración de los Parámetros del Servidor en `Propiedades`.
* Administración de las reglas del Juego en `Propiedades`.
* Administración de alertas para dar información en `Propiedades`.


## Instalación:

Se recomienda usar Ubuntu Server para ejecutar el servidor dedicado de Minecraft. Está disponible aquí:
[Ubuntu Server](https://ubuntu.com/download/server)   ó  [Ubuntu Server 18.04](http://cdimage.ubuntu.com/releases/18.04/release/)

Una vez tenga su Computador o Servidor Virtual VPS, Inicie sesión en su servidor Linux usando SSH con un mouse y/o teclado copie y pegue uno de los siguientes comandos:

### INSTALACION DE MINECRAFT BEDROCK EDITION SERVER SIN PANEL DE ADMINISTRACIÓN
Por: [James A. Chambers](https://jamesachambers.com/minecraft-bedrock-edition-ubuntu-dedicated-server-guide/), en su idioma original inglés.
```
curl https://raw.githubusercontent.com/TheRemote/MinecraftBedrockServer/master/SetupMinecraft.sh | bash
```

### INSTALACION DE MINECRAFT BEDROCK EDITION SERVER CON PANEL DE ADMINISTRACIÓN (Beta)
Instala el repositorio de [James A. Chambers](https://github.com/TheRemote/MinecraftBedrockServer) y se añade código web para su administración online.

```
En desarrollo
```


Ver Instalación completa en: [Instalar Panel Web](https://gorobeta.blogspot.com/2021/04/instalar-minecraft-bedrock-edition-panel-admin.html)

Ver Demo OnLine (Solo el panel de Administración Web) en [Probar Panel Web](https://digiraldo.github.io/Minecraft_BE-Server-Panel-Admin/)

[![Static Badge](https://img.shields.io/badge/Ver-Demo-blue)](https://digiraldo.github.io/Minecraft_BE-Server-Panel-Admin/)

#
#
#
#
#
#
#
#
==============================

*Aviso de Derechos `(copyright notice)`:*  
Los archivos y/o documentación de instalacion del servidor minecraft **SetupMinecraft** asociados fueron realizados por:  
Derechos de autor (c) 2019 James A. Chambers  
Este tutorial fue realizado para ayudar a la comunidad en Español ya que hay poca información de instalación y configuración en este idioma. Para más información y soporte, el repositorio de solo instalacion del servidor Minecraft sin panel web en su idioma original inglés: https://github.com/TheRemote/MinecraftBedrockServer