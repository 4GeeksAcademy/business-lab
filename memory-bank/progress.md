# Progreso del proyecto

## Información incorporada

- Se incorporó el briefing de Nexova desde `CONTEXT.md`.
- Se documentaron la elección de empresa y el contexto del negocio.
- La memoria inicial y `AGENTS.md` en la raíz están preparados y revisados.
- Se revisaron la estructura del monorepo y las convenciones de la plantilla en la guía existente del proyecto; esos archivos ya formaban parte de la plantilla y no se crearon ni modificaron durante esta tarea.
- Se confirmó la separación de responsabilidades entre `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/`, `workflows/`, `packages/`, `shared/`, `docs/`, `infra/`, `scripts/` e `internal/`.
- Se creó la regla de organización de interfaces en `.agents/rules/ui-organization.md`, aplicable al crear o modificar archivos en `uis/website/**` y `uis/backoffice/**`.
- Se creó la skill `.agents/skills/app-readme/SKILL.md` y se aplicó a los README de website y backoffice.
- Se instaló pnpm `12.11.2` en `$HOME/.local/share/pnpm/bin/pnpm`, fijado en el manifiesto raíz, y se configuró el workspace para `uis/*` y `packages/*`. El workspace reconoce ambas aplicaciones y `@repo/shared-types`; su metadata existente se conserva. pnpm no gestiona las dependencias de Python. La ubicación se usa por ruta absoluta, sin cambios persistentes en archivos de inicio del shell.
- Se prepararon website y backoffice con React `19.3.0`, TypeScript `6.0.3`, Vite `8.3.4` y Tailwind CSS `4.3.3` mediante `@tailwindcss/vite`. Ambas tienen una pantalla mínima con su nombre y una compilación correcta.
- Se aplicó la skill `.agents/skills/app-readme/SKILL.md` a ambas aplicaciones y se crearon sus README en castellano. Se verificaron requisitos, comandos, propósitos y estado implementado/pendiente. `pnpm install --frozen-lockfile`, `pnpm -r build` y el arranque/respuesta HTTP de ambos servidores pasaron. No se añadió un linter a esta base mínima.
- Se registraron las decisiones confirmadas del website: página única con navegación por secciones, enfoque híbrido orientado a las empresas visitantes y basado en `CONTEXT.md`, presentación de las tres líneas de servicio, sin publicar problemas internos ni inventar datos, promesas o contactos. La identidad será profesional, humana y actual; el estilo, sobrio y legible. Se usará el nombre escrito Nexova Solutions y no se creará un logo en esta tarea.

## Rama de trabajo

La rama registrada para esta tarea es:

- `feature/agent-memory-bank`

## Estado actual

La memoria inicial y el flujo de trabajo de `AGENTS.md` están preparados y revisados. Siguen pendientes varios elementos:

- elección de la paleta de colores del website;
- contenido y funcionalidades completas de website y backoffice;
- revisión visual integral de ambas aplicaciones;
- revisión de `AGENTS.md`, el memory bank, la regla y la skill contra `CONTEXT.md`;
- pull request relacionado con el cambio, todavía sin abrir.

## Contradicción en el briefing

El briefing contiene una contradicción sin resolver en la sección de Ventas y Desarrollo de Negocio:

- identifica a **Megan Clarke** como responsable;
- más adelante, la descripción de los problemas del departamento identifica a **Marcos Ibáñez** como responsable.

Esta tarea no resuelve la contradicción por cuenta propia. Queda registrada como una inconsistencia del briefing que deberá aclararse más adelante.

## Nota sobre el alcance

La comprobación previa al commit con `git status --short --branch` muestra la rama `feature/agent-memory-bank` y estos elementos no rastreados: `AGENTS.md` y `memory-bank/`. Este estado no permite concluir si se instalaron dependencias.
