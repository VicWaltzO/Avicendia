# CG-010 — Reporte técnico: medición de éxito del piloto

18 de octubre de 2026 · Fase 00 · Prioridad P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado: PARCIAL — documentación verificada, pendiente de aceptación externa y publicación.** No se ha ejecutado un piloto ni obtenido resultados empíricos.

## 1. Identificación, objetivo y alcance

Definir cómo medir un futuro piloto de Avicendia mediante indicadores, fórmulas/procedimientos, poblaciones, ventanas, fuentes, funciones responsables, líneas base pendientes y límites de interpretación.

El criterio original CG-010 exige fórmula, línea base por medir y responsable por indicador. El encargo vigente precisa siete KPI principales, candidatas complementarias y una plantilla vacía. Se desarrolla solo documentación; no se implementan analítica, dashboards, APIs, bases de datos ni funcionalidades.

## 2. Preparación y fuentes

Se inspeccionaron las dos copias locales de Avicendia, Git y AGENTS.md. Se aplicó control-granja-engineering con referencias pertinentes de operación, privacidad, verificación y entrega. Se consultó el contrato original mediante task_contract.py CG-010 --format json, sin modificar el roadmap.

Se estudiaron tesis CG-002, perfil hipotético CG-003, guía CG-004, flujo CG-005 y diccionario CG-009, junto a los límites públicos del caso sintético CG-008. P2 no es un piloto confirmado. **La reproducción cuantitativa histórica exacta de CG-008 permanece PENDIENTE.** No se consultaron fuentes históricas privadas.

CG-009 seguía abierta en el [PR #9](https://github.com/VicWaltzO/Avicendia/pull/9). El propietario autorizó expresamente integrarla para preparar CG-010. Se realizó merge mediante Git con autor y committer noreply aprobados y push normal de main a 6047406f7ff80a30c0b7c6cace9e395c8de2e68d. GitHub confirmó posteriormente el PR fusionado. La rama codex/CG-010-medicion-exito-piloto parte de esa base actualizada.

Se preservaron los cambios ajenos y la preparación privada local. Las modificaciones de CG-010 se limitan a tres documentos nuevos; la integración previa autorizada de CG-009 se distingue de este incremento.

## 3. Documentos e indicadores

| Archivo | Contenido |
|---|---|
| [METRICAS_EXITO_PILOTO.md](../00-producto/METRICAS_EXITO_PILOTO.md) | Siete fichas de catorce atributos, protocolo de conteo/tiempo, siete candidatas, comparación A/B, responsabilidades, privacidad y decisiones pendientes |
| [PLANTILLA_SEGUIMIENTO_KPI.md](../00-producto/PLANTILLA_SEGUIMIENTO_KPI.md) | Ficha vacía de 39 campos; línea base POR MEDIR y seis denominaciones de disponibilidad/calculabilidad/revisión sin seleccionar |
| Este reporte | Alcance, aceptación, verificaciones, limitaciones y entrega; copia local también en la carpeta raíz docs/reportes solicitada |

| ID | Medida principal y distinción relevante |
|---|---|
| KPI-01 | Recibidos válidos únicos / esperados; recepción no equivale a completitud |
| KPI-02 | Completos según pauta contextual al corte / evaluables; sin exigir universalmente los 77 campos |
| KPI-03 | Trabajo activo de consolidación; espera y tiempo transcurrido separados |
| KPI-04 | Trabajo activo de revisión con rondas; transcurrido y aclaraciones visibles |
| KPI-05 | Reportes con al menos una inconsistencia confirmada / revisados evaluables; cada reporte una vez |
| KPI-06 | Elegibles con actividad verificable / elegibles; finalización de tarea como complemento |
| KPI-07 | Tiempo de consulta correcta verificada y proporción de resolución; fallos/no resueltas visibles |

CP-01–CP-07 evalúan entrega tardía, corrección posterior al cierre, ayuda en consultas, incidencias pendientes, continuidad ante cortes, capacitación y carga de captura. Permanecen propuestas con fuente por validar; no se incorporan automáticamente. **Las catorce líneas base son POR MEDIR.**

Las fuentes posibles son planes y registros autorizados, constancias de recepción, revisión y corrección, fichas de intervalos, actividades y consultas. Operación, revisión, administración, evaluación y participantes son funciones potenciales, no personal asignado ni evidencia recogida.

## 4. Decisiones y fórmulas revisadas

Se fija conceptualmente universo, versión de pauta, período W y corte C antes de comparar. El recibido se cuenta una vez aunque tenga varios envíos; tardíos antes del corte se incluyen identificados y posteriores se registran aparte. Un numerador desconocido o denominador desconocido/cero impiden afirmar una tasa exacta.

En duración, el esfuerzo agregado se expresa en minutos-persona y espera/transcurrido en minutos de reloj. El trabajo paralelo impide sumar esfuerzo y espera como duración de reloj. Se conservan casos pendientes y observaciones incompletas; no se les asigna duración cero ni se eliminan de la interpretación.

La tasa de completitud contextual y la separación consolidación/revisión precisan las propuestas amplias de CG-002; no se afirman equivalentes numéricas ni se modifica la tesis. Se mantiene evaluación de calidad junto a rapidez, detección frente a errores originales, actividad frente a finalización y persona frente a dispositivo.

La elección entre media, mediana o percentiles queda condicionada a distribución, precisión y observaciones y deberá acordarse sin escoger luego el resultado más favorable. No hay metas numéricas, mejoras, muestra real, clientes o causalidad demostrados.

## 5. Matriz de aceptación

| Criterio | Resultado documental | Evidencia |
|---|---|---|
| 1. Indicadores de cobertura | PASS | KPI-01 y plan de esperados con recepción única |
| 2. Tiempo de revisión | PASS | KPI-04, límites, rondas, esperas y pendientes |
| 3. Errores e inconsistencias | PASS | KPI-05, tipos, confirmación y sesgo de detección |
| 4. Adopción operativa | PASS | KPI-06: invitados, capacitados, elegibles, activos y finalización diferenciados |
| 5. Fórmula o procedimiento por indicador | PASS | Siete fichas; candidatas con procedimientos preliminares y estado propuesto |
| 6. Unidades | PASS | Porcentajes, minutos-persona y minutos de reloj; conteo de incidencias en candidata |
| 7. Fuentes | PASS documental | Posibles fuentes por ficha; viabilidad y permisos pendientes |
| 8. Responsable potencial | PASS | Funciones por KPI y responsabilidades de generación, medición, revisión e interpretación |
| 9. Líneas base pendientes | PASS | Siete principales y siete candidatas POR MEDIR; plantilla sin cifras empíricas |
| 10. Denominadores y períodos | PASS | Cohortes, ventanas, corte y reglas de no calculabilidad explícitos |
| 11. Método de comparación | PASS | A actual y B futuro autorizado; comparabilidad, aprendizaje y cambios de proceso |
| 12. Riesgos de interpretación | PASS | Sesgos de cobertura, revisión, supervivencia, selección y ausencia de causalidad |
| 13. Plantilla reutilizable vacía | PASS | 39 campos sin observaciones; línea base inicial POR MEDIR |
| 14. Coherencia CG-002/003/009 | PASS documental | Hipótesis sin validar, métricas refinadas y obligatoriedad contextual |
| 15. Sin resultados inventados | PASS para contenido revisado | No se publican observaciones, tiempos, porcentajes de rendimiento o ahorro |
| 16. Sin funciones fuera de alcance | PASS | Solo tres Markdown; no código del SaaS ni recopilación real |

La aceptación de CG-010 depende de auditoría externa. Un PASS documental no acredita piloto listo, mediciones reales ni utilidad comercial.

## 6. Verificaciones ejecutadas

| Comando o comprobación | Resultado real |
|---|---|
| Inspección Git, AGENTS.md, fuentes y contrato | Copia pública limpia; contrato consultado con salida 0 |
| Integración CG-009 expresamente autorizada | Merge y push normal con salida 0; base main 6047406 y ascendencia comprobada |
| verificar_documentacion.py temporal, primera ejecución | PASS: siete fichas con catorce atributos y líneas base POR MEDIR; siete candidatas propuestas |
| Denominadores, numerador desconocido y unidades | PASS: separación de calculabilidad, minutos-persona/reloj y esfuerzo paralelo |
| Ejercicios aritméticos artificiales, sin datos operativos | PASS: unidades únicas, conteos por reporte/persona, cero/ausencia, duplicados, tardíos, consultas incorrectas/no resueltas y esfuerzo paralelo |
| Plantilla y estados | PASS: 39 campos; solo línea base con POR MEDIR, demás celdas empíricas vacías; seis denominaciones no seleccionadas |
| Markdown, enlaces y UTF-8/LF | PASS: once tablas de metodología y dos de plantilla íntegras, enlaces locales válidos, sin BOM/CRLF |
| Revisión focalizada de privacidad | Sin correos, rutas personales ni patrones de tokens/claves; no certifica ausencia universal de secretos |
| Alcance y documentos anteriores | Git diff sin cambios ajenos a los tres entregables; no se toca fixture ni roadmap |
| Verificación con reporte incluido | PASS: cuatro tablas, enlaces, dieciséis criterios y estado pendiente de aceptación externa |
| Lectura completa del diff y ortografía manual | Revisados los tres archivos; aclarados conteos, denominador de correcciones tras cierre y separación visual de secciones |
| git diff --cached --check | Salida 0; solo tres rutas nuevas de CG-010 |

Los ejercicios y scripts de redacción/verificación son temporales, usan biblioteca estándar y permanecen fuera del PR. No son implementación de métricas del SaaS ni un piloto simulado presentado como real.

No se ejecutan pruebas funcionales, builds, CI, entrevistas, observaciones de campo, mediciones de trabajadores ni análisis de información empresarial real. La revisión de claridad y ortografía es manual.

## 7. Limitaciones, calidad y riesgos

Las fichas evitan tablas anchas; las fuentes y responsabilidades son propuestas para validar, no recursos asegurados. Se mantiene el límite entre recibido, completo, revisado y cerrado, además de dato conocido, cero sustentado y ausencia.

Quedan por acordar candidato/permiso, disponibilidad del producto, campos exigibles, plan y cohortes, ventanas, fuentes viables, protocolo temporal, profundidad de revisión, tareas comparables, estadística, criterios de relevancia y continuidad. No se crean compromisos comerciales ni requisitos técnicos definitivos.

La comparación puede ser sesgada por aprendizaje, cambios de proceso, conectividad, apoyo, selección, dificultad o efecto de observar. La mayor detección no significa peores datos. Los indicadores no se utilizarán para sanción o vigilancia; los registros reales requerirían custodia privada y permisos. No se reabre la incidencia residual de metadatos de CG-008 ni se declara purga de objetos anteriores.

## 8. GitHub

Rama: codex/CG-010-medicion-exito-piloto. Base main: 6047406f7ff80a30c0b7c6cace9e395c8de2e68d.

En esta versión previa al commit los documentos aún son locales; no hay commits de CG-010 publicados ni PR. Se usará Git con autor y committer noreply aprobados, sin force ni creación alternativa de commits mediante conector. El reporte se actualizará con el resultado real y la copia local solicitada se comprobará al entregar.

## 9. Estado final y detención

**PARCIAL — documentación verificada; aceptación externa pendiente.** En esta versión previa a publicar quedan pendientes el push y el PR. No se inicia CG-011, no se generan sus especificaciones, no se fusiona CG-010 ni se recopilan datos reales.
