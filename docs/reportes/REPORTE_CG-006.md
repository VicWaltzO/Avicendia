# CG-006 — Reporte técnico: levantar flujo de cartillas y mensajes

Fecha: 17 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado final: PARCIAL — validada técnicamente, en revisión externa.** Los criterios documentales se comprobaron; falta aceptación del supervisor. El inventario es hipotético y no acredita prácticas observadas, datos operativos confirmados ni capacidades implementadas.

## 1. Identificación, objetivo y alcance

Inventariar soportes que podrían registrar, transmitir o complementar información de granjas de pollos de engorde: cartillas físicas, fotografías, texto, video, mensajes de voz, archivos de audio y documentos digitales. Identificar propósito, contenido posible, procedencia, contexto, ambigüedad, riesgo, revisión y validación pendiente.

La referencia original CG-006 solicita inventariar modalidades y asociar tipo, campos, autor y ambigüedades. La solicitud vigente amplía ese alcance con remitente, temporalidad T1–T7, evidencias relacionadas, incertidumbre y ejemplos sintéticos. Se mantiene documentación R0; no se modifica el roadmap ni se implementa código del SaaS.

Se consultaron AGENTS.md de la base pública y de la preparación local, la skill control-granja-engineering, sus referencias pertinentes de ejecución adaptativa, evidencias/IA multimodal, privacidad, dominio, Git y QA, y los cinco documentos fuente de CG-002/003/004/005. El paquete privado se utiliza solo como instrucción local, sin incorporarlo al PR.

## 2. Preparación y base comprobada

CG-005 seguía abierta en el [PR #5](https://github.com/VicWaltzO/Avicendia/pull/5). Tras autorización expresa del propietario para integrarla y continuar CG-006, se fusionó su cabeza 25b2e21 mediante merge d86632c36d61afd7c0c83c382f211c899e7a64a6. Se actualizaron origin/main y main local por avance rápido y se comprobó la ascendencia de CG-005 antes de crear codex/CG-006-cartillas-mensajes.

La copia de entrega estaba limpia. Se preservaron la rama local de preparación y los archivos ajenos, incluidos branding y documentación no versionada. Se reutilizó el worktree público de Avicendia; no se trabajó sobre otro repositorio. La autorización de integración de CG-005 no incluye fusionar CG-006.

## 3. Archivos creados y resumen del inventario

| Documento | Resultado |
|---|---|
| [INVENTARIO_CARTILLAS_MENSAJES.md](../00-producto/INVENTARIO_CARTILLAS_MENSAJES.md) | Doce secciones, veinte categorías, matrices enlazadas, temporalidad, revisión, límites y ocho ejemplos sintéticos |
| Este reporte | Alcance, decisiones, aceptación, verificaciones, riesgos y trazabilidad de la entrega |

Distribución: una cartilla física, cuatro clases de documento digital, siete de fotografía, cuatro de texto, dos de video y dos de audio/voz. Son categorías documentales, no observaciones de frecuencia ni un catálogo técnico cerrado.

Cada grupo contiene dos vistas vinculadas por ID: cinco columnas para modalidad/subtipo, propósito, autor/remitente e información; seis para contexto, ambigüedades, riesgo, revisión y validación. Las diez vistas tienen como máximo siete filas de categorías; su unión conserva los doce campos requeridos sin una tabla de doce columnas.

El inventario contiene además una tabla temporal, diez situaciones de evidencias relacionadas, siete clases de incertidumbre y ocho ejemplos ficticios; catorce tablas en total y cinco enlaces relativos a las fuentes. No incluye fotos, audios, videos ni transcripciones reales o generadas.

## 4. Decisiones documentales y supuestos

- Autor original, anotador, hablante, fotógrafo/grabador y remitente pueden ser distintos; ninguno acredita automáticamente autoridad para aceptar un registro.
- Solo se considera información visible, audible o presente. Una referencia a un archivo no demuestra acceso ni disponibilidad del contenido; una imagen o escena no certifica medición, funcionamiento o causa.
- Mensaje, evidencia, interpretación, candidato, confirmación y registro son conceptos separados. Los cinco planos del audio tampoco acreditan transcripción automática ni herramientas elegidas.
- Creación del contenido, envío y recepción se distinguen de evento, disponibilidad y fecha operativa. America/Lima es referencia documental peruana; no se establecen cortes de jornada ni formatos de persistencia.
- Reenvío o copia no implican otro evento. Los vínculos pueden ser tentativos; las correcciones preservan el original y requieren autoridad, especialmente después del cierre.
- La revisión editorial aclaró que un documento puede abarcar varios ámbitos y que un aporte tardío conserva la fecha operativa declarada o su incertidumbre, sin tratarla siempre como desconocida.
- Los canales son posibilidades sujetas a permisos y viabilidad. No se presupone WhatsApp, acceso a grupos, autorización de terceros ni demanda de automatización.

## 5. Matriz de aceptación

| Criterio solicitado | Resultado documental | Evidencia |
|---|---|---|
| 1. Fotos, textos, videos y audios | PASS | Secciones 3 y 4.2–4.5; FO/TX/VI/AU |
| 2. Cartillas y documentos digitales | PASS | CA-01 y DG-01–DG-04; papel distinto de su fotografía |
| 3. Motivos plausibles por modalidad | PASS | Columna de propósito en las veinte categorías, siempre hipotético |
| 4. Tipo, campos esperados y autor | PASS | Diez vistas enlazadas por ID, sin celdas vacías ni categorías huérfanas |
| 5. Ambigüedades documentadas | PASS | Matrices y sección 3.1; calidad, contexto, unidades y versiones |
| 6. Autor distinto de remitente | PASS | Columna autor → remitente y sección 5 |
| 7. Evidencia distinta de dato confirmado | PASS | Secuencia conceptual de seis conceptos y cinco planos del audio |
| 8. Referencias temporales y operativas | PASS | Sección 7, T1–T7 y America/Lima; creación/envío/recepción diferenciados |
| 9. Relaciones y reenvíos | PASS | Diez situaciones de sección 8, con vínculos inciertos y posible mismo evento |
| 10. Ejemplos sintéticos ambiguos | PASS | S01–S08, declarados ficticios y sin archivos ni transcripciones reales |
| 11. Privacidad y límites de acceso | PASS documental | Secciones 3 y 9; no se accedió a grupos, chats ni evidencia empresarial real |
| 12. Coherencia con CG-004/CG-005 | PASS | Fuentes, D/O/H, T1–T7, contexto, pendientes y correcciones; documentos previos intactos |
| 13. Sin capacidades inexistentes afirmadas | PASS | Avisos y límites explícitos; sin OCR, voz, APIs, importadores o captura implementados |

PASS acredita cobertura y coherencia documental, no prácticas verificadas de una granja ni funcionamiento de un producto. La aceptación externa de esta entrega permanece pendiente.

## 6. Verificaciones realmente ejecutadas

| Comando o comprobación | Resultado observado |
|---|---|
| Inspección git status, remote, worktree y árbol main | Repositorio Avicendia, copia pública limpia y base exclusivamente documental |
| Consulta del PR #5, integración autorizada, fetch origin main, switch main y merge --ff-only origin/main | PASS; main y origin/main en d86632c antes de la rama CG-006 |
| git merge-base --is-ancestor 25b2e21 main | Salida 0: CG-005 integrada |
| task_contract.py CG-006 --format json | Salida 0; referencia original consultada, sin dependencias declaradas en el JSON |
| Comprobación Python temporal por stdin, inicial y sobre el inventario final en HEAD | PASS; doce secciones, veinte IDs presentes exactamente en ambas vistas, diez vistas emparejadas, catorce tablas, sin celdas vacías o columnas inconsistentes |
| Enlaces, casos y temporalidad en el inventario final | PASS; cinco enlaces locales existentes, S01–S08 y siete momentos T1–T7 con America/Lima |
| Codificación y formato del inventario comprometido | PASS; UTF-8 sin BOM, LF, sin espacios finales; diff --cached --check y diff --check aprobados |
| Lectura completa, revisión editorial y del diff real | Realizadas antes del commit; ajustes de ámbito, temporalidad y redacción revisados después |
| Revisión focalizada de privacidad | Sin patrones de tokens, claves privadas, correos o rutas personales en el inventario; lectura manual sin evidencia ni identidades reales |
| git diff --exit-code frente a la base para documentos previos y reportes existentes | Salida 0 antes del reporte nuevo: CG-002/003/004/005, AGENTS y README sin cambios |
| git merge-base --is-ancestor del commit interno respecto de HEAD | Salida 1 esperada: el historial privado de preparación no es ancestro de la entrega |
| SHA-256 del roadmap original antes y después de elaborar el inventario | Coincide: a5d5095c6e48082fd38ac62635d7104cb3680aac54a957f20f244c148359c2de |
| Publicación del inventario y creación del PR #6 | Push confirmado de 5c53439 a la rama específica; PR abierto inicialmente en borrador hacia main |
| Comprobación del reporte por Python, lectura y diff antes de su commit | PASS; diez secciones, trece criterios, enlace relativo válido, UTF-8/LF y sin patrones sensibles detectados |

SHA-256 del inventario final en el commit 5c53439: 4d5f56e7d93f1273f596b85b1466ea0b175d150b277686088c5002eda918f86d. Las comprobaciones Python fueron verificaciones documentales temporales con biblioteca estándar, no una suite funcional ni código añadido al producto. La búsqueda de patrones no constituye certificación universal de ausencia de secretos.

No se ejecutaron entrevistas, observaciones de campo, extracción de datos, transcripción, procesamiento multimedia, pruebas funcionales del SaaS, builds ni CI remoto. No se usó un corrector ortográfico automático ni se verificó visualmente el render exacto de GitHub; la revisión lingüística fue manual y se comprobó la estructura Markdown.

## 7. Calidad, seguridad y compatibilidad

Se revisaron nombres, ubicación, responsabilidades descritas, continuidad conceptual, términos, errores de atribución, duplicación y alcance. Las matrices se dividen para facilitar lectura y las relaciones no se presentan como inequívocas. No se añadieron abstracciones de procesamiento ni decisiones de almacenamiento.

Se mantienen las distinciones campaña/partida/sección, ausencia/cero, despacho/consumo, relato/observación y recepción/confirmación. Se restringen las inferencias causales y sanitarias y no se autoriza actuación física. La compatibilidad comprobada es documental; no se modificó comportamiento ejecutable que permita afirmar pruebas de regresión del SaaS.

Solo se incorporan los dos Markdown solicitados. El paquete, la documentación operativa privada, los archivos temporales y el historial interno no se publican. La recuperación consistiría en ajustar o rechazar el PR; no hay migración, despliegue ni datos reales que revertir.

## 8. Limitaciones, riesgos e hipótesis pendientes

La principal limitación es la ausencia de evidencia de campo: soportes, funciones, motivos, vocabulario, frecuencia, calidad, unidades y cortes de jornada siguen siendo hipótesis. Veinte categorías no prueban exhaustividad ni prevalencia. La revisión externa puede pedir ajustes.

Una lectura correcta puede atribuirse al galpón, sección, campaña o período equivocados. Reenvíos, copias, cifras contradictorias y correcciones pueden producir duplicación o sustitución indebida si después se confunden evidencia y hecho. Mensajes nocturnos o posteriores al cierre no resuelven su fecha operativa por sí solos.

Permisos, dispositivos, conectividad, custodia, conservación, uso de terceros y factibilidad/costos de canales deben contrastarse en trabajo posterior autorizado. Este reporte no selecciona proveedores, no crea deuda de código ni especifica tareas futuras. No hay resultados ni tasas de exactitud que permitan promesas comerciales o técnicas.

## 9. GitHub, commits y revisión

- Repositorio: [VicWaltzO/Avicendia](https://github.com/VicWaltzO/Avicendia).
- Rama: codex/CG-006-cartillas-mensajes, creada desde main d86632c36d61afd7c0c83c382f211c899e7a64a6.
- Inventario: [5c53439](https://github.com/VicWaltzO/Avicendia/commit/5c534399cb794310a510cf5da94f6d8dff33dea4), docs(00): levantar-flujo-de-cartillas-y-mensajes (CG-006), subido.
- Este reporte se incorpora en un segundo commit semántico de CG-006 en la misma rama. Su SHA se consulta en el historial del archivo o PR para evitar una referencia circular.
- [PR #6](https://github.com/VicWaltzO/Avicendia/pull/6), dirigido a main y sin fusionar. El inventario y este reporte forman el incremento para revisión externa.

Los commits de la entrega usan identidad pública noreply. No se hace push directo a main ni se publican ramas privadas. No hay release ni despliegue de CG-006.

## 10. Estado final y detención

**PARCIAL: inventario técnicamente validado y entregado para evaluación externa; aceptación pendiente.** Los trece criterios documentales están comprobados, sin afirmar validación operacional ni capacidades del SaaS. No se fusiona CG-006, no se inicia CG-007 ni se generan especificaciones posteriores. El supervisor externo determinará la aceptación o los ajustes de esta misma tarea.
