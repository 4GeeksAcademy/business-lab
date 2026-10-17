# Progreso del proyecto

## Alcance de `feature/agent-memory-bank`

Esta rama se prepara para entregar exclusivamente el hito 2 de infraestructura de agentes. Incluye documentación de Nexova y del flujo de trabajo, los tres archivos mínimos del memory bank, una regla con alcance explícito y una skill verificable. Conserva los README de la plantilla y los README específicos de website/backoffice; no conserva los esqueletos de aplicaciones ni la configuración adelantada de workspace.

`CONTEXT.md`, `CONTEXT.es.md` y `company-choice.md` no se modifican. El briefing completo en `CONTEXT.md` es la referencia. Se registra sin resolver la contradicción entre Megan Clarke y Marcos Ibáñez como responsables de Ventas.

## Avance preservado en la rama de respaldo

La rama `backup/avance-interfaces-2026-10-17` se creó desde el HEAD original `c0288d6c199f2223f302b6bd93bc81a337a4021b` y se publicó en `origin` antes de retirar archivos de esta rama. Allí permanece el avance de configuración de pnpm/workspace, los esqueletos React/Vite de website y backoffice y sus recursos asociados. Es una copia histórica para revisión, no una decisión de reutilización.

## Evidencia histórica de la skill y las interfaces

Antes de separar el trabajo, `.agents/skills/app-readme/SKILL.md` se aplicó a los README de las aplicaciones React/Vite que ahora están guardadas en la rama de respaldo. En ese contexto se registró que `pnpm install --frozen-lockfile`, `pnpm -r build` y el arranque y respuesta HTTP de ambos servidores pasaron. Estas comprobaciones son evidencia histórica del snapshot respaldado, no del árbol de aplicaciones de esta rama ni de la entrega del hito 2.

## Hitos y planes

- **Hito 2 (esta rama):** infraestructura documental de agentes: `AGENTS.md`, memory bank, regla, skill y documentación de rutas de la plantilla.
- **Hito 3 (plan):** website con HTML + Tailwind CSS + JavaScript y archivos `uis/website/index.html`, `uis/website/application.html` y `uis/website/validation.js`. No se implementa en esta rama. React no es requisito confirmado para ese website.
- **Backoffice y servicios:** responsabilidades documentadas según la plantilla; la implementación se planifica para hitos posteriores.

## Contradicción pendiente

`CONTEXT.md` identifica a Megan Clarke en una sección de Ventas y Desarrollo de Negocio, y a Marcos Ibáñez en otra. Se conserva la discrepancia para aclaración; no se elige una versión.
