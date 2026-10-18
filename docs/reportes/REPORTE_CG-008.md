# CG-008 — Reporte técnico: ejemplo operativo G06

Elaboración inicial: 17 de octubre de 2026. Actualización autorizada: 18 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño S · Documentación MVP · Riesgo R0 para el caso sintético.

**Estado: PARCIAL — caso sintético validado; reproducción histórica exacta y aceptación externa pendientes.** La publicación fue corregida con el lease autorizado y con identidad pública noreply. El PR está abierto, sin fusionar; persisten el criterio histórico y la evaluación externa del riesgo residual de metadatos.

## 1. Objetivo y alcance

Construir un caso documental reproducible de una campaña con dos partidas, ingresos diferenciados, cantidades por sexo, mortalidad de varias jornadas, consumo, mediciones parciales, corrección y diferencias temporales. No se implementan funciones del SaaS, base de datos, importadores ni servicios.

La referencia original CG-008 pide reproducir cantidades históricas aportadas. La solicitud vigente añade una entrega pública exclusivamente sintética y separa esa reproducción como criterio privado independiente. El caso inventado no acredita fidelidad numérica histórica.

## 2. Preparación y fuentes

Se revisaron AGENTS.md local y público, control-granja-engineering, las referencias de dominio/invariantes, seguridad, privacidad y ejecución adaptativa, el contrato original CG-008 y los documentos de CG-005/006/007.

CG-007 seguía abierta en el [PR #7](https://github.com/VicWaltzO/Avicendia/pull/7). Tras autorización expresa del propietario se integró su cabeza 86f2bd9 mediante merge b023724ea04f7303ac96673b8445fd2eb95b618e. Se actualizaron main local y origin/main por avance rápido y se verificó la ascendencia de CG-007 antes de crear codex/CG-008-ejemplo-operativo-g06.

La copia pública estaba limpia. Se preservaron la rama privada de preparación, branding y los demás archivos ajenos. Se trabaja exclusivamente en Avicendia; el paquete privado y sus documentos originales no forman parte de la entrega.

## 3. Documentos creados y características

| Archivo | Contenido |
|---|---|
| [EJEMPLO_OPERATIVO_G06.md](../00-producto/EJEMPLO_OPERATIVO_G06.md) | Doce secciones, ocho tablas, cálculos, temporalidad y doce casos conceptuales CP01–CP12 |
| [G06_SINTETICO.json](../00-producto/fixtures/G06_SINTETICO.json) | Datos inventados, referencias, dos partidas/recepciones, cuatro registros diarios, una corrección, cuatro referencias de medición y resultados esperados |
| Este reporte | Alcance, matemáticas, aceptación, evidencias, riesgos y estado real de GitHub |

El escenario tiene empresa, granja y galpón ficticios y una sola campaña. No representa sección ni reparto de población por subdivisión; tampoco define Tenant–Company. Las fechas/horas operativas de 2034 son sintéticas y usan America/Lima con desplazamiento -05:00.

El JSON es un formato documental mínimo, no un esquema definitivo ni una máquina de estados. Cantidades de ingreso se toman una sola vez de partidas; recepciones y resultados esperados no son nuevos ingresos. Los ceros de otros movimientos y saldo previo son supuestos explícitos del ejemplo.

## 4. Validaciones matemáticas y resultados sintéticos

| Comprobación | Resultado reproducido |
|---|---|
| Primera partida | 713 machos + 587 hembras = 1300 |
| Segunda partida | 463 machos + 397 hembras = 860 |
| Campaña después de ambas recepciones | 1176 machos + 984 hembras = 2160; coincide con 1300 + 860 |
| Primera jornada, solo primera recepción | Mortalidad 7/5, total 12; saldo 706/582, total 1288 |
| Segunda jornada, ambas recepciones | Mortalidad vigente 4/3, total 7; acumulada 11/8, total 19; saldo 1165/976, total 2141 |
| Tercera y cuarta jornadas | Machos acumulados 17 y saldo 1159; hembras acumuladas y saldo total desconocidos por faltante de RD-C |
| Hembras conocidas al final | Se conocen 10 bajas, pero no es un acumulado completo ni permite saldo exacto |
| Consumo conocido | 6 sacos y 121.5 kg separados; sin conversión ni total completo por falta de peso por saco y un registro |
| Muestra ficticia de buche | 9 + 4 + 2 + 1 = 16; porcentajes 56.25, 25, 12.5 y 6.25, total 100 % |
| Corrección CO-SIN | Conserva 4 → 3 hembras de RD-B; se usa solo la versión vigente y su disponibilidad en T6 |

No se asignan bajas a partidas sin desglose ni se infieren mediciones. pH y temperatura ambiental son valores sintéticos de un punto/momento. Temperatura cloacal no medida y otros faltantes conservan null con motivo. No se emiten diagnósticos ni comparaciones con objetivos oficiales.

## 5. Matriz de aceptación

| Criterio vigente | Resultado | Evidencia y límite |
|---|---|---|
| 1. Caso documental completo | PASS sintético | Organización, entradas, jornadas, alimento, mediciones, corrección, tiempos y límites |
| 2. Dos partidas diferenciadas | PASS | PA-SIN y PB-SIN dentro de CA-SIN, con recepciones RX-A/RX-B |
| 3. Cantidades coherentes por sexo | PASS | Sumas independientes contrastadas con resultados esperados |
| 4. Saldos reproducibles donde corresponda | PASS | 1288 y 2141; saldo total posterior null por insuficiencia |
| 5. Mortalidad diaria y acumulada diferenciadas | PASS | Valores por jornada/sexo y propagación del faltante |
| 6. Consumo con unidades verificables | PASS documental | Unidad original saco/kg; sin conversión no sustentada |
| 7. Mediciones parciales | PASS | Muestra explícita, porcentajes compatibles y cloacal no medida |
| 8. Temporalidad coherente | PASS | T1–T7, registros nocturnos y disponibilidad del valor corregido diferenciada |
| 9. Ausencia distinta de cero | PASS | Null en datos desconocidos; cero de machos de RD-D y supuestos expresamente ficticios |
| 10. JSON válido | PASS | Parser estricto, sin claves duplicadas ni constantes no JSON |
| 11. Coherencia con glosario | PASS documental | Campaña/partida, infraestructura, recepción, evidencia/registro y cierres separados |
| 12. Separación histórica/sintética | PASS | Avisos en documento/JSON y cantidades iniciales distintas verificadas localmente |
| 13. Ausencia de datos privados publicados | PARCIAL | Archivos sin datos operativos privados; incidencia de metadatos del commit intermedio; rama sustituida con identidad noreply y commit anterior fuera de su ascendencia; persiste riesgo de objetos/referencias/cachés sin purga acreditada |
| 14. Límites e incertidumbres | PASS | Nacimiento/hora, bajas por partida, mortalidad, alimento, peso por saco, mediciones y reproducción histórica pendientes |
| Original: reproducir cantidades históricas | PENDIENTE | No se ejecutó comparación cuantitativa histórica completa; no se sustituye con un PASS sintético |

Los resultados sintéticos no acreditan operación real ni aceptación final. La incidencia de metadatos se distingue de la protección de cifras y evidencias históricas.

## 6. Referencia histórica y comprobación privada

Las comprobaciones descritas en esta sección corresponden a la elaboración inicial. En la corrección del 18 de octubre no se accede de nuevo a fuentes históricas ni se efectúan operaciones adicionales con información privada.

Se localizaron referencias privadas locales con información de ingresos, mortalidad, consumo y mediciones, junto con restricciones expresas de privacidad. Su inspección estructural se hizo con procesos locales que devolvieron solo categorías y resultados generales, sin imprimir sus valores.

Se contrastó localmente que las cuatro cantidades iniciales inventadas no coincidieran con los literales numéricos identificados en la referencia seleccionada. Eso comprueba separación de esas entradas; no demuestra que cada escalar pequeño nunca coincida casualmente ni reproduce la serie histórica.

**Reproducción cuantitativa histórica exacta: PENDIENTE.** La comparación completa no se ejecutó. No se construyó ni publicó una réplica de cantidades privadas. La ejecución se limitó al caso sintético público y a la inspección/separación local; una comprobación histórica completa requiere evaluación y alcance privado propios. No se presume falta de evidencia como cero ni se inventa autorización de divulgación.

No se conservaron copias de datos históricos en los entregables, fixtures públicos o comentarios de PR. No se transmitió material histórico a servicios externos adicionales. El criterio original requiere evaluación externa separada y no se declara satisfecho.

## 7. Verificaciones ejecutadas

La primera tabla conserva las verificaciones de la elaboración inicial; no implica su repetición durante la corrección de publicación.

| Comando o comprobación | Resultado real |
|---|---|
| Inspección Git, remoto, instrucciones y documentos | Avicendia confirmado, copia de entrega limpia y trabajo ajeno preservado |
| Fetch de main, avance rápido y merge-base de CG-007 | PASS; main y origin/main en b023724 antes de la rama |
| task_contract.py CG-008 --format json | Salida 0; criterio original consultado, sin dependencias declaradas |
| Python temporal: inspección histórica estructural | Categorías localizadas sin mostrar cifras, fechas o identidades históricas |
| Primera validación documental/matemática | FAIL temprano por finales CRLF del JSON; aún no acreditaba los cálculos |
| Normalización a UTF-8/LF y ejecución completa de verify_cg008.py | PASS; dos partidas, cuatro jornadas, referencias, cantidades, fechas, unidades y resultados esperados |
| Aritmética con enteros y Decimal | PASS; población, mortalidad por sexo, acumulados, saldos, consumo por unidad y muestra |
| Faltantes, corrección y temporalidad | PASS; null no sustituido por cero, incertidumbre acumulada conservada, corrección sin duplicación, T1–T7 ordenados |
| Ajuste tras lectura completa | Se aclaró que T2/T3/T4 de RD-B corresponden al valor original; el corregido está disponible en T6 |
| Nueva ejecución tras ese ajuste | PASS completo del documento y fixture definitivos |
| Estructura Markdown y enlaces | Doce secciones, ocho tablas consistentes, CP01–CP12 y cuatro enlaces locales válidos |
| Privacidad de archivos | Búsquedas focalizadas sin tokens, claves, correos o rutas personales; revisión manual sin originales históricos |
| Diff completo de los dos archivos y diff --cached --check | Revisados antes del commit; formato aprobado |
| Diff frente a la base de documentos existentes | Salida 0: documentos previos, AGENTS y README sin cambios |
| Revisión de historial nuevo | Un commit documental sobre b023724 antes del reporte; rama privada de preparación no ancestro |
| Árbol publicado por conector frente al commit local | Mismo árbol y contenido, sin incorporar otros archivos |
| Comprobación Python del reporte provisional | PASS: diez secciones, catorce criterios y original pendiente, tablas y enlaces consistentes, sin patrones sensibles |
| Simulación Git de la sustitución, sin cambios remotos | Primera prueba no interactiva sin selección de cuenta falló; seleccionando la cuenta conocida la simulación terminó con salida 0 |

Las comprobaciones temporales están fuera del PR y utilizan biblioteca estándar; no son lógica del producto ni pruebas funcionales del SaaS. La búsqueda focalizada no certifica universalmente la ausencia de secretos.

No se realizaron entrevistas, observaciones de campo, extracción de evidencia real, pruebas funcionales, builds ni CI remoto. La revisión de ortografía y claridad fue manual.

## 8. GitHub e incidencia de publicación

Rama: codex/CG-008-ejemplo-operativo-g06. Base main: b023724ea04f7303ac96673b8445fd2eb95b618e. Solo se publican el caso, el fixture sintético y este reporte.

La primera subida Git no respondió y se detuvo. El conector publicó los dos archivos sintéticos en ff2dfe71dbffdf1507f9eb3bc247addb6fd24eee con un metadato de autor personal. No se reproduce esa dirección en los entregables. No se utilizará el conector para crear nuevos commits de contenido.

El propietario autorizó expresamente el 18 de octubre una sustitución limitada a refs/heads/codex/CG-008-ejemplo-operativo-g06, únicamente si su cabeza sigue siendo ff2dfe71dbffdf1507f9eb3bc247addb6fd24eee. La comprobación previa confirmó ese valor y main en b023724ea04f7303ac96673b8445fd2eb95b618e. No hay autorización para forzar otras referencias.

El commit local 24f5c12c34296144ddc9f7b26b1f0dfa1ce9e8e8 contiene el caso y fixture revisados. Su árbol dd4d0e6af4ee6e790df2831775a78b221fee0789 coincide exactamente con el del commit intermedio remoto. El reporte preparado para la corrección se publicó en 95a62203603d46989645c66950b4baddb5b79cd7 mediante Git, con identidad pública. Se verificaron autor y committer de todos los commits preparados; ambos corresponden a VicWaltzO con el noreply aprobado. El historial nuevo parte directamente de la base indicada y no incorpora trabajo remoto distinto: la única diferencia respecto al árbol remoto es el reporte.

| Comprobación previa de la corrección | Resultado |
|---|---|
| Estado local | Limpio antes de actualizar únicamente el reporte |
| Base y alcance | main b023724; exactamente tres archivos nuevos de CG-008 |
| Documento revisado, SHA-256 | 47101fa7d4b0647a7c8e9ed92d23f816c09b054630fa70d4f1375a63c05ce87a |
| Fixture revisado, SHA-256 | 51c1c75ae177baa13e49423c494cb702cb29dd749e11a2352915883a43ee7f05 |
| Árbol intermedio frente al modelo local | Idéntico; no cambia el contenido validado ni se pierde contenido remoto |
| Identidad de la cadena local nueva | Autor y committer noreply aprobados |
| Validación matemática externa | El supervisor comunica revisión independiente sin defectos bloqueantes; no sustituye el criterio histórico |
| Referencia histórica | Sin nuevas consultas ni operaciones privadas durante esta corrección |

### Publicación efectuada y comprobación posterior

El comando real fue git push --force-with-lease=refs/heads/codex/CG-008-ejemplo-operativo-g06:ff2dfe71dbffdf1507f9eb3bc247addb6fd24eee origin HEAD:refs/heads/codex/CG-008-ejemplo-operativo-g06, con selección explícita de la cuenta y transporte no interactivo. Terminó con salida 0: ff2dfe7 → 95a6220. La simulación anterior también terminó con salida 0, pero se registra por separado del resultado efectivo. No se utilizó force sin lease, mirror ni el conector para crear commits durante esta corrección.

| Verificación posterior sobre la cabeza 95a6220 | Resultado observado |
|---|---|
| Consulta remota y fetch de la rama | 95a62203603d46989645c66950b4baddb5b79cd7, igual a la cabeza local publicada |
| Árbol completo local/remoto | d93552a9683e6ae782107d9f6955729df4273d3b en ambos; diff vacío |
| Autor y committer de los dos commits nuevos, mediante objetos Git recuperados | PASS; VicWaltzO y dirección pública noreply aprobada en ambos campos |
| Consulta de los commits en GitHub | Disponibles y asociados a VicWaltzO; el conector no expone los correos, por lo que la comprobación completa se basa en Git |
| Ancestría del commit intermedio | merge-base --is-ancestor devolvió 1: ff2dfe7 no pertenece a la rama corregida |
| Captura remota antes/después | main continúa en b023724ea04f7303ac96673b8445fd2eb95b618e; las demás ramas y etiquetas observadas no cambiaron |
| Diff contra main | Exactamente los tres archivos autorizados; documentos previos intactos |
| Documento y fixture publicados | Hashes idénticos a los revisados; no se modificaron sus bytes |
| Reporte consultado en GitHub | Disponible en 95a6220, blob 6d4f3fc907bf4b20500eac2d4198aec6eecdefbe, correspondiente a la versión preparada para el push |
| Nueva comprobación pública temporal | PASS: JSON estricto, hashes, tablas, enlaces, matriz, estado parcial e identidades; sin lectura de referencias históricas |

El [PR #8](https://github.com/VicWaltzO/Avicendia/pull/8) se creó hacia main después de estas comprobaciones. Contiene únicamente los tres archivos de CG-008 y explica el carácter sintético, los cálculos, la incidencia de metadatos, el lease ejecutado, su persistencia posible y el criterio histórico pendiente. Está abierto y no se ha fusionado.

| Commit de entrega | Contenido y mensaje |
|---|---|
| 24f5c12c34296144ddc9f7b26b1f0dfa1ce9e8e8 | Caso y fixture: docs(00): documentar-ejemplo-operativo-g06 (CG-008) |
| 95a62203603d46989645c66950b4baddb5b79cd7 | Reporte actualizado antes de publicar: docs(00): registrar reporte del caso sintetico G06 (CG-008) |
| Constancia posterior, este commit | Solo este reporte: docs(00): verificar publicacion corregida (CG-008); su SHA y la cabeza final figuran en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/8/commits) |

Esta constancia conserva qué comprobaciones corresponden a la cabeza de sustitución 95a6220. Su incorporación posterior al mismo PR utiliza un avance rápido ordinario, sin otra sustitución forzada. El caso y fixture permanecen idénticos; la cabeza que incluye esta constancia se identifica en el historial del PR y en el reporte final de auditoría, evitando una referencia circular al hash del propio documento.

Sustituir la referencia no acredita que el objeto anterior haya sido eliminado de GitHub. Pueden persistir objetos, referencias o cachés; no se ha ejecutado ni acreditado una purga. La aceptación de ese riesgo residual corresponde al supervisor y propietario.

## 9. Riesgos, reservas y recuperación

El saldo reducido exige cobertura de entradas, mortalidad y demás movimientos según supuestos ficticios; no prueba que esos movimientos sean cero en una granja. Las bajas por partida y ciertos acumulados no pueden reconstruirse sin nuevos datos. Los subtotales de alimento no son consumo completo; la muestra de buche no representa toda la población ni condiciones sanitarias.

El formato documental no establece esquemas de almacenamiento, cardinalidades, protocolos clínicos o autorizaciones implementadas. No se eligieron tecnologías ni se añadió deuda de código. La incidencia de metadatos y su posible persistencia remota debe evaluarse por separado, además del criterio histórico pendiente.

La recuperación consiste en ajustar el incremento y su publicación sin tocar main. Se preservaron los commits previos como respaldo local; no se publica la rama interna con el paquete privado.

## 10. Estado final y detención

**PARCIAL.** Caso sintético y verificaciones matemáticas terminados; reproducción histórica exacta y aceptación externa pendientes; publicación corregida y PR #8 abierto sin fusionar, con riesgo residual de metadatos documentado. No se inicia CG-009, no se generan especificaciones posteriores, no se fusiona CG-008 ni se implementa código del SaaS.
