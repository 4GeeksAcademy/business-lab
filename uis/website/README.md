# Sitio público de Nexova

## Propósito

Sitio público para presentar Nexova y sus servicios de selección, outsourcing de atención al cliente y formación corporativa, y para que profesionales interesados se registren en el banco de talento. El contenido se basa en `CONTEXT.md` y `context-nexova.md`; no presenta capacidades futuras como actuales.

## Estado y tecnología

Primera versión implementada con HTML, Tailwind CSS mediante CDN y JavaScript nativo. No requiere React, backend, Vite ni configuración de workspace.

- `index.html`: landing con servicios, razones para elegir Nexova, contacto y datos estructurados Schema.org.
- `application.html`: página independiente de registro de talento, diseñada para escritorio y móvil.
- `validation.js`: validación en navegador y simulación local de envío. No transmite ni almacena datos.

Las fotografías son espacios provisionales identificados; no se han añadido fotos definitivas. La política de tratamiento de datos no tiene texto oficial disponible y no se enlaza una política inventada.

## Requisitos y ejecución

Se necesita Node.js/npm para ejecutar `http-server` con npx. Desde la raíz del repositorio:

```sh
npx http-server uis/website -p 3000 -a 0.0.0.0
```

Abre `http://localhost:3000`. El primer uso de npx puede descargar `http-server` si no está disponible localmente. El comando se documenta como servidor estático; no es un paso de build.

## Comprobaciones

Las comprobaciones ejecutadas y pendientes para esta versión se registran en `memory-bank/progress.md`. Tailwind CDN y Google Fonts requieren conexión a internet. No se afirma una revisión con navegador o Lighthouse salvo que se registre expresamente como ejecutada.
