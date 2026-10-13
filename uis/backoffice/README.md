# Backoffice de Nexova Solutions

## Propósito y estado

Aplicación interna de administración y operaciones para el personal de Nexova, separada del sitio público, según la organización de interfaces descrita en [`uis/README.md`](../README.md) y el contexto de la empresa en [`CONTEXT.md`](../../CONTEXT.md).

Por ahora solo está implementada la base de la aplicación con el nombre Nexova Solutions. Las funciones de administración y operaciones siguen pendientes; no se presentan como disponibles.

## Tecnología y requisitos

- Node.js `^20.19.0 || >=22.12.0`.
- pnpm `12.11.2`, fijado en el `package.json` de la raíz.
- React `19.3.0` y TypeScript `6.0.3`.
- Vite `8.3.4` y Tailwind CSS `4.3.3`, integrado con `@tailwindcss/vite`.

## Instalación y ejecución

En este Codespace, pnpm está instalado en `$HOME/.local/share/pnpm/bin/pnpm`. Usa esa ruta completa para no depender de cambios en los archivos de inicio del shell.

Para reproducir la instalación en otro Codespace, con Node.js `22.13` o posterior, ejecuta desde cualquier carpeta:

```sh
npm install --global --prefix "$HOME/.local/share/pnpm" pnpm@12.11.2
"$HOME/.local/share/pnpm/bin/pnpm" --version
```

Desde la raíz del repositorio, instala las dependencias del workspace:

```sh
"$HOME/.local/share/pnpm/bin/pnpm" install --frozen-lockfile
```

Desde `uis/backoffice`, inicia el servidor de desarrollo:

```sh
"$HOME/.local/share/pnpm/bin/pnpm" dev
```

Vite muestra la dirección local al arrancar. El puerto predeterminado es `5173`; si está ocupado, Vite elige otro disponible.

Desde `uis/backoffice`, compila la aplicación:

```sh
"$HOME/.local/share/pnpm/bin/pnpm" build
```

## Comprobaciones

Ejecutadas: `pnpm install --frozen-lockfile` y `pnpm -r build` desde la raíz; servidor iniciado con `pnpm --filter backoffice dev --host 0.0.0.0` desde la raíz y respuesta HTTP comprobada en el puerto `5174`.

No se configuró ni ejecutó un linter en esta base mínima.
