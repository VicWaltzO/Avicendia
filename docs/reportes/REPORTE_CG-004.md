# CG-004 — Reporte técnico: preparar entrevistas de campo

Fecha: 16 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño M · Alcance MVP · Ejecución documental R0.

**Estado final: PARCIAL — instrumentos técnicamente validados, aceptación externa pendiente.** No se han realizado entrevistas, obtenido consentimientos ni producido hallazgos de campo. El PR de CG-004 permanece abierto y sin fusionar.

## 1. Identificación y alcance autorizado

La referencia CG-004 se titula «Entrevistar actores de campo» y propone preparar guiones para galponero, encargado, veterinario, ventas y dirección. El encargo vigente delimita esta ejecución a diseñar los instrumentos y formatos, sin simular respuestas, contactar trabajadores o entrevistar por cuenta propia.

Se consultaron AGENTS.md, control-granja-engineering y las referencias de ejecución adaptativa, entregas Git y privacidad. Se leyeron TESIS_PRODUCTO.md, CLIENTE_IDEAL.md y el contrato CG-004 original mediante task_contract.py.

El PR #3 de CG-003 aún estaba abierto en la inspección inicial. El propietario autorizó expresamente integrarlo para desbloquear CG-004. Se fusionó en [PR #3](https://github.com/VicWaltzO/Avicendia/pull/3), commit 2287e6ab9234b9db95705af44e29d813da29343e, y se actualizó main local antes de crear la rama de CG-004. Esta autorización no se extiende al merge de CG-004.

## 2. Instrumentos elaborados y archivos modificados

| Archivo nuevo | Contenido |
|---|---|
| [GUIA_ENTREVISTAS_CAMPO.md](../00-producto/GUIA_ENTREVISTAS_CAMPO.md) | Objetivos, metodología, consentimiento, seis preguntas comunes, cinco guiones, seguimientos, cronología, trazabilidad de hipótesis y límites |
| [FORMATO_ENTREVISTA.md](../00-producto/FORMATO_ENTREVISTA.md) | Plantilla reutilizable no iniciada: ficha no identificativa, permisos pendientes, tareas, cronología, hallazgos, métricas, evidencia y cierre |
| Este reporte | Evidencia de aceptación, decisiones, verificaciones y entrega de CG-004 para auditoría externa |

Los tres documentos se entregan en la misma rama y PR. No se alteraron código, arquitectura, bases, roadmap ni los resultados documentales de CG-002/CG-003. Los archivos ajenos de branding y la documentación interna local permanecen preservados.

## 3. Actores cubiertos

Cada actor utiliza C1–C6 y el bloque específico correspondiente, con F1–F4 como seguimientos selectivos y Z1–Z2 para cierre.

| Actor | Guion | Cobertura principal |
|---|---|---|
| Galponero | G1–G5 | Jornada, responsabilidades, registros, mediciones, cartillas, comunicación, faltantes, errores y dispositivos |
| Encargado de granja | E1–E5 | Supervisión, coordinación, consolidación, revisión, incidencias, información incompleta, consultas y cierre |
| Veterinario o responsable sanitario | V1–V5 | Frecuencia real de intervención, información e indicadores, anomalías, trazabilidad y seguimiento, sin diagnóstico ni prescripción |
| Responsable comercial o de ventas | S1–S5 | Producción disponible, registros y documentos, conciliación, errores y consulta histórica, sin presuponer un departamento independiente |
| Dirección o administración | A1–A5 | Decisiones, indicadores, supervisión, esfuerzo/costos de registro, herramientas, adopción y proceso de compra, sin inferir presupuesto |

Los roles pueden coincidir en una persona. No se asume participación diaria del veterinario, teléfono por operario ni disponibilidad efectiva de participantes.

## 4. Matriz de criterios de aceptación

| Criterio del encargo | Resultado documental | Evidencia |
|---|---|---|
| 1. Guiones para cinco actores | PASS | Sección 6 de la guía, G/E/V/S/A con cinco preguntas centrales cada uno |
| 2. Tareas y responsabilidades en cada guion | PASS | C1 más G1, E1, V1, S1 y A1, y registros de tareas de la plantilla |
| 3. Horarios y momentos de registro | PASS | C2, seis momentos en guía/formato y preguntas temporales por rol; sin suponer cierre matinal |
| 4. Errores e inconsistencias | PASS | C4, G4, E3, V3/V5, S4, A2 y seguimientos de incidente |
| 5. Consentimiento explícito | PASS | Sección 3 de guía y 2 de formato: entrevista, notas, grabación y evidencia separados, retiro y restricciones |
| 6. Formato reutilizable | PASS | Plantilla vacía con fecha sin completar, sesión no iniciada, permisos pendientes y casillas sin marcar |
| 7. Observación, declaración e hipótesis diferenciadas | PASS | Clasificación D/O/H, fuente y precisión; un relato aislado mantiene la hipótesis pendiente |
| 8. Contrastar CG-002/CG-003 | PASS | Matriz de once hipótesis y preguntas trazables; cuatro métricas y condiciones digitales/captura/adopción |
| 9. Sin datos operativos privados | PASS en contenido revisado | Documentos nuevos sin participantes, respuestas, clientes, contactos, ubicaciones ni evidencia real |
| 10. Sin entrevistas inexistentes como realizadas | PASS | Avisos de instrumento no aplicado, plantilla NO INICIADA y consentimientos pendientes |

La aceptación comprobada es la del instrumento documental. No acredita resultados de investigación ni validación comercial.

## 5. Verificaciones realmente ejecutadas

- Inspección de estados Git de copia local y checkout público, sin eliminar ni incorporar cambios ajenos.
- git fetch origin main --no-tags, actualización de main local y comprobación de que 429a22a es ancestro de main antes de crear la rama.
- task_contract.py CG-004 --format json: salida 0; objetivo, aceptación y dependencias originales consultados. La referencia no declara dependencias; CG-003 integrada era una condición del encargo vigente.
- Lectura y revisión del diff completo de los dos instrumentos, incluidos todos los campos de la plantilla. Terminología y ortografía revisadas editorialmente.
- Comprobación con Python: cinco guiones de cinco preguntas centrales, seis comunes, cuatro seguimientos, dos cierres y once hipótesis; salida 0. Se revisaron consentimiento pendiente, estados no iniciados, cronología y categorías D/O/H.
- Cinco enlaces relativos entre instrumentos y CG-002/CG-003 resueltos, diez tablas con columnas consistentes, UTF-8 y espacios finales comprobados. La agenda propuesta suma 25 minutos; no se midió una sesión real.
- Búsqueda focalizada de tokens, claves privadas, correos y rutas personales, sin hallazgos en los instrumentos. Revisión manual sin información operativa privada. No es un escáner universal ni certificación de privacidad.
- git diff --exit-code frente a 2287e6a para TESIS_PRODUCTO.md y CLIENTE_IDEAL.md: sin cambios. git diff --cached --check: aprobado antes del commit de instrumentos.
- Clon limpio local --no-local --single-branch --no-tags de 80c17b7: diff limitado a los dos instrumentos, cinco enlaces válidos, CG-003 integrada, árbol limpio y objeto del commit local interno no disponible.
- Revisión documental del reporte y su diff antes del commit: enlaces locales, formato, coherencia de estado, privacidad y alcance de tres archivos comprobados.

No se ejecutaron entrevistas, contactos, consentimientos reales, mediciones de uso, pruebas funcionales del SaaS, build ni CI remoto. No hay código de aplicación modificado. Las comprobaciones documentales no prueban que una sesión dure 20–30 minutos ni que las hipótesis sean verdaderas.

## 6. Decisiones metodológicas

Se propone una entrevista base de 25 minutos ajustable a 20–30, sin repetir respuestas entre bloques: 3 de consentimiento, 5 de contexto común, 10 de rol, 5 de incidente y 2 de cierre. Los seguimientos son selectivos y las omisiones deben quedar registradas; la duración queda pendiente de uso real autorizado.

Se prioriza el último caso concreto y un contraste donde no hubo problema. Se distingue tiempo activo de espera, frecuencia recordada de conteo y dato faltante de cero. Los seis momentos son evento, registro, comunicación, revisión, corrección y cierre; no se presume que todos ocurran o estén disponibles por la mañana.

Se enlazan cinco hipótesis de CG-002 y seis de CG-003 con preguntas identificadas. Una observación requiere permiso y límites; una declaración no se convierte en observación por grabarse. Confirmación o contradicción solo pueden referirse al caso y requieren evidencia explícita; no se generalizan al mercado.

El roadmap clasifica originalmente CG-004 como feat. Se utiliza **docs(research)** por la autorización específica para esta preparación exclusivamente documental. No se modifica el JSON original para efectuar ese ajuste.

## 7. Calidad, privacidad y seguridad

Se emplean preguntas abiertas y se incluyen experiencias favorables, negativas y desconocidas, sin sugerir aprobación hacia Avicendia. Los guiones adaptan responsabilidades reales y evitan diagnósticos, recetas, presupuestos o disposición de pago inventados.

La guía separa permiso operativo, participación individual, notas, grabación, observación y conservación de evidencia. Los campos no se dan por aceptados. Las copias cumplimentadas y cualquier material real deben quedar fuera del repositorio y sus carpetas de trabajo, bajo custodia y acceso aprobados. Un código no garantiza anonimato absoluto: deben evitarse detalles que identifiquen indirectamente.

No se añaden dependencias ni se modifican contratos ejecutables, por lo que no hay una regresión funcional que probar en esta entrega. La preparación no constituye dictamen legal ni permiso para iniciar investigación de campo.

## 8. GitHub y commits

- Repositorio: [VicWaltzO/Avicendia](https://github.com/VicWaltzO/Avicendia).
- Rama: codex/CG-004-entrevistas-campo.
- Base main: 2287e6ab9234b9db95705af44e29d813da29343e.
- Commit de instrumentos: [80c17b7](https://github.com/VicWaltzO/Avicendia/commit/80c17b706ff7bce1833f10ac353c8da82d94bd0c), docs(research): preparar entrevistas de campo (CG-004).
- El reporte se incorpora en un segundo commit semántico de CG-004, en esta misma rama. El SHA de su propio commit se consulta en el historial del archivo para evitar una referencia circular.
- [PR #4](https://github.com/VicWaltzO/Avicendia/pull/4), dirigido a main, abierto y sin fusionar; entrega final con guía, formato y reporte.
- Push de la rama realizado; no se publica la rama de documentación interna ni se hace push directo a main de CG-004.

## 9. Riesgos, limitaciones y pendientes

Memoria, cortesía, presión jerárquica y selección por acceso pueden sesgar respuestas. No se han probado comprensión, duración o carga real del instrumento ni existe muestra definida o evidencia de saturación. El formato deja visibles las preguntas omitidas y la incertidumbre, en vez de inferir respuestas.

Antes de trabajo real deberán resolverse responsable de custodia, espacio privado autorizado, acceso, conservación, retiro y permisos de participantes y contexto. Están deliberadamente pendientes: no son consentimientos obtenidos. Esas condiciones se exigen para usar el instrumento, no se simulan en esta entrega.

La revisión externa puede requerir ajustes de lenguaje o metodología. No hay deuda técnica de código, datos reales, entrevistas realizadas ni nuevos resultados que modifiquen CG-002/CG-003. No se elabora un flujo definitivo ni se anticipan las especificaciones de CG-005.

## 10. Estado final y detención

**PARCIAL: preparación de CG-004 técnicamente validada, con evaluación y aceptación externa pendientes.** Los diez criterios documentales se comprobaron. Se entrega el PR abierto sin fusionar y se detiene la ejecución. No se realizan entrevistas ni se inicia CG-005.
