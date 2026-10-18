# Avicendia — Inventario de cartillas y mensajes

CG-006 · 17 de octubre de 2026 · Fase 00 · **Inventario hipotético, pendiente de validación de campo.**

## 1. Objetivo y límites

Reconocer soportes mediante los que una granja de pollos de engorde podría registrar, transmitir o completar información operativa. Se describen contenidos posibles, funciones potenciales y dificultades de interpretación; no se afirma que una granja utilice estos medios ni que se hayan observado sus prácticas.

Avicendia continúa en preparación documental. No existen capacidades verificadas de captura, OCR, transcripción, importación ni análisis multimedia en esta entrega. No se procesaron conversaciones o archivos reales. El inventario no define algoritmos, estados técnicos, base de datos, arquitectura, proveedores ni formatos obligatorios de comunicación.

Una evidencia acredita, con sus límites, qué contenido está disponible; no demuestra por sí sola que el hecho relatado sucedió correctamente. Dato ausente no es cero, lectura visible no es medición verificada y comunicación repetida no equivale a otro evento productivo.

## 2. Fuentes documentales

- [CG-002 — Tesis de producto](TESIS_PRODUCTO.md): dispersión, consolidación y consulta como problemas aún por contrastar.
- [CG-003 — Cliente ideal hipotético](CLIENTE_IDEAL.md): variedad de prácticas, dispositivos y conectividad; ningún canal es universal.
- [CG-004 — Guía](GUIA_ENTREVISTAS_CAMPO.md) y [formato vacío](FORMATO_ENTREVISTA.md): investigación autorizada, distinción declaración/observación/hipótesis y custodia privada.
- [CG-005 — Flujo diario de producción](FLUJO_DIARIO_PRODUCCION.md): categorías operativas, T1–T7, fecha operativa, correcciones y cierre.

La solicitud vigente amplía el inventario inicial de modalidades con procedencia, temporalidad, relación de evidencias y revisión humana. No se incorporan materiales privados de ingeniería ni resultados de campo inexistentes.

## 3. Modalidades y canales posibles

La cartilla física es un documento de origen: puede circular manualmente sin archivo digital. Su fotografía es otra evidencia, posiblemente incompleta. Texto, imagen, video y audio son modalidades distintas; un documento digital puede contener varias de ellas. Se clasifica según su función principal sin atribuirle campos que no contiene.

Los canales posibles son entrega o registro manual, importación de archivos autorizados, mensajería realmente utilizada por trabajadores y eventuales herramientas futuras de captura. **WhatsApp es una posibilidad, no un requisito ni una integración existente.** Una autorización para ver un mensaje no autoriza a copiar su conversación, acceder a un grupo ni procesar datos de terceros.

Antes de habilitar cualquier canal deberán evaluarse alcance de permisos, viabilidad, condiciones del proveedor, costos y custodia. Una integración oficial de mensajería no se presume capaz de acceder a cualquier grupo existente. Esta tarea no selecciona APIs, herramientas ni mecanismos de acceso.

### 3.1. Límites propios de cada medio

- **Fotografías:** podrían estar borrosas, recortadas, rotadas, incompletas o incluir varias páginas, filas o registros. Solo se propone leer lo realmente visible. No reconstruir cifras ocultas ni deducir una unidad o fecha por costumbre. Una foto de ambiente no mide temperatura o humedad por su apariencia.
- **Texto:** mortalidad, consumo, mediciones, observaciones, incidencias, correcciones, confirmaciones, solicitudes y referencias pueden mezclarse. Galpón omitido, fecha ausente, abreviaturas, unidades, varias secciones, respuestas dependientes del contexto y contradicciones requieren aclaración; no se impone un formato universal.
- **Video:** podría mostrar instalaciones, fallas, equipos, instrumentos o contexto. Considerar duración conocida o desconocida, calidad, movimiento, sonido presente o ausente y momentos relevantes identificables por quien lo revisa. Ver un objeto no acredita funcionamiento correcto, lectura exacta ni causa del problema. Autoría, fecha y alcance pueden faltar. Una referencia a video no demuestra que el archivo esté disponible o sea reproducible.
- **Voz y audio:** una nota de voz es una modalidad de comunicación; un archivo de audio adjunto puede ser original, copia o fragmento. Podrían contener reportes orales, explicaciones, aclaraciones, correcciones, instrucciones o respuestas. Galpones con nombres parecidos, números o unidades incompletos, ruido, varios interlocutores, cortes y contexto previo impiden confirmar sin más.
- **Documentos digitales:** hojas de cálculo, PDF, textos y exportaciones pueden tener estructuras desconocidas, varias versiones, hojas ocultas, páginas faltantes, fórmulas o períodos diferentes. Un total escrito o calculado no valida sus datos de origen. No se implementan importadores.

En audio se separan cinco planos: **archivo recibido**, **transcripción hipotética**, **interpretación**, **dato candidato** y **dato confirmado**. Tener el archivo no acredita una transcripción; transcribir no elimina la ambigüedad ni confirma el hecho. No existe transcripción automática implementada ni se seleccionan herramientas TTS, STT o modelos de voz. Una instrucción oral tampoco demuestra que se ejecutó.

## 4. Matriz de clasificación

Veinte categorías documentales en cinco grupos. Cada grupo tiene dos vistas enlazadas por ID: contenido/procedencia y contexto/revisión. Su unión contiene todos los campos de la matriz; los IDs clasifican categorías, no personas, archivos reales ni eventos.

**Convenciones comunes:** todas las funciones son potenciales y pueden coincidir. La flecha «autor → remitente» distingue creación de transmisión; si no consta el autor, queda desconocido. En fotos y grabaciones, su autor puede ser distinto del autor de la cartilla o de quien habla. Información esperada significa únicamente campos legibles, audibles o presentes, con sus ausencias explícitas. Para atribuir un dato productivo se necesita identificar su ámbito: granja, galpón, sección cuando aplique, campaña y partida si corresponde; además, fecha operativa y unidad/período cuando haya cantidades. Un documento puede abarcar varios ámbitos, que deben distinguirse. Si faltan referencias, no se asignan por suposición. Cada vista de contexto añade necesidades específicas.

### 4.1. Cartillas y documentos digitales

| ID | Modalidad / subtipo | Motivo de envío o entrega | Autor potencial → remitente potencial | Información esperada |
|---|---|---|---|---|
| CA-01 | Documento físico / cartilla productiva | Registrar y entregar el reporte para revisión | Registrador de cartilla → mismo rol o encargado que la entrega | Renglones de mortalidad, consumo, mediciones, fechas y enmiendas presentes |
| DG-01 | Documento digital / hoja de cálculo | Consolidar o compartir registros | Encargado que prepara la hoja → él o administración | Hojas, filas, rótulos, unidades, fórmulas y valores presentes |
| DG-02 | Documento digital / PDF | Remitir reporte o copia documental | Emisor del reporte → emisor o intermediario autorizado | Texto, tablas, páginas o imágenes realmente incluidas |
| DG-03 | Documento digital / texto | Comunicar observaciones o informe narrativo | Encargado o especialista → autor o administración | Alcance, relato, fechas, cifras y referencias expresas |
| DG-04 | Documento digital / exportación | Compartir información de otro sistema | Función que genera la exportación → ella u otra autorizada | Campos, período, unidades y versión declarados, si constan |

| ID | Contexto requerido adicional | Ambigüedades | Riesgo | Revisión humana | Validación pendiente |
|---|---|---|---|---|---|
| CA-01 | Página, fila y responsable de anotación | Tachaduras, letra, varios días o secciones | Atribuir cifra o corrección a otro período | Si lectura, alcance o enmienda no son claros | Plantillas usadas, quién escribe y revisa |
| DG-01 | Hoja, celdas y versión compartida | Fórmulas, filtros, columnas o unidades distintas | Consolidar un total no comparable o duplicado | Si estructura, fórmula, unidad o versión son inciertas | Estructura real y significado de totales |
| DG-02 | Página y si es escaneado o texto | Páginas omitidas, escaneo ilegible, versiones | Dar por completo un informe parcial | Si faltan páginas, contexto o legibilidad | Formatos y circuito de emisión |
| DG-03 | Sección del informe, alcance y versión | Relato frente a hecho, citas de otros | Convertir opinión o recomendación en hecho | Si el origen de una afirmación no consta | Quién elabora y cómo confirma el informe |
| DG-04 | Sistema de origen descrito y significado de campos | Códigos desconocidos, cortes y campañas mezcladas | Interpretar mal columnas o períodos | Hasta aclarar estructura, versión y alcance | Permiso de exportación y documentación disponible |

### 4.2. Fotografías

| ID | Modalidad / subtipo | Motivo de envío | Autor potencial → remitente potencial | Información esperada |
|---|---|---|---|---|
| FO-01 | Imagen / cartilla productiva | Compartir un registro sin entregar el papel | Quien fotografía → mismo rol o encargado; anotador puede ser otro | Solo filas, cifras, rótulos, fechas y enmiendas visibles |
| FO-02 | Imagen / instrumento | Comunicar una lectura | Observador que fotografía → él u otro trabajador | Lectura, unidad e identificación visibles del instrumento |
| FO-03 | Imagen / condiciones ambientales | Mostrar una condición observada | Observador que fotografía → él o encargado | Condición visible y elementos de referencia; sin variables ambientales no visibles |
| FO-04 | Imagen / instalaciones | Mostrar ubicación o estado aparente | Trabajador que fotografía → él o encargado | Elementos visibles, área indicada y observación acompañante |
| FO-05 | Imagen / equipos | Informar sobre un equipo | Trabajador que fotografía → él o mantenimiento autorizado | Identificador visible, componente y condición aparente |
| FO-06 | Imagen / incidencia | Sustentar una observación para revisión | Observador que fotografía → él o encargado | Escena, objetos y anotaciones visibles; sin diagnóstico |
| FO-07 | Imagen / documento administrativo de producción | Relacionar una constancia con un registro | Quien fotografía → él o administración; emisor puede ser otro | Tipo, fecha, referencia y cantidades visibles pertinentes |

| ID | Contexto requerido adicional | Ambigüedades | Riesgo | Revisión humana | Validación pendiente |
|---|---|---|---|---|---|
| FO-01 | Página, fila, anotador y alcance de la copia | Desenfoque, recorte, rotación, múltiples registros | Leer o atribuir otra cifra | Si fecha, fila o valor no son inequívocos | Variantes de cartilla y calidad disponible |
| FO-02 | Punto de medición, momento, unidad y método | Reflejo, decimal, escala o lectura anterior | Usar una medición equivocada | Si unidad, lectura o correspondencia no se confirman | Instrumentos, métodos y quién verifica |
| FO-03 | Lugar, momento y condición descrita | Apariencia frente a medición; fuera de cuadro | Inferir temperatura o causa sin sustento | Antes de una conclusión cuantitativa o causal | Qué condiciones se fotografían y para qué |
| FO-04 | Área mostrada y motivo de la toma | Cobertura parcial y fecha desconocida | Generalizar una escena a toda la instalación | Si se pretende certificar estado o cobertura | Lugares relevantes y contexto permitido |
| FO-05 | Equipo concreto y situación de uso | Equipo apagado, copia antigua, falla no visible | Afirmar funcionamiento por apariencia | Si se infiere falla, capacidad o funcionamiento | Quién identifica el equipo y evalúa la falla |
| FO-06 | Relato, momento y alcance de la incidencia | Un episodio en varias fotos; causalidad incierta | Duplicar eventos o formular conclusión sanitaria | Si afecta recuentos, decisiones sanitarias o atribución | Qué acredita la imagen y quién confirma |
| FO-07 | Emisor documental y relación con producción | Documento de otra campaña, recorte o versión | Confundir despacho con consumo o duplicar ingreso | Si origen, cantidad, versión o relación no constan | Tipos pertinentes y límites de acceso a datos administrativos |

### 4.3. Mensajes de texto

| ID | Modalidad / subtipo | Motivo de envío | Autor potencial → remitente potencial | Información esperada |
|---|---|---|---|---|
| TX-01 | Texto / mortalidad o consumo | Comunicar recuento o consumo de un período | Registrador → él o encargado que retransmite | Cifra, concepto, unidad, alcance y período expresos |
| TX-02 | Texto / medición u observación | Informar lectura o condición operativa | Medidor u observador → él o encargado | Variable, valor, unidad, método o descripción presentes |
| TX-03 | Texto / incidencia o solicitud | Avisar de un problema o pedir información | Observador o solicitante → él u otro autorizado | Descripción, pregunta, referencias y pendiente indicado |
| TX-04 | Texto / aclaración, corrección o confirmación | Complementar evidencia anterior | Autor del aporte → él o intermediario; autoridad por comprobar | Referencia al original, valor aclarado, motivo o alcance de confirmación |

| ID | Contexto requerido adicional | Ambigüedades | Riesgo | Revisión humana | Validación pendiente |
|---|---|---|---|---|---|
| TX-01 | Concepto, unidad y período del recuento o consumo | Sin galpón/fecha, abreviaturas, dos secciones | Mortalidad mal atribuida; despacho tomado como consumo | Si cifra, alcance, fuente o período son dudosos | Vocabulario y forma real de reportar |
| TX-02 | Punto, momento y método de medición | Unidad omitida, cifra aproximada o relato | Comparar datos no equivalentes | Si falta unidad, método o se mezcla observación con medición | Variables y unidades realmente utilizadas |
| TX-03 | Incidencia o pregunta a la que se refiere | Respuesta aislada, causa supuesta, destinatario incierto | Tomar una consulta como hecho o intervención ejecutada | Si se propone acción sanitaria/física o falta contexto | Responsables y circuito de aclaración |
| TX-04 | Original identificable y alcance del cambio | «Sí», «corregido» o cifra sin referencia; contradicción | Aceptar un valor o sustituir otro sin autoridad | Hasta aclarar vínculo, fuente y función autorizada | Cómo se corrige y qué significa confirmar en campo |

### 4.4. Videos

| ID | Modalidad / subtipo | Motivo de envío | Autor potencial → remitente potencial | Información esperada |
|---|---|---|---|---|
| VI-01 | Video / instalaciones, equipos o incidencias | Mostrar una condición, falla aparente o su contexto | Quien graba → él o encargado; hablantes pueden ser otros | Escenas disponibles, elementos visibles, explicación audible si existe |
| VI-02 | Video / instrumento o medición | Mostrar una lectura y su contexto visual | Quien graba → él u otro trabajador | Lectura solo si es legible, unidad visible y momento relevante identificable |

| ID | Contexto requerido adicional | Ambigüedades | Riesgo | Revisión humana | Validación pendiente |
|---|---|---|---|---|---|
| VI-01 | Archivo accesible, duración, sonido y escena pertinente | Movimiento, cortes, sin sonido, autor/fecha inciertos | Confundir escena con causa o funcionamiento correcto | Si el archivo no puede reproducirse o se pretende concluir causa/estado funcional | Qué se graba, accesibilidad y contexto necesario |
| VI-02 | Instrumento, método, secuencia y tramo pertinente | Decimal borroso, lectura cambiante, referencia sin archivo | Adoptar una medición exacta no sustentada | Si lectura, unidad, momento o archivo no están disponibles | Viabilidad de verificar lecturas y responsable |

### 4.5. Audio y voz

| ID | Modalidad / subtipo | Motivo de envío | Autor potencial → remitente potencial | Información esperada |
|---|---|---|---|---|
| AU-01 | Audio / mensaje de voz | Reportar oralmente, aclarar o responder una consulta | Hablante/grabador identificados si constan → él o intermediario | Expresiones audibles sobre cifra, unidad, alcance y referencia, sin completarlas |
| AU-02 | Audio / archivo adjunto | Explicar incidencia, corregir o transmitir instrucciones | Hablante y grabador conocidos o desconocidos → función que adjunta | Relato audible, corrección o instrucción y contexto expresamente mencionado |

| ID | Contexto requerido adicional | Ambigüedades | Riesgo | Revisión humana | Validación pendiente |
|---|---|---|---|---|---|
| AU-01 | Archivo, hablante, pregunta y período referido | Galpones parecidos, ruido, números/unidades incompletos | Registrar cantidad o galpón equivocados | Si cifra o identidad son dudosas; no afirmar por tono de voz | Vocabulario, calidad y modo permitido de aclaración |
| AU-02 | Origen, fragmento disponible y conversación relacionada | Varios interlocutores, cortes, copia sin contexto | Atribuir instrucción o corrección a persona no autorizada | Si no se distingue quién habla, qué modifica o si se ejecutó | Uso real de adjuntos y funciones que validan |

## 5. Autoría y procedencia

Distinguir autor original del contenido, anotador del documento representado, hablante, grabador o fotógrafo cuando sean distintos; remitente que lo comunica o reenvía; y función responsable de aceptar el registro operativo. Una función no acredita automáticamente las otras, ni el nombre mostrado por un canal acredita identidad o autorización.

Se necesita conocer, o marcar como desconocido, canal de procedencia, si es copia/reenvío, referencia autorizada del original y contexto productivo. Un encargado podría reenviar la foto de una cartilla escrita por un galponero y tomada por otro trabajador: son tres contribuciones distintas, no identidades confirmadas por el archivo. No se usan nombres ni identidades personales reales.

Las referencias documentales propuestas sirven para describir vínculos y dudas; no son un esquema de identificadores técnicos. Si origen, identidad o contexto no pueden comprobarse, la incertidumbre acompaña al aporte y no se resuelve por inferencia.

## 6. Relación entre mensajes y hechos operativos

Secuencia conceptual, sin implementar estados ni exigir un recorrido técnico único:

1. **Mensaje original:** contenido recibido por un canal autorizado; si solo se conserva un reenvío, el original puede no estar disponible.
2. **Evidencia:** texto o material efectivamente asociado. Un mensaje que menciona un adjunto inaccesible aporta esa referencia, no el contenido del archivo.
3. **Interpretación:** lectura contextual que separa lo directamente legible/audible de lo inferido; mantiene alternativas y limitaciones.
4. **Dato candidato:** valor propuesto con concepto, unidad, contexto y fuente conocidos, y faltantes explícitos; todavía no aceptado.
5. **Confirmación:** comprobación por una función con autoridad efectiva, contrastando fuente, alcance y dudas. Un «confirmado» de procedencia incierta no la sustituye.
6. **Registro operativo:** dato aceptado para el proceso y período correspondientes, conforme a la revisión acordada; no se crea automáticamente por recibir, transcribir o interpretar.

La evidencia puede describir una solicitud, opinión o instrucción sin producir un dato operativo. Una interpretación puede ser descartada o quedar pendiente. Si una confirmación posterior corrige el aporte, se preservan original, motivo, responsable y alcance; no se altera silenciosamente la historia. No hay persistencia ni flujo de aprobación implementados en Avicendia.

## 7. Temporalidad y contexto operativo

Referencia documental para operaciones peruanas: **America/Lima**. No se infiere zona por el dispositivo ni por la ubicación del servidor. Fecha operativa designa el día o período de producción al que pertenece el dato; los cortes de jornada requieren validación. Momento de creación, envío y recepción no equivalen a fecha del evento.

| Referencia | Relación con T1–T7 de CG-005 | Límite de interpretación |
|---|---|---|
| Hecho o medición | T1 — Evento | Puede no aparecer en el mensaje; no asumirlo por fecha del archivo |
| Dato utilizable | T2 — Disponibilidad | Poder ver o escuchar contenido no acredita que la cifra operativa ya fuera conocida |
| Creación del contenido | Puede documentar T3 — Registro, si fue el primer registro | Fotografiar una cartilla o grabar un relato puede ocurrir después de T1 y del primer T3 |
| Envío del mensaje | Parte de T4 — Comunicación | Cada reenvío tiene su momento; no cambia el evento relatado |
| Recepción por destinatario o sistema, si existiera | Otro momento de T4; llegada no equivale a T5 | Mantenerlo separado del envío; en Avicendia no hay recepción implementada |
| Verificación por función autorizada | T5 — Revisión | No se deduce de archivo recibido ni de una respuesta breve |
| Aclaración o corrección posterior | T6 — Corrección, si procede | Nuevo aporte y momento propios, con vínculo revisado al anterior |
| Aceptación del reporte diario | T7 — Cierre | No equivale a resolver la incidencia ni a terminar campaña |

Cuando conste, describir fecha/hora o intervalo, precisión y fuente: anotación original, relato o referencia del canal. Si creación, envío, recepción, autoría o fecha operativa son desconocidos, indicarlo expresamente. Una fecha impresa puede pertenecer al documento, no al evento; los metadatos por sí solos no certifican origen ni fecha.

Un mensaje nocturno puede referirse a una jornada anterior o a la que transcurre. No se decide por la hora de envío ni se retrofecha el registro. La información posterior al cierre mantiene la fecha operativa declarada o su incertidumbre explícita y requiere revisión autorizada, sin reapertura automática ni sustitución silenciosa de lo cerrado.

## 8. Evidencias relacionadas

Vincular conceptualmente mediante referencia al aporte previo, dato o incidencia, contexto y motivo del vínculo; señalar quién propone la relación y qué sigue sin comprobarse. Si faltan referencias o coinciden solo cifras, ubicación aparente o proximidad temporal, el vínculo es tentativo. No unir ni contar eventos por semejanza de forma automática.

| Situación | Relación posible y comprobación necesaria |
|---|---|
| Fotografía con texto | Texto puede identificar fecha/unidad, pero comprobar que se refiere a esa imagen y al mismo alcance |
| Aclaración de fotografía anterior | Referenciar foto, fila o campo concreto; no aplicar la aclaración a todas las imágenes |
| Video seguido de explicación oral | Vincular escena y fragmento referido; voz y video pueden tener autores y momentos diferentes |
| Informe reenviado por otro trabajador | Otra comunicación/evidencia; conservar origen conocido y remitente, sin duplicar el hecho |
| Dos mensajes sobre el mismo acontecimiento | Podrían complementarse o contradecirse; confirmar si comparten evento y período antes de consolidar |
| Fotografías repetidas | Posibles copias o distintas tomas; comprobar documento, página y período, sin sumar cifras otra vez |
| Corrección de cifra anterior | Identificar aporte, cifra, motivo y autoridad; mantener ambos y revisar efecto sobre el consolidado |
| Diferentes galpones en una conversación | Separar contexto por aporte; el canal no asigna por sí solo un galpón único |
| Documentos de campañas distintas | Confirmar campaña, sección y período de cada uno; una plantilla igual no acredita la misma campaña |
| Mensajes después del cierre diario | Relacionar con fecha/reporte pertinentes y solicitar revisión autorizada; mantener pendiente si no se autoriza |

## 9. Incertidumbre, revisión y privacidad

Clasificaciones documentales que pueden coexistir; no son porcentajes de confianza ni estados técnicos:

| Clase | Significado y actuación conceptual |
|---|---|
| Información directamente legible | Se puede leer o escuchar el contenido, pero aún deben comprobarse contexto y veracidad |
| Información parcialmente legible | Solo una parte es utilizable; no completar el resto por costumbre |
| Información ambigua | Hay varias interpretaciones; solicitar aclaración sin elegir una arbitrariamente |
| Información contradictoria | Fuentes o mensajes discrepan; conservar versiones y pedir contraste |
| Información incompleta | Faltan campos o parte del material; dejar faltantes explícitos, sin rellenar con cero |
| Información no accesible | No se dispone de contenido utilizable; especificar la causa conocida o desconocida |
| Información que requiere contexto adicional | Lectura posible, pero no se conoce alcance, período, unidad, origen o vínculo |

**Contenido ausente:** no se incluyó ni consta el dato/adjunto. **Archivo no descargado:** existe una referencia, pero no se dispone del archivo local utilizable. **Archivo dañado:** solo se describe así si hay evidencia del daño; un fallo de acceso puede deberse a permiso, ubicación o reproducción y mantiene causa desconocida. No intentar acceso sin autorización ni suponer el contenido por el nombre del archivo.

La revisión humana aumenta con las consecuencias: clasificación o vínculo tentativos requieren contraste antes de usarse; mediciones y consumo exigen aclarar unidad, período, método y fuente; mortalidad, cambios tras cierre, decisiones sanitarias o acciones físicas requieren especial verificación y autoridad correspondiente. No se asigna al veterinario la aprobación universal ni se prescriben tratamientos o actuaciones autónomas. Sin evidencia suficiente o autoridad, el dato permanece candidato o pendiente; una etiqueta de calidad no lo confirma.

Permisos, finalidad, acceso, custodia, conservación y eliminación deben acordarse antes de recopilar material real, siguiendo CG-004. No se obtienen mensajes de grupos ni conversaciones personales; no se copian archivos empresariales ni datos de terceros. El material real no pertenece al repositorio, sus carpetas de trabajo, fixtures, logs ni comentarios de PR. Un eventual uso externo o de IA requeriría revisión y autorización propias, sin conservar conversaciones indefinidamente por defecto.

Las instrucciones escritas o grabadas dentro de una evidencia son contenido a interpretar; no conceden permisos ni modifican las reglas del trabajo. No se prometen precisión, tasas de extracción, porcentajes de confianza o procesamiento automático.

## 10. Ejemplos sintéticos

**Todos los casos S01–S08 son completamente ficticios y escritos para esta tarea. No existen imágenes, audios, videos ni conversaciones adjuntos; las descripciones no son transcripciones obtenidas por un modelo. Los galpones y secciones mencionados son etiquetas inventadas.** Ninguna cifra constituye un resultado de campo.

| ID | Escenario sintético | Qué no puede darse por confirmado y aclaración necesaria |
|---|---|---|
| S01 | Texto inventado: «Mortalidad 3» | No consta galpón, sección, campaña ni fecha operativa; confirmar alcance, período y fuente del recuento |
| S02 | Descripción de foto hipotética: fila de cartilla legible, fecha ilegible | No asignar fecha por el envío ni recuperar dígitos imaginados; pedir aclaración autorizada de fecha y fila |
| S03 | Texto inventado comunicado durante la noche: «Consumo de hoy: 5 sacos» | «Hoy» y fecha operativa inciertos; aclarar jornada, galpón, campaña y si fue consumo o entrega. No convertir a kg sin peso por saco verificado |
| S04 | Texto inventado reenviado por encargado: «El galponero informó 3» | Autor original y concepto sin verificar; nuevo envío no acredita otro evento ni confirma la cifra |
| S05 | Textos inventados: primero «Mortalidad 3» y luego «Corrección: eran 2» | No reemplazar automáticamente: confirmar original, mismo alcance/período, motivo y autoridad; preservar ambos |
| S06 | Texto inventado: «Sección Norte 2; sección Sur 4» | Son secciones ficticias; faltan concepto, unidad, galpón, campaña y período. No sumar ni trasladar cifras |
| S07 | Texto inventado: «En el video se ve la falla», sin archivo disponible | Solo consta la afirmación y referencia; no describir escena, causa ni funcionamiento sin video accesible y contexto |
| S08 | Descripción de audio hipotético: cifra que un oyente no podría distinguir entre «trece» y «treinta» | No existe audio ni transcripción real; tampoco se conocen unidad o galpón. Pedir repetición o confirmación contextual sin elegir un número |

## 11. Hipótesis pendientes

Confirmar mediante entrevistas u observación autorizadas qué soportes existen, su frecuencia y motivos de uso; quién crea, transmite, registra y acepta; calidad real de fotos y grabaciones; diferencias de cartillas y versiones; vocabulario, unidades y referencias temporales; capacidad para identificar vínculos y contradicciones; tratamiento de reenvíos, datos nocturnos y aportes posteriores al cierre.

También faltan permisos efectivos, restricciones de terceros, límites de conservación, acceso a dispositivos, conectividad y alternativas manuales. No se validó demanda de automatización ni viabilidad, costos o condiciones de proveedores. No hay corpus real, mediciones de exactitud ni resultados de extracción. Estos vacíos no se cubren eligiendo herramientas ni convirtiendo supuestos en requisitos aprobados.

## 12. Relación con CG-004 y CG-005

CG-004 aporta preguntas C2–C4 sobre secuencia, soportes y diferencias; G2–G4, E2–E3 y F2 permiten investigar registro, revisión y evidencia sin copiar material privado. Mantener D — declaración, O — observación autorizada y H — hipótesis: un audio de un relato sigue siendo declaración, no observación directa del evento.

CG-005 aporta T1–T7 y las categorías recepción, mortalidad, alimento, agua, ambiente, mediciones productivas, condiciones e incidencias. Estas son categorías del hecho o registro; las veinte de este inventario clasifican soportes y comunicaciones, sin correspondencia uno a uno. Una misma evidencia puede mencionar varias y varias evidencias referirse al mismo hecho. Se mantienen alcance por granja, galpón, sección, campaña y partida, dato ausente distinto de cero y correcciones rastreables.

No se modifican los instrumentos ni el flujo previo. Este inventario se entrega a evaluación externa; no acredita investigación de campo, confirmación de datos ni funcionalidades implementadas.
