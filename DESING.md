---
name: L'Étoile Fraternelle
colors:
  surface: '#fef9ef'
  surface-dim: '#dedad0'
  surface-bright: '#fef9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3e9'
  surface-container: '#f2ede3'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e7e2d8'
  on-surface: '#1d1c16'
  on-surface-variant: '#514445'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e6'
  outline: '#837374'
  outline-variant: '#d5c2c3'
  surface-tint: '#805258'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#321116'
  on-primary-container: '#a9767c'
  inverse-primary: '#f2b7be'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f0400'
  on-tertiary-container: '#d1634e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#f2b7be'
  on-primary-fixed: '#321116'
  on-primary-fixed-variant: '#653b40'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a5'
  on-tertiary-fixed: '#3f0400'
  on-tertiary-fixed-variant: '#812818'
  background: '#fef9ef'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d8'
  bg-obsidian: '#140407'
  book-leather: '#2B0B11'
  page-parchment: '#F7F2E8'
  surface-subtle: '#EFE7D8'
  surface-polaroid: '#FFFDF9'
  gold-primary: '#D4AF37'
  gold-light: '#F3E5AB'
  gold-dark: '#AA7C11'
  copper-ember: '#9E3D2B'
  copper-hover: '#863223'
  stamp-red: '#A83232'
  sage-green: '#3A7D5E'
  washi-tape: '#EAD9B8'
  laton-clip: '#C5A059'
  text-primary: '#26181A'
  text-secondary: '#5C474A'
  text-muted: '#8A7578'
  text-light: '#F7F2E8'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  script-body:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Design System: L'Étoile Fraternelle (Recetario Álbum & Cartas)

## 1. Brand Identity & Visual Language
Un recetario fraternal de alta cocina que rinde homenaje a la amistad y los fogones compartidos. La estética equilibra el rigor editorial de la Guía Michelin con la calidez táctil de un álbum de recuerdos artesanal: encuadernación en cuero borgoña, páginas en papiro marfil, fotografías polaroid sujetas con washi tape, cartas personales con clip de latón y tipografía serifa de gran elegancia.

---

## 2. Color Palette & Tokens

### Primary Palette (Atmósfera & Estructura)
- **Obsidian Burgundy (`--bg-obsidian`)**: `#140407` — Lienzo exterior, atmósfera nocturna de cocina.
- **Aged Leather (`--book-leather`)**: `#2B0B11` — Encuadernación de cuero, lomo central y barra superior de navegación.
- **Classic Parchment (`--page-parchment`)**: `#F7F2E8` — Superficie de lectura de las hojas del álbum y recetario.
- **Toasted Parchment (`--surface-subtle`)**: `#EFE7D8` — Contenedores de tarjetas de ingredientes, pasos y secciones secundarias.
- **Polaroid White (`--surface-polaroid`)**: `#FFFDF9` — Papel fotográfico polaroid y fondo de carta manuscrita.

### Accent & Metallic Tokens
- **Imperial Gold Foil (`--gold-primary`)**: `#D4AF37` — Ribetes dorados, esquineras, estrellas Michelin, folios y glow decorativo.
- **Soft Gold Light (`--gold-light`)**: `#F3E5AB` — Reflejos y gradientes de pan de oro.
- **Dark Brass Gold (`--gold-dark`)**: `#AA7C11` — Sombras de grabado dorado y acentos en bajorrelieve.
- **Copper Ember / Terracota (`--copper-ember`)**: `#9E3D2B` — Botones de llamada a la acción principal (`Continuar el Álbum`), acentos cálidos de brasa.
- **Copper Hover (`--copper-hover`)**: `#863223` — Estado interactivo del botón principal.
- **Fraternal Stamp Red (`--stamp-red`)**: `#A83232` — Tinta vintage de sello postal y etiquetas autenticadas.
- **Sage Kitchen Green (`--sage-green`)**: `#3A7D5E` — Indicadores de estado de trinchera culinaria, tags activos y validaciones.
- **Washi Tape Cream (`--washi-tape`)**: `#EAD9B8` — Tiras de cinta adhesiva con textura semi-translúcida.
- **Brass Clip (`--laton-clip`)**: `#C5A059` — Clips metálicos dorados.

### Typography Colors (Tinta Gastronómica)
- **Ink Primary (`--text-primary`)**: `#26181A` — Títulos editoriales principales, encabezados y cifras.
- **Ink Secondary (`--text-secondary`)**: `#5C474A` — Texto corrido de recetas, notas editoriales y leyendas.
- **Ink Muted / Meta (`--text-muted`)**: `#8A7578` — Folios, subtítulos técnicos y separadores.
- **Ink Light (`--text-light`)**: `#F7F2E8` — Textos sobre fondos oscuros (cabecera de cuero y barra superior).

---

## 3. Typography Hierarchy

- **Title & Gourmet Headers**: *Playfair Display* o *Cormorant Garamond* (Serif).
  - Folio & Categoría: 11px uppercase, tracking-widest, font-medium (`#8A7578`).
  - Título Receta: 24px - 28px, font-bold, tracking-tight (`#26181A`).
- **Body & UI**: *Inter* o *Plus Jakarta Sans* (Sans-serif).
  - Texto de ingredientes y preparación: 13px - 14px, leading-relaxed (`#5C474A`).
  - Navegación superior y botones: 12px - 13px, font-semibold.
- **Personal Letters & Memories**: *Caveat* o *Nanum Pen Script* (Cursive / Manuscrita).
  - Cartas íntimas y notas de polaroid: 16px - 18px, tilt -1.5deg (`#26181A`).
- **Tickets & Metadata**: *JetBrains Mono* (Monospace).
  - Códigos de comanda, tags de fecha y folios técnicos: 10px - 12px uppercase.

---

## 4. Component Patterns & Styling

### Book & Page Frame
- Marco exterior de cuero con reborde fino dorado metálico (`border: 1px solid rgba(212, 175, 55, 0.4)`).
- Lomo central con sombra interior (`box-shadow: inset 10px 0 15px -8px rgba(0,0,0,0.35)`).
- Esquinas protectoras en ángulo con filetes dorados ornamentales.

### Polaroid & Scrapbook Elements
- Tarjeta polaroid blanca con `box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15)` y rotación sutil (`transform: rotate(-2deg)`).
- Washi tape superior con textura y opacidad de 85%.
- Sello postal con rotación y borde punteado en rojo carmín envejecido.

### Buttons & Interactive Badges
- **Primary CTA**: Fondo terracota cobre (`#9E3D2B`), esquinas redondeadas (8px), texto blanco cálido, sombra profunda.
- **Secondary CTA**: Fondo papiro tostado (`#EFE7D8`), borde fino y texto tinta carbón.
- **Chapter Tabs**: Pastillas con borde de pan de oro y fondo dorado translúcido para el capítulo activo.
