# Resumen del proyecto — Nexova Solutions

## Contexto de negocio

Nexova Solutions es una consultora de recursos humanos y selección fundada en 2011, con sede en Valencia y oficina de expansión en Miami. Tiene 120 empleados y factura aproximadamente 8 millones de dólares anuales. Sus líneas de negocio son la búsqueda de perfiles de mandos medios y directivos, el outsourcing de equipos de soporte al cliente y la formación corporativa en habilidades blandas y liderazgo. Sus clientes principales son medianas empresas de tecnología, retail y servicios financieros.

El briefing describe procesos manuales y sistemas desconectados en selección, formación, soporte al cliente, ventas, marketing, RR. HH., tecnología y dirección ejecutiva. Entre las restricciones de partida están no inventar datos sobre Nexova, no presentar capacidades futuras como disponibles y mantener bajo supervisión humana las decisiones profesionales. El briefing contiene una contradicción sobre la persona responsable de Ventas: Megan Clarke en una sección y Marcos Ibáñez en otra. Se conserva como pendiente de aclaración.

`CONTEXT.md` es la fuente de verdad del briefing completo. Este resumen no lo sustituye.

## Objetivo del hito 2: infraestructura de agentes

Preparar la documentación y las instrucciones del repositorio para que el trabajo posterior sea consistente con Nexova y la plantilla. El hito comprende:

- este memory bank: `projectbrief.md`, `techContext.md` y `progress.md`;
- `AGENTS.md`, con lectura inicial, flujo ordenado previo a commits y archivos que requieren autorización;
- al menos una regla de `.agents/rules/` con alcance declarado;
- al menos una skill de `.agents/skills/` con objetivo único, entradas y criterios comprobables;
- documentación de las rutas `uis/website`, `uis/backoffice` y `services`, sin convertir esos planes en implementaciones del hito 2.

## Rutas del monorepo

- `uis/website`: sitio web público de Nexova. El README de la plantilla y `uis/README.md` sitúan aquí las interfaces que presentan la compañía a visitantes externos.
- `uis/backoffice`: interfaz interna para el personal y las operaciones de Nexova; no es el sitio público.
- `services`: servicios backend, APIs y workers. La plantilla recomienda una API centralizada con FastAPI y evitar microservicios prematuros; no hay servicio de Nexova implementado en esta rama.

Se conservan los README de la plantilla y los README específicos que ya documentan propósito y estado. Este alcance no añade un árbol paralelo de aplicaciones.

## Estado y trabajo futuro

Esta rama está centrada en la infraestructura documental de agentes. La configuración adelantada de React/Vite, dependencias, workspace y esqueletos de website/backoffice se conserva en `backup/avance-interfaces-2026-10-17`; no se da por sentado que se vaya a reutilizar completa.

El hito 3 del website está previsto con HTML, Tailwind CSS y JavaScript, con `index.html`, `application.html` y `validation.js` dentro de `uis/website`. Es un plan, no una implementación en esta rama. React no es un requisito confirmado para ese website.

La implementación del backoffice, los servicios, las integraciones, los agentes de negocio, la automatización y la infraestructura de despliegue corresponden a trabajos posteriores y deberán documentarse como decisiones confirmadas solo cuando se acuerden.
