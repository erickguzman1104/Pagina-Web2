# MAC - El Monumento del Aluminio y Cristal SRL

## Función de la página

Página web corporativa de **MAC SRL**, empresa ubicada en La Romana, República Dominicana, dedicada a la fabricación e instalación de puertas, ventanas, barandas y cerramientos en aluminio y cristal.

El sitio tiene como función:
- Presentar la empresa y su propuesta de valor.
- Mostrar los servicios ofrecidos y trabajos realizados.
- Facilitar el contacto directo con clientes potenciales mediante WhatsApp, teléfono, correo y un formulario integrado.
- Mostrar la ubicación del negocio a través de un mapa embebido.

## Cómo está hecha

Sitio estático desarrollado con tecnologías web nativas, sin frameworks ni dependencias de build:

- **HTML5** — estructura semántica del contenido (`index.html`).
- **CSS3** — estilos, diseño responsivo, animaciones, Flexbox y Grid (`styles.css`).
- **JavaScript (vanilla)** — interacciones como el menú móvil, scroll suave, botón de subir, envío del formulario a WhatsApp y efectos al hacer scroll (`script.js`).
- **Font Awesome** — iconografía (vía CDN).
- **Google Fonts** — tipografías *Montserrat* y *Poppins* (vía CDN).
- **Google Maps** — mapa embebido con la ubicación del negocio.

### Estructura de archivos
```
Pagina-Web2/
├── index.html      # Estructura y contenido del sitio
├── styles.css      # Estilos y diseño responsivo
├── script.js       # Lógica e interacciones
├── assets/
│   └── logo.png    # Logo del negocio (header, footer y favicon)
└── README.md
```

### Cómo abrir el sitio
Basta con abrir `index.html` en el navegador. Para desarrollo con recarga automática se puede usar la extensión **Live Server** de VS Code.
