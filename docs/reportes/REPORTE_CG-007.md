# CG-007 — Reporte técnico: documentar vocabulario del dominio

Fecha: 17 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño S · Documentación MVP · Riesgo R0.

**Estado final: PARCIAL — validada técnicamente, pendiente de aceptación externa.** El glosario define significados documentales y reservas; no acredita funcionalidades, validación de campo ni decisiones de arquitectura aprobadas.

## 1. Identificación, objetivo y alcance

Establecer vocabulario técnico y operativo que diferencie organización corporativa, infraestructura física, ciclo temporal, ingresos de aves, agrupaciones comerciales, registros y evidencias. Se cubren los ocho conceptos de la referencia original CG-007 y se añade Tenant/Organization, además de vocabulario operativo y comunicaciones solicitado en esta ejecución.

La referencia original pide evitar que sección y ciclo compartan identidad. El contrato vigente amplía ese resultado con matriz de ocho columnas, fuentes/estados, reservas comerciales, diagramas y ejemplos sintéticos. No se modifican arquitectura, esquemas, reglas de persistencia, APIs ni roadmap.

Se consultaron AGENTS.md local y de la base pública, control-granja-engineering, sus invariantes y referencias de dominio, ejecución adaptativa y Git, el contrato CG-007 y CG-002/005/006. Se revisó puntualmente la nomenclatura del modelo conceptual local para identificar usos de «lote»; no se copió su documentación ni sus ejemplos históricos a la entrega.

## 2. Preparación y base

El [PR #6 de CG-006](https://github.com/VicWaltzO/Avicendia/pull/6) seguía abierto. Tras autorización expresa del propietario, se integró su cabeza 58c8a7f mediante merge 6bfb9f8ba8f012b8546f1ef6a9f1b80367b36f5e. Se actualizaron origin/main y main local por avance rápido y se comprobó la ascendencia de CG-006 antes de crear codex/CG-007-vocabulario-dominio.

La copia pública estaba limpia. Se reutilizó el worktree de entrega del mismo Avicendia y se preservaron la rama privada de preparación, branding y demás trabajo ajeno. No se modificaron otros repositorios. La autorización para integrar CG-006 no incluye fusionar CG-007.

## 3. Documentos y conceptos elaborados

| Documento nuevo | Resultado |
|---|---|
| [GLOSARIO_DOMINIO.md](../00-producto/GLOSARIO_DOMINIO.md) | Trece secciones, veintiocho términos, fuentes/estados, dos diagramas y cuatro ejemplos sintéticos |
| Este reporte | Objetivo, decisiones, aceptación, verificaciones, riesgos y trazabilidad de revisión |

La matriz cubre empresa, granja, zona, galpón, sección, campaña, partida y lote comercial; también Tenant/Organization. Añade los diecisiete términos operativos requeridos y dos aclaraciones —mensaje y registro operativo—, para un total de veintiocho entradas únicas. Se organiza en cinco tablas con las ocho columnas solicitadas, más una tabla de decisiones pendientes.

Las definiciones distinguen instalación de ocupación, campaña de partida y agrupación de acto comercial. El inventario previo de soportes no se convierte en un catálogo de entidades ejecutables.

## 4. Decisiones y reservas

- Tenant no equivale a Company; su relación y cardinalidad permanecen pendientes, al igual que la relación efectiva entre empresas y granjas.
- Las instalaciones conservan identidad entre campañas. La existencia de zonas/secciones y los efectos de cambios físicos requieren comprobación.
- Una campaña puede incluir varias partidas y recepciones en momentos distintos; no se impone una recepción por partida ni un alcance definitivo de campaña entre instalaciones.
- Se conserva la invariante de no alojar dos campañas independientes activas en una sección, salvo excepción validada y modelada expresamente. No se habilita excepción alguna aquí.
- Lote comercial es una definición provisional de seguimiento comercial, sin equivalente técnico inglés aprobado. No se equipara a campaña, partida, población alojada, selección para venta ni operación/salida.
- «Registro» distingue recopilación diaria de registro operativo aceptado; «recepción» se califica como aves o información; «cierre» como diario o de campaña. «Lote» exige aclaración contextual.
- Estado y fuente se indican por término. «Definido» acredita significado documental, no implementación ni validación de campo. Descarte, traslado, despacho y cierre de campaña conservan formulaciones de trabajo identificadas como propuestas.

## 5. Matriz de aceptación

| Criterio solicitado | Resultado documental | Evidencia |
|---|---|---|
| 1. Ocho conceptos principales del roadmap | PASS | Ocho entradas cubiertas en 8.1–8.2, además de Tenant/Organization |
| 2. Tenant distinto de Company | PASS | Sección 3, matriz y reserva explícita de cardinalidad/política |
| 3. Identidades físicas independientes | PASS | Sección 4 y columna Identidad independiente |
| 4. Section distinta de Flock | PASS | Infraestructura frente a ciclo temporal; E01 y diagrama 9.2 |
| 5. Flock distinto de PlacementGroup | PASS | Sección 5, matriz y E02 |
| 6. Varias partidas en una campaña | PASS | Ingresos/orígenes diferenciados y recepción en momentos distintos |
| 7. Lote comercial sin sinonimia con partida/campaña | PASS | Sección 6, estado provisional y ejemplo E04 |
| 8. Matriz terminológica consistente | PASS | Veintiocho términos únicos, cinco grupos, ocho columnas, sin celdas vacías |
| 9. Al menos un Mermaid | PASS local | Dos bloques con parse y render aprobados en Mermaid 11.12.0 |
| 10. Ejemplos sintéticos de identidad/relaciones | PASS | E01–E04: sucesión, partidas, varios galpones y selección comercial |
| 11. Pendientes identificados | PASS | Nueve cuestiones en sección 12, incluidas las ocho solicitadas |
| 12. Coherencia con CG-002/005/006 | PASS | Fuentes P2/P5/P6 y distinciones de identidad, tiempo, evidencia y registro |
| 13. Sin reglas técnicas definitivas nuevas | PASS | Diagramas sin cardinalidades; sin SQL, entidades, endpoints o política multiempresa |
| 14. Sin información privada publicada | PASS en el contenido revisado | Ejemplos ficticios sin cantidades o datos históricos; solo glosario y reporte nuevos |

Los catorce criterios se comprobaron como documentación. No equivalen a aprobación externa ni a reglas de negocio verificadas en una operación real.

## 6. Verificaciones ejecutadas

| Comando o comprobación | Resultado observado |
|---|---|
| git status, remote y revisión del árbol main | Avicendia confirmado; copia de entrega limpia y base documental |
| Consulta del PR #6, integración autorizada, fetch origin main y merge --ff-only | PASS; main y origin/main en 6bfb9f8 antes de crear la rama |
| git merge-base --is-ancestor 58c8a7f main | Salida 0: CG-006 integrada |
| task_contract.py CG-007 --format json | Salida 0; contrato original consultado, sin dependencias declaradas |
| Comprobación documental Python temporal por stdin | PASS: trece secciones, veintiocho términos únicos, cinco grupos de ocho columnas, seis tablas consistentes, fuentes/estados y campos completos |
| Enlaces, ejemplos, codificación y formato | PASS: tres enlaces relativos existentes, E01–E04, UTF-8 sin BOM y LF, sin espacios finales |
| Lectura completa, revisión lingüística y del diff real | Realizadas; distinciones, reservas e inglés/español contrastados con fuentes y solicitud |
| git diff --cached --check y diff --check frente a la base | Salida 0 para el glosario preparado y comprometido |
| git diff --exit-code frente a la base sobre archivos existentes | Salida 0; documentos anteriores, AGENTS y README permanecen intactos |
| Revisión focalizada de privacidad | Sin patrones de tokens, claves privadas, correos o rutas personales; lectura sin datos reales ni material original privado |
| git merge-base --is-ancestor del commit interno respecto de HEAD | Salida 1 esperada: la rama privada de preparación no es ancestro de la entrega |
| Publicación del glosario y creación del PR #7 | Push confirmado de 9626130; PR creado inicialmente en borrador hacia main |
| Comprobación Python del reporte y revisión íntegra de su diff | PASS: diez secciones, catorce criterios, cuatro tablas consistentes, enlaces válidos, UTF-8/LF, sin patrones sensibles y hash del glosario coincidente |

Una inspección Git sin elevación falló por el acceso al worktree en la carpeta renombrada. La comprobación Python previa había pasado; se repitió Git con los permisos del entorno y la inspección posterior terminó correctamente. No se cambió el contenido para resolver esa limitación.

SHA-256 del glosario validado y comprometido: b3afaea9a383785bde95807be54f2bd5c51ffab2f3d19171b48b6a834bae9566. Las comprobaciones temporales no son pruebas funcionales del SaaS ni código incorporado al producto. La búsqueda focalizada no certifica universalmente ausencia de secretos.

## 7. Evidencia Mermaid y límites de QA

Se reutilizó el helper temporal local validate-mermaid.cjs con la distribución disponible Mermaid 11.12.0 y Chrome 146.0.7680.180. SHA-256 del bundle: 07e37dfa97b337ccc85365d57eddf99b9706f09db3b59b260d0333b23b343c4b. No se instalaron dependencias del proyecto.

| Diagrama | Análisis y render | Resultado visual local |
|---|---|---|
| Corporativo e infraestructura | PASS / PASS; 6 nodos, 5 aristas | 238 × 573 píxeles; rótulos legibles, sin recortes detectados |
| Campaña, partidas y ocupación | PASS / PASS; 4 nodos, 3 aristas | 453 × 324 píxeles; identidades separadas y rótulos legibles |

Se ejecutó Node con el helper, el glosario y salida temporal .validation-tmp/cg007-mermaid. Cada bloque Markdown se comparó con su archivo .mmd renderizado: 2/2 coincidentes. La ejecución bloqueó la red y registró cero solicitudes intentadas. validation.json, SVG, PNG y el helper permanecen locales, fuera del PR.

No se verificó el render exacto del visor de GitHub ni se usó corrector ortográfico automático. No se ejecutaron entrevistas, observaciones, pruebas funcionales del SaaS, builds, migraciones o CI remoto. La revisión ortográfica y de claridad fue manual.

## 8. Calidad, limitaciones e hipótesis pendientes

Se revisaron nombres, ubicación, responsabilidades descritas, flujo conceptual, duplicación, errores de atribución, alcance y evidencia de QA. La compatibilidad comprobada es terminológica; no existe cambio de comportamiento ejecutable sobre el que afirmar pruebas de regresión funcional.

Siguen pendientes uso local de «lote», agrupaciones comerciales, asignación de ingresos a campañas, límites físicos y excepciones de ocupación, vínculos corporativos, autorización de cierres y correcciones. La nomenclatura puede variar entre empresas; un nombre compartido no prueba identidad ni autorización. Los ejemplos ilustran distinciones, no validan esas reglas en campo.

No hay deuda de código, decisiones de almacenamiento ni tecnología nueva. La principal limitación es de validación operacional y aceptación externa. Recuperación: ajustar o rechazar el PR sin migraciones ni datos reales que revertir. Los documentos fuente y el paquete local privado se preservan.

## 9. GitHub, commits y revisión

- Repositorio: [VicWaltzO/Avicendia](https://github.com/VicWaltzO/Avicendia).
- Rama: codex/CG-007-vocabulario-dominio, creada desde main 6bfb9f8ba8f012b8546f1ef6a9f1b80367b36f5e.
- Glosario: [9626130](https://github.com/VicWaltzO/Avicendia/commit/96261303efea20f269b15a32bd0fd76ad284c9c4), docs(00): documentar-vocabulario-del-dominio (CG-007), subido.
- Este reporte se incorpora en otro commit semántico de CG-007 en la misma rama. Su SHA se consulta en el historial del archivo o PR, evitando una referencia circular.
- [PR #7](https://github.com/VicWaltzO/Avicendia/pull/7), abierto hacia main y sin fusionar; glosario y reporte constituyen el incremento de revisión.

Los commits de entrega usan identidad pública noreply. No se hace push directo a main ni se publica la rama privada. No hay release ni despliegue.

## 10. Estado final y detención

**PARCIAL: glosario técnicamente validado y entregado para auditoría externa; aceptación pendiente.** Se comprobaron los catorce criterios documentales, sin presentar propuestas como reglas aprobadas ni capacidades existentes. No se fusiona CG-007, no se inicia CG-008 ni se generan especificaciones posteriores. El supervisor externo determinará aceptación o ajustes de esta tarea.
