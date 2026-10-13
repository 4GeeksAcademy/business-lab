# Contexto técnico — decisión sobre el frontend

## Decisión confirmada

React + TypeScript + Vite es la decisión técnica confirmada para las dos aplicaciones principales que la plantilla recomienda dentro de `uis/`:

- `uis/website`: sitio web público de Nexova;
- `uis/backoffice`: aplicación interna de administración y operaciones.

Se mantiene una separación clara entre sus diseños:

- `website` para la comunicación corporativa y la presencia externa;
- `backoffice` para la gestión interna, las operaciones y los paneles de administración.

Estas dos interfaces son obligatorias para este hito. La base técnica y una pantalla mínima con el nombre de cada aplicación están implementadas; el contenido y las funciones de producto siguen pendientes.

## Gestor de dependencias y estilos

pnpm `12.11.2` está instalado en `$HOME/.local/share/pnpm/bin/pnpm` y fijado en `package.json` como gestor de dependencias de JavaScript y TypeScript del monorepo. Se eligió para gestionar las aplicaciones y paquetes del proyecto de forma consistente durante el curso y aprovechar el almacenamiento compartido de dependencias. Se utiliza con su ruta completa, sin modificar archivos de inicio del shell.

`pnpm-workspace.yaml` incluye `uis/*` y `packages/*`; el workspace reconoce website, backoffice y `@repo/shared-types`. El lockfile raíz es `pnpm-lock.yaml`. La metadata de `@repo/shared-types` en `packages/shared/package.json` se conserva sin cambios. pnpm no gestiona las dependencias de Python.

Node.js `22.15.0` está disponible en el entorno. El rango declarado en el `package.json` raíz, `^20.19.0 || >=22.12.0`, cumple los requisitos vigentes de Vite.

React `19.3.0`, TypeScript `6.0.3` y Vite `8.3.4` están instalados en `uis/website` y `uis/backoffice`. Tailwind CSS `4.3.3` y `@tailwindcss/vite` `4.3.3` están instalados en ambas aplicaciones. Cada `vite.config.ts` registra el plugin oficial y cada `src/index.css` importa Tailwind con `@import "tailwindcss";`.

## Decisiones confirmadas para el website

- El website tendrá una sola página con navegación entre secciones.
- La página tendrá un enfoque híbrido: las necesidades de las empresas visitantes guiarán el contenido, con una presentación suficiente de Nexova basada en `CONTEXT.md`.
- Se presentarán las tres líneas de servicio del briefing: headhunting para perfiles de mandos medios y directivos, outsourcing de equipos de soporte al cliente y formación corporativa en habilidades blandas y liderazgo.
- No se publicarán los problemas internos de Nexova ni se inventarán datos, promesas o contactos.
- La identidad será profesional, humana y actual, y acompañará la modernización de Nexova sin presentar capacidades pendientes como disponibles.
- El estilo será sobrio, con fondo claro y buena legibilidad. La paleta de colores sigue pendiente de elección.
- Se usará el nombre escrito `Nexova Solutions`. No se creará un logo en esta tarea.

## Motivo de la elección

Esta decisión responde a varias necesidades del proyecto:

- reutilizar componentes y patrones dentro del monorepo;
- mantener una estructura clara para varias interfaces durante el curso;
- ampliar el conjunto de aplicaciones y dashboards sin duplicar la lógica de interfaz;
- seguir la recomendación de la plantilla de separar las interfaces públicas de las internas.

Es un enfoque actual que permite el crecimiento gradual del proyecto y facilita su conexión futura con APIs y servicios de datos.

## Estado actual

React + TypeScript + Vite está implementado como base técnica en ambas aplicaciones.

Estado actual:

- `uis/website` y `uis/backoffice` contienen una aplicación React + TypeScript + Vite con una pantalla mínima que muestra el nombre de Nexova Solutions y el nombre de la aplicación;
- las dos aplicaciones compilan y sus servidores de desarrollo responden;
- el sitio de una página con secciones, las funciones del backoffice y los diseños definitivos siguen pendientes.

## Decisiones necesarias para las interfaces iniciales

Estas decisiones hacen falta para el trabajo inicial de las interfaces y forman parte de este hito:

- organización de los componentes y contenido completo de cada aplicación;
- elección de la paleta de colores definitiva del website;
- diseño y funcionalidades restantes del backoffice.

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
