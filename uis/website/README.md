# Sitio público de Nexova

## Propósito

Sitio público para presentar Nexova y sus servicios de selección, outsourcing de atención al cliente y formación corporativa, y para que profesionales interesados se registren en el banco de talento. El contenido se basa en `CONTEXT.md` y `context-nexova.md`; no presenta capacidades futuras como actuales.

## Estado y tecnología

Primera versión implementada con HTML, Tailwind CSS mediante CDN y JavaScript nativo. No requiere React, backend, Vite ni configuración de workspace.

- `index.html`: landing con servicios, razones para elegir Nexova, contacto y datos estructurados Schema.org. El hero usa un carrusel de tres fotografías WebP; «Por qué Nexova» integra un vídeo de mecanismo cinético en lugar de la fotografía prevista.
- `application.html`: página independiente de registro de talento, diseñada para escritorio y móvil.
- `validation.js`: validación en navegador y simulación local de envío. No transmite ni almacena datos.
- `hero-carousel.js`: carrusel del hero con selección manual, reproducción opcional cada cinco segundos y comportamiento accesible.
- `why-video.js`: carga diferida y control de reproducción del vídeo de «Por qué Nexova» según visibilidad, preferencia de movimiento, pestaña y decisión del usuario.

Las fotografías del hero son ilustrativas y no representan empleados reales de Nexova. Se sirven en WebP desde `assets/images/`; su encuadre debe validarse visualmente. Hero y contacto ofrecen variantes 480w, 768w y el original mediante `srcset`, con `sizes` según el ancho de diseño para que el navegador elija el recurso teniendo en cuenta espacio disponible y densidad de pantalla. En hero, el ancho máximo declarado es 560 px en escritorio amplio y sigue el ancho de la columna en tablet; en contacto el contenedor llega a 1280 px y los paddings externos se reflejan en los breakpoints. Contacto conserva `loading="lazy"` y declara `width`/`height` para reservar proporción. La usuaria informa que Lighthouse selecciona/descarga la variante de 768 px; no se ha comprobado de forma independiente la selección ni el impacto en rendimiento. La política de tratamiento de datos no tiene texto oficial disponible y no se enlaza una política inventada.

### Activos y entrega responsive de imágenes

Dimensiones y pesos observados de los originales / variantes: `hero-team-conversation` 1122 × 1402 (134 402 bytes) / 480 × 600 (44 774 bytes) / 768 × 960 (81 886 bytes); `hero-attentive-listening` 1122 × 1402 (86 676 bytes) / 480 × 600 (28 028 bytes) / 768 × 960 (48 942 bytes); `hero-walking-conversation` 1122 × 1402 (108 608 bytes) / 480 × 600 (37 340 bytes) / 768 × 960 (65 544 bytes); `contact-conversation-space` 1672 × 941 (231 222 bytes) / 480 × 270 (24 258 bytes) / 768 × 432 (57 786 bytes). Las proporciones de los derivados coinciden con sus originales. Las tres imágenes del hero conservan orden, encuadre, carga prioritaria de la primera y comportamiento del carrusel. El LCP medido por Lighthouse se identificó como el título del hero; la entrega responsive de imágenes busca reducir descargas y no se considera una solución garantizada del LCP.

La generación de las ocho variantes menores ya está resuelta. La usuaria informó que Lighthouse del inicio en móvil/incógnito utilizó WebP de 768 px; el agente no repitió la medición ni verificó independientemente la selección. La revisión visual por el agente sigue pendiente.

En escritorio, el panel verde de `application.html` incluye la ilustración aprobada `assets/images/talent-pathways.webp`. Se muestra completa, sin recorte ni deformación, respetando su proporción 1:3. En anchos inferiores a `lg` se oculta el `<aside>` entero (incluida la ilustración); la sección del formulario conserva una introducción textual alternativa. La integración visual aún está pendiente de comprobar en navegador.

## Carrusel del hero

El orden es: equipo conversando, escucha individual y conversación caminando. La primera fotografía está en el HTML para que se vea incluso sin JavaScript. Cuando JavaScript está disponible, el carrusel cambia cada cinco segundos con fundido; ofrece controles etiquetados para elegir una foto y pausar/reanudar. El foco por teclado detiene la reproducción y no la reanuda sin acción expresa; pasar el ratón la pausa temporalmente. Con `prefers-reduced-motion: reduce`, la reproducción automática y el fundido quedan desactivados: se puede cambiar de foto manualmente.

No se pudo inspeccionar visualmente las fotografías en este entorno. Tampoco se comprobó visualmente el encuadre responsive. Los WebP fueron aportados ya optimizados por la usuaria; no se instalaron herramientas de compresión.

## Vídeo de «Por qué Nexova»

El vídeo `assets/videos/nexova-kinetic-original-web.mp4` sustituye el espacio provisional de fotografía. Se muestra con su proporción intrínseca, sin recorte ni modificaciones, en bucle, silenciado y con `playsinline`. JavaScript lo carga al acercarse a la sección y lo reproduce solo mientras está visible y la pestaña está activa. El control accesible pausa/reanuda; la pausa manual se conserva al salir y volver a la sección. Si el control recibe foco mientras el vídeo se reproduce, este se pausa y no se reanuda hasta una acción expresa. Con `prefers-reduced-motion: reduce`, no hay reproducción automática y el botón permite iniciar manualmente. El botón de envío del formulario permanece desactivado hasta que se inicializa la validación JavaScript, evitando un envío GET nativo de los datos si el script no está disponible. La descripción accesible presenta el mecanismo como metáfora de coordinación, no como tecnología operativa de Nexova; los rechazos de `play()` se manejan sin propagar errores de consola.

Se descartó y eliminó la versión anterior con fundido porque producía una imagen doble de la pelota. Se usa el original, sin añadir fundidos ni alterar el vídeo.

La usuaria informa que visualizó el vídeo y comprobó su bucle; también confirmó manualmente que Tab pausa, salir del foco no reanuda y Enter permite reanudar, y que con `prefers-reduced-motion: reduce` el vídeo empieza parado y la reproducción manual funciona. El agente no repitió la prueba en navegador; la revisión visual independiente sigue pendiente.

## Estados interactivos y formulario

El nombre de marca conserva Cormorant Garamond y el color verde petróleo; se presenta a `text-3xl`/`leading-9` en tamaños menores y a `text-5xl`/`leading-none` desde `lg`, con peso `font-semibold` en ambas páginas. Los dos headers cargan la misma fuente y Tailwind. Las tarjetas informativas de Servicios no son controles: tienen borde neutro de 2 px y, al pasar el puntero, borde terracota `#B34F39` y fondo rosa suave `#F3E2DA`, con transición de color de 200 ms que se desactiva con movimiento reducido. No se les asignan cursor de botón, foco ni rol interactivo.

Los enlaces y botones tienen foco visible y los controles del carrusel, vídeo y formulario presentan estados de interacción diferenciados. Las opciones de disponibilidad mantienen seleccionado visible mediante borde, fondo y anillo, incluso sin hover. El botón secundario «Limpiar formulario» usa `type="reset"`: limpia los campos nativos, mensajes de error y `aria-invalid`, contador de comentarios y confirmación. «Enviar registro» conserva su estilo de acción principal. El formulario sigue siendo una demostración local sin transmisión ni almacenamiento. El texto oficial de la política de datos no está disponible y no se inventa ni enlaza una política; se conserva el aviso de demostración y el checkbox requerido, sin explicación técnica de esta limitación en la interfaz.

En escritorio la bienvenida ilustrada vive en un `<aside>` visible desde `lg`; por debajo de ese breakpoint se oculta todo el aside y permanece una introducción alternativa en texto sobre el formulario.

## Contacto y ambientación visual

La sección «Hablemos» usa `assets/images/contact-conversation-space.webp` como fondo de ambientación conceptual: sillones arena y terracota, mesa y vaso. No representa oficinas reales de Nexova. La imagen tiene 1672 × 941 px y pesa 231 KB. En pantallas pequeñas, la imagen y el panel de contacto se disponen en vertical para evitar solapamientos; desde `sm`, el panel claro se superpone a la izquierda y el encuadre favorece el espacio conversacional a la derecha. Los contactos y encabezados se mantienen visibles.

La usuaria aprobó visualmente en la página el vídeo original comprimido y su reproducción en bucle. Esto no sustituye la revisión visual independiente del agente ni una auditoría de accesibilidad completa.

## Requisitos y ejecución

Se necesita Node.js/npm para ejecutar `http-server` con npx. Desde la raíz del repositorio:

```sh
npx http-server uis/website -p 3000 -a 0.0.0.0
```

Abre `http://localhost:3000`. El primer uso de npx puede descargar `http-server` si no está disponible localmente. El comando se documenta como servidor estático; no es un paso de build.

## Comprobaciones

La usuaria verificó navegación, botones y presentación en escritorio, móvil de 392 px y tablet de 768 px; foco visible con teclado; validación, confirmación simulada y reset del formulario; carrusel, imágenes, bucle del vídeo y consola sin errores rojos en ambas páginas. Confirmó experiencia 0 y 50 aceptadas, −1 y 51 rechazadas, LinkedIn vacío permitido y envío/reset funcionales tras los últimos cambios. Con `prefers-reduced-motion: reduce`, confirmó carrusel sin autoplay ni fundido con selección manual funcional. Informó Lighthouse móvil del inicio en incógnito: 89 rendimiento, 100 accesibilidad, 100 buenas prácticas y 63 SEO; el navegador utilizó variantes WebP de 768 px. En un informe anterior también comunicó resultados del formulario (90/100/96/60); los informes muestran `x-robots-tag: noindex, nofollow`. Estas pruebas y puntuaciones son de la usuaria, no ejecuciones del agente.

El agente revisó estáticamente los once campos frente a `context-nexova.md`, las opciones, obligatoriedad, restricciones, mensajes, asociaciones accesibles, simulación local, reset, scripts de movimiento y Schema.org. También comprobó sintaxis de JavaScript y `git diff --check`; no hizo una prueba de navegador ni una validación externa de Schema.org. La generación/selección de candidatos responsive reportada por la usuaria no sustituye futuras mediciones de rendimiento. Tailwind CDN y Google Fonts requieren conexión a internet. Resultados y pendientes detallados en `memory-bank/progress.md`.
