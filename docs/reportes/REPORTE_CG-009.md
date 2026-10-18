# CG-009 — Reporte técnico: campos del reporte diario

18 de octubre de 2026 · Fase 00 · Prioridad P0 · Tamaño M · Documentación funcional MVP · Riesgo R0.

**Estado: PARCIAL — incremento documental verificado y publicado; aceptación externa pendiente.** El PR #9 está abierto sin fusionar. No se considera aprobada una política operativa ni implementada una funcionalidad.

## 1. Objetivo y alcance

Especificar el significado, ámbito, dimensiones, tipo conceptual, unidad, obligatoriedad propuesta, disponibilidad, ausencia, fuente y revisión de los campos potenciales del reporte diario.

El contrato original pide distinguir vacío, no medido y cero medido, con unidades, sexo, campos opcionales y fecha operativa. La solicitud vigente amplía la descripción funcional y concreta la clasificación inicial feat como documentación. No se implementan código, formularios, SQL, migraciones, APIs, arquitectura ni validadores.

## 2. Preparación y antecedentes

Se inspeccionaron Git, AGENTS.md local y público, la skill control-granja-engineering y las referencias de dominio/invariantes, ejecución adaptativa y verificación; se consultaron las normas de entrega y privacidad. Se estudiaron CG-005/006/007, el caso sintético CG-008 y su JSON público.

CG-008 no estaba integrada: el propietario autorizó expresamente integrar el [PR #8](https://github.com/VicWaltzO/Avicendia/pull/8), manteniendo pendiente su reproducción histórica. Se realizó un merge mediante Git con autor y committer noreply aprobados, sin force, y se publicó main en 04691a5d0a30d1bf790a9a6770e2e9b028d76bd3. GitHub confirmó el PR fusionado. La rama codex/CG-009-campos-reporte-diario parte de esa base actualizada.

La copia pública de entrega estaba limpia; se preservó el trabajo previo de preparación y los archivos ajenos. Los cambios de CG-009 se limitan a los dos documentos de esta tarea. No se modifica el fixture, documentos anteriores, roadmap ni el paquete privado.

**Reproducción cuantitativa histórica exacta de CG-008: PENDIENTE.** Integrar sus documentos no resuelve ese criterio ni acredita purga de objetos/metadatos anteriores. CG-009 no realiza nuevas consultas a fuentes históricas privadas.

## 3. Documentos elaborados y campos

| Archivo | Contenido |
|---|---|
| [DICCIONARIO_REPORTE_DIARIO.md](../00-producto/DICCIONARIO_REPORTE_DIARIO.md) | Doce secciones, 77 campos, ocho familias, dos vistas por familia, doce comprobaciones conceptuales, once ejemplos y compatibilidad con CG-008 |
| Este reporte | Alcance, decisiones, quince criterios, verificaciones, límites y estado de entrega |

| Familia | Cantidad | ID |
|---|---|---|
| A — Identificación | 16 | A01–A16 |
| B — Población | 12 | B01–B12 |
| C — Alimentación | 7 | C01–C07 |
| D — Agua | 7 | D01–D07 |
| E — Ambiente | 6 | E01–E06 |
| F — Mediciones productivas | 11 | F01–F11 |
| G — Incidencias | 9 | G01–G09 |
| H — Revisión y cierre | 9 | H01–H09 |
| Total | 77 | Referencias documentales, no columnas técnicas |

## 4. Decisiones y reservas

Se separan aplicabilidad, presencia, motivo de ausencia, expectativa de disponibilidad, forma de obtención y revisión. Cero es un valor presente cuyo sustento debe conocerse; null no explica por sí solo por qué falta información. Medido, informado, calculado y confirmado no forman un catálogo excluyente.

La obligatoriedad O es trazabilidad propuesta, C depende del contexto, OP es opcional y PV requiere validación. Registrar un motivo no completa artificialmente un valor requerido. Se admite total sin sexo ni partida y se prohíbe inventar distribuciones.

Los movimientos y saldos conservan ámbito, período, cobertura y versión. Alimento consumido, despachado y entregado se distinguen; lectura acumulativa de agua no equivale a consumo. Las mediciones tienen punto, método, unidad, muestra y referencia temporal cuando corresponda, sin umbrales sanitarios ni diagnósticos.

Se mantienen T1–T7 y correcciones trazables. Edad por partida requiere nacimiento/referencia y convención verificables; recepción no sustituye nacimiento. Completitud, revisión y cierre pueden describir dimensiones distintas, sin máquina de estados ni criterios definitivos de cierre.

## 5. Matriz de aceptación

| Criterio | Resultado documental | Evidencia |
|---|---|---|
| 1. Diccionario con campos definidos | PASS | 77 definiciones, sección 5 |
| 2. Ámbito y significado por campo | PASS | Vista de significado y contexto de cada familia |
| 3. Unidades identificadas | PASS | Magnitudes explícitas, unidad original o falta por aclarar; — sin magnitud física |
| 4. Registros por sexo cuando corresponde | PASS | Dimensiones B y muestra/partida en F |
| 5. Datos sin desagregación | PASS | Total sin sexo ni partida; ejemplo independiente X08 |
| 6. Vacío, no medido y cero medido distintos | PASS | Secciones 3/6; X01/X02/X03/X11; criterio original satisfecho documentalmente |
| 7. Pendiente de disponibilidad | PASS | A16, vista de control y ejemplo X05 |
| 8. Opcionales y condicionales | PASS | OP en A14/G02 y otros; C contextual; definición en sección 3 |
| 9. Fecha operativa respetada | PASS | A10, T1–T7 y X05 sin usar fecha de envío como productiva |
| 10. Validaciones conceptuales | PASS | VC01–VC12; estructura, matemática y confirmación separadas |
| 11. Revisión y corrección | PASS | G08, H01–H09, X06; original y nueva disponibilidad conservados |
| 12. Coherencia CG-005/CG-007 | PASS documental | Identidades, campaña/partida, trazabilidad, consumo y cierre preservados |
| 13. Representación conceptual del fixture CG-008 | PASS con límites | Sección 11 y comprobaciones focalizadas; atributos que faltan continúan desconocidos |
| 14. Sin reglas técnicas definitivas | PASS | Solo documentación funcional; sin esquemas, APIs ni implementación |
| 15. Sin datos privados publicados | PASS para este incremento revisado | Solo redacción y ejemplos públicos sintéticos; revisión focalizada sin material operativo original |

La aceptación final de CG-009 requiere auditoría externa. Las hipótesis de campo son reservas explícitas del alcance documental, no capacidades implementadas. El criterio histórico de CG-008 continúa pendiente y separado de esta matriz.

## 6. Verificaciones ejecutadas

| Comando o comprobación | Resultado real |
|---|---|
| git status, remoto, instrucciones y base | Copia pública limpia; trabajo ajeno preservado |
| Consulta del contrato task_contract.py CG-009 --format json | Salida 0; descripción y QA originales consultados; no se modifica el roadmap |
| Merge autorizado CG-008, push normal de main y consulta del PR | Salida 0; PR #8 fusionado; base 04691a5 |
| Primera ejecución de verificar_documentacion.py temporal | PASS: alcance, 77 ID únicos, dos vistas completas, ocho familias, unidades clave y catorce atributos |
| Estructura y casos del diccionario | PASS: doce secciones, doce comprobaciones y once ejemplos; sin nombres de campos duplicados |
| Compatibilidad pública CG-008 | PASS focalizado: partidas, sexo, motivos de null, cero, corrección, unidades, muestra, fechas y cierres |
| Aritmética focalizada de ejemplos | PASS: ingresos 2160, alimento conocido 6 sacos separado de kg, muestra 16 y porcentajes 100 %, edades ficticias 5/3 |
| Tablas, enlaces y codificación del diccionario | PASS: 25 tablas íntegras, enlaces locales/anchor válidos, UTF-8 sin BOM y LF |
| Documentos anteriores y fixture | Git diff sin cambios fuera de los dos entregables; blobs de CG-008 preservados |
| Búsqueda focalizada de privacidad | Sin correos, rutas personales, patrones de tokens o claves; no es garantía universal de ausencia de secretos |
| Ejecución con el primer reporte incluido | PASS: cuatro tablas, enlace, codificación, quince criterios y estado parcial; esta evidencia corresponde a la versión anterior a la constancia de publicación |
| Revisión manual de contenido y ortografía | Definiciones y ejemplos revisados; se aclaró el saldo negativo sin truncado a cero y se ajustó una frase de cierre |
| Diff completo y git diff --cached --check | Lectura íntegra de ambos archivos nuevos; salida 0 en formato y solo dos rutas de CG-009 |

Los scripts temporales de redacción y comprobación permanecen fuera del PR; usan biblioteca estándar y no son código del SaaS. Se comparan objetos Git para preservar documentos previos: un checkout de Windows puede representar sus finales de línea como CRLF sin cambiar el contenido versionado.

No se ejecutan pruebas funcionales del SaaS, builds, CI remoto, entrevistas, mediciones de campo ni comparación histórica exacta. La verificación se limita a documentación y ejemplos sintéticos.

## 7. Calidad, limitaciones e hipótesis

Se revisaron nombres, ámbito, unidades, ausencia de distribuciones inventadas, origen, correcciones y límites de cálculo. Las dos vistas evitan una tabla de catorce columnas. No se añaden dependencias ni componentes ejecutables; la compatibilidad comprobada es documental, no una garantía funcional de un producto inexistente.

Quedan por validar organización real, fuentes/permisos, responsables, corte de jornada, disponibilidad, cobertura de movimientos, métodos/unidades, instrumentos, muestras, edad, categorías de incidencias y condiciones de revisión/cierre. Las referencias PV1–PV8 concentran estos pendientes.

No se afirma cumplimiento sanitario ni se establecen tratamientos, rangos clínicos, frecuencia universal o política técnica. La incidencia residual de metadatos de CG-008 permanece documentada en su propio reporte; no se realizan nuevas operaciones de purga ni se reproduce el correo personal.

## 8. GitHub

Rama: codex/CG-009-campos-reporte-diario. Base main: 04691a5d0a30d1bf790a9a6770e2e9b028d76bd3.

El commit e9e0149e44dead2a2f69c77ad58c68b51e999016, docs(00): especificar-campos-reporte-diario (CG-009), publicó el diccionario y el reporte preparados mediante Git normal, con salida 0. Se comprobaron autor y committer noreply aprobados antes de publicar y sobre el objeto Git recuperado del remoto. No se usó force ni el conector para crear commits de contenido.

El [PR #9](https://github.com/VicWaltzO/Avicendia/pull/9) se creó hacia main. GitHub confirmó dos archivos cambiados, base 04691a5 y cabeza inicial e9e0149. Está abierto, sin fusionar, para auditoría externa.

| Verificación posterior al primer push | Resultado |
|---|---|
| Cabeza remota y fetch | e9e0149e44dead2a2f69c77ad58c68b51e999016, igual a la local publicada |
| Árbol local/remoto | 9b2ec9463befcedbb04fdcd8193f537b3f1c3a50; diff vacío |
| Diccionario publicado | Blob 505c4da715460c5dc9446e6fec02bec92b6d898b, correspondiente a la versión revisada |
| Reporte inicial publicado | Blob 7eee4e835bc13f93fabb1f19c632407ab0278f78, anterior a esta constancia |
| Verificador sobre cadena publicada | PASS documental, compatibilidad sintética e identidad noreply |
| Referencias remotas antes/después | main sigue en 04691a5d0a30d1bf790a9a6770e2e9b028d76bd3; otras ramas y etiquetas observadas intactas |

Esta constancia posterior modifica únicamente el reporte y se identifica en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/9/commits) con el mensaje docs(00): registrar entrega verificada (CG-009). Su publicación utiliza avance rápido ordinario. La cabeza final y el SHA del propio commit se consultan en ese historial y en la entrega de auditoría, evitando una referencia circular en este documento. El diccionario y los documentos anteriores se mantienen sin cambios.

## 9. Estado final y detención

**PARCIAL — incremento documental verificado y publicado; aceptación externa pendiente.** Los quince criterios tienen evidencia documental; el PR #9 permanece abierto sin fusionar. No se inicia CG-010, no se generan especificaciones posteriores, no se fusiona CG-009 ni se implementa código.
