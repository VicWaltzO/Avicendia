# CG-011 — Reporte técnico: mapa semántico del proyecto

19 de octubre de 2026 · America/Bogota · Fase 00 · MVP · Riesgo R0.

**Estado: VALIDADA TÉCNICAMENTE EN SU ALCANCE DOCUMENTAL; aceptación externa pendiente.** No se declara completada ni se acredita software del SaaS, investigación de campo o piloto ejecutado.

## Objetivo y alcance

Representar Avicendia mediante un mapa compacto, horizontal y editable: propósito, problema hipotético, ocho módulos, relaciones funcionales y estados por capacidad. Se añade DOCUMENTADO a IMPLEMENTADO / PLANIFICADO / EXPERIMENTAL para evitar equiparar especificaciones con funciones disponibles.

La referencia original CG-011 pide un mapa visual editable comprensible sin descripciones extensas. El encargo vigente concreta ocho grupos, separación documental, SVG, preferencia por tldraw y verificación visual. Se conserva ese alcance con la alternativa SVG editable expresamente permitida. No se modifica README, roadmap, documentación anterior, arquitectura ni código de producto. No se inicia CG-012.

## Preparación y fuentes

Se inspeccionaron rama, estado Git, archivos e instrucciones locales; se aplicó control-granja-engineering con ejecución adaptativa, Git, QA y revisión de legibilidad/diff proporcional a R0. Se consultó el contrato original CG-011 en el catálogo local sin publicarlo ni modificarlo. Se revisaron los documentos públicos CG-002 a CG-010: tesis, cliente hipotético, guía/formato de entrevistas, flujo diario, inventario de soportes, glosario, ejemplo sintético, diccionario diario, metodología y plantilla del piloto; también sus límites de validación y reportes pertinentes.

`git fetch origin` actualizó la referencia pública de 73f2518 a **6b484af**. `git merge-base --is-ancestor 73f2518 origin/main` terminó con salida 0: CG-010 está integrada. Se creó `codex/CG-011-mapa-semantico-proyecto` desde `origin/main` actualizado en un worktree aislado. No se cambió la rama de preparación original ni la rama main local usada por otro worktree. Se preservaron los documentos y el branding locales sin seguimiento.

Se consultaron las convenciones públicas `docs/brand/ASSETS.md` y la documentación de estado del paquete local de marca. La identidad reconstruida y sus colores siguen sujetos a revisión. El mapa usa únicamente blanco y carbón, sin logotipos reconstruidos, degradados ni nuevas variantes de marca. La etiqueta AVICENDIA no sustituye al activo de identidad.

## Entregables, herramienta y editabilidad

| Archivo | Resultado |
|---|---|
| [MAPA_SEMANTICO_AVICENDIA.svg](../00-producto/MAPA_SEMANTICO_AVICENDIA.svg) | Fuente y exportación vectorial 1600 × 1130; ocho grupos `modulo-*`, núcleo, leyenda y conexiones independientes; 95 elementos de texto seleccionable. |
| [MAPA_SEMANTICO_PROYECTO.md](../00-producto/MAPA_SEMANTICO_PROYECTO.md) | Vista incrustada, leyenda, significado de relaciones, fundamento por módulo, límites, edición y política de actualización. |
| Este reporte | Alcance, aceptación, evidencia real, riesgos y estado de entrega. |

Se elaboró SVG XML con herramientas locales, sin añadir dependencias al proyecto. Se renderizó con sharp/librsvg y posteriormente con Playwright sobre Edge en un contexto temporal aislado. Los scripts y PNG de comprobación permanecen temporales e ignorados; no son nuevos formatos de entrega.

Se aplicó la skill tldraw y se comprobó el conector: `list_workspaces` respondió y `create_board` creó un tablero vacío. `open_board` solicitó abrir la vista, pero `list_open_boards` devolvió `loading: true` sin tableros y dos llamadas `exec` devolvieron “That board is not open”. No se dibujó en ese tablero ni se verificó importación/exportación nativa. **No existe `.tldr` entregado.** Se utiliza la alternativa SVG permitida; no se simula compatibilidad con tldraw.

La editabilidad se comprobó cambiando el título de captura en el DOM SVG, serializándolo a una copia temporal, reabriéndolo y verificando el texto cambiado. La fuente de entrega conserva el título original. Nodos y textos son independientes; las flechas son trazados que requieren ajustar extremos manualmente al mover una tarjeta. No se probó una interfaz de Inkscape, ausente en la ruta comprobada.

## Relaciones, estados y límites de evidencia

La fila principal enlaza captura, producción, trazabilidad y analítica; la cadena escrita explicita información operativa, reportes y decisiones. Las flechas continuas son relaciones conceptuales documentadas. Una flecha discontinua IoT → captura identifica la hipótesis técnica. IA asistiría la revisión y comunicación serviría alertas y consultas. Administración representa contexto de gestión y autorización; la distribución visual no define servicios ni una topología.

Las letras D/P/E se asignan por línea. I aparece únicamente en la leyenda con “ninguno”: no se acredita capacidad ejecutable del SaaS. D representa conceptos y procedimientos descritos, no aceptación de campo. P representa futuras capacidades de registro, consulta, procesamiento y comunicación. E conserva como investigación IoT, predicción y el alcance comercial/integraciones todavía por precisar. ESP32 y LoRa proceden de la solicitud CG-011; no se presentan como dispositivos instalados ni decisiones técnicas aprobadas.

La tabla de fundamento del documento enlaza cada familia con CG-002–CG-010 y distingue propuestas del encargo de antecedentes documentales. OCR no confirma hechos; WhatsApp no es integración disponible; ausente no equivale a cero; organización no equivale a empresa; el piloto no se ejecutó. CG-008 continúa siendo ficticio y su reproducción cuantitativa histórica exacta permanece pendiente. No se utilizan fuentes operativas privadas ni métricas inventadas.

## Comandos y verificaciones reales

| Comprobación | Resultado y alcance |
|---|---|
| `git status --short`, rama, worktrees, árbol público y `git fetch origin` | Inspección realizada; primer fetch denegado por permisos del sandbox, reejecutado con autorización del entorno y salida 0. |
| `git merge-base --is-ancestor 73f2518 origin/main` | Salida 0; integración de CG-010 acreditada. |
| `git worktree add -b codex/CG-011-mapa-semantico-proyecto … origin/main` | Salida 0; base 6b484af y copia aislada limpia antes de crear entregables. |
| Generación SVG y render sharp/librsvg | Salida 0; PNG temporal 1600 × 1130. Primera inspección detectó títulos demasiado anchos; se redujo su tamaño antes de la revisión final. |
| Playwright, primer intento | FAIL del entorno: Chromium incluido no tenía ejecutable instalado. No se descargó otro navegador. |
| Playwright con Edge, dentro del sandbox | FAIL del entorno: el navegador se cerró al inicializar su perfil temporal. |
| Playwright con Edge, ejecución autorizada fuera del sandbox | PASS, salida 0: ocho módulos, 95 textos, lista de desbordamientos vacía y edición/serialización/reapertura confirmada. |
| Límites geométricos mediante `getBBox()` | Todos los textos de tarjetas dentro de sus rectángulos con margen de al menos 8 unidades; todos los textos dentro del lienzo. No sustituye la inspección visual. |
| Inspección visual de PNG finales | Realizada a 1600 × 1130 y 1000 × 707: sin títulos cortados ni superposiciones observadas; grupos y leyenda reconocibles al reducir. Revisadas las tres conexiones principales y la flecha IoT hacia captura. |
| XML, referencias internas, estados, enlaces Markdown y privacidad focalizada | PASS: XML válido, 15 ID únicos y referencias SVG resueltas; 13 líneas D, 13 P, 6 E y ninguna I; 34 enlaces locales válidos; UTF-8 y revisión focalizada sin hallazgos en los tres archivos. |
| Diff real y `git diff --cached --check` | PASS: diff leído de los tres archivos nuevos y salida 0 del control de whitespace. Se comprobaron los siete criterios de legibilidad proporcionalmente a R0; sin cambios previos ni código del SaaS. |

No se ejecutan builds, pruebas del SaaS, entrevistas, capturas reales, pruebas físicas o mediciones del piloto. No se acredita importación de `.tldr`, edición en Inkscape ni renderizado directo en la interfaz de GitHub. Las capturas temporales no contienen datos operativos. La lectura en menos de un minuto requiere validación por un lector externo; la inspección del ejecutor no la sustituye.

## Matriz de aceptación

| # | Criterio del encargo | Resultado |
|---|---|---|
| 1 | Mapa semántico visual | PASS técnico: SVG renderizado. |
| 2 | Realmente editable | PASS SVG: texto y grupos independientes, edición persistida en copia; sin conectores automáticos ni `.tldr`. |
| 3 | Principales módulos | PASS: ocho módulos identificados. |
| 4 | Leyenda implementado/planificado/experimental | PASS: I/P/E visibles; ninguna capacidad marcada I. |
| 5 | Documentación funcional diferenciada | PASS: D por capacidad y definición explícita. |
| 6 | Estados con evidencia | PASS documental: tabla de fundamento; propuestas técnicas identificadas como tales. |
| 7 | Conexiones comprensibles | Verificadas por el ejecutor; comprensión externa pendiente. |
| 8 | Diseño compacto | PASS visual del ejecutor a dos tamaños; prueba de comprensión en menos de un minuto pendiente. |
| 9 | SVG visualizable | PASS: sharp/librsvg y Edge; GitHub directo no ensayado. |
| 10 | Documentos y recursos enlazados | PASS: 34 enlaces locales resueltos por el verificador documental. |
| 11 | Sin funciones inexistentes afirmadas | PASS para contenido revisado: estados futuros, I ninguno y límites visibles. |
| 12 | Coherencia CG-002–CG-010 | PASS documental, preservando sus hipótesis y pendientes. |
| 13 | Sin material privado | Revisión focalizada de los tres archivos; sin datos reales, marca privada ni documentos internos incorporados. No es certificación universal de privacidad. |
| 14 | Limitaciones de herramientas/formato | PASS: fallo de conexión tldraw, alternativa SVG y alcance de pruebas declarados. |

## Riesgos, revisión y detención

Pendientes humanos: comprensión rápida por un lector ajeno, aceptación de agrupaciones y estados, revisión visual/identidad y comprobación directa en GitHub. Las propuestas experimentales no autorizan implementación. Un cambio de fuente de sistema puede alterar las métricas del texto: revisar el SVG al editarlo y al abrirlo en otra herramienta. Su carácter horizontal favorece escritorio; en móvil puede requerir ampliar la imagen.

No hay datos, migraciones, actuadores o producción afectados. La reversión consiste en retirar estos tres archivos. Se mantiene **validada técnicamente en alcance documental, en revisión externa, sin aceptación final**. No se fusiona el PR ni se especifica o inicia la siguiente tarea.

## Constancia Git final

Rama publicada: `codex/CG-011-mapa-semantico-proyecto`. Base de creación: `6b484af`. Commit de entregables: **973e55fac1b3f8fc70d17a18d4c954ab63d1de49**, `feat(00): dibujar-mapa-semantico-del-proyecto (CG-011)`.

`git clone --no-local --single-branch --branch codex/CG-011-mapa-semantico-proyecto …` creó una copia limpia local. El verificador documental volvió a pasar: ocho módulos, 95 textos, 15 ID, estados 13 D / 13 P / 6 E y 34 enlaces locales; estado Git limpio. Esa comprobación corresponde al commit 973e55f y precede a esta constancia.

El push normal de la rama terminó con salida 0. Un fetch posterior recuperó 973e55f desde origin; autor y committer corresponden a la identidad noreply aprobada en ambos campos, y el diff entre cabeza local y remota estaba vacío. El [PR #13](https://github.com/VicWaltzO/Avicendia/pull/13) se creó hacia `main`: GitHub confirmó un commit, tres archivos nuevos, estado abierto y `merged: false`. Se adjuntó a este chat.

Durante el trabajo, main avanzó por una tarea concurrente de presentación a `618bc68651279466569264b27b0f372a579bbfb0`. Se inspeccionaron sus rutas: GIF, mantenimiento de portada, convenciones de marca, generador y reporte de esa otra tarea; no modifica los tres entregables CG-011 ni introduce software del SaaS. No se integró ni reescribió trabajo concurrente. La base original de CG-011 permanece declarada.

La revisión automática rechazó un comando inicial de commit por incluir una opción que deshabilitaría hooks. Ese comando no se ejecutó; se retiró la opción y el commit normal pasó manteniendo los hooks configurados. También rechazó inicialmente crear el PR por considerar ausente la autorización: se comprobó la instrucción expresa de la sección 15 del encargo y el reintento autorizado creó el PR. No quedó una aprobación bloqueada ni se usaron vías alternativas para omitir controles.

Esta constancia se publica mediante un commit documental adicional con identidad noreply, sin cambiar el SVG ni la guía. Su SHA y la cabeza vigente se consultan en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/13/commits); no se inserta un hash autorreferente. Se revisa su diff, se repite el verificador documental y el control de whitespace antes del commit. El cierre permanece **en revisión externa, sin aceptación final**. No se fusiona ni se inicia CG-012.
