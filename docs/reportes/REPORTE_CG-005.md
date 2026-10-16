# CG-005 — Reporte técnico: levantar flujo diario de producción

Fecha: 16 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado final: PARCIAL — modelo técnicamente validado, pendiente de aceptación externa.** El flujo es preliminar; no representa observaciones o entrevistas verificadas. El PR de CG-005 permanece abierto, sin fusionar.

## 1. Identificación, objetivo y alcance

CG-005 construye un modelo de generación, registro, comunicación, revisión y consolidación de información productiva desde recepción de aves hasta cierre diario, continuidad de jornadas y finalización eventual de campaña. Se distinguen recepción y disponibilidad de datos, fecha operativa, correcciones y pendientes.

Se consultaron AGENTS.md, control-granja-engineering y sus referencias de ejecución adaptativa, Git, dominio y privacidad; el contrato CG-005 original y los documentos de CG-002/CG-003/CG-004. No se incorporó documentación privada del paquete original.

El requisito de CG-004 integrada no se cumplía inicialmente. Tras autorización expresa del propietario se integró el [PR #4](https://github.com/VicWaltzO/Avicendia/pull/4), commit c030ad11e5628be78b6870b7eafb2122e6700fef. Se actualizaron main local y origin/main y se comprobó la ascendencia de CG-004 antes de crear la rama. Esa autorización no incluye fusionar CG-005.

## 2. Documentos y decisiones conceptuales

| Documento nuevo | Resultado |
|---|---|
| [FLUJO_DIARIO_PRODUCCION.md](../00-producto/FLUJO_DIARIO_PRODUCCION.md) | Modelo preliminar, actores potenciales, recepción de varias partidas, revisión/cierre, dos diagramas Mermaid y matriz de ocho categorías |
| Este reporte | Aceptación, evidencia de verificación, decisiones y límites, en la misma rama y PR |

La matriz se divide en tres vistas enlazadas por ID para evitar una única tabla de demasiadas columnas. Las ocho categorías son recepción, mortalidad, alimento, agua, ambiente, mediciones productivas, condiciones operativas e incidencias. Cada una cubre T1–T7, origen, actor potencial, soporte, fecha operativa y condiciones de cierre e incertidumbre.

La obligatoriedad propuesta se limita a trazabilidad o señalización de pendientes del modelo; las mediciones y sus frecuencias no se imponen como obligaciones sanitarias. Se distinguen datos condicionales y necesidades por validar. El veterinario no recibe aprobación universal y las funciones pueden coincidir en una persona.

Las seis etiquetas de reporte son descripciones potencialmente coexistentes, no una máquina de estados aprobada. El cierre exige criterios y autoridad por acordar. Se preserva la diferencia entre cierre diario, resolución de incidencia y final de campaña; las correcciones conservan el original y no hay reapertura automática.

## 3. Diagramas elaborados

| Diagrama | Contenido | Resultado de render local final |
|---|---|---|
| Campaña y jornadas | Inicio, recepción de partidas, registro inicial, seguimiento, reporte, siguiente jornada y final autorizado | 7 nodos, 7 aristas; 331 × 742 píxeles |
| Información y reporte diario | T1/T2, registro y fecha operativa, comunicación, revisión, faltantes, aclaración/corrección, consolidación, cierre y datos tardíos | 13 nodos, 17 aristas; 1002 × 1436 píxeles |

Se acortaron rótulos y espaciado, manteniendo el contenido ampliado en el texto y las tablas. Los PNG temporales se inspeccionaron visualmente, sin recortes de rótulos detectados. La entrega conserva los bloques Mermaid estructurados; no se sustituyen por imágenes.

## 4. Matriz de aceptación

| Criterio solicitado | Resultado documental | Evidencia |
|---|---|---|
| 1. Desde recepción hasta cierre diario | PASS | Secciones 4–6 y ambos diagramas |
| 2. Al menos un Mermaid funcional | PASS local | Dos bloques parseados y renderizados con Mermaid 11.12.0 |
| 3. Responsabilidades potenciales | PASS | Tabla de actores y matriz por categoría, siempre por validar |
| 4. Soportes de registro | PASS | Cartillas, hojas y mensajería autorizada; Avicendia como soporte futuro |
| 5. Fecha operativa y transmisión diferenciadas | PASS | Sección 8, America/Lima documental y T1–T7 |
| 6. Matriz por categoría de reporte | PASS | Ocho IDs presentes sin duplicación en tres vistas complementarias |
| 7. Pendientes y correcciones | PASS | Secciones 5, 6.2 y 9; pendientes visibles y original conservado |
| 8. Ausencia distinta de cero | PASS | Reglas conceptuales y casos de ausencia, no medido y cero legítimo |
| 9. Continuidad y fin de campaña | PASS | Diagrama 6.1 y distinción frente al cierre diario |
| 10. Hipótesis de campo pendientes | PASS | Incertidumbres por categoría y sección 10 |
| 11. Coherencia con tareas previas | PASS | Fuentes y correspondencia seis → siete momentos, sin modificar CG-002/003/004 |
| 12. Sin procedimientos hipotéticos como observados | PASS | Aviso inicial, actores potenciales, ausencia de datos, horarios o resultados de campo inventados |

Los doce criterios se comprobaron como aceptación documental. No validan la operación real ni capacidades del SaaS.

## 5. Verificaciones realmente ejecutadas

- Inspección de ramas, cambios y remoto de Avicendia; preservación de branding y otros archivos locales ajenos.
- Fetch de origin/main, actualización local y comprobación de que 231c34f es ancestro de la base antes de crear codex/CG-005-flujo-diario-produccion.
- task_contract.py CG-005 --format json: salida 0. El roadmap no declara dependencias; CG-004 integrada era requisito expreso de esta solicitud.
- Revisión editorial íntegra y revisión interna independiente de contenido contra los doce criterios. Se corrigieron rutas de datos tardíos y una contradicción relativa al cierre con pendientes no bloqueantes; la corrección fue revisada de nuevo sin hallazgos adicionales sobre ese punto.
- Comprobación documental con Python: diez secciones, dos bloques Mermaid, ocho categorías coincidentes en las tres vistas, siete momentos, seis etiquetas y diez excepciones; salida final 0.
- Siete tablas consistentes, cuatro enlaces locales válidos, UTF-8 y espacios finales revisados; sin horas numéricas de operación inventadas. Una primera búsqueda literal falló por mayúsculas en un rótulo; se corrigió el chequeo y la ejecución final pasó sin cambiar el requisito.
- Búsqueda focalizada de tokens, claves privadas, correos y rutas personales sin hallazgos en el documento; revisión manual sin datos de granjas reales. No constituye un escáner universal de secretos.
- git diff --exit-code frente a c030ad1 para los cuatro documentos fuente de CG-002/003/004: sin cambios. Diff completo, incluidos archivos nuevos, y git diff --cached --check aprobados antes del commit del modelo.
- Clon limpio local --no-local --single-branch --no-tags de 888a45b: únicamente FLUJO_DIARIO_PRODUCCION.md nuevo respecto de c030ad1, árbol limpio, cuatro enlaces válidos, CG-004 integrada y objeto del commit local interno no disponible.
- Reporte revisado antes de su commit: formato, enlaces, alcance y coherencia con un estado de aceptación externa pendiente.

No se ejecutaron entrevistas, observaciones de campo, pruebas funcionales del SaaS, builds ni CI remoto. No se ha probado el comportamiento de una aplicación, porque no se modificó código de producto.

## 6. Validación Mermaid y evidencias temporales

No había un CLI Mermaid instalado. Se utilizó una distribución publicada de [Mermaid 11.12.0](https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.min.js), descargada solo para validación temporal, sin instalar dependencias del proyecto. SHA-256 del bundle: 07e37dfa97b337ccc85365d57eddf99b9706f09db3b59b260d0333b23b343c4b.

El helper temporal validate-mermaid.cjs usa Playwright 1.62.1 y Chrome 146.0.7680.180; extrae todos los bloques, ejecuta mermaid.parse y mermaid.render, y guarda SVG, PNG y validation.json. Bloquea la red durante el render: cero peticiones intentadas en la ejecución definitiva. El Chromium empaquetado no pudo iniciarse; se utilizó correctamente el Chrome del sistema con un contexto efímero.

| Comprobación del validador | Resultado |
|---|---|
| Fixture sintético válido de un bloque | PASS de parse y render |
| Fixture sintético válido de dos bloques | PASS en ambos |
| Fixture deliberadamente inválido | Rechazo y salida 1 esperados: control negativo PASS |
| Bloques definitivos de CG-005 | 2/2 parse PASS y render PASS, salida 0 |
| Inspección de PNG definitivos | Rótulos legibles y sin recortes detectados |

Evidencias locales ignoradas por Git: .validation-tmp/cg005-mermaid/flujo-final/validation.json, diagram-01.svg/png y diagram-02.svg/png. Desde la raíz local, el comando de comprobación corresponde a ejecutar el Node empaquetado con validate-mermaid.cjs, la ruta del Markdown y ese directorio de salida. El helper, biblioteca y renders no forman parte del PR ni definen tecnología del SaaS.

Se validó el render local con esa versión, no el cliente web exacto de GitHub. El PR conserva sintaxis Mermaid en Markdown y ajustes de legibilidad; diferencias del visor anfitrión quedan sujetas a su propia versión y estilos.

## 7. Temporalidad, excepciones y límites

T1 evento y T2 disponibilidad refinan el primer momento combinado de CG-004. T3 registro, T4 comunicación, T5 revisión, T6 corrección y T7 cierre mantienen la correspondencia con los otros cinco momentos. No se reemplazan ni editan aquellos instrumentos.

America/Lima es referencia documental del contexto peruano, no zona inferida del servidor ni formato de persistencia. La fecha operativa puede diferir del día en que se registra o transmite un dato; corte de jornada y períodos que atraviesan fechas siguen pendientes.

Se contemplan ausencias, no medido, cero legítimo, llegada tardía, correcciones, duplicados, fuentes contradictorias, fallos de conectividad, incidencias abiertas y diferencias entre partidas/secciones. Las respuestas mantienen evidencia y contexto, sin resolver almacenamiento, deduplicación ni sincronización.

## 8. GitHub, commits y estado

- Repositorio: [VicWaltzO/Avicendia](https://github.com/VicWaltzO/Avicendia).
- Rama: codex/CG-005-flujo-diario-produccion, subida al remoto.
- Base main: c030ad11e5628be78b6870b7eafb2122e6700fef.
- Commit del modelo: [888a45b](https://github.com/VicWaltzO/Avicendia/commit/888a45b50794908c791ec995b9fce298964200b9), docs(product): mapear flujo diario de produccion (CG-005).
- Este reporte se registra en un segundo commit semántico de CG-005, en la misma rama. El SHA de su propio commit se consulta en el historial del archivo, evitando una referencia circular.
- [PR #5](https://github.com/VicWaltzO/Avicendia/pull/5), abierto hacia main con modelo y reporte, sin fusionar.

CG-005 no hace push directo a main, merge ni despliegue. La rama interna con el paquete original no se publica.

## 9. Riesgos, hipótesis y decisiones pendientes

Faltan entrevistas y observaciones que confirmen actores, categorías necesarias, disponibilidad, métodos, unidades, soportes y condiciones de cierre. Deben contrastarse varias partidas, fecha operativa, pendientes bloqueantes, reaperturas, comunicaciones tardías y efectos reales de conectividad.

Los estados propuestos no son un contrato técnico. El modelo no certifica una granja ni valida demanda, salud animal o resultados productivos. No hay umbrales sanitarios, horarios obligatorios ni decisiones de arquitectura nuevas. No se añade deuda de código; la limitación central es la ausencia deliberada de evidencia de campo.

La revisión externa podrá requerir ajustes conceptuales. Este reporte no determina la siguiente tarea ni constituye autorización para convertir el flujo en funcionalidades.

## 10. Estado final y detención

**PARCIAL: entregables de CG-005 técnicamente validados y enviados a evaluación; aceptación externa pendiente.** Los doce criterios documentales se comprobaron. No se fusiona el PR de CG-005, no se inicia CG-006, no se generan sus especificaciones ni se realizan despliegues o entrevistas.
