# ciberpatrullaje-redip

## Publicación en Netlify

Netlify se configura con `netlify.toml`: el comando de compilación prepara `dist/` y publica la aplicación en la raíz del sitio.

La publicación incluye la aplicación, los JSON, el Excel oficial y los reportes de `proyecto/`. También copia los Excel de la raíz a `archivos/repositorio/` y los de `responsables/` a `archivos/responsables/`.

Para publicar todos los datos, confirma y sube a GitHub los archivos de este repositorio que quieras incluir. Cada cambio en la rama conectada a Netlify activará un nuevo despliegue.

**Aviso:** los archivos dentro de `dist/` son públicos en Internet, incluidos los Excel de responsables y cualquier dato personal que contengan. No publiques información que no estés autorizado a compartir.