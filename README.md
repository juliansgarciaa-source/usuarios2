Café Roasters — Sistema de Gestión de Usuarios

Proyecto desarrollado para la empresa ficticia **Café Roasters**, enfocado en la creación de una aplicación completa de gestión de usuarios.  
Incluye **base de datos MySQL**, **backend con Node.js + Express**, **frontend con React**, y un diseño visual acorde a la identidad corporativa de la marca.

---

Descripción General

El desarrollo se basó en la guía proporcionada y se implementaron todos los pasos solicitados:  
desde la creación de la base de datos, el backend, el frontend, hasta el diseño visual y el trabajo colaborativo en GitHub.

---

## 1. Base de Datos — MySQL

Se creó la base de datos **`usuarios_app`** con su tabla **`usuarios`**, incluyendo los siguientes campos:
- `id`
- `nombre`
- `email`
- `teléfono`
- `fecha_registro`

### Acciones realizadas:
- Creación de la base de datos  
- Creación de la tabla `usuarios`  
- Inserción de registros iniciales  
- Verificación con `SELECT * FROM usuarios;`

---

##  2. Backend — Node.js + Express

El backend se configuró en la carpeta **`backend/`**, estableciendo conexión directa con la base de datos MySQL.

 **Rol principal:** procesar, consultar y enviar datos al frontend.

### Configuración realizada:
- Inicialización del proyecto con `npm init -y`
- Instalación de dependencias: `express`, `mysql2`, `cors`, `dotenv`, `nodemon`
- Configuración de scripts (`start` y `dev`)
- Creación del archivo `database.js` para conectar a MySQL
- Creación de rutas en `usuarios.js` para obtener los datos
- Configuración del servidor principal en `server.js` con CORS habilitado
- Pruebas del backend con `npm run dev`

 **Ruta principal expuesta:**  
`GET /api/usuarios`

---

##  3. Frontend — React

El frontend se desarrolló en la carpeta **`frontend/`**, implementando una interfaz sencilla e intuitiva.

### Acciones realizadas:
- Creación del proyecto con `create-react-app`
- Instalación de **Axios** para realizar peticiones HTTP al backend
- Creación del componente `UserList` para mostrar usuarios en una tabla
- Actualización de `App.js` para integrar los componentes
- Ejecución del frontend con `npm start`

 **Resultado:**  
El sistema muestra en pantalla los datos de los usuarios (ID, nombre, email) obtenidos desde el backend.

---

## 4. CRUD y Login

El proyecto incluye la estructura necesaria para realizar operaciones CRUD y validación de login.

### Funcionalidades:
- Crear usuarios  
- Leer/Listar usuarios  
- Actualizar información  
- Eliminar usuarios  
- Pantalla de **Login** para validar credenciales y permitir acceso al sistema

**Conexión:**  
`React (Login)` → `Backend (validación)` → `MySQL`

---

## 5. Diseño Personalizado

Se aplicó un diseño visual basado en la identidad corporativa de **Café Roasters**, incorporando:
- Logo e identidad de marca  
- Colores corporativos  
- Estilos personalizados y coherentes en toda la aplicación  
- Uso de **Bootstrap** y CSS personalizado para la maquetación

---

## 6. Trabajo Colaborativo (Git y GitHub)

Durante el desarrollo se aplicaron buenas prácticas de trabajo en equipo con Git y GitHub:

- Uso de ramas (`main`, `develop`, `feature/...`)  
- Commits individuales y descriptivos  
- Pull Requests revisados por el equipo  
- Historial de versiones visible y organizado  

---

## Cómo ejecutar el proyecto

### 1 Iniciar el Backend
Ctr+R
cd ruta/de/backend
npm run dev

### 1 Iniciar el Backend
Ctr+R
cd ruta/de/backend
npm start

---
### Tecnologias Utilizadas

+React (Frontend)
+Node.js + Express (Backend)
+MySQL (Base de datos)
+Axios (Peticiones HTTP)
+Nodemon (Ejecución en desarrollo)
+Bootstrap / CSS personalizado
--
### Autores
Julian Garcia — Desarrollador Backend y Base de Datos
Lorena Vaca — Desarrolladora Frontend y Documentación


