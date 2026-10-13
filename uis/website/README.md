# Website de Nexova Solutions

## Propósito y estado

Sitio web público de Nexova para empresas visitantes interesadas en sus servicios de selección, outsourcing de equipos de soporte al cliente y formación corporativa, según [`CONTEXT.md`](../../CONTEXT.md).

Por ahora solo está implementada la base de la aplicación con el nombre Nexova Solutions. La página única, su navegación entre secciones y el contenido completo están pendientes. No se publican problemas internos ni se presentan capacidades pendientes como disponibles.

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

Desde `uis/website`, inicia el servidor de desarrollo:

```sh
"$HOME/.local/share/pnpm/bin/pnpm" dev
```

Vite muestra la dirección local al arrancar. El puerto predeterminado es `5173`; si está ocupado, Vite elige otro disponible.

Desde `uis/website`, compila la aplicación:

```sh
"$HOME/.local/share/pnpm/bin/pnpm" build
```

## Comprobaciones

Ejecutadas: `pnpm install --frozen-lockfile` y `pnpm -r build` desde la raíz; servidor iniciado con `pnpm --filter website dev --host 0.0.0.0` desde la raíz y respuesta HTTP comprobada en el puerto `5173`.

No se configuró ni ejecutó un linter en esta base mínima.
