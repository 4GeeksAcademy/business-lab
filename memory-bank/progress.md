# Progreso del proyecto

## Alcance de `feature/agent-memory-bank`

Esta rama se prepara para entregar exclusivamente el hito 2 de infraestructura de agentes. Incluye documentación de Nexova y del flujo de trabajo, los tres archivos mínimos del memory bank, una regla con alcance explícito y una skill verificable. Conserva los README de la plantilla y los README específicos de website/backoffice; no conserva los esqueletos de aplicaciones ni la configuración adelantada de workspace.

`CONTEXT.md`, `CONTEXT.es.md` y `company-choice.md` no se modifican. El briefing completo en `CONTEXT.md` es la referencia. Se registra sin resolver la contradicción entre Megan Clarke y Marcos Ibáñez como responsables de Ventas.

## Actividad de sitio web público

En `feature/public-website` se guardó la copia íntegra del contexto oficial de la actividad en `uis/website/context-nexova.md` y se documentó su origen y relación con `CONTEXT.md` en `memory-bank/techContext.md`. Se implementó la primera versión pública en HTML, Tailwind CSS vía CDN y JavaScript nativo, sin React, backend, Vite ni workspace.

La landing y el formulario «Editorial con bienvenida» se implementaron respetando las composiciones aprobadas. El formulario conserva los 11 campos oficiales, valida en cliente y solo simula un envío: no transmite ni almacena datos. Se descarta «Bloques claros»; no se añadió carga de CV ni extracción de datos. Las imágenes son espacios provisionales; fotografía y encuadre definitivos siguen pendientes. En móvil la imagen lateral queda oculta provisionalmente. La carencia de texto oficial de política de datos se señala en la interfaz y no se inventó un enlace o contenido legal.

Se creó/actualizó `uis/website/README.md` con la tecnología y el comando de servidor estático. La usuaria abrió la web y comprobó que la navegación y los botones probados funcionan; le gusta la tipografía. Esta revisión no equivale a una prueba completa del formulario. Comprobaciones estáticas ejecutadas: `node --check uis/website/validation.js`, `git diff --check`, análisis de sintaxis JSON-LD, recuento de los 11 nombres de campos, comprobaciones de anclajes principales, aviso de contacto para empresas, límite de comentarios y ausencia de código de red/almacenamiento. Contrastes calculados: texto carbón sobre marfil 13,83:1 y arena 12,10:1; verde petróleo sobre marfil 10,99:1 y arena 9,62:1; botón terracota oficial sobre blanco 4,89:1; errores terracota sobre marfil 4,89:1. Revisiones pendientes: fotografías definitivas; aumentar aproximadamente un 20 % la marca Nexova del header; añadir en Servicios un hover suave de fondo y línea (sin giro); revisión responsive completa; comprobar todas las validaciones en navegador; obtener la política de datos oficial; ejecutar Lighthouse. No se afirma revisión completa del formulario, responsive, política legal ni Lighthouse.

## Avance preservado en la rama de respaldo

La referencia estable, el contenido y las pautas para evaluar reutilización del respaldo están documentados en [techContext.md](./techContext.md#referencia-estable-del-respaldo-de-interfaces). El avance pertenece únicamente a la rama de respaldo y no está implementado en esta rama.

## Evidencia histórica de la skill y las interfaces

Antes de separar el trabajo, `.agents/skills/app-readme/SKILL.md` se aplicó a los README de las aplicaciones React/Vite que ahora están guardadas en la rama de respaldo. En ese contexto se registró que `pnpm install --frozen-lockfile`, `pnpm -r build` y el arranque y respuesta HTTP de ambos servidores pasaron. Estas comprobaciones son evidencia histórica del snapshot respaldado, no del árbol de aplicaciones de esta rama ni de la entrega del hito 2.

## Hitos y planes

- **Hito 2 (esta rama):** infraestructura documental de agentes: `AGENTS.md`, memory bank, regla, skill y documentación de rutas de la plantilla.
- **Website público (primera versión en `feature/public-website`):** implementado con HTML + Tailwind CSS + JavaScript en `uis/website/index.html`, `uis/website/application.html` y `uis/website/validation.js`; aún requiere revisión visual en navegador y decisiones de contenido/fotografía pendientes.
- **Backoffice y servicios:** responsabilidades documentadas según la plantilla; la implementación se planifica para hitos posteriores.

## Contradicción pendiente

`CONTEXT.md` identifica a Megan Clarke en una sección de Ventas y Desarrollo de Negocio, y a Marcos Ibáñez en otra. Se conserva la discrepancia para aclaración; no se elige una versión.
