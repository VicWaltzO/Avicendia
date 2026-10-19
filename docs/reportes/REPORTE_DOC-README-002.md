# DOC-README-002 · Pulso y respiración del banner

Fecha: 19 de octubre de 2026. Estado: validada técnicamente en local; pendiente de revisión visual del propietario y publicación.

## Objetivo y alcance

Añadir al banner del README un pulso que recorra la línea cada 2 segundos y una respiración sutil del imagotipo. Cambio visual R1 basado en `main` (`6b484af`), en la rama local `codex/banner-pulso-respiracion`.

## Cambios

- `scripts/render-readme-motion.cjs`: pulso de 2 segundos y respiración de 4 segundos; ampliación uniforme máxima del 0,8 % del símbolo y nombre como unidad. El eslogan permanece fuera del grupo animado. GIF de 40 fotogramas a 100 ms, en bucle continuo.
- Regenerados los cuatro `assets/branding/readme/hero-motion-*.gif`: horizontal y compacto, claro y oscuro.
- Actualizadas `docs/brand/ASSETS.md` y `docs/README_MAINTENIMIENTO.md` con el comportamiento y las comprobaciones actuales.
- El README conserva su selección existente de GIF con movimiento normal y SVG estático con movimiento reducido. Los SVG originales y el PNG de respaldo no cambian.

## Verificaciones reales

- Node `v24.18.0`; `node --check scripts/render-readme-motion.cjs`: PASS.
- `node scripts/render-readme-motion.cjs`, con sharp del entorno de herramientas: PASS en las cuatro variantes. Cada GIF: 40 fotogramas, 4000 ms y repetición infinita (`loop: 0`).
- Comprobación local mediante Node, VM, assert y sharp: PASS; pulso idéntico a los 0 y 2000 ms, posiciones intermedias distintas; escala de 1 a 1,008 y vuelta a 1 a los 4000 ms; un único grupo de respiración; eslogan conservado fuera de ese grupo; duración, repetición y tamaño de los cuatro GIF comprobados.
- Revisión visual de un mosaico con fotogramas 0, 10 y 20 de las cuatro variantes: símbolo, nombre y eslogan legibles, sin recortes visibles.
- `git diff --check`: PASS; leído el diff completo de código/documentación y revisados los GIF generados mediante fotogramas.

| GIF | Bytes |
|---|---:|
| Horizontal claro | 1443542 |
| Horizontal oscuro | 1426328 |
| Compacto claro | 538286 |
| Compacto oscuro | 542554 |

Todos quedan por debajo del objetivo existente de 2 MiB por GIF. La respiración incrementa el peso frente a la versión anterior.

## Límites, riesgos y aceptación

No se ha publicado ni comprobado esta versión en GitHub; la inspección local de fotogramas no acredita reproducción en todos los navegadores o ajustes de accesibilidad de GitHub. La selección de movimiento reducido se conserva por inspección del README, sin nueva prueba de navegador. La aceptación estética corresponde al propietario. El GIF mantiene las limitaciones de paleta indexada ya documentadas.

No se modificaron datos, servicios, credenciales, ni activos originales de identidad. No hay cambios de aplicación ni migraciones. La reversión consiste en recuperar el generador, los cuatro GIF y los dos documentos de la base indicada.

## Git y revisión

Trabajo preparado en una copia aislada. El propietario autorizó explícitamente subir e integrar el cambio en `main` el 19 de octubre de 2026, tras recibir la previsualización animada. Esta versión del reporte se prepara para el commit de publicación; el resultado remoto y su SHA se verifican después y se comunican en la entrega. No se alteró la rama de ingeniería ni sus archivos sin seguimiento. La autorización de publicación no sustituye la comprobación visual pendiente en GitHub.
