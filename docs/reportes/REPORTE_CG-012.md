# CG-012 — Reporte técnico: inventario físico mínimo

19 de octubre de 2026 · America/Bogota · Fase 00 · P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado: VALIDADA TÉCNICAMENTE EN ALCANCE DOCUMENTAL, EN REVISIÓN; aceptación externa y validación de campo pendientes.** No se presenta un levantamiento real ni se declara la tarea completada por crear las fichas.

## 1. Objetivo y alcance

Preparar un inventario documental adaptable para reconocer posteriormente infraestructura avícola. Se contemplan doce galpones G01–G12 y seis zonas Z01–Z06 como posiciones de referencia del contrato original, secciones A/B condicionales y categorías posibles de servicios compartidos. Ninguna posición acredita existencia, medida, pertenencia o capacidad real.

El contrato original CG-012 pide fichas para esos conteos, secciones y servicios, sin aforos inventados, con dimensiones aproximadas y pendientes. El encargo vigente amplía la precisión documental: origen/disponibilidad/verificación por magnitud, ejemplos sintéticos, límites públicos y ficha reutilizable. No se modifica el catálogo de tareas ni se implementan entidades, persistencia, APIs, interfaces o infraestructura.

## 2. Preparación e integración previa autorizada

Se inspeccionaron estado, rama, worktrees e instrucciones AGENTS.md. Se aplicó control-granja-engineering con referencias de ejecución adaptativa, dominio, privacidad y Git; los criterios de QA y legibilidad se ajustaron a R0. Se consultaron el contrato original CG-012, la política pública `docs/PUBLICACION.md` y CG-005, CG-007, CG-009 y CG-011, tomando como fuente de definiciones al glosario. No se consultaron medidas ni información histórica privada.

La primera revisión automática de `git fetch` agotó su tiempo sin ejecutar el comando; el único reintento autorizado terminó correctamente. La comprobación de ascendencia indicó que CG-011 todavía no estaba integrada. GitHub confirmó que el PR #13 estaba abierto, con cabeza `62662001d24d28e01f183e1cfb724266586c4013` y tres entregables. Se pidió la autorización de fusión que exige AGENTS.md; el propietario respondió expresamente **«Autorizar integrar CG-011»**.

Se integró CG-011 mediante Git normal, con autor y committer noreply aprobados, sin conflictos ni cambios al contenido de sus documentos. El merge **440a52289a055fa9d7c1865aeba225df4abdb161** se publicó por avance normal en main. GitHub confirmó el [PR #13](https://github.com/VicWaltzO/Avicendia/pull/13) cerrado y `merged: true` con ese SHA. La comprobación de ascendencia posterior terminó con salida 0.

La rama **codex/CG-012-inventario-fisico-minimo** parte de `origin/main` actualizado a 440a522, en una copia de trabajo aislada inicialmente limpia. Se preservaron la rama de preparación original, archivos locales ajenos y demás worktrees. La integración de CG-011 es una acción previa autorizada; el incremento de CG-012 comprende únicamente los tres archivos nuevos descritos a continuación.

## 3. Archivos e inventario documental realizado

| Archivo nuevo | Contenido |
|---|---|
| [INVENTARIO_FISICO_MINIMO.md](https://github.com/VicWaltzO/Avicendia/blob/6b84c9956cec7e04d3001da73a12aa22170d3768/docs/00-producto/INVENTARIO_FISICO_MINIMO.md) | Propósito, convenciones, dos vistas de doce galpones, seis zonas, ficha condicional de sección, seis categorías de servicios y ficha de servicio, dimensiones, cinco ejemplos y diez pendientes. |
| [PLANTILLA_FICHA_INFRAESTRUCTURA.md](https://github.com/VicWaltzO/Avicendia/blob/6b84c9956cec7e04d3001da73a12aa22170d3768/docs/00-producto/PLANTILLA_FICHA_INFRAESTRUCTURA.md) | Ficha vacía con identificación común y bloques condicionales de galpón, zona, sección, dimensión y servicio; sin datos reales ni opciones seleccionadas. |
| Este reporte | Alcance, integración previa, aceptación, verificación real, límites, riesgos y entrega Git. |

El reporte también se entrega en la carpeta raíz `docs/reportes` indicada por el propietario; se comprueba igualdad con la versión final de la rama antes de entregar. Las copias reales de campo quedarían fuera del repositorio y sus carpetas de trabajo.

Cada galpón dispone de referencia documental, granja/zona, existencia, secciones, dimensiones, unidades, método, disponibilidad, fuente, necesidad de verificación y observaciones. Las dos vistas se enlazan por G01–G12; no representan veinticuatro instalaciones. Fuente F0 indica ausencia de evidencia. Las dimensiones iniciales son desconocidas, no cero ni «no medido». No se asigna ninguna zona o sección a ningún galpón de referencia.

La ficha de zona recoge función, instalaciones, servicios, límites, confirmación, fuente y pendientes. La ficha de sección permite registrar galpón, identificador local, existencia, límites, dimensiones, método/fuente, confirmación y observaciones sin generar veinticuatro secciones A/B. Las identidades físicas permanecen independientes de la campaña.

El catálogo contempla agua, alimentación, energía, ventilación/ambiente, conectividad y otros recursos. Son categorías posibles, no servicios existentes. Su ficha recoge referencia, categoría, función, instalaciones atendidas, uso compartido, disponibilidad, fuente, medición pendiente y observaciones. Compartir servicio no confirma mediciones ni autoriza repartir una lectura general.

## 4. Dimensiones, ejemplos e información pendiente

Se distinguen obtención (medición directa, estimación o declaración), disponibilidad (incluido desconocido y no medido con constancia) y comprobación. Las categorías pueden coexistir por atributo. La superficie calculada conserva referencias de sus entradas y su incertidumbre; solo se aplica longitud × ancho con geometría rectangular sustentada, mismo ámbito y unidades compatibles. Construida, útil y disponible para alojamiento no se equiparan. Capacidad de alojamiento: **PENDIENTE**, sin cifra ni deducción por área.

Los ejemplos A–E son completamente ficticios, separados de G01–G12 / Z01–Z06:

- A: estimación inventada ≈30 m × ≈8 m → ≈240 m² construidos, con croquis ficticio identificado y verificación pendiente; sin aforo.
- B: galpón sin dimensiones disponibles; desconocido y no calculable, sin afirmar que nunca se midió.
- C: posible zona sin relaciones conocidas con galpones.
- D: dos instalaciones que podrían compartir agua; relación por verificar, sin distribución de consumo.
- E: un galpón con A/B como premisa ficticia y otro sin subdivisión; sin crear secciones universales.

La matriz de pendientes cubre existencia, organización de zonas, secciones, dimensiones, métodos, distribución de servicios, recursos compartidos, capacidad, mantenimiento y funciones de confirmación. Las funciones son propuestas por acordar, no personas asignadas ni autorizaciones ya obtenidas.

## 5. Verificaciones y resultados reales

| Comando / revisión | Resultado observado |
|---|---|
| Estado, ramas, worktrees, instrucciones y contrato original | Inspeccionados antes de editar; preservado trabajo no relacionado. |
| `git fetch origin`, ascendencia CG-011 y consulta PR #13 | Detectada falta de integración; después del merge autorizado, ascendencia con salida 0 y GitHub `merged: true`. |
| `git merge --no-ff …`, push normal de integración y creación de rama CG-012 | Salida 0; identidad noreply comprobada para autor y committer; base 440a522. |
| Lectura completa de ambos documentos nuevos | Realizada: comprobadas definiciones, relaciones pendientes, unidades, campos, ejemplos y límites públicos. |
| Verificación documental de matrices, estados, tablas, ejemplos, enlaces y privacidad focalizada | PASS mediante verificador temporal: 18 tablas con columnas coherentes; G01–G12 en dos vistas; Z01–Z06; relaciones y dimensiones desconocidas; ocho campos de sección, seis categorías y nueve campos de servicio; seis categorías de dimensión; diez pendientes; 39 campos de plantilla vacíos; cinco ejemplos; 30 × 8 = 240; quince criterios; trece enlaces locales; UTF-8 y revisión focalizada de privacidad sin hallazgos en los tres Markdown. |
| Lectura del diff completo y `git diff --cached --check` | PASS: documentos del inventario y plantilla leídos en el diff staged; whitespace con salida 0. Revisión del reporte final antes del commit; alcance de tres Markdown nuevos, sin documentos anteriores ni código. |
| Comprobación desde clon limpio | PASS: clon local con `git clone --no-local --single-branch --branch codex/CG-012-inventario-fisico-minimo …`; verificador repetido con salida 0 y mismos conteos, sobre 6b84c99, antes de publicarlo. Estado limpio. No es un clon remoto independiente. |

No se ejecutan pruebas funcionales, builds, visitas, observaciones de campo, mediciones, evaluaciones de aforo o mantenimiento. Los checks documentales no demuestran existencia de infraestructura ni utilidad de campo. No se afirma ausencia universal de secretos por una revisión focalizada.

## 6. Matriz de aceptación

| # | Criterio del encargo | Evidencia documental / estado |
|---|---|---|
| 1 | Plantilla reutilizable | PASS documental: 39 campos vacíos, bloques condicionales. |
| 2 | Doce galpones de referencia | PASS: G01–G12 exactos en ambas vistas del mismo conjunto. |
| 3 | Seis zonas de referencia | PASS: Z01–Z06 exactos, sin asociaciones asignadas. |
| 4 | Secciones A/B condicionales | Ficha por sección solo cuando corresponda; ejemplo E separado. |
| 5 | Servicios compartidos | Seis categorías y ficha de nueve campos; sin existencia acreditada. |
| 6 | Medición y estimación distinguidas | Tratamiento por magnitud, origen, disponibilidad y comprobación. |
| 7 | Dimensiones pendientes | Todas las posiciones iniciales desconocidas; superficie no calculable sin entradas. |
| 8 | Sin aforos inventados | Capacidad explícitamente pendiente; no se deduce de superficie. |
| 9 | Sin relaciones inventadas como reales | Zona, granja y secciones desconocidas en posiciones; relaciones ficticias identificadas en ejemplos. |
| 10 | Infraestructura independiente de campaña | Identidad física persistente; campaña no identifica instalaciones. |
| 11 | Coherencia CG-007 y CG-009 | Glosario como fuente; ausencia, unidad, ámbito y confirmación separados. |
| 12 | Ejemplos sintéticos | A–E identificados como ficticios, sin medidas privadas. |
| 13 | Sin datos privados | PASS focalizado: contenido sintético, sin fuentes operativas privadas; no certifica ausencia universal de secretos. |
| 14 | Sin arquitectura ni software | PASS: solo tres Markdown nuevos en el diff staged. |
| 15 | Qué comprobar en campo identificable | Necesidad de verificación por ficha y matriz de diez pendientes. |

La aceptación externa y la utilidad operativa permanecen pendientes incluso si los quince criterios documentales se validan técnicamente.

## 7. Limitaciones y riesgos de privacidad

Las cantidades del roadmap no prueban una configuración real. No se reconoció granja alguna, ni se verificaron instalaciones, divisiones, recursos, disponibilidad o capacidad. La ficha no constituye plano, procedimiento de medición profesional ni autorización de acceso. El uso real necesita revisar claridad, carga de cumplimentación y suficiencia con funciones autorizadas.

Ubicaciones, planos, capacidades privadas, responsables identificables, topologías, configuraciones, vulnerabilidades y fuentes operativas no pertenecen al repositorio público. Una copia cumplimentada debe tener finalidad, acceso y custodia privados acordados. No se seleccionan tecnologías ni se muestran sensores o redes como instalados.

No hay datos, migraciones, equipos o producción afectados por CG-012. Retirar sus tres documentos revierte el incremento documental; la integración previa autorizada de CG-011 es independiente. No se modifican entregables anteriores, README, roadmap ni otros proyectos.

## 8. Git, revisión y detención

Rama publicada: `codex/CG-012-inventario-fisico-minimo`. Base: `440a52289a055fa9d7c1865aeba225df4abdb161`.

Commit de entregables: **6b84c9956cec7e04d3001da73a12aa22170d3768**, `docs(00): levantar-inventario-fisico-minimo (CG-012)`. El push normal terminó con salida 0. Un fetch posterior recuperó la misma cabeza desde origin; el diff local/remoto resultó vacío. Autor y committer del objeto publicado: VicWaltzO y `336614700+VicWaltzO@users.noreply.github.com`, identidad aprobada en ambos campos. No hubo force push ni omisión de hooks.

Se creó el [PR #14](https://github.com/VicWaltzO/Avicendia/pull/14) hacia main y se adjuntó al chat. GitHub confirmó base 440a522, cabeza inicial 6b84c99, un commit y tres archivos nuevos; estado abierto y `merged: false`. No se fusiona el PR de CG-012 como parte de esta entrega.

Esta constancia conserva la evidencia de la versión 6b84c99 y se publica en un commit documental adicional. La única modificación posterior es este reporte: resultados del clon, entrega y enlaces de los dos documentos a sus versiones publicadas para que funcionen también desde la copia raíz. La verificación inicial tenía trece enlaces locales; la versión final conserva once locales y dos referencias a blobs publicados. Se repiten los checks afectados antes del commit. Su SHA y la cabeza vigente se pueden consultar en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/14/commits), sin inventar un hash autorreferente.

Se entrega una copia idéntica de este reporte en la carpeta raíz `docs/reportes` indicada por el propietario. La igualdad se verifica mediante SHA-256 tras la publicación final. Los documentos del inventario y la ficha permanecen sin cambios respecto de 6b84c99.

La entrega está validada técnicamente en alcance documental y en revisión externa, sin aceptación final. No se fusionará el PR de CG-012, no se implementará software ni se iniciará CG-013. Este reporte comunica únicamente lo realizado, sin especificar la siguiente tarea.
