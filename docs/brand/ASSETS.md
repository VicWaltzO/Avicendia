# Activos de marca de Avicendia

**Avicendia** · **Control, análisis e inteligencia avícola.**

Familia visual: «Ritmo de Datos», ave + datos + ciclo. Dirección: minimalismo cálido, geometría clara y espacio libre alrededor de la marca. El nombre conserva un solo color en cada variante.

## Procedencia y estado

La fuente es el paquete suministrado `AVICENDIA_BRAND_ASSETS_v1.0.0.zip`, fechado el 16 de octubre de 2026. SHA-256: `37277e971d28551cbb2730f1f8493d3bf8ecac7bf640500965bb6f46499bfd1d`. Se consultaron su guía, manifiesto, decisiones, procedencia, informe de validación e incidencias antes de seleccionar activos.

**Entrega técnica parcial, en revisión de identidad.** Los contornos fueron reconstruidos desde raster; no se recuperaron las curvas ni la fuente originales. La paleta fue normalizada al manual y difiere del PNG de referencia. Su uso en esta portada es una propuesta revisable, no una aprobación comercial, registral o jurídica.

El ZIP, la evidencia raster original, los PDF, las comparativas y los informes internos no forman parte de este conjunto público. Los dos SVG de identidad se copian sin alterar su contenido; los banners reutilizan sus trazados en una composición editorial propia.

## Paleta Inferno Cálido Suave

| Color | HEX | Uso |
|---|---|---|
| Terracota | `#B23A1A` | Primario y detalle discreto sobre claro |
| Coral | `#F15A24` | Secundario del símbolo |
| Ámbar | `#FF9F3D` | Acento del símbolo |
| Amarillo suave | `#FFE082` | Luz y detalle discreto sobre oscuro |
| Marfil | `#FFFAE9` | Fondo claro |
| Carbón | `#1A1A1A` | Texto claro y fondo oscuro |
| Blanco | `#FFFFFF` | Nombre y eslogan sobre oscuro |

El degradado del símbolo conserva los stops 0/36/72/100 % del paquete. Las posiciones y los ángulos de esa reconstrucción siguen pendientes de validación. No añadir azul, verde o violeta a la identidad corporativa ni colorear por separado las letras «IA».

## Archivos seleccionados

| Archivo | Uso |
|---|---|
| [avicendia-isotipo.svg](../../assets/branding/avicendia-isotipo.svg) | Símbolo de referencia en color, extraído sin cambios |
| [avicendia-imagotipo.svg](../../assets/branding/avicendia-imagotipo.svg) | Símbolo y nombre, extraídos sin cambios |
| [hero-light.svg](../../assets/branding/readme/hero-light.svg) | Banner horizontal 1600 × 520 sobre Marfil |
| [hero-dark.svg](../../assets/branding/readme/hero-dark.svg) | Banner horizontal 1600 × 520 sobre Carbón |
| [hero-compact-light.svg](../../assets/branding/readme/hero-compact-light.svg) | Composición móvil 720 × 600 sobre Marfil |
| [hero-compact-dark.svg](../../assets/branding/readme/hero-compact-dark.svg) | Composición móvil 720 × 600 sobre Carbón |
| [hero-poster.png](../../assets/branding/readme/hero-poster.png) | Respaldo estático horizontal, exportado de la variante clara |
| [hero-motion-light.gif](../../assets/branding/readme/hero-motion-light.gif) | Pulso de datos horizontal sobre Marfil |
| [hero-motion-dark.gif](../../assets/branding/readme/hero-motion-dark.gif) | Pulso de datos horizontal sobre Carbón |
| [hero-motion-compact-light.gif](../../assets/branding/readme/hero-motion-compact-light.gif) | Pulso compacto sobre Marfil |
| [hero-motion-compact-dark.gif](../../assets/branding/readme/hero-motion-compact-dark.gif) | Pulso compacto sobre Carbón |

Los cuatro banners SVG son editables por grupos: fondo, detalle de datos, isotipo, nombre y eslogan. No requieren un archivo fuente adicional. La composición móvil sitúa el símbolo sobre el nombre y divide el eslogan en dos líneas conservando todos sus trazados, tildes, puntuación y proporciones de glifo. Es una composición para portada, no una nueva variante oficial del imagotipo.

## Movimiento

Un pulso cálido recorre la línea de datos y destaca tres puntos de forma suave. Dura 4,8 segundos, se reproduce una vez y vuelve al reposo. El nombre, el eslogan y el símbolo permanecen inmóviles.

Los GIF se muestran solo cuando el navegador no solicita reducir el movimiento. En los demás casos se usa la composición estática. La [guía de mantenimiento](../README_MAINTENIMIENTO.md) explica cómo comprobar esta selección y regenerar las cuatro variantes con el [generador editable](../../scripts/render-readme-motion.cjs). El generador trabaja a partir de los SVG finales, sin volver a dibujar la marca.

El GIF tiene una paleta indexada: puede presentar pequeñas diferencias de color frente al SVG. El SVG sigue siendo la referencia de geometría y color. Esta versión se comprobó directamente en GitHub en doce combinaciones de tamaño, tema y preferencia de movimiento. El reporte conserva la evidencia y sus límites; esa prueba no cubre todos los dispositivos ni las opciones particulares de cada cuenta.

## Tipografía, contraste y uso

El nombre y el eslogan conservan los contornos suministrados. **No se sustituyen por Inter.** Inter sigue siendo una recomendación de interfaz del manual; no se redistribuye ninguna fuente. Editar los nodos de una letra cambia el activo y requiere revisión de identidad.

El texto es Carbón sobre Marfil o blanco sobre Carbón. Los detalles de bajo contraste son decorativos; no contienen estados ni instrucciones. Mantener propósito y estado también como texto accesible en el README. No estirar el símbolo, recortar la marca, añadir sombras ni recolorear letras aisladas.

Los márgenes de colocación y las reducciones se revisan visualmente en su destino. Los mínimos del manual son provisionales. Los favicon de 16–32 px pierden detalle: no se incorporan como iconos finales. Tampoco se incluyen variantes de impresión; no hay prueba física ni perfil ICC aprobado.

## Derechos y validación pendiente

No se concede una licencia nueva de marca ni se declara identificada la licencia de la fuente del raster. La disponibilidad registral, la aceptación final del vector y color, los mínimos ópticos y las condiciones de reutilización corresponden al propietario y a la revisión pertinente.

El [reporte de esta entrega](../reportes/REPORTE_DOC-README-001.md) distingue las comprobaciones técnicas ejecutadas de la aceptación humana y del render pendiente en GitHub.
