`validation.js` implementa la validación y simulación local. El formulario no transmite ni persiste datos. `hero-carousel.js` gestiona el carrusel fotográfico de la landing: tres WebP de 1122 × 1402, controles manuales accesibles y reproducción automática cada cinco segundos con fundido de 700 ms. El HTML conserva visible la primera imagen sin JavaScript; con movimiento reducido, la usuaria confirmó selección manual sin autoplay ni fundido. La usuaria también confirmó manualmente experiencia 0/50 aceptada y −1/51 rechazada, LinkedIn vacío permitido, envío simulado y reset funcionales tras los últimos cambios; para el vídeo, Tab pausa, salir del foco no reanuda y Enter sí. Con `prefers-reduced-motion: reduce`, confirmó vídeo inicialmente parado y reproducción manual funcional. Estas son pruebas de la usuaria, no del agente. El agente hizo solo revisión estática y pruebas de sintaxis/diff. La auditoría móvil de Lighthouse del inicio en incógnito informada por la usuaria fue 89/100/100/63 y reportó variantes WebP de 768 px; el agente no ejecutó Lighthouse. Los detalles y el resto de resultados están en `memory-bank/progress.md`. El comando documentado para servirlo desde la raíz es `npx http-server uis/website -p 3000 -a 0.0.0.0`. El texto oficial de política de datos no está disponible y no se inventa política ni enlace. La rama de respaldo conserva un experimento previo React/TypeScript/Vite solo como referencia; no se restauró ni fusionó.
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

La primera versión del sitio público está implementada en `uis/website` con **HTML + Tailwind CSS vía CDN + JavaScript nativo**, sin React, backend, Vite ni configuración de workspace. Sus archivos principales son:

- `index.html`
- `application.html`
- `validation.js`
- `hero-carousel.js`

`index.html` contiene la landing con los datos estructurados Schema.org del contexto oficial; `application.html` contiene el formulario separado y la ilustración aprobada `assets/images/talent-pathways.webp`, mostrada completa en proporción 1:3 y con la columna aún oculta en móvil; `validation.js` implementa la validación y simulación local, `hero-carousel.js` el carrusel de fotos (intervalo de cinco segundos), y `why-video.js` la carga diferida y reproducción controlada del mecanismo cinético de «Por qué Nexova». La integración visual de la ilustración de talento sigue pendiente de comprobar. La fuente del vídeo es `assets/videos/nexova-kinetic-original-web.mp4`; la versión anterior con fundido se descartó porque producía una imagen doble de la pelota. El original conserva su proporción, se reproduce silenciado/en bucle/inline y se pausa fuera de vista o con la pestaña oculta; la preferencia reduced-motion desactiva el autoplay. No se añadieron fundidos ni se alteró el vídeo. Su descripción lo presenta únicamente como metáfora de coordinación, no como tecnología de Nexova. La usuaria aprobó visualmente el vídeo original comprimido y su bucle en la página; esto no equivale a pruebas completas de accesibilidad y responsive. La sección de contacto usa la ambientación conceptual `assets/images/contact-conversation-space.webp` (WebP, 1672 × 941, 231 KB), con panel de datos sobre fondo en escritorio y composición apilada en móvil; no representa una oficina real de Nexova. El título editorial de «Por qué Nexova» es «Cuando el talento conecta, todo se pone en marcha.» La usuaria confirmó que abrió la web, probó navegación y botones y le gusta la tipografía; eso no constituye una prueba completa del formulario, carrusel o video. En `feature/public-website` también se amplió aproximadamente un 20 % la marca del header y se añadió a Servicios un hover suave de fondo y línea, sin giro. Siguen pendientes la revisión responsive completa, pruebas completas de accesibilidad, validación exhaustiva del formulario en navegador, texto oficial de política de datos y Lighthouse. No se incluye una política legal inventada. La rama de respaldo conserva un experimento previo React/TypeScript/Vite solo como referencia; no se restauró ni fusionó. Las comprobaciones estáticas registradas están en `memory-bank/progress.md`.

### Actualización de interfaz en `feature/public-website`

La marca del header queda `text-3xl` en tamaños menores y `text-5xl` desde `lg` en ambas páginas. Las tarjetas informativas de Servicios llevan borde neutro completo de 2 px y hover terracota/rosa (`#B34F39`/`#F3E2DA`), sin transformación ni semántica interactiva; transición de color de 200 ms y sin animación con movimiento reducido. Los controles, campos y radios seleccionables cuentan con focos o estados visuales diferenciados. `application.html` incorpora botón `type="reset"`; su listener limpia mensajes, `aria-invalid`, contador y confirmación junto con el reset nativo, y el submit continúa simulado localmente.

El `<aside>` de bienvenida se oculta íntegro debajo de `lg`; permanece una introducción textual alternativa en la sección del formulario. La política de datos oficial sigue sin estar disponible y no se inventa ni enlaza. El agente no ejecutó pruebas de navegador; la usuaria sí informó pruebas manuales responsive y de navegación, confirmó límites de experiencia, LinkedIn vacío, envío/reset, teclado del vídeo y movimiento reducido (detalladas en `progress.md`). La validación exhaustiva independiente del agente y la revisión visual del aside siguen pendientes.

## Contexto oficial específico del sitio público

La copia íntegra del contexto oficial para la actividad «Sitio Web Público de tu Empresa» está en [`uis/website/context-nexova.md`](../uis/website/context-nexova.md). Su fuente es [CONTEXT-nexova.es.md](https://github.com/4GeeksAcademy/ai-engineering-syllabus/blob/main/content/contexts/01-web-fundamentals/CONTEXT-nexova.es.md). Este documento contiene los requisitos específicos del sitio público y complementa el briefing general de `CONTEXT.md`; no lo sustituye.

## Dirección visual y composición aprobadas

La dirección visual aprobada es humana, cercana, profesional, limpia y clara, con prestigio y delicadeza. Predominan fondos claros (marfil, blanco cálido y arena), con verde petróleo para contrastes y acentos contenidos en terracota, coral apagado, maíz cálido y rosa empolvado. Como referencia estética y de combinación tipográfica se indicó [CAC brand identity — Whiteboard](https://www.whiteboard.is/case-studies/cac-brand-identity). La primera versión aplica Cormorant Garamond en titulares y Source Sans 3 en texto y controles, con la paleta de códigos exactos aprobada en conversación. La landing ya integra fotografías WebP ilustrativas coherentes con la paleta; la revisión visual independiente de sus encuadres sigue pendiente.

La composición aprobada, en el orden y con el contenido requerido por el contexto oficial, es:

- **Header:** nombre a la izquierda y navegación a la derecha.
- **Hero:** texto a la izquierda y fotografía humana a la derecha.
- **Servicios:** tres columnas abiertas con descripciones visibles y pequeños recursos gráficos; apiladas en móvil.
- **Por qué Nexova:** dos columnas asimétricas, con título y fotografía a la izquierda y cuatro argumentos a la derecha.
- **Contacto:** imagen amplia y luminosa de fondo con una zona clara para leer los datos. La implementación usa una ambientación conceptual con sillones arena y terracota; no representa una oficina real de Nexova.
- **Footer:** sencillo y claro.

### Formulario de registro de talento: «Editorial con bienvenida»

Se aprobó en conversación una página separada `application.html`, con presentación e imagen vertical a la izquierda y formulario a la derecha en escritorio. La imagen acompaña el lateral hasta el final del formulario; la implementación actual usa `assets/images/talent-pathways.webp`, que se oculta junto con el `<aside>` en móvil, donde permanece una introducción textual alternativa.

El formulario debe conservar los 11 campos, sus opciones, validaciones y mensajes especificados en el contexto oficial. No se añadirá carga de CV ni extracción de datos. Se mantiene el predominio de fondos claros y la identidad visual aprobada. Se descarta la propuesta «Bloques claros».

Este diseño se aprobó en conversación y se implementó en la primera versión descrita arriba. El estado actual de las interacciones y las pruebas comunicadas por la usuaria se detalla en `memory-bank/progress.md`; la revisión independiente del agente en navegador sigue pendiente.

## Fuente de verdad y restricciones

- `CONTEXT.md` contiene el briefing de Nexova y prevalece sobre resúmenes derivados.
- No inventar hechos, cifras, contactos ni capacidades. Distinguir explícitamente funciones existentes de propuestas futuras.
- No resolver por cuenta propia la contradicción del responsable de Ventas (Megan Clarke / Marcos Ibáñez); queda pendiente.
- Mantener supervisión humana en decisiones profesionales de selección y contratación.
- Escribir en castellano la documentación, reglas y skills; usar identificadores de código en inglés.

## Decisiones aún pendientes

El framework final del backoffice, la tecnología del backend más allá de la recomendación de plantilla, la base de datos, autenticación, integraciones, proveedor/modelo de IA, arquitectura interna de agentes y despliegue no están decididos por este hito. Deben definirse cuando corresponda y registrarse sin confundirlos con el estado actual.
