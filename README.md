# Frontend - Sistema de Gestión de Reservas de Eventos

Este es el frontend de la aplicación SPA construida con Vue 3 y TypeScript para la gestión de eventos y reservas.

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPO>
cd frontend
```

Instala las dependencias:

```bash
npm install
# o
yarn install
```

### Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y configura la API base:

```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

### Ejecutar el Proyecto en Desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`.

## 📜 Estructura del Proyecto

```
frontend/
│── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Vistas de la aplicación
│   ├── router/            # Configuración de Vue Router
│   ├── store/             # Manejo del estado con Pinia
│   ├── services/          # Módulos para consumir la API
│   ├── styles/            # Estilos globales con Tailwind
│   ├── main.ts            # Punto de entrada de la aplicación
│   ├── App.vue            # Componente raíz
│── public/                # Archivos estáticos
│── index.html             # Archivo base de la aplicación
```

## 🔗 Comunicación con el Backend

La aplicación se comunica con el backend mediante una API RESTful en Laravel. Se utilizan `fetch` o `axios` para realizar peticiones HTTP.

Ejemplo de llamada a la API para obtener eventos:

```ts
import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};
```

## 📌 Rutas Principales

- `/` - Listado de eventos con paginación y filtros.
- `/event/:id` - Detalle de un evento y reservas asociadas.
- `/event/new` - Crear un evento (requiere autenticación).
- `/event/:id/edit` - Editar un evento (requiere autenticación).
- `/reservation/:eventId` - Formulario para realizar una reserva.

## 📚 Decisiones de Diseño

- **Vue Router** para gestionar la navegación.
- **Pinia** para el manejo del estado.
- **Axios** para la comunicación con la API.
- **TypeScript** para tipado y mejor mantenimiento del código.
