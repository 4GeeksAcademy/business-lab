# Contexto técnico — decisión sobre el frontend

## Decisión confirmada

React + TypeScript + Vite es la decisión técnica confirmada para las dos aplicaciones principales que la plantilla recomienda dentro de `uis/`:

- `uis/website`: sitio web público de Nexova;
- `uis/backoffice`: aplicación interna de administración y operaciones.

Se mantiene una separación clara entre sus diseños:

- `website` para la comunicación corporativa y la presencia externa;
- `backoffice` para la gestión interna, las operaciones y los paneles de administración.

Estas dos interfaces son obligatorias para este hito, aunque su implementación sigue pendiente.

## Motivo de la elección

Esta decisión responde a varias necesidades del proyecto:

- reutilizar componentes y patrones dentro del monorepo;
- mantener una estructura clara para varias interfaces durante el curso;
- ampliar el conjunto de aplicaciones y dashboards sin duplicar la lógica de interfaz;
- seguir la recomendación de la plantilla de separar las interfaces públicas de las internas.

Es un enfoque actual que permite el crecimiento gradual del proyecto y facilita su conexión futura con APIs y servicios de datos.

## Estado actual

React + TypeScript + Vite es una decisión confirmada, pero su implementación sigue pendiente.

Por ahora:

- no se ha creado un proyecto React en `uis/website`;
- no se ha creado un proyecto React en `uis/backoffice`;
- todavía no se ha configurado Vite;
- aún no se han implementado los componentes ni los diseños definitivos.

## Decisiones necesarias para las interfaces iniciales

Estas decisiones hacen falta para el trabajo inicial de las interfaces y forman parte de este hito:

- estructura de los proyectos `website` y `backoffice`;
- organización de componentes y separación de diseños;
- contenido básico sobre Nexova y navegación de cada interfaz;
- convenciones de cada aplicación para estilos, estado y patrones básicos de experiencia de usuario.

## Decisiones aplazadas a hitos posteriores

Estas decisiones técnicas siguen pendientes y no hace falta resolverlas antes de entregar las interfaces iniciales:

- elección concreta de la tecnología del backend y de la base de datos;
- puntos de conexión entre las interfaces y el futuro backend o la capa de datos;
- elección del modelo o proveedor de IA;
- estructura interna de los servicios y agentes;
- herramientas de infraestructura y despliegue;
- decisiones sobre autenticación, estado global y diseño de componentes compartidos;
- formas de comunicación entre el frontend, el backend y los agentes.

## Criterio de idioma y nombres

- La documentación del proyecto, las reglas y las skills se escriben en castellano.
- Los identificadores del código se escriben en inglés.
- Las explicaciones al usuario se dan en castellano.
- Se mantienen los nombres de archivo exigidos por la escuela.

## Recomendación de la plantilla para el backend

La plantilla del repositorio orienta el proyecto hacia un backend centralizado con FastAPI. Esta es la dirección arquitectónica recomendada para el monorepo. Su implementación y la elección de la base de datos siguen pendientes.

El backend es una capa prevista para un trabajo posterior. Este hito no exige implementar las conexiones de las interfaces con el backend.
