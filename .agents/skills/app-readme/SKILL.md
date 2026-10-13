# Skill: README de aplicaciones Nexova

## 1. Objetivo

Crear o actualizar el README de una aplicación usando información comprobada del repositorio y respetando `CONTEXT.md`.

## 2. Cuándo utilizarla

Utiliza esta skill cuando se cree una aplicación o cambien su propósito, tecnología o pasos de ejecución.

## 3. Entradas

- Ruta exacta de la aplicación, por ejemplo `uis/website` o `uis/backoffice`.
- `CONTEXT.md` y el README de la carpeta superior.
- Archivos de configuración y código existentes.
- README actual, si existe.

Si falta la ruta o información necesaria, pide únicamente lo que falte. No inventes datos ni comandos.

## 4. Instrucciones

1. Lee las entradas y comprueba el estado real de la aplicación y sus archivos.
2. Identifica su propósito y sus usuarios dentro de Nexova usando información respaldada por `CONTEXT.md`.
3. Revisa el README existente y conserva el contenido que siga siendo válido.
4. Documenta el propósito, la tecnología, los requisitos, la instalación y la ejecución según los archivos existentes. Indica desde qué carpeta se ejecuta cada comando.
5. Distingue las funciones implementadas de las pendientes. No presentes como disponible una función que no esté implementada.
6. Comprueba las rutas y los comandos contra la configuración del repositorio. Indica qué comandos ejecutaste y cuáles no; no afirmes que un comando se verificó si no lo ejecutaste.
7. Si la aplicación no existe o no puede ejecutarse, indícalo claramente. No afirmes que sus pasos de ejecución están verificados.
8. Comprueba el resultado con los criterios de aceptación.
9. Modifica solo el README indicado. No cambies el código ni la configuración de la aplicación.

## 5. Salida

Entrega el `README.md` en la carpeta indicada y un resumen breve de los cambios y las comprobaciones realizadas.

## 6. Criterios de aceptación

- El README está en la carpeta indicada y está escrito en castellano.
- Explica el propósito y los usuarios de la aplicación de forma coherente con `CONTEXT.md`.
- La tecnología y los requisitos corresponden a la configuración existente.
- Los pasos indican desde qué carpeta ejecutar los comandos.
- Las rutas y los comandos están respaldados por el repositorio.
- Las funciones pendientes no se presentan como implementadas.
- No inventa información sobre Nexova.
- No modifica el código ni la configuración de la aplicación.
- Si la aplicación no existe o no puede ejecutarse, lo deja explícito y no afirma que los pasos de ejecución estén verificados.