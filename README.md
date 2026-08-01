# Radio Party Valencia

Sitio web estático para radio online, listo para desplegar en **GitHub Pages** o cualquier hosting estático.

## Contenido
- `index.html` - la web pública de la radio
- `admin.html` - panel de administración local (ábrelo con doble clic)
- `config.json` - configuración de la web (colores, logos, textos, programación, stream, etc.)
- `manifest.json` + `sw.js` - PWA (instalable en móvil / escritorio)
- `css/`, `js/`, `assets/`, `icons/`

## Uso rápido

### 1. Personalizar tu web
1. Abre `admin.html` en tu navegador (doble clic o arrastra al navegador).
   - Aviso: en algunos navegadores, para que el admin pueda **leer** `config.json` al abrirlo con `file://`, tal vez tengas que servir la carpeta con un pequeño servidor local: `python3 -m http.server 8000` y luego `http://localhost:8000/admin.html`.
2. Modifica colores, logos, programas, noticias, parrilla, redes, etc.
3. Pulsa **Descargar config.json**.
4. Reemplaza el `config.json` de tu carpeta con el descargado.

### 2. Subir a GitHub Pages
1. Crea un repositorio en GitHub (por ejemplo `radio-party-valencia`).
2. Sube todos los archivos de esta carpeta al repo.
3. Ve a **Settings > Pages** y activa GitHub Pages en la rama `main` / carpeta `/root`.
4. Tu web estará en `https://TU-USUARIO.github.io/radio-party-valencia/`.

### 3. Instalación como app (PWA)
Cuando la web se abre desde HTTPS (GitHub Pages ya te da HTTPS), aparecerá un botón **"Instalar app"** en la cabecera. Los usuarios podrán instalarla en su móvil o escritorio como una app nativa.

### 4. Compartir en redes
El `index.html` ya incluye meta-tags Open Graph y Twitter Card, así que al pegar la URL en WhatsApp, Facebook, Twitter, etc., aparecerá la imagen, el título y la descripción.

Para personalizar la imagen de vista previa:
- Sube tu imagen (recomendado **1200x630px**) como `assets/og-image.jpg`.
- O cambia la ruta desde el admin en "Datos del sitio > Imagen de vista previa".

### 5. Iconos y logos
Coloca en `assets/` tu:
- `logo.png` (transparente, alto ~120px)
- `og-image.jpg` (1200x630, para compartir)
- `cover.jpg` (carátula del player)
- `hero-bottom.jpg` (imagen de fondo de la portada)

Coloca en `icons/` tu:
- `favicon.png` (64x64)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

### 6. Seguridad
En el admin, sección **Seguridad**, puedes activar:
- Bloquear clic derecho
- Bloquear F12, Ctrl+U, Ctrl+Shift+I (inspector)
- Bloquear selección de texto

⚠️ **Importante:** ninguna medida JavaScript impide al 100% ver el código. Son medidas disuasorias contra el usuario medio.

## Stream de radio
La URL del streaming se configura desde `admin.html > Streaming`. Por defecto viene configurada la tuya:
`https://miestacion.turadioonline.com.ar:8286/stream`

---
© 2025 Radio Party Valencia
