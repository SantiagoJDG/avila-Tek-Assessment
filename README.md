#   Avila Tek Assessment 

API RESTful construido con Node.js. Para el assessment de Avila Tek

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Instalación

1. Clona el repositorio:

2. Instala las dependencias utilizando preferiblemente `pnpm` sino `npm`:

    pnpm install

## Docker

El proyecto está configurado para ser ejecutado dentro de un contenedor Docker.

1. Levanta los contenedores de Docker utilizando `docker-compose`:

    ```bash
    docker-compose up
    ```

    Esto iniciará el contenedor con la API.

## Levantar la API

Una vez que las dependencias estén instaladas y los contenedores de Docker estén en funcionamiento, puedes levantar la API ejecutando el siguiente comando:

```bash
npm run dev
```
Después de que tengas Docker y la API corriendo, dirígete a Postman o a tu API client de confianza y crea un usuario desde:

```
http://localhost:3000/api/users 
(POST)
``` 

Luego loggeate con el usuario y utiliza el token para autenticar los endpoints de modificación

## Documentación de la API

https://documenter.getpostman.com/view/14015417/2sB2cUCPGq#45020aed-eba7-47b6-ab24-98588d34a99a

## Opciones de diseño y explicaciones:

### 1. Uso de Sequelize y Base de Datos Relacional

ORM (Object Relational Mapping) para Node.js que facilita la interacción con la base de datos relacional, abstrae sentencias SQL y mejora la escalabilidad de la misma.

### 2. Estructura de Relaciones de Tablas

	•	Relación 1:N
	•	Relación 1:N 
	•	Tabla pivote (OrderDetails): N:M 

### 3. Clean Architecture 
```
	1.	Capa de Infraestructura:
	•	index.js, config.js, db/, middleware/, utils/strategies for auth/.
	2.	Capa de Presentación (Interfaz de Usuario):
	•	routes/index.js (se expone la API).
	3. Capa de Contollers.
  	•	routes.module Ejecute el intermedio entre los routes y el Service.
	4.	Capa de Aplicación (Lógica de Negocio):
	•	services/ (donde se implementa la lógica de negocio).
	5.	Capa de Dominio (Modelo de Negocio):
	•	(Modelos de Sequelize), que interactúan con los servicios de la capa de aplicación.
```
### 3. Librerías 
```
  • "@hapi/boom" -> Manejo de errores HTTP
  • "bcrypt" -> Hash de contraseñas
  • "dotenv" -> Manejo variables de entorno
  • "express" -> Servidor 
  • "joi" -> Validar datos y DTOs
  • "jsonwebtoken" -> Generación y verificación de tokens JWT para autenticación
  • "nodemon" -> Hot reload
  • "passport" -> Autenticación de Usuario 
  • "passport-jwt" -> Strategia JWT
  • "passport-local" -> Strategia Local
  • "sequelize" -> ORM
```
