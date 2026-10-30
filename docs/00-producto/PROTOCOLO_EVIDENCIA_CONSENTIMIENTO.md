# Avicendia — Protocolo de evidencia y consentimiento

CG-013 · 19 de octubre de 2026 · Propuesta documental para revisión externa y jurídica competente.

## 1. Objetivo, alcance y estado

Definir condiciones previas para recopilar, procesar, conservar, transformar y eliminar evidencia. Comprende mensajes de WhatsApp, fotografías, videos, audios, documentos digitales, cartillas físicas digitalizadas, registros operativos, archivos exportados, evidencia de pruebas y resultados de IA. No implementa capturadores, almacenamiento, controles técnicos ni integraciones.

**El protocolo es documental. El [checklist de autorización](CHECKLIST_AUTORIZACION_EVIDENCIAS.md) permanece sin completar ni aprobar. La exportación de evidencia real no está autorizada por esta entrega.** Tampoco se autoriza la recopilación o procesamiento real. No se consultaron conversaciones, archivos operativos ni información histórica identificable para elaborar estos documentos.

Las reglas siguientes son propuestas de control del proyecto, no una declaración de cumplimiento normativo ni asesoramiento jurídico. La revisión competente deberá determinar responsables legales, base jurídica, obligaciones, excepciones y jurisdicciones aplicables antes de operar. Una autorización para crear documentación no equivale a una autorización para tratar datos reales.

### Fuentes y compatibilidad

- [CG-004 — Entrevistas](GUIA_ENTREVISTAS_CAMPO.md) y [formato vacío](FORMATO_ENTREVISTA.md): consentimiento y permisos separados para investigación, notas, grabaciones y observación. Sus requisitos particulares siguen vigentes; este protocolo no los amplía tácitamente ni los reemplaza.
- [CG-005 — Flujo](FLUJO_DIARIO_PRODUCCION.md), [CG-006 — Evidencias](INVENTARIO_CARTILLAS_MENSAJES.md) y [CG-009 — Diccionario](DICCIONARIO_REPORTE_DIARIO.md): procedencia, autoridad, incertidumbre, fechas distintas, correcciones y separación entre candidato y hecho confirmado.
- [CG-008 — Caso sintético](EJEMPLO_OPERATIVO_G06.md): ejemplo completamente ficticio; no demuestra autorización sobre fuentes reales ni reproducción histórica exacta, que sigue pendiente.
- [Política de publicación](../PUBLICACION.md): contenido privado fuera de Git, sus historiales y las carpetas de trabajo; publicar requiere revisar también lo alcanzable desde commits anteriores.

Como referencias jurídicas de partida se consultaron el 19 de octubre de 2026 la [Ley N.° 29733, publicada por el Congreso](https://www.leyes.congreso.gob.pe/documentos/leyes/29733.pdf) y el [D. S. N.° 016-2024-JUS, reglamento publicado en El Peruano](https://www3.congreso.gob.pe/Docs/DGP/DIDP/files/ds_016-2024-jus.pdf). No constituyen una revisión consolidada exhaustiva ni una determinación de aplicación al caso: deberán comprobarse modificaciones, criterios y normas de Perú y otras jurisdicciones pertinentes. Este documento no fija plazos legales ni atribuye una base jurídica concreta a ningún tratamiento.

## 2. Clasificación y funciones responsables

Las funciones son propuestas, no personas designadas ni poderes acreditados. La organización responsable del tratamiento y la función con autoridad para aprobar cada operación deberán identificarse en la copia privada del expediente; Avicendia no se presume responsable o encargado en todos los casos.

| Categoría | Ejemplos conceptuales | Restricción propuesta | Función que debe intervenir, por designar |
|---|---|---|---|
| Pública | Documentación deliberadamente publicada y ejemplos completamente sintéticos | Publicación deliberada y revisada; acceso público no autoriza cualquier reutilización de datos personales | Responsable de publicación y dueño del contenido |
| Interna | Procedimientos, decisiones y registros administrativos internos | Acceso por necesidad; no enviar a terceros por defecto. Reclasificar como confidencial si incluye datos personales o empresariales sensibles | Dueño del proceso y custodio autorizado |
| Confidencial | Producción, datos comerciales, mensajes, fotos privadas, identificación de trabajadores, ubicaciones y documentos de clientes | Finalidad y acceso limitados; fuera de repositorios públicos, logs de desarrollo y demostraciones | Organización responsable, función de privacidad y custodio |
| Credenciales y secretos | Sesiones, tokens, contraseñas y claves de integración | Nunca en datasets, fixtures, documentos de prueba ni contenido enviado a modelos. Acceso solo para gestión autorizada de secretos | Función de seguridad autorizada |

Un archivo puede mezclar categorías: aplicar la restricción mayor al conjunto mientras no exista una separación revisada. Una salida de IA, un agregado o un código sustitutivo no reducen automáticamente la clasificación de su fuente. No se declara que alguna empresa haya autorizado divulgar sus datos.

## 3. Finalidades y autorización previa

### Finalidades independientes

| Uso propuesto | Límite de autorización |
|---|---|
| Operación | Solo los registros y evidencias necesarios para la tarea y organización autorizadas |
| Investigación | Preguntas, participantes y modalidades aprobados; aplicar además CG-004 |
| Entrenamiento o ajuste de modelos | Evaluación y autorización específicas; no derivarlas del permiso operativo ni del procesamiento con IA |
| Pruebas y evaluación | Sintéticos primero; evidencia real solo bajo las condiciones de la sección 9 |
| Depuración | Incidente/problema acotado, mínimo contenido, acceso y conservación aprobados; no habilitar logs crudos generales |
| Demostración o publicación | Material sintético preferente; audiencia y divulgación requieren decisión propia, aun si hubo transformación |

No cambiar la finalidad por conveniencia. Recibir información legítimamente para operar no autoriza entrenar modelos, demostrar públicamente ni compartirla con otros clientes.

### Expediente previo por tratamiento

Antes de recibir material real, la organización y sus funciones competentes deben completar y revisar un expediente privado con estos catorce componentes:

| # | Componente requerido | Qué debe resolverse |
|---|---|---|
| A01 | Organización responsable | Identidad y autoridad; funciones respectivas de empresa, Avicendia y terceros, por determinar |
| A02 | Canal o fuente | Procedencia, titularidad o facultad de aportación y límites; acceso no basta como permiso |
| A03 | Finalidad | Resultado concreto y uso permitido; separar las finalidades de la tabla anterior |
| A04 | Categorías necesarias | Contenido y metadatos estrictamente necesarios; excluir secretos |
| A05 | Personas afectadas | Participantes, trabajadores y terceros que podrían aparecer, incluso indirectamente |
| A06 | Fundamento y autorizaciones | Base jurídica aplicable, avisos y autorizaciones comprobables, revisados por función jurídica competente |
| A07 | Alcance exacto | Período, mensajes, archivos, campos, organizaciones y exclusiones; sin captura histórica indiscriminada |
| A08 | Operaciones permitidas | Recepción, lectura, transformación, IA, conservación o exportación, cada una según aprobación |
| A09 | Operaciones prohibidas | Usos secundarios, destinatarios o materiales excluidos y acciones que deben bloquearse |
| A10 | Destinatarios y proveedores | Servicio concreto, destinatarios finales, subencargados y condiciones de transferencia |
| A11 | Acceso autorizado | Funciones, organización, ámbito, necesidad y revocación; sin permisos universales |
| A12 | Conservación | Evento inicial, plazo aprobado, copias, respaldos y fundamento de excepciones |
| A13 | Eliminación y revisión | Procedimiento, responsables, verificación y circunstancias que exigen reevaluar el tratamiento |
| A14 | Registro de aprobación | Decisión verificable, función con autoridad, fecha, alcance, versión y condiciones; pendiente hasta que exista |

La autorización empresarial para acceder a registros no sustituye la evaluación del tratamiento de información personal. El consentimiento individual no se presume siempre la única base jurídica posible: la revisión legal debe determinar qué base aplica y qué autorizaciones, avisos y garantías son necesarios. Cuando se use consentimiento, comprobar su alcance y condiciones, sin inferirlo del silencio, pertenencia a un grupo o relación laboral. No sustituir retrospectivamente una base por otra para eludir una restricción.

Completar el checklist C01–C18 y registrar aprobación competente **antes** de recopilar o exportar evidencia real. Un pendiente, una negativa o una autorización indispensable no demostrada bloquean la operación afectada. Si cambia finalidad, fuente, período, conjunto, destinatario, acceso, base o condiciones, suspender la parte afectada y reevaluar; la aprobación anterior no se extiende automáticamente. Una ficha completa tampoco acredita aprobación por sí sola.

## 4. Canales y grupos de WhatsApp

Para cualquier canal, verificar procedencia y permiso sobre cada modalidad. Una foto de cartilla requiere considerar también al autor, personas visibles y contenido incidental; video y audio pueden incluir voces, rostros o terceros; documentos y exportaciones pueden mezclar organizaciones o finalidades. Un reenvío no acredita autorización sobre el contenido original ni permite inferir el contenido de un adjunto ausente. Los registros operativos no se vuelven públicos por exportarlos.

Para un grupo empresarial, antes de una eventual integración:

1. Documentar finalidad original, participantes y funciones sin copiar conversaciones para investigarlos. Identificar fuentes de autorización legítimas y personas potencialmente afectadas, incluidos terceros citados.
2. Separar permiso de **acceso al grupo**, **recopilación**, **conservación**, **procesamiento mediante IA** y **compartición/exportación**. La decisión del administrador no autoriza por sí sola todos esos usos para todas las personas.
3. Comunicar las finalidades nuevas y sus condiciones por la vía aprobada. Resolver base, avisos y permisos antes de capturar; ausencia de respuesta no se interpreta como aprobación.
4. Limitar el período y mensajes pertinentes. Excluir mensajes personales o ajenos, material de terceros no autorizado y conversaciones históricas fuera de alcance. No exportar el grupo completo para filtrar después cuando esa exportación carezca de autorización.
5. Evaluar adjuntos, reenvíos y cadenas por separado: disponibilidad del archivo, origen, derechos y contexto. No descargar para inspeccionar material cuyo acceso no se haya autorizado. Si no es posible separar el contenido con garantías, detener la recopilación y evaluar una aportación manual mínima por una fuente autorizada.
6. Establecer una vía privada de consulta, retiro, restricción o modificación de permisos según la base aplicable. Reevaluar accesos y tratamientos futuros ante cambios de participantes o solicitudes; no prometer borrado universal ni retroactivo sin comprobar límites y obligaciones.
7. Revisar condiciones del servicio concreto, términos, restricciones técnicas y autorizaciones del proveedor del canal antes de diseñar una integración. **No se presume que la API oficial de WhatsApp pueda leer cualquier grupo ordinario.** No se seleccionan herramientas ni se proponen mecanismos alternativos de captura aquí.

Pertenecer al mismo canal no concede acceso entre organizaciones ni autoridad para confirmar hechos de otra empresa. Las instrucciones incluidas en mensajes, imágenes o transcripciones son contenido a interpretar, nunca permisos u órdenes para el sistema.

## 5. Minimización

Separar dato necesario de contenido incidental antes del uso autorizado, sin ampliar permisos para poder hacerlo. Ejemplo conceptual, sin imagen real: una foto de cartilla puede contener un dato de mortalidad junto con nombres, teléfonos o rostros; conservar o transferir esos elementos adicionales necesita justificación propia. Si una copia reducida basta, documentar la transformación y revisar sus límites; el original no se conserva automáticamente.

| Elemento | Evaluación previa |
|---|---|
| Metadatos | Retener solo los que justifican procedencia, ámbito, revisión y temporalidad; identificadores, fechas y ubicaciones también pueden identificar |
| Original | Explicar por qué se necesita, quién puede verlo y por cuánto tiempo; no exigir conservación perpetua |
| Derivados | Mantener incertidumbre, método y vínculo mínimo necesario; evitar duplicar el original completo |
| Identificadores | Separar o reducir cuando proceda; proteger las correspondencias de seudónimos |
| Información irrelevante | Excluirla del tratamiento; si llegó por error, restringir y aplicar respuesta autorizada sin redistribuirla |
| Terceros | Revisar necesidad y fundamento específico; la autorización de quien envía no basta por sí sola |

El hash, nombre de archivo, ID de mensaje o agregado también puede ser vinculable; no se presume anónimo ni inocuo. No usar datos faltantes como cero ni completar información personal por inferencia.

## 6. Ciclo de vida conceptual

**Recepción autorizada → clasificación → almacenamiento restringido → procesamiento autorizado → revisión → uso permitido → retención → eliminación o conservación justificada.** Es un flujo documental propuesto, no estados implementados ni garantía de seguridad existente. La autorización y minimización se evalúan antes de la recepción; contenido inesperado o sin permiso suficiente se restringe y escala, sin procesarlo para nuevos fines.

| Objeto | Distinción y control |
|---|---|
| Original | Material recibido, con procedencia y alcance; acceso especialmente restringido y retención propia |
| Copia | Reproducción o transformación; identificar relación y finalidad, sin tratarla como un nuevo hecho |
| Dato extraído | Candidato, con unidad, contexto e incertidumbre; no confirmado por OCR o por aparecer en un reporte |
| Interpretación / resultado de IA | Inferencia separada del contenido observable; revisión, versión pertinente y restricciones heredadas |
| Registro confirmado | Hecho aceptado por función con autoridad, con fuente y correcciones trazables; no acredita permiso para divulgar |

Separar expedientes y acceso por uso: evidencia operativa, depuración, pruebas, agregados y resultados de IA. Conservar vínculos mínimos para justificar revisión y correcciones —fuente, alcance, decisión y versión cuando sean necesarios— sin exigir todos los originales indefinidamente. Evento, recepción y fecha operativa no son intercambiables. Una corrección no borra silenciosamente el antecedente; la obligación de trazabilidad tampoco crea retención ilimitada.

## 7. Matriz propuesta de retención

Cada tratamiento debe concretar los diez atributos siguientes. **Todos los plazos están POR DETERMINAR Y APROBAR** según finalidad, obligaciones y revisión competente. Ese pendiente impide iniciar el tratamiento real; no habilita conservar mientras se decide. Las funciones son potenciales, no asignadas.

| Categoría | Finalidad por delimitar | Responsable por designar | Inicio de retención | Plazo propuesto | Acceso por aprobar |
|---|---|---|---|---|---|
| Originales operativos | Sustentar revisión necesaria | Dueño del proceso y custodio | Evento por aprobar | Por determinar y aprobar | Revisor del ámbito y custodio |
| Copias de trabajo | Uso mínimo autorizado | Custodio del tratamiento | Evento por aprobar | Por determinar y aprobar | Funciones del uso concreto |
| Extraídos y resultados de IA | Interpretación y revisión | Responsable de revisión | Evento por aprobar | Por determinar y aprobar | Revisores autorizados |
| Registros confirmados | Operación y corrección | Dueño del proceso | Evento por aprobar | Por determinar y aprobar | Funciones operativas del ámbito |
| Material de pruebas / depuración | Evaluación o fallo delimitado | Responsable de la prueba | Evento por aprobar | Por determinar y aprobar | Equipo privado expresamente autorizado |
| Información agregada | Análisis autorizado | Dueño del análisis | Evento por aprobar | Por determinar y aprobar | Destinatarios revisados |
| Aprobaciones y trazas mínimas | Acreditar decisiones necesarias | Responsable de privacidad | Evento por aprobar | Por determinar y aprobar | Funciones de control autorizadas |
| Copias de seguridad | Recuperación autorizada | Responsable de respaldo | Evento por aprobar | Por determinar y aprobar | Custodios de recuperación |

La segunda vista completa los mismos ocho registros; no es un catálogo de conjuntos existentes:

| Categoría | Copias a delimitar | Eliminación prevista, por aprobar | Excepciones | Evidencia de cumplimiento prevista |
|---|---|---|---|---|
| Originales operativos | Original, duplicados y proveedor si aplica | Retirar contenido y derivados según alcance revisado | Fundamento y revisión por determinar | Constancia mínima de revisión y ejecución |
| Copias de trabajo | Locales, transformadas y compartidas | Localizar y eliminar o exigir eliminación autorizada | Fundamento y revisión por determinar | Constancia por destino, sin adjuntar contenido |
| Extraídos y resultados de IA | Salidas, cachés y copias del proveedor | Suprimir o restringir conforme a decisión sobre derivados | Fundamento y revisión por determinar | Resultado y limitaciones verificadas |
| Registros confirmados | Registro, versiones y exportaciones | Evaluar corrección, supresión o conservación acotada | Fundamento y revisión por determinar | Decisión con alcance y motivo |
| Material de pruebas / depuración | Temporales, corpus privado y salidas | Retirar de entornos y destinos autorizados | Fundamento y revisión por determinar | Inventario de copias revisado y constancia |
| Información agregada | Informes y exportaciones | Evaluar vinculabilidad y retirar según aprobación | Fundamento y revisión por determinar | Revisión de identificación y eliminación |
| Aprobaciones y trazas mínimas | Registro de control y respaldos | Minimizar y eliminar al finalizar plazo aprobado | Fundamento y revisión por determinar | Constancia sin reproducir evidencia personal |
| Copias de seguridad | Respaldos y réplicas aprobadas | Plan de expiración/eliminación y restricciones de restauración | Fundamento y revisión por determinar | Revisión de expiración y limitaciones |

Eliminar lógicamente o bloquear acceso no demuestra eliminación de los soportes. Distinguir originales, cachés, temporales, copias en destinatarios y respaldos. Aprobar el procedimiento y sus límites por destino; una confirmación del proveedor necesita alcance verificable, no se supone borrado automático. Ante restauración, aplicar las decisiones vigentes de supresión/restricción antes de reactivar el uso; un respaldo no debe reintroducir tratamientos ya retirados.

Una conservación por obligación aplicable requiere fundamento, alcance mínimo, función competente, acceso limitado y revisión registrada; no se presume una excepción indefinida ni se reutiliza material reservado para otras finalidades. La constancia de eliminación registra lo necesario sin conservar allí el mismo contenido eliminado. Plazos, eventos iniciales, excepciones y viabilidad de borrado deben resolverse antes de aprobar C10/C11.

## 8. Anonimización y seudonimización

Como distinción de trabajo para revisar: **anonimización** es una transformación orientada a impedir razonablemente identificar personas considerando medios plausibles de reidentificación; **seudonimización** sustituye o separa identificadores, pero información adicional puede permitir reidentificar. No son equivalentes. Cambiar un nombre por un código no acredita anonimato.

Evaluar nombres y teléfonos; rostros y otras imágenes de personas; voces y contexto de habla; coordenadas; fechas y horarios; ID de mensajes; metadatos de archivos y datos operativos vinculables. Combinar horario, instalación y evento poco frecuente puede identificar sin nombre. Un archivo empresarial también puede seguir siendo confidencial aunque no identifique a una persona.

Antes de usar material transformado, justificar finalidad y autorización del propio proceso, seleccionar atributos a eliminar/generalizar, proteger correspondencias si existen y evaluar combinaciones e información auxiliar plausible. Registrar método, límites, revisión y función competente; volver a evaluar ante nueva información o destinatarios. Si no se puede sostener la anonimización, mantener clasificación y restricciones originales, o no realizar la transferencia. No se certifica anonimización de un conjunto real en esta tarea. Transformar datos no concede permiso de publicación ni elimina otros deberes aplicables.

## 9. Evidencia para pruebas, depuración y demostraciones

Prioridad: **(1) datos completamente sintéticos; (2) material transformado con anonimización validada y autorización; (3) datos reales restringidos**, solo ante necesidad demostrada, permisos adecuados y entorno privado aprobado. Probar o depurar no es una excepción automática al protocolo. No reutilizar las fuentes históricas de CG-008; su fixture público es ficticio y no prueba exactitud histórica.

Para cada prueba, documentar pregunta, mínimo conjunto necesario, por qué no basta lo sintético, entorno, funciones con acceso, conservación, eliminación y aprobación. Intentar primero casos artificiales de faltantes, contradicciones, reenvíos, contenido incidental y atribución entre organizaciones. Si no se dispone de base, autorización, aislamiento, destino seguro o borrado viable, registrar **prueba no ejecutable con datos reales**; continuar solo con la alternativa sintética autorizada o detener la prueba.

No colocar evidencia confidencial en repositorios públicos, commits, PR, issues, capturas de demostración, temporales sin control, logs de desarrollo, mensajes a agentes externos ni servicios de terceros sin autorización. Los espacios de trabajo de este repositorio tampoco son custodia de evidencia real. Una excepción para un entorno privado no autoriza estos canales públicos. No se ejecutan exportaciones o transferencias reales para comprobar este protocolo.

## 10. Matriz previa de proveedores de IA y otros destinatarios

Completar un expediente privado por **servicio y modalidad concretos**, no solo por marca del proveedor. La matriz está sin selección ni evaluación de un proveedor real. Se aplica también a destinatarios de exportaciones aunque no usen IA.

| Atributo | Decisión requerida antes de transferir |
|---|---|
| Proveedor / destinatario | Identidad, servicio, modalidad y funciones; por determinar |
| Finalidad | Operación exacta y exclusiones, separadas de entrenamiento o demostración |
| Datos enviados | Contenido y metadatos mínimos, clasificados; ningún secreto |
| Base y autorización | Revisión aplicable a cesión/encargo/transferencia según el caso; no presumida por permiso de operación local |
| Condiciones contractuales | Versión, alcance y obligaciones del servicio concreto verificadas |
| Ubicación y transferencias internacionales | Ubicaciones, flujos y garantías aplicables por evaluar con función jurídica |
| Retención del proveedor | Plazos, registros de abuso, copias y excepciones que deban revisarse; no asumir eliminación inmediata |
| Uso para entrenamiento | Condiciones y configuración comprobadas para la modalidad concreta; no prometer exclusión sin verificar |
| Subencargados | Cadena de destinatarios y condiciones por revisar |
| Accesos | Personal y sistemas autorizados, aislamiento y revocación por comprobar |
| Eliminación | Procedimiento, evidencias y límites, incluidos respaldos y derivados |
| Riesgos residuales | Riesgos, medidas, función que decide y decisión verificable |
| Alternativas sin transferencia externa | Datos sintéticos, reducción del conjunto o revisión manual autorizada; viabilidad por evaluar |

Si se desconocen condiciones indispensables, no transferir hasta resolverlas. Una política general del proveedor no garantiza las condiciones del servicio contratado. Cambios de términos o subencargados exigen revisión del alcance afectado. No se seleccionan modelos, APIs, contratos ni servicios en CG-013.

## 11. Derechos, consultas y solicitudes

Procedimiento conceptual para la función competente: recibir por una vía privada previamente designada; identificar al solicitante y, si corresponde, su representación mediante comprobación proporcional y mínima; delimitar solicitud y conjuntos afectados sin revelar datos de otras personas; registrar recepción y trasladar a quien tenga autoridad. No pedir documentos excesivos ni remitirlos a issues o chats de desarrollo.

Evaluar información sobre el tratamiento, acceso, rectificación, cancelación/supresión cuando corresponda, oposición, restricciones y otras facultades aplicables. Determinar base, obligaciones de conservación, excepciones y efectos en originales, derivados, destinatarios y respaldos. No prometer que retirar consentimiento suprime automáticamente todo tratamiento o suple una decisión legal pendiente; tampoco ignorar la solicitud por existir una copia o un agregado.

La función jurídica competente debe verificar **plazos aplicables, inicio del cómputo, avisos, respuesta y vías de revisión** según Perú y demás jurisdicciones pertinentes. No se asignan cifras ni se deja una solicitud sin tramitar mientras se evalúa: escalar su revisión oportunamente y registrar los hitos. Responder por vía segura, conservar una constancia mínima de decisión, fundamento, alcance y comunicación; registrar lo ejecutado, lo pendiente y límites. No se han recibido o tramitado solicitudes reales en esta tarea.

## 12. Acceso, separación de organizaciones y trazabilidad

Proponer acceso por función, necesidad de conocer, finalidad y organización; aprobación y revocación verificables. Organización no equivale a empresa: el contexto debe resolverse antes del acceso a recursos de empresa, granja o ámbito específico. Un operador no obtiene registros ajenos por compartir grupo, número de teléfono, nombre visible, enlace o archivo reenviado.

Restringir especialmente originales y correspondencias de identificadores. Revalidar el permiso al consultar, procesar, revisar, descargar, exportar y entregar resultados, incluso tras cambios de función o retiro de acceso. Aplicar las mismas restricciones a custodios, terceros y respaldos; no conceder acceso global por hacer soporte o investigación. Revisar destinatario, conjunto y permisos antes de cada exportación, dentro del alcance aprobado.

Registrar solo operaciones relevantes y metadatos necesarios para acreditar quién actuó por qué función, organización/ámbito, finalidad, fecha, decisión y alcance; proteger esos identificadores. No registrar contenido privado completo, secretos o conversaciones en logs. Revisar los accesos y retirar los que dejen de justificarse. Son requisitos conceptuales por implementar y comprobar en su momento, no tablas, endpoints ni permisos técnicos diseñados aquí.

## 13. Incidentes: acciones iniciales conceptuales

Ante envío erróneo, archivo privado en commit, proveedor no autorizado, acceso entre organizaciones, copia fuera de control o secreto expuesto:

1. Detener nuevas transferencias o usos afectados y contener accesos bajo la autoridad correspondiente, sin ampliar la difusión para investigar.
2. Comunicar por vía privada a la función de respuesta y a la organización responsable; no pegar contenido sensible en el aviso. Si hay credenciales, escalar su revocación/rotación por función autorizada.
3. Delimitar conjuntos, organizaciones/personas potencialmente afectadas, destinatarios, copias y período; distinguir hechos verificados de sospechas. Preservar evidencia mínima del incidente en custodia restringida.
4. Evaluar con funciones jurídicas y de seguridad las medidas, notificaciones, destinatarios y plazos aplicables, sin fijar cifras universales ni retrasar la evaluación. Identificar quién puede autorizar cada acción real.
5. Aprobar y ejecutar correcciones con alcance, responsable y verificación. Un archivo retirado del árbol Git puede seguir en commits, referencias, objetos remotos, clones o cachés: no declarar purga por borrarlo del último commit.
6. Registrar medidas realizadas, límites, riesgos residuales y condiciones para reanudar. No ordenar automáticamente borrar rastros, reescribir historiales, hacer force push ni eliminar evidencia del incidente. Las acciones correctivas reales requieren sus permisos y procedimientos.

Este protocolo no reporta un incidente nuevo ni ejecuta respuestas reales. Un incidente tampoco autoriza copiar material confidencial a un agente o proveedor externo para pedir ayuda.

## 14. Requisitos pendientes y uso del checklist

Antes de un tratamiento real faltan, según el caso: designar organización y funciones competentes; validar bases y jurisdicciones; definir avisos y vías de solicitudes; delimitar canales, períodos, categorías y personas; aprobar acceso y custodia; fijar eventos/plazos de retención y eliminación viable; evaluar destinatarios y transferencias; validar transformaciones y riesgos residuales; registrar aprobación verificable y mecanismos de revisión.

Usar el [checklist C01–C18](CHECKLIST_AUTORIZACION_EVIDENCIAS.md) en una copia privada controlada. La persona que lo completa no se atribuye autoridad por hacerlo. La revisión documental de esta plantilla no satisface el criterio original de **checklist operativo aprobado antes de exportar evidencia real**: ese criterio permanece pendiente. Sin autorización indispensable, no se ejecuta la exportación. No se inicia CG-014 ni se recopila, descarga o exporta evidencia real como parte de CG-013.

El [reporte CG-013](../reportes/REPORTE_CG-013.md) conserva comprobaciones, limitaciones y estado de entrega.
