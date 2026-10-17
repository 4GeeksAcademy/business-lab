# AGENTS.md

Este archivo define las reglas de trabajo de este repositorio y el flujo esperado para el proyecto Nexova.

## 1) Inicio de cada sesión

Al comenzar cada sesión de trabajo, antes de hacer cambios:

1. Lee `CONTEXT.md`.
2. Lee los tres archivos del memory bank:
   - `memory-bank/projectbrief.md`
   - `memory-bank/techContext.md`
   - `memory-bank/progress.md`
3. Lee los archivos README de las carpetas afectadas por la tarea.
4. Lee las reglas aplicables de `.agents/rules/`.

Así, el trabajo se mantiene alineado con el briefing real de la empresa y con las convenciones del proyecto ya definidas en la plantilla.

## 2) Cómo trabajar

Sigue estas reglas durante la implementación:

- Respeta el alcance del hito actual y la estructura del repositorio.
- Trabaja en la carpeta correcta y mantén claras las responsabilidades del monorepo.
- Revisa las decisiones opcionales antes de implementarlas. No des por definitivas las decisiones que no estén documentadas.
- No inventes datos ni hechos sobre Nexova que no aparezcan en el briefing.
- No resuelvas por tu cuenta las contradicciones del briefing. Déjalas registradas con claridad y continúa usando la información documentada como referencia.
- Actualiza el memory bank cuando cambien las decisiones o el estado del proyecto.
- Escribe en castellano la documentación del proyecto, las reglas y las skills.
- Escribe en inglés los identificadores del código.
- Explica al usuario el progreso, los bloqueos y los resultados en castellano.
- Mantén clara la diferencia entre:
  - `.agents/` — configuración y reglas para agentes de programación;
  - `agents/` — agentes de IA del producto y su trabajo;
  - `skills/` — capacidades e instrucciones reutilizables del producto.
- Mantén los nombres de archivo exigidos por la escuela.

## 3) Flujo obligatorio antes de cada commit

Antes de hacer un commit, completa estos pasos en orden:

1. Revisa la rama, los archivos modificados y el alcance solicitado.
2. Comprueba que los cambios sean coherentes con el briefing de la empresa, las reglas de la plantilla y las convenciones del repositorio.
3. Ejecuta las comprobaciones disponibles que correspondan a los cambios. No inventes comandos ni afirmes que ejecutaste pruebas que no se hayan ejecutado. Si una comprobación está bloqueada, deja constancia clara.
4. Actualiza el memory bank y la documentación afectada para reflejar el estado real del proyecto.
5. Revisa el diff final y prepara solo los archivos relacionados con la tarea.

Este flujo es obligatorio para que el trabajo sea fácil de revisar y se mantenga acotado.

## 4) Archivos protegidos

Los siguientes archivos están protegidos y no deben modificarse, cambiarse de nombre ni eliminarse sin autorización explícita del usuario:

- `CONTEXT.md`
- `CONTEXT.es.md`
- `company-choice.md`

Si el usuario pide expresamente modificar estos archivos, esa petición ya constituye autorización. Si el cambio no se ha solicitado expresamente, pregunta antes de hacerlo.

## 5) Límites de trabajo

- No añadas herramientas, dependencias ni requisitos que no formen parte del ejercicio.
- No crees estructura adicional en el proyecto salvo que la tarea lo requiera.
- Crea commits solo cuando el usuario los haya autorizado y completa siempre el flujo obligatorio previo al commit.
- Mantén el trabajo centrado en la petición y en el hito actual.

## 6) Resumen

Este proyecto es un monorepo organizado para Nexova. El trabajo debe mantenerse dentro de la plantilla, respetar el alcance del plazo, documentar el estado real y evitar suposiciones que no estén respaldadas por el briefing.
