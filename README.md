# Clon de Google

Clon de la página de inicio de Google hecho con HTML, CSS y JavaScript.

## Funcionalidad

- Al escribir en la barra y presionar **Enter**, o dar clic en **Buscar con Google** o **Voy a tener suerte**, redirige a `https://google.com/search?q=<búsqueda>`.
- Las búsquedas vacías no se envían.
- Botón ✕ para borrar el texto de la barra.
- Menú de aplicaciones de Google (se cierra al dar clic fuera o con `Esc`).
- Búsqueda por voz con la Web Speech API (Chrome y Edge).
- Diseño adaptable a celular.

## Cómo verlo

Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8765
```

y entra a http://localhost:8765.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: estilos.
- `script.js`: lógica de búsqueda, menú de apps y búsqueda por voz.
