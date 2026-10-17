# Contexto técnico y decisiones del proyecto

## Referencia estable del respaldo de interfaces

La rama `backup/avance-interfaces-2026-10-17`, en el commit de referencia `c0288d6c199f2223f302b6bd93bc81a337a4021b`, conserva la configuración pnpm/workspace, los esqueletos React + TypeScript + Vite + Tailwind de `uis/website` y `uis/backoffice`, y sus README. El avance llegó a pantallas mínimas; se comprobaron compilación y arranque, y se utilizó la skill `app-readme`. Son prototipos, no interfaces terminadas.

Este código se separó porque no era necesario para la entrega de infraestructura de agentes. Antes de generar una configuración equivalente en un hito futuro, revisar el respaldo y evaluar qué puede reutilizarse según la consigna vigente. No restaurar ni fusionar automáticamente toda la rama: contiene decisiones que pueden no corresponder al siguiente hito. Para el sitio público actual se acordó HTML + Tailwind CSS + JavaScript, sin React.

## Estado histórico de `feature/agent-memory-bank`

`feature/agent-memory-bank` entregó infraestructura de agentes y documentación; no contenía un árbol de aplicaciones web implementadas. Los README conservados entonces describían las responsabilidades según la plantilla. La configuración React/Vite descrita en la referencia estable pertenecía a la rama de respaldo. El trabajo actual del sitio público se desarrolla por separado en `feature/public-website` y se registra más abajo.

## Responsabilidad de las rutas

- `uis/website`: frontend público para la presencia externa de Nexova. El contenido deberá apoyarse en `CONTEXT.md` y no presentar como disponibles capacidades que sean solo planes.
- `uis/backoffice`: frontend interno para administración y operaciones. Se mantiene separado del website público; las funciones concretas están por definir.
- `services`: backend de la compañía, APIs y workers según necesidad. La plantilla recomienda un backend centralizado con FastAPI y evitar microservicios prematuros. No hay API de Nexova implementada ni se confirma aquí una tecnología de base de datos.

Se mantienen los README de la plantilla. Las explicaciones concretas están en `uis/README.md`, `uis/website/README.md`, `uis/backoffice/README.md` y `services/README.md`.

## Website público: primera versión

La primera versión del sitio público está implementada en `uis/website` con **HTML + Tailwind CSS vía CDN + JavaScript nativo**, sin React, backend, Vite ni configuración de workspace. Sus archivos son:

- `index.html`
- `application.html`
- `validation.js`

`index.html` contiene la landing con los datos estructurados Schema.org del contexto oficial; `application.html` contiene el formulario separado, y `validation.js` implementa la validación y simulación local. El formulario no transmite ni persiste datos. El comando documentado para servirlo desde la raíz es `npx http-server uis/website -p 3000 -a 0.0.0.0`. La usuaria confirmó que abrió la web, probó navegación y botones y le gusta la tipografía; eso no constituye una prueba completa del formulario. Las fotografías definitivas siguen pendientes y se usan espacios provisionales identificados. Se anotó como ajuste futuro ampliar aproximadamente un 20 % la marca del header y añadir a Servicios un hover suave de fondo y línea, sin giro. También están pendientes la revisión responsive completa, validación exhaustiva del formulario en navegador, texto oficial de política de datos y Lighthouse. No se incluye una política legal inventada. La rama de respaldo conserva un experimento previo React/TypeScript/Vite solo como referencia; no se restauró ni fusionó. Las comprobaciones estáticas registradas están en `memory-bank/progress.md`.

## Contexto oficial específico del sitio público

La copia íntegra del contexto oficial para la actividad «Sitio Web Público de tu Empresa» está en [`uis/website/context-nexova.md`](../uis/website/context-nexova.md). Su fuente es [CONTEXT-nexova.es.md](https://github.com/4GeeksAcademy/ai-engineering-syllabus/blob/main/content/contexts/01-web-fundamentals/CONTEXT-nexova.es.md). Este documento contiene los requisitos específicos del sitio público y complementa el briefing general de `CONTEXT.md`; no lo sustituye.

## Dirección visual y composición aprobadas

La dirección visual aprobada es humana, cercana, profesional, limpia y clara, con prestigio y delicadeza. Predominan fondos claros (marfil, blanco cálido y arena), con verde petróleo para contrastes y acentos contenidos en terracota, coral apagado, maíz cálido y rosa empolvado. Como referencia estética y de combinación tipográfica se indicó [CAC brand identity — Whiteboard](https://www.whiteboard.is/case-studies/cac-brand-identity). Para la primera versión se aplican Cormorant Garamond en titulares y Source Sans 3 en texto y controles, con la paleta de códigos exactos aprobada en conversación. Las fotografías deben ser naturales y coherentes con la paleta; las imágenes definitivas aún no están elegidas.

La composición aprobada, en el orden y con el contenido requerido por el contexto oficial, es:

- **Header:** nombre a la izquierda y navegación a la derecha.
- **Hero:** texto a la izquierda y fotografía humana a la derecha.
- **Servicios:** tres columnas abiertas con descripciones visibles y pequeños recursos gráficos; apiladas en móvil.
- **Por qué Nexova:** dos columnas asimétricas, con título y fotografía a la izquierda y cuatro argumentos a la derecha.
- **Contacto:** imagen amplia y luminosa de fondo con una zona clara para leer los datos. La escena concreta está pendiente; no se aprobó específicamente un jardín ni un ventanal.
- **Footer:** sencillo y claro.

### Formulario de registro de talento: «Editorial con bienvenida»

Se aprobó en conversación una página separada `application.html`, con presentación e imagen vertical a la izquierda y formulario a la derecha en escritorio. La imagen debe acompañar el lateral hasta el final del formulario, sin terminar a mitad de los campos. Se usará una sola imagen tranquila y coherente con la paleta; la fotografía y el encuadre definitivos siguen pendientes. En móvil, el formulario va en una columna y la imagen queda oculta provisionalmente.

El formulario debe conservar los 11 campos, sus opciones, validaciones y mensajes especificados en el contexto oficial. No se añadirá carga de CV ni extracción de datos. Se mantiene el predominio de fondos claros y la identidad visual aprobada. Se descarta la propuesta «Bloques claros».

Este diseño se aprobó en conversación y se implementó en la primera versión descrita arriba. Las animaciones e interacciones concretas más allá de la navegación accesible, estados de foco/hover y validación del formulario siguen pendientes.

## Fuente de verdad y restricciones

- `CONTEXT.md` contiene el briefing de Nexova y prevalece sobre resúmenes derivados.
- No inventar hechos, cifras, contactos ni capacidades. Distinguir explícitamente funciones existentes de propuestas futuras.
- No resolver por cuenta propia la contradicción del responsable de Ventas (Megan Clarke / Marcos Ibáñez); queda pendiente.
- Mantener supervisión humana en decisiones profesionales de selección y contratación.
- Escribir en castellano la documentación, reglas y skills; usar identificadores de código en inglés.

## Decisiones aún pendientes

El framework final del backoffice, la tecnología del backend más allá de la recomendación de plantilla, la base de datos, autenticación, integraciones, proveedor/modelo de IA, arquitectura interna de agentes y despliegue no están decididos por este hito. Deben definirse cuando corresponda y registrarse sin confundirlos con el estado actual.
