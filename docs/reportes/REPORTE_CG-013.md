# CG-013 — Reporte técnico: evidencia y consentimiento

19 de octubre de 2026 · America/Bogota · Fase 00 · P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado: protocolo documental completado en su alcance de elaboración y validado técnicamente; en revisión externa. Checklist operativo todavía no aprobado. Exportación de evidencia real no autorizada.** La aceptación documental no habilita tratamientos reales ni acredita cumplimiento legal completo.

## 1. Identificación, objetivo y alcance

Definir condiciones documentales para recopilar, procesar, conservar, transformar y eliminar evidencia, separando finalidades operativas de investigación, entrenamiento, pruebas, depuración y demostración. El alcance incluye mensajería, imágenes, video, audio, documentos, cartillas digitalizadas, registros, exportaciones, pruebas y resultados de IA.

La referencia original CG-013 pide autorización para material de grupos, retención y anonimización; su aceptación exige un **checklist aprobado antes de exportar evidencia real al desarrollo**. El encargo vigente precisa el protocolo, dieciocho controles vacíos, proveedores, derechos, incidentes y copia local idéntica. Se amplía la especificación documental sin modificar el roadmap. **El criterio original permanece pendiente de aprobación operativa verificable**: diseñar la plantilla no satisface esa aprobación.

No se accedió, descargó, copió, recopiló ni exportó evidencia real o información histórica identificable. No se implementaron capturadores, automatizaciones, integraciones, modelos, APIs, permisos técnicos o infraestructura. No se modifican los entregables anteriores.

## 2. Preparación e integración previa autorizada

Se inspeccionaron Git, worktrees, ramas, AGENTS.md y el contrato original CG-013. Se aplicó control-granja-engineering con sus referencias pertinentes de privacidad, seguridad multitenant y evidencias; se conservó el criterio R0 de revisar alcance, enlaces y diff real. Se revisaron `docs/PUBLICACION.md`, CG-004 y su plantilla, CG-005, CG-006 y CG-009, además de los límites públicos del ejemplo sintético CG-008. No se consultaron fuentes históricas privadas.

El fetch inicial terminó correctamente; la ascendencia indicó que CG-012 no estaba integrada y GitHub confirmó el PR #14 abierto con cabeza `2e6b3bdef93a5367ca58db38bf63a7d520bd21b5`. AGENTS.md exige autorización para fusiones: se solicitó y el propietario respondió **«Autorizar integrar CG-012»**.

Se verificó que CG-012 agregaba únicamente sus tres Markdown y utilizaba la identidad noreply aprobada. Se creó una copia aislada desde main y se integró mediante merge Git, sin conflictos ni cambios de contenido. El merge **d61aebf13b932efe6357137256f5886d82c01085** se publicó con push normal a main y autor/committer noreply comprobados. GitHub confirmó el [PR #14](https://github.com/VicWaltzO/Avicendia/pull/14) cerrado, `merged: true` y ese SHA. El fetch y la ascendencia posteriores terminaron con salida 0.

La rama **codex/CG-013-protocolo-evidencia-consentimiento** parte de `origin/main` actualizado a d61aebf, inicialmente limpia. La rama de preparación de la carpeta raíz, sus archivos locales y otros worktrees permanecen intactos. La integración de CG-012 es una acción previa expresamente autorizada, separada del incremento documental CG-013.

## 3. Documentos elaborados y tratamientos propuestos

| Archivo nuevo | Resultado documental |
|---|---|
| [PROTOCOLO_EVIDENCIA_CONSENTIMIENTO.md](https://github.com/VicWaltzO/Avicendia/blob/764911f3d2cc8a857899efa2a528573cab9bd1bd/docs/00-producto/PROTOCOLO_EVIDENCIA_CONSENTIMIENTO.md) | Catorce secciones: alcance, clasificación, finalidades/autorización, canales, minimización, ciclo, retención, transformación, pruebas, proveedores, solicitudes, accesos, incidentes y pendientes. |
| [CHECKLIST_AUTORIZACION_EVIDENCIAS.md](https://github.com/VicWaltzO/Avicendia/blob/764911f3d2cc8a857899efa2a528573cab9bd1bd/docs/00-producto/CHECKLIST_AUTORIZACION_EVIDENCIAS.md) | Dieciocho controles C01–C18; estado, evidencia, función, fecha, observaciones y acción pendiente por control. Identificación del expediente y decisión final vacías. |
| Este reporte | Alcance, verificaciones, aceptación, límites, integración previa, entrega y comprobación de copia local. |

Clasificación: pública, interna, confidencial y secretos; categorías mixtas mantienen la restricción mayor. Funciones de responsable, custodio, privacidad, seguridad y aprobación son propuestas por designar, no personas asignadas. Se excluyen secretos de datasets y documentos de prueba. Resultados de IA y agregados no se vuelven públicos automáticamente.

El expediente previo comprende catorce componentes A01–A14 y distingue autorización empresarial de la revisión de base jurídica y autorizaciones personales. No presume que consentimiento sea siempre la única base; tampoco que pertenecer a un grupo, callar o recibir una comunicación autorice otros usos. CG-004 conserva sus permisos específicos de entrevistas, notas y grabaciones.

Para WhatsApp se separan acceso, recopilación, conservación, procesamiento con IA y compartición/exportación; se limita período y pertinencia, incluyendo adjuntos, reenvíos y terceros. No se presume lectura universal de grupos por la API oficial ni se eligen métodos alternativos. Los términos y capacidades del servicio concreto se revisarían antes de cualquier integración.

La retención se presenta en dos vistas de las mismas ocho categorías, con los diez atributos pedidos. Inicio, plazo y excepciones quedan por aprobar; no se fijan plazos legales ni conservación indefinida. Se distinguen eliminación lógica, soportes, copias, proveedores y respaldos, con control de restauración y constancia mínima.

Anonimizar no equivale a sustituir nombres por códigos; la seudonimización y las combinaciones de voz, imagen, metadatos o datos operativos pueden permitir vinculación. La prioridad de pruebas es sintéticos, luego anonimización validada/autorizada y finalmente datos reales restringidos solo con necesidad y condiciones aprobadas. Si faltan garantías, la prueba real no se ejecuta.

La matriz de proveedores recoge trece atributos sin seleccionar proveedor, modelo o API. Derechos y solicitudes se tramitarían por una vía privada con identificación proporcional, revisión competente de facultades/plazos y respuesta registrada. Accesos y resultados mantienen organización, empresa, finalidad y autoridad efectiva separadas. Incidentes priorizan contención y custodia restringida; no ordenan borrar rastros ni reescribir historiales automáticamente.

## 4. Referencias legales y límites de revisión

Se consultaron fuentes oficiales públicas el 19 de octubre de 2026: [Ley N.° 29733](https://www.leyes.congreso.gob.pe/documentos/leyes/29733.pdf), [D. S. N.° 016-2024-JUS](https://www3.congreso.gob.pe/Docs/DGP/DIDP/files/ds_016-2024-jus.pdf) y fichas de la ANPD. Las páginas HTML de apertura de dos fichas devolvieron error en el navegador de búsqueda; se accedió a los PDF oficiales mediante el Congreso y a resultados oficiales de búsqueda. No se descargaron datos privados.

Se identificaron las normas como puntos de partida, sin emitir una conclusión legal individual ni declarar una revisión consolidada exhaustiva. La determinación de bases, responsables, obligaciones, avisos, transferencias, derechos, excepciones y plazos de Perú y otras jurisdicciones sigue pendiente de profesionales competentes. No se verificaron condiciones contractuales de proveedores concretos, porque no se selecciona ninguno. Las reglas de control propuestas proceden del encargo y las convenciones del proyecto, no se presentan como transcripción de obligaciones legales universales.

## 5. Verificaciones reales

| Comando o comprobación | Resultado observado |
|---|---|
| Inspección Git, instrucciones, contrato y documentos públicos | Realizada antes de editar; trabajo ajeno preservado. |
| Fetch, ascendencia y consulta PR #14 | CG-012 inicialmente no integrada; integración autorizada d61aebf publicada y confirmada por Git/GitHub. |
| Lectura del protocolo y checklist nuevos | PASS documental: lectura del contenido y diff; finalidades, permisos, retención, bloqueo, coherencia de fuentes y límites jurídicos revisados. Se aclaró el tratamiento de reenvíos y adjuntos ausentes. |
| Verificador documental: controles vacíos, tablas, retención, proveedores, enlaces y privacidad focalizada | PASS, salida 0: catorce tablas coherentes, catorce secciones, cuatro categorías, seis finalidades, A01–A14, ocho categorías de retención en dos vistas/diez atributos, inicios y plazos sin aprobar, trece atributos de proveedores, C01–C18 y sus 108 celdas de decisión vacías, 119 campos vacíos totales, veinte criterios, trece enlaces locales, UTF-8 y sin hallazgos del examen focalizado de privacidad en tres Markdown. |
| Lectura del diff completo y `git diff --cached --check` | PASS para protocolo/checklist y control de whitespace; reporte final revisado antes del commit. Micropuerta de siete criterios aplicada proporcionalmente a R0: alcance, nombres, flujo documental, responsabilidades y efectos claros; sin código ni cambios previos. |
| Clon limpio y repetición documental | PASS: `git clone --no-local --single-branch --branch codex/CG-013-protocolo-evidencia-consentimiento …` y verificador repetido, salida 0, mismos conteos y estado limpio sobre 764911f antes del push. Es clon local limpio, no un clon remoto independiente. |
| Publicación, objetos Git, PR y copia local SHA-256 | Push normal con salida 0; objeto remoto recuperado e identidad comprobada, diff local/remoto vacío; PR #15 abierto sin fusionar. El cotejo SHA-256 de la copia definitiva se confirma en la entrega local final, incluyendo el blob Git publicado. |

No se ejecutan pruebas funcionales, exportaciones, capturas de WhatsApp, transferencias a IA con evidencia real, tratamientos de datos de clientes, solicitudes de derechos reales ni respuestas a incidentes. Las consultas a fuentes normativas y las publicaciones contienen solo material documental público. Los verificadores temporales no forman parte del producto ni del PR.

## 6. Matriz de aceptación

| # | Criterio documental del encargo | Evidencia / estado |
|---|---|---|
| 1 | Clasificación | Cuatro categorías con restricciones y funciones por designar. |
| 2 | Finalidades diferenciadas | Operación, investigación, entrenamiento, pruebas, depuración y demostración separadas. |
| 3 | Autorizaciones comprobables | Expediente A01–A14 y aprobación por alcance; ninguna autorización real emitida. |
| 4 | Grupos de mensajería | Permisos distintos, período, terceros, reenvíos, adjuntos y proveedor por evaluar. |
| 5 | Minimización | Contenido necesario, original, derivados, identificadores, irrelevante y terceros. |
| 6 | Ciclo de vida | Flujo conceptual y distinción original/copia/candidato/interpretación/confirmado. |
| 7 | Retención propuesta | Ocho categorías en dos vistas, diez atributos, plazos pendientes. |
| 8 | Anonimización y seudonimización | Diferencia, vinculabilidad y riesgos combinados explícitos. |
| 9 | Pruebas sintéticas | Prioridad y regla de prueba real no ejecutable sin condiciones. |
| 10 | Proveedores externos | Trece atributos por servicio concreto, sin selección. |
| 11 | Solicitudes | Procedimiento conceptual; verificación jurídica de plazos y facultades pendiente. |
| 12 | Organizaciones y funciones | Autoridad efectiva por ámbito; un grupo no concede acceso entre empresas. |
| 13 | Dieciocho controles | PASS: C01–C18 únicos y completos, seis campos de decisión por control. |
| 14 | Checklist público vacío | PASS: 108 celdas de los controles y once campos comunes/finales vacíos; ninguna aprobación ficticia. |
| 15 | Bloqueo sin autorización | La operación real no se ejecuta si falta un permiso indispensable. |
| 16 | Incidentes | Contención, comunicación, alcance, preservación y corrección autorizada. |
| 17 | Coherencia con CG-004/005/006/009 | No amplía permisos de entrevistas; conserva procedencia, revisión e incertidumbre. |
| 18 | Sin información privada publicada | PASS focalizado: sin consulta de material real y sin hallazgos en contenido, metadatos propuestos ni enlaces personales; no certifica ausencia universal de secretos. |
| 19 | Sin implementación técnica | PASS: solo tres Markdown nuevos en Git; no hay implementación ni cambios anteriores. |
| 20 | Copia local obligatoria | Copia definitiva en carpeta raíz obligatoria; igualdad SHA-256 entre blob publicado, reporte del worktree y copia local comprobada en la entrega final. No es una aprobación operativa. |

**Criterio original operativo: PENDIENTE.** No hay checklist aprobado ni autorización verificable para exportar evidencia real. Una validación técnica de estructura, enlaces y contenido no equivale a aprobación legal u operativa.

## 7. Riesgos y decisiones pendientes

Faltan organizaciones y funciones designadas, jurisdicciones y bases determinadas, períodos y conjuntos reales, vías de solicitudes, términos de servicios concretos, plazos/viabilidad de eliminación, custodia y aprobación competente. No hay contactos ni firmas reales en las plantillas. Las transformaciones o agregados podrían seguir siendo identificables o confidenciales; no se acredita anonimización de un conjunto real.

El uso futuro exige revisar claridad y carga del checklist, autoridad y trazabilidad de decisiones y compatibilidad jurídica. La revisión focalizada de privacidad no certifica ausencia universal de secretos. No existe garantía implementada de aislamiento, retención o eliminación. Retirar los tres archivos revierte CG-013; la integración previa autorizada de CG-012 es independiente.

## 8. Git, copia local y estado final

Rama publicada: `codex/CG-013-protocolo-evidencia-consentimiento`. Base: `d61aebf13b932efe6357137256f5886d82c01085`.

Commit de entregables: **764911f3d2cc8a857899efa2a528573cab9bd1bd**, `docs(00): definir-protocolo-de-evidencia-y-consentimiento (CG-013)`. El push normal terminó con salida 0; tras fetch se recuperó la misma cabeza, con autor y committer noreply aprobados y diff local/remoto vacío. Git confirmó únicamente tres Markdown nuevos respecto de main.

Se creó el [PR #15](https://github.com/VicWaltzO/Avicendia/pull/15) hacia main y se adjuntó al chat. GitHub confirmó base d61aebf, cabeza inicial 764911f, un commit, tres archivos nuevos, estado abierto y `merged: false`. El incremento CG-013 permanece sin integrar; no se fusiona este PR.

Esta constancia conserva qué comprobaciones pertenecen a 764911f y se publica mediante un commit documental adicional. Solo cambia el reporte, incluidos los enlaces a versiones publicadas del protocolo y checklist para que funcionen desde la carpeta raíz; ambos documentos permanecen sin cambios respecto de 764911f. El verificador inicial y el clon limpio comprobaron trece enlaces locales; la versión final contiene once locales y dos enlaces a blobs publicados. Se repiten los checks afectados y se revisa este diff antes del commit. El SHA de la constancia y la cabeza vigente se consultan en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/15/commits), sin insertar un hash autorreferente.

La carpeta raíz obligatoria `docs/reportes` se comprobó accesible y no contenía `REPORTE_CG-013.md` al revisar el destino. La copia definitiva se guarda únicamente después de publicar esta constancia y se coteja por SHA-256 contra el reporte del worktree y los bytes del blob recuperado del remoto. La confirmación final de igualdad se emite al entregar; no se incluyen hashes del archivo dentro de sí mismo ni rutas personales en el documento público. Si un archivo diferente apareciera antes de copiar, se preservaría y se comunicaría el conflicto. No se hacen commits, merges ni cambios de rama en la carpeta raíz para entregar esta copia.

**Confirmación de entrega local:** reporte definitivo en `docs/reportes/REPORTE_CG-013.md` de la carpeta raíz indicada; igualdad SHA-256 de las tres versiones comprobada al entregar. Esta afirmación se sostiene con el resultado externo del cotejo final, no con una copia provisional.

**Protocolo documental completado en su alcance de elaboración y validado técnicamente; en revisión externa. Checklist operativo todavía no aprobado. Exportación de evidencia real no autorizada.** No se inicia CG-014 ni se recopila evidencia para completar o probar los formularios. Este reporte describe únicamente lo realizado y sus límites, sin detallar la siguiente tarea.
