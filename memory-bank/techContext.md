# Contexto técnico y decisiones del proyecto

## Referencia estable del respaldo de interfaces

La rama `backup/avance-interfaces-2026-10-17`, en el commit de referencia `c0288d6c199f2223f302b6bd93bc81a337a4021b`, conserva la configuración pnpm/workspace, los esqueletos React + TypeScript + Vite + Tailwind de `uis/website` y `uis/backoffice`, y sus README. El avance llegó a pantallas mínimas; se comprobaron compilación y arranque, y se utilizó la skill `app-readme`. Son prototipos, no interfaces terminadas.

Este código se separó porque no era necesario para la entrega de infraestructura de agentes. Antes de generar una configuración equivalente en un hito futuro, revisar el respaldo y evaluar qué puede reutilizarse según la consigna vigente. No restaurar ni fusionar automáticamente toda la rama: contiene decisiones que pueden no corresponder al siguiente hito. Para el sitio público actual se acordó HTML + Tailwind CSS + JavaScript, sin React.

## Estado de esta rama: hito 2

`feature/agent-memory-bank` entrega infraestructura de agentes y documentación; no contiene un árbol de aplicaciones web implementadas. Los README conservados de `uis/website` y `uis/backoffice` describen sus responsabilidades siguiendo las instrucciones de la plantilla. La configuración y los archivos de aplicación descritos arriba pertenecen al respaldo, no a esta rama.

## Responsabilidad de las rutas

- `uis/website`: frontend público para la presencia externa de Nexova. El contenido deberá apoyarse en `CONTEXT.md` y no presentar como disponibles capacidades que sean solo planes.
- `uis/backoffice`: frontend interno para administración y operaciones. Se mantiene separado del website público; las funciones concretas están por definir.
- `services`: backend de la compañía, APIs y workers según necesidad. La plantilla recomienda un backend centralizado con FastAPI y evitar microservicios prematuros. No hay API de Nexova implementada ni se confirma aquí una tecnología de base de datos.

Se mantienen los README de la plantilla. Las explicaciones concretas están en `uis/README.md`, `uis/website/README.md`, `uis/backoffice/README.md` y `services/README.md`.

## Plan futuro: website del hito 3

La implementación prevista para el website en el hito 3 usará **HTML + Tailwind CSS + JavaScript**. Se esperan estos archivos dentro de `uis/website`:

- `index.html`
- `application.html`
- `validation.js`

Este es un plan indicado para el siguiente hito, no trabajo implementado en esta rama. React no es un requisito confirmado para ese website. La rama de respaldo conserva el experimento previo con React/TypeScript/Vite para referencia; no se presupone su reutilización total ni parcial.

## Fuente de verdad y restricciones

- `CONTEXT.md` contiene el briefing de Nexova y prevalece sobre resúmenes derivados.
- No inventar hechos, cifras, contactos ni capacidades. Distinguir explícitamente funciones existentes de propuestas futuras.
- No resolver por cuenta propia la contradicción del responsable de Ventas (Megan Clarke / Marcos Ibáñez); queda pendiente.
- Mantener supervisión humana en decisiones profesionales de selección y contratación.
- Escribir en castellano la documentación, reglas y skills; usar identificadores de código en inglés.

## Decisiones aún pendientes

El framework final del backoffice, la tecnología del backend más allá de la recomendación de plantilla, la base de datos, autenticación, integraciones, proveedor/modelo de IA, arquitectura interna de agentes y despliegue no están decididos por este hito. Deben definirse cuando corresponda y registrarse sin confundirlos con el estado actual.
