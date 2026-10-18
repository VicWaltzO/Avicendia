# Mantenimiento del README de Avicendia

La portada debe ayudar a entender qué es Avicendia y en qué punto está. Los detalles y las pruebas de cada entrega quedan en sus documentos. Antes de cerrar una tarea `CG-###` o un cambio transversal, revisa si el README necesita ponerse al día; no hace falta cambiarlo solo para dejar constancia de actividad.

## Revisar el impacto en cada entrega

1. Leer el contrato vigente, el cambio real y el reporte correspondiente en `docs/reportes/`. Si el reporte aún no existe, registrarlo y redactar únicamente la evidencia del trabajo realizado; no inferir aceptación.
2. Comprobar si cambian capacidades disponibles, instalación, arquitectura, contratos públicos, seguridad, estado comercial, marca, licencia o hitos formalmente aceptados.
3. Si cambian esos hechos, actualizar [README.md](../README.md) y la documentación afectada en la misma rama. Enlazar evidencia publicable y verificable.
4. Si no cambian, consignar en el reporte `README: sin cambios; motivo: ...`, con un motivo concreto.
5. Revisar enlaces, activos, privacidad y diff antes de entregar. La persona responsable de revisar la tarea determina su aceptación; el ejecutor no la presupone.

Un refactor interno, una prueba adicional o una rama aún en revisión no obliga a renovar la portada. Un primer prototipo ejecutable sí exige explicar qué funciona y cómo reproducirlo.

## Fuentes y estados

- `docs/reportes/` documenta qué se realizó, cómo se verificó y qué reservas quedaron. Consultar su versión, contrato y evidencia de aceptación; no copiar su contenido completo al README.
- Comprobar por separado si el incremento está integrado en `main`, si recibió aceptación formal y si existe una capacidad utilizable. Un merge no resuelve automáticamente los otros dos puntos.
- Usar `Planificado` para software previsto, `En desarrollo` para implementación en curso comprobada y `Validado` solo con aceptación atribuible, prueba reproducible y disponibilidad demostrada en la versión descrita. Precisar siempre si es validación documental, de prototipo o comercial.
- Ante fuentes contradictorias o aceptación ausente, indicar `Por verificar` o `En revisión`; conservar los reportes históricos. No sustituir un estado desconocido por cero.
- Enlazar solo archivos versionados y saneados del mismo conjunto de entrega. Los documentos locales privados no son destinos públicos.

## Progreso público

Mientras no exista una fuente pública auditable de aceptación, mantener **«Progreso pendiente de consolidación»**. No contar archivos, commits, PR ni checks como tareas aceptadas. No publicar `0/240` como sustituto de una cifra desconocida.

El catálogo local de 240 tareas es una referencia evolutiva. Un futuro total debe identificar la versión y el alcance de planificación aplicables. Si se incorpora un índice, debe derivarse de reportes y aceptaciones verificables; no crear un segundo registro manual de avances. Actualmente no hay contador, índice derivado ni generador que sincronizar.

## Activos y comprobación visual

La geometría de la marca se mantiene en [los SVG editables de portada](../assets/branding/readme/), sin fuentes incrustadas, scripts ni imágenes externas. Los SVG finales son sus propias fuentes; no hace falta duplicarlos como `hero-source.svg`.

El elemento `<picture>` elige la versión clara u oscura y una composición compacta hasta 600 px de viewport. Si el navegador indica `prefers-reduced-motion: no-preference`, carga el GIF correspondiente. Con movimiento reducido, o sin soporte para esa preferencia, conserva el SVG estático. El PNG sigue siendo el respaldo final. Esta selección depende del viewport del navegador, no del ancho aislado de una columna.

La animación mueve solo el detalle de datos, durante 4,8 segundos y una única vez. El símbolo y las letras se mantienen quietos; al terminar, el banner vuelve al reposo. Evitar bucles infinitos, parpadeos y movimientos del texto.

Tras una modificación visual:

1. Exportar `hero-poster.png` desde `hero-light.svg` a 1600 × 520 px, sin ampliar un PNG previo. Puede usarse un editor o renderizador SVG; registrar herramienta y versión reales.
2. Comprobar las cuatro variantes SVG estáticas y el respaldo: sin scripts, fuentes incrustadas, recursos externos ni metadatos personales.
3. Inspeccionar 320, 768 y 1280 px en claro y oscuro: imágenes cargadas, símbolo reconocible, nombre y eslogan legibles, sin recortes ni distorsión. Revisar también una columna estrecha en escritorio si cambia el diseño.
4. Comprobar el README en GitHub cuando el cambio esté autorizado y publicado. Una captura local no acredita compatibilidad de GitHub. Registrar `PARTIAL` si falta esta prueba.
5. Probar cada tema y tamaño con movimiento normal y reducido. Con movimiento normal, observar el pulso y comprobar que se detiene. Con movimiento reducido, verificar que se selecciona un SVG. Mantener alt descriptivo y el propósito/estado del producto como texto Markdown. El texto normal debe alcanzar contraste de al menos 4,5:1.

Los GIF se regeneran con `node scripts/render-readme-motion.cjs` desde el repositorio. El [generador](../scripts/render-readme-motion.cjs) usa Node y `sharp >= 0.34.3`, disponibles en el entorno de herramientas; no son dependencias de la aplicación. Si ese entorno no tiene sharp, hay que prepararlo aparte antes de ejecutar el comando. El script solo escribe los cuatro GIF dentro de `assets/branding/readme/`.

Objetivos de peso: cada SVG por debajo de 350 KiB, el PNG por debajo de 700 KiB y cada GIF por debajo de 2 MiB. Después de regenerarlos, comprobar duración, reproducción única y que el movimiento quede limitado a la línea de datos.

La estructura de `<picture>` se basa en la [documentación de GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github#adding-an-image-to-suit-your-visitors). En cada entrega, registrar qué se comprobó realmente allí y mantener explícita cualquier verificación pendiente.

GitHub admite GIF y tiene [ajustes propios para el movimiento](https://docs.github.com/en/account-and-profile/how-tos/account-settings/managing-accessibility-settings). El README no puede leer esos ajustes: utiliza la preferencia que expone el navegador. Por eso hay que comprobar también el resultado en GitHub, sin asumir que una prueba local cubre todas sus opciones.

## Revisión y entrega

Comprobar que las rutas relativas y los anclajes resuelven. Leer `git diff`, el staged si existe y cada archivo nuevo; ejecutar `git diff --check`. Revisar los commits nuevos antes de una publicación autorizada, además del árbol final. Mantener el ZIP, las comparativas y los insumos privados fuera del conjunto publicable.

Registrar cambios, comandos y resultados reales, evidencia visual y comprobaciones pendientes. No ejecutar builds ficticios cuando aún no hay aplicación. Un cambio de README no acredita aceptación de tareas anteriores ni autoriza publicar, fusionar o configurar el repositorio.
