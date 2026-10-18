# Avicendia — Medición del éxito de un futuro piloto

CG-010 · 18 de octubre de 2026 · Documentación de preparación. **No hay piloto ejecutado, participantes confirmados ni resultados medidos.**

## 1. Objetivo y alcance

Proponer cómo evaluar resultados operativos de un futuro piloto en una granja de pollos de engorde. Se compararía el procedimiento actual con uno apoyado por Avicendia solo cuando exista producto funcional, acceso autorizado y condiciones de medición acordadas.

Se proponen siete KPI principales. No se seleccionan herramientas de analítica ni se implementan captura, dashboards o integraciones. No se realizan entrevistas, observación, contacto con clientes ni recopilación real. Toda línea base es **POR MEDIR**; ninguna ausencia se interpreta como cero ni se prometen ahorros.

## 2. Fuentes y relaciones con el proyecto

- [CG-002 — Tesis de producto](TESIS_PRODUCTO.md): consolidación, reportes completos, inconsistencias y consulta histórica sin beneficios demostrados.
- [CG-003 — Cliente ideal hipotético](CLIENTE_IDEAL.md): P2 es prioridad de investigación, no candidato o piloto confirmado; dispositivos y conectividad por comprobar.
- [CG-004 — Guía de investigación](GUIA_ENTREVISTAS_CAMPO.md): preguntas C2–C6, E2–E5 y A2–A4 para contrastar procesos, esfuerzo y evidencia, con consentimiento y custodia privados.
- [CG-005 — Flujo diario](FLUJO_DIARIO_PRODUCCION.md): fecha operativa, T1–T7, fuentes, revisión, corrección y cierre.
- [CG-009 — Diccionario funcional](DICCIONARIO_REPORTE_DIARIO.md): campos contextuales, opcionales, no aplicables y por validar; presencia, disponibilidad y confirmación distintas.
- [CG-008 — Caso sintético](EJEMPLO_OPERATIVO_G06.md): solo referencia conceptual de datos parciales. **Su reproducción cuantitativa histórica exacta permanece PENDIENTE.** El fixture no aporta líneas base ni prueba desempeño del producto.

La tesis CG-002 usaba completos/reportes esperados y un tiempo amplio hasta reporte revisado. Aquí KPI-02 usa completos/evaluables, mientras KPI-01 muestra recepción; KPI-03 y KPI-04 separan consolidación y revisión. Son precisiones propuestas para este protocolo: no se comparan directamente con tasas o duraciones de definiciones anteriores ni se reescribe la tesis. Si se conserva una medida de extremo a extremo, debe definirse y medirse por separado, sin sumar duraciones solapadas.

Se consultaron las instrucciones de control-granja-engineering como referencia local; no se publica su paquete ni documentación original.

## 3. Protocolo común de medición

### 3.1. Universo, períodos y corte

Antes de observar, acordar ámbito —empresa, granja, galpón, sección si existe, campaña—, tipo de reporte, fecha operativa, período W y corte de evaluación C. Usar America/Lima como referencia documental para operaciones peruanas. W identifica las jornadas evaluadas; C indica hasta cuándo se admite observar recepción, revisión y correcciones. El plazo de entrega acordado puede ser anterior a C. No fijar horarios ni duración de piloto sin evidencia.

Construir con el responsable operativo el plan de reportes esperados, cuya cantidad se denomina E: una unidad distinguible por ámbito, tipo y jornada, según la organización realmente utilizada. No suponer un reporte por cada uno de los 77 campos ni por cada mensaje, partida o trabajador. Conservar versión del plan y modificaciones justificadas y aprobadas, sin retirar retrospectivamente reportes difíciles o no recibidos para mejorar tasas.

Un reporte puede tener varios soportes, envíos, correcciones o versiones; sigue siendo una unidad. Resolver vínculos dudosos con revisión, no por semejanza de nombres/cifras. Las referencias sin contenido accesible no prueban recepción del reporte. Un recibido válido para conteo requiere identidad suficiente para vincularlo con el plan de E reportes, contenido operativo o pendientes explícitos, fuente y recepción verificables; no exige completitud ni confirmación de cifras. Lo recibido no vinculado queda visible como pendiente, sin crear otra unidad ni reducir E.

Los numeradores de porcentajes son subconjuntos del denominador definido y se cuentan una sola vez por unidad. Con denominador desconocido o cero, el porcentaje es **NO CALCULABLE**; conservar por separado los conteos conocidos y su cobertura. Un cero realmente contado puede ser resultado legítimo cuando el denominador es conocido y positivo. Si la observación no permite establecer el numerador, tampoco hay tasa exacta: mostrar solo conteos o cotas conocidos con su limitación, sin sustituir desconocidos por cero.

### 3.2. Duraciones, esfuerzo y casos pendientes

Para cada caso de consolidación, revisión o consulta, registrar inicio/fin, etapa, intervalos de trabajo, esperas, interrupciones y precisión de la observación. Distinguir cronometraje observado de recuerdo o estimación. T3/T5/T7 son momentos, no duración de trabajo activo.

- **Activo A:** suma de minutos trabajados por cada función/participante en la etapa. Si intervienen varias personas, la unidad agregada es minutos-persona; no confundirla con minutos de reloj.
- **Espera Wt:** duración de la unión de tramos sin trabajo en esa etapa por falta de datos, respuesta o recurso; expresar en minutos de reloj.
- **Transcurrido D:** minutos de reloj entre inicio y fin del caso. Incluye espera y otras pausas.
- Si se necesita descomponer D, usar la unión temporal del trabajo activo, esperas y otras pausas disjuntas. El esfuerzo A de varias personas puede exceder D: **no afirmar D = A + Wt** en trabajo paralelo.

Asignar cada tramo de esfuerzo a una etapa. Si una función alterna consolidación y revisión, separar tramos; si no puede distinguirlos, indicar medición mezclada y no presentarla como duración pura comparable. No contar dos veces un intervalo de la misma persona.

Conservar duraciones por caso. La elección de media, mediana o percentiles se acordará según distribución, precisión y cantidad de observaciones; comunicar tamaño y cobertura de muestra y no imponer una estadística única. Si se usa media: suma de duraciones comparables / número N de casos con duración completa; con N desconocido o cero, no resumir.

Un caso sin final observado no dura cero ni se elimina silenciosamente: registrar estado pendiente y tiempo observado hasta C como seguimiento incompleto, sin tratarlo como duración final. Informar cantidades de casos iniciados, terminados, pendientes y no observables; comparar también estas coberturas para evitar aparentes mejoras al omitir casos largos.

## 4. Fichas de indicadores principales

### KPI-01 — Cobertura de reportes

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-01 |
| Nombre | Cobertura de reportes |
| Objetivo | Saber qué parte de la información esperada llegó al circuito operativo |
| Fórmula | Cobertura = 100 × R / E |
| Numerador | R: número de reportes distintos del plan recibidos válidamente para conteo hasta C, según sección 3.1 |
| Denominador | E: número de reportes esperados del plan acordado para W; no solo los enviados o revisados |
| Unidad | % de reportes esperados |
| Población | Unidades de reporte del ámbito y tipo acordados, incluidas las no recibidas |
| Período | Jornadas W y corte C explícitos; mismo plazo relativo en A/B |
| Fuente | Plan operativo autorizado y constancias de recepción por el medio realmente usado |
| Responsable | Responsable de evaluación mide; operativo valida E y revisor contrasta enlaces/duplicados |
| Línea base | POR MEDIR |
| Comparación | Medir en A con plan y recepción actuales; en B con iguales definición, corte y reglas de enlace, verificando disponibilidad real de fuentes |
| Limitaciones | Un reporte recibido puede ser parcial o incorrecto; unidades no vinculadas y cambios del plan deben permanecer visibles |

**Procedimiento:** cotejar el plan de E reportes con lo recibido, agrupar envíos del mismo reporte y conservar su primera recepción válida y sus versiones. Los recibidos después del plazo, pero antes de C, cuentan en R y se identifican como tardíos; los posteriores a C se registran en una actualización separada sin reescribir el valor original. Un mensaje que solo dice haber enviado un archivo inaccesible no acredita recepción del reporte. El reenvío no suma otro recibido.

### KPI-02 — Completitud de reportes

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-02 |
| Nombre | Completitud contextual al corte acordado |
| Objetivo | Saber si la información exigible está presente sin completar artificialmente faltantes |
| Fórmula | Completitud = 100 × Q / V |
| Numerador | Q: número de reportes evaluables con todos los valores y contexto exigibles disponibles para la evaluación acordada, sin ceros de relleno |
| Denominador | V: reportes recibidos de E hasta C cuya pauta de exigibilidad contextual está definida y permite evaluar presencia/completitud; incluye los incompletos |
| Unidad | % de reportes evaluables |
| Población | Recibidos con pauta aplicable; no recibidos se explican mediante KPI-01 |
| Período | W y C; la pauta fija antes de medir cuándo debe estar disponible cada dato |
| Fuente | Reportes originales, pauta contextual acordada a partir de CG-009 y lista de faltantes |
| Responsable | Evaluación aplica pauta; revisor contrasta aplicabilidad; operativo valida requisitos |
| Línea base | POR MEDIR |
| Comparación | En A y B usar la misma versión de pauta, ámbitos equivalentes y igual madurez de disponibilidad al corte |
| Limitaciones | Un valor presente no demuestra verdad operativa; si la pauta no está validada no puede inferirse completitud ni excluir casos sin declararlo |

**Procedimiento:** clasificar cada campo exigible, opcional, no aplicable justificado, aún no debido o de necesidad por validar. No exigir universalmente los 77 campos. Un requerido que ya debía estar disponible y sigue pendiente deja el reporte incompleto; registrar el motivo no lo completa. Un dato cuya disponibilidad está acordada para después se muestra como diferido, sin afirmar completitud final de la jornada. Publicar también cuántos reportes mantienen campos diferidos: la tasa al corte no es una tasa final.

No excluir de V por ser incompleto, difícil o pendiente de una cifra. Solo la falta de una pauta o de contexto suficiente para decidir exigibilidad impide evaluar; registrar estos casos y sus causas junto a V y R. Sin pauta o sin requisitos definidos no declarar completitud vacía. No aplica requiere justificación; opcional ausente no vuelve incompleto el reporte.

### KPI-03 — Tiempo de consolidación

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-03 |
| Nombre | Esfuerzo y duración de consolidación |
| Objetivo | Medir el trabajo de reunir y ordenar fuentes sin confundirlo con espera o revisión |
| Fórmula | Principal A_C: suma de intervalos activos de consolidación por participante; complementos Wt_C y D_C según sección 3.2 |
| Numerador | Minutos de trabajo de consolidación del caso; por separado, espera y transcurrido |
| Denominador | No es una tasa individual; al resumir, N casos completos comparables. Media, si se utiliza, = suma de A_C / N |
| Unidad | A_C en minutos-persona; Wt_C y D_C en minutos de reloj |
| Población | Casos de consolidación de un conjunto de reportes previamente delimitado, no cualquier sesión de software |
| Período | Casos iniciados en W con seguimiento hasta C; registrar pendientes o truncados |
| Fuente | Ficha autorizada de intervalos y entregables, observados manualmente sin vigilancia continua |
| Responsable | Evaluación mide; función consolidadora aporta contexto y revisión valida la clasificación temporal |
| Línea base | POR MEDIR |
| Comparación | Observar en A y B conjuntos de reportes equivalentes en alcance, soportes, dificultad y disponibilidad; conservar constancias del cronometraje autorizado |
| Limitaciones | A_C puede bajar mientras D_C aumenta; varias personas, datos tardíos y observación incompleta alteran la interpretación |

**Inicio:** primer trabajo deliberado de recopilación del conjunto asignado. **Final:** consolidado armado, pendientes identificados y entrega a revisión documentada; no esperar a la aceptación del reporte. Registrar preparación, transcripción, conciliación para reunir fuentes y entrega en esta etapa; el control de exactitud pertenece a KPI-04. Las actividades inseparables se declaran mezcladas, sin repartir minutos inventados.

### KPI-04 — Tiempo de revisión

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-04 |
| Nombre | Esfuerzo y duración de revisión |
| Objetivo | Medir el trabajo de comprobar datos y documentar el alcance de la revisión |
| Fórmula | Principal A_R: suma de intervalos activos de revisión, incluidas rondas repetidas; complemento D_R entre inicio y resultado documentado de la versión evaluada |
| Numerador | Minutos activos por caso; registrar por separado tiempo transcurrido, espera por aclaraciones y otras pausas |
| Denominador | No es una tasa individual; N casos completos para resumen comparable. Media, si se utiliza, = suma de A_R / N |
| Unidad | A_R en minutos-persona; D_R y espera en minutos de reloj |
| Población | Casos de revisión identificados por reporte/versión y alcance acordado; no número de aperturas o mensajes |
| Período | Casos iniciados en W y seguidos hasta C; rondas y pendientes visibles |
| Fuente | Constancia autorizada de tramos de revisión, solicitudes de aclaración y resultados vinculados a versión |
| Responsable | Evaluación mide; revisor aporta alcance y administración u otra función independiente valida interpretación |
| Línea base | POR MEDIR |
| Comparación | Misma pauta, profundidad de comprobación, dificultad, disponibilidad y tratamiento de aclaraciones en A/B |
| Limitaciones | Revisión rápida pero superficial no es mejora; pendientes o rondas omitidas sesgan duraciones |

**Inicio:** primera comprobación efectiva de la fuente o del dato del caso. **Final:** resultado de la revisión de la versión documentado, con hallazgos y pendientes explícitos; no exige cerrar el reporte ni resolver la incidencia. Distinguir revisar información parcial de haber terminado el alcance de revisión acordado.

Separar trabajo activo de interrupciones y espera por aclaración. Si se repite antes de C, vincular rondas al mismo reporte y versión pertinente, sumar esfuerzo una vez y conservar cada resultado/momento; no presentarlas como reportes independientes. Una nueva versión tiene su propio tramo temporal: no borrar rondas anteriores ni extender silenciosamente la duración de una versión ya medida. Aclaraciones posteriores a C se documentan en actualización separada. Casos sin resultado documentado al corte permanecen pendientes con seguimiento incompleto.

### KPI-05 — Inconsistencias confirmadas

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-05 |
| Nombre | Reportes con inconsistencias confirmadas |
| Objetivo | Reconocer defectos comprobados del registro sin equiparar sospecha o corrección con error |
| Fórmula | Frecuencia = 100 × I / J |
| Numerador | I: número de reportes distintos entre los J revisados con al menos una inconsistencia confirmada de la versión evaluada |
| Denominador | J: reportes recibidos cuya revisión cubrió la pauta acordada y permite clasificar inconsistencias; incluye reportes incompletos y con defectos |
| Unidad | % de reportes revisados evaluables |
| Población | Unidades de reporte con revisión comparable; revisiones parciales/no contrastables se informan separadas, sin afirmar ausencia de errores |
| Período | W y C, con versión original evaluada identificada y fecha de confirmación dentro del corte |
| Fuente | Contraste autorizado de registros, evidencia de discrepancia y constancia de confirmación por función competente |
| Responsable | Revisor confirma y clasifica; evaluación cuenta unidades únicas; función independiente revisa criterio y cobertura |
| Línea base | POR MEDIR |
| Comparación | Misma pauta y profundidad de revisión, fuentes, ventana de confirmación y selección de casos en A/B |
| Limitaciones | Mejor detección puede elevar I sin empeorar los datos originales; menor revisión puede aparentar una reducción |

Clasificar provisionalmente: transcripción, incompletitud exigible comprobada, duplicación indebida, atribución equivocada, unidad incorrecta y contradicción entre fuentes. Una contradicción sin resolución se mantiene como discrepancia, no error confirmado. Un faltante aún no debido no se considera defecto por estar pendiente.

Una corrección válida puede rectificar error comprobado o actualizar legítimamente información antes desconocida; por sí sola no acredita inconsistencia. Un reenvío normal no es duplicación indebida. Contar cada reporte de J una vez aunque tenga varios defectos y conservar tipos/ocurrencias por separado. Reportes con revisión incompleta, incluso si ya se detectó un problema, se muestran fuera de la tasa comparable con su evidencia y motivo; no se ocultan ni se incorporan selectivamente.

Conservar la versión de entrada y sus defectos confirmados aunque después se corrijan. Separar calidad de entrada de situación posterior a corrección; no borrar hallazgos para mejorar I. J y su cobertura respecto de recibidos deben acompañar siempre a la tasa.

### KPI-06 — Adopción operativa

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-06 |
| Nombre | Participación operativa activa y cumplimiento de tarea |
| Objetivo | Saber si las personas elegibles usan realmente el procedimiento y completan las tareas de su función |
| Fórmula | Principal: 100 × Pact / L; complementaria: 100 × Pfin / L |
| Numerador | Pact: participantes elegibles con actividad operativa pertinente verificable; Pfin: elegibles que completaron la tarea acordada para su función; cada persona una vez en cada conteo |
| Denominador | L: participantes elegibles con tarea y oportunidad acordadas para W, autorización y participación consentida; cohorte definida antes de conocer resultados |
| Unidad | % de participantes elegibles; Pact, Pfin y L son conteos de personas, no cuentas o dispositivos |
| Población | Participantes de funciones acordadas con oportunidad de aportar, revisar o consultar; no toda persona invitada o capacitada |
| Período | W, oportunidades y corte C explícitos; misma definición de actividad/tarea en A/B |
| Fuente | Constancias mínimas autorizadas de tareas y aportes, por códigos privados y función; sin seguimiento continuo |
| Responsable | Evaluación agrega conteos; operativo verifica asignación/oportunidad; revisor contrasta finalización; administración aprueba interpretación agregada |
| Línea base | POR MEDIR |
| Comparación | En A y B identificar actividad equivalente y cumplimiento de la misma tarea, considerando acceso, capacitación y apoyo recibido |
| Limitaciones | La acción de una cuenta compartida no identifica personas; actividad no demuestra utilidad, facilidad ni tarea terminada |

Distinguir invitados, capacitados, elegibles, activos y quienes completan: no son sinónimos ni una secuencia técnica obligatoria. Definir actividad con resultado operativo verificable —aporte identificable, revisión documentada o consulta sustentada— y definir antes qué constituye finalización para cada función. Un inicio de sesión no basta.

Una persona puede cubrir varias funciones o usar dispositivo compartido; no multiplicarla por cuentas o roles al consolidar. Registrar por separado asistencia y dificultades, sin retirar de L después de observarlas a personas con problemas de capacitación, uso o acceso. Cambios legítimos de oportunidad, ausencia o retiro voluntario requieren motivo, versión de cohorte y tratamiento ético aprobado; no inferir fracaso ni recoger datos de quien no autorizó participar.

La medición es del procedimiento, no una clasificación laboral. No publicar códigos individuales, comparar rendimientos personales ni usar resultados para sanción o vigilancia.

### KPI-07 — Tiempo de consulta histórica

| Atributo | Definición propuesta |
|---|---|
| ID | KPI-07 |
| Nombre | Duración de consulta histórica con respuesta verificada |
| Objetivo | Medir rapidez para encontrar información correcta y su sustento, sin premiar respuestas erróneas |
| Fórmula | Principal D_H: minutos desde presentación de la tarea hasta respuesta correcta verificada; complemento de resolución = 100 × S / U |
| Numerador | Duración por consulta correcta; S: número de consultas elegibles resueltas correctamente con referencia verificable |
| Denominador | Duración individual sin cociente; N consultas correctas para resumen temporal. U: todas las consultas elegibles asignadas, incluidas incorrectas y no resueltas |
| Unidad | D_H en minutos de reloj; resolución en %; búsqueda y comprobación activas en minutos-persona |
| Población | Tareas de consulta de períodos anteriores con dificultad, alcance y pauta de respuesta previamente definidos |
| Período | Tareas asignadas en W y seguidas hasta C o el límite de observación acordado, igual en A/B |
| Fuente | Ficha autorizada de tarea, tramos de búsqueda/comprobación, respuesta y referencia contrastada por evaluador |
| Responsable | Participante realiza consulta; evaluación mide; revisor verifica corrección sin que rapidez determine la calificación |
| Línea base | POR MEDIR |
| Comparación | Casos equivalentes y recursos autorizados comparables; ordenar o alternar tareas para reducir memoria/aprendizaje |
| Limitaciones | Tiempo solo de resueltas tiene sesgo de supervivencia: mostrar siempre S/U, fallos, bloqueos y tiempos observados de no resueltas |

Una tarea asignada por participante y caso acordado constituye la unidad de consulta; sus reintentos no incrementan U.

**Inicio:** se presenta la solicitud con las condiciones de acceso acordadas; una falta de recurso se registra como bloqueo, sin retrasar el inicio de forma conveniente. **Final:** respuesta sustentada verificada contra una pauta que identifica período, ámbito, concepto, unidad y evidencia requerida. La pauta puede reconocer insuficiencia de información como respuesta correcta únicamente si lo establece justificadamente antes de observar resultados; «no encontré» sin sustento no equivale a resolver.

Separar tramos activos de búsqueda y comprobación, y esperas. Conservar respuestas incorrectas, consultas interrumpidas y no resueltas en U, con motivos y seguimiento observado; no incluirlas como consultas rápidas exitosas ni asignarles duración final cero. Si S es cero no hay muestra de duraciones correctas, aunque la tasa de resolución sí pueda ser cero con U positivo y conocido.

## 5. Mediciones complementarias candidatas

CP-01–CP-07 son **PROPUESTAS**, no parte automática del conjunto principal. Su fuente es hipotética y queda **POR VALIDAR**. Antes de adoptarlas se debe completar su acuerdo de población, fuente viable y responsabilidad. Cada comparación usaría A/B y el ámbito de su KPI relacionado con idéntica ventana W, corte C y seguimiento pertinente; no se calculan ahora.

| ID y objetivo | Procedimiento o fórmula preliminar | Unidad y línea base | Fuente posible y función responsable | Condiciones y límites |
|---|---|---|---|---|
| CP-01 — Entrega tardía | 100 × recibidos de R después del plazo y hasta C / R; cada reporte una vez | %; Línea base: POR MEDIR | Plan y recepción de KPI-01; evaluación | R conocido y positivo; separar no recibidos y llegados después de C |
| CP-02 — Corrección tras cierre | 100 × reportes con corrección posterior a T7 / reportes cerrados con el mismo seguimiento observable | %; Línea base: POR MEDIR | Original, T6/T7 y revisión; revisor | Ventana posterior igual y suficiente; corregir no implica error; sin cierre individual no aplica, y sin denominador positivo no se calcula la tasa |
| CP-03 — Consulta con ayuda | 100 × consultas elegibles que requieren otra función / U de KPI-07, con observación suficiente para identificar ayuda | %; Línea base: POR MEDIR | Ficha de consulta autorizada; evaluación | Conservar fallos/no resueltas y falta de observación; ayuda no es necesariamente perjuicio |
| CP-04 — Incidencias pendientes | Contar incidencias de la cohorte identificada en W que permanecen sin resolver en C, con definición de resolución acordada | incidencias; Línea base: POR MEDIR | Registro autorizado de seguimiento; operativo y revisor | No tasa: denominador no aplica; universo y seguimiento deben conocerse antes de declarar incluso cero |
| CP-05 — Continuidad durante cortes | 100 × tareas afectadas que continuaron con alternativa trazable / tareas elegibles afectadas por interrupción constatada | %; Línea base: POR MEDIR | Constancia de interrupción y tarea; operativo, con evaluación | Sin cortes observados no hay denominador positivo; no acredita capacidad sin conexión de Avicendia |
| CP-06 — Esfuerzo de capacitación | Sumar intervalos activos de capacitación por caso/función; si se resume, indicar N casos completos y método | minutos-persona; Línea base: POR MEDIR | Ficha voluntaria de sesiones y apoyo; evaluación | No tasa individual; no clasificar trabajadores por rapidez; apoyo recibido debe acompañar adopción |
| CP-07 — Carga de captura | Sumar trabajo activo para registrar la unidad acordada, incluida duplicación exigida por el ensayo; resumen con N unidades comparables | minutos-persona; Línea base: POR MEDIR | Observación autorizada de captura; evaluación | No tasa individual; separar captura de consolidación/revisión y declarar si no pueden distinguirse |

En los cocientes, numerador y denominador cuentan unidades del mismo universo; cero o desconocido en el denominador impiden calcular porcentaje. Una fuente inviable deja la candidata pendiente, no obliga a implementar telemetría ni vigilancia para medirla.

## 6. Obtención futura de líneas base

**Todas las líneas base: POR MEDIR.** La plantilla y las fichas no contienen tiempos, porcentajes, muestras observadas ni participantes reales.

Con autorización y custodia privadas, antes de Avicendia se observaría el procedimiento A:

1. Confirmar soportes realmente usados, roles, acceso, tareas, oportunidades y consentimiento. P2 de CG-003 no confirma ninguno.
2. Acordar plan de reportes esperados, pauta de exigibilidad, profundidad de revisión, tareas de consulta, cohortes y ventanas, dejando versión de estas definiciones.
3. Para KPI-01/02 cotejar plan, recepción y campos exigibles. Para KPI-03/04 observar tramos activos, esperas y entregables con sus límites. Para KPI-05 contrastar diferencias y documentar confirmación. Para KPI-06 comprobar actividades y tareas por función. Para KPI-07 observar consultas y validar respuestas.
4. Verificar origen de cada observación por referencia privada mínima y revisión; diferenciar observación directa, dato documentado y relato/estimación. Un recuerdo no se convierte en cronometraje.
5. Comprobar coherencia de unidades, períodos, numeradores y denominadores. Si faltan observaciones, conservar motivos, cobertura y estado no medido/no disponible; no imputar ceros ni estimar una línea base sin sustento.
6. Acordar si la cobertura y precisión permiten una comparación. Sin evidencia suficiente, mantener **POR MEDIR** y describir qué falta; no inventar duración de estudio, tamaño de muestra o nivel de representatividad.

Cada línea base se obtendría de la fuente y población de su ficha, con la función responsable indicada. Una medición parcial posterior no sustituye silenciosamente la línea base: debe mostrar período, cobertura y estado, y requerir evaluación antes de aceptarse como referencia.

## 7. Comparación preliminar A/B

**A:** procedimiento real de la granja —papel, hojas, mensajes u otros soportes que existan—. **B:** procedimiento con Avicendia únicamente cuando el incremento funcional necesario esté disponible y probado y se autorice el piloto; no se presume que hoy lo esté.

Definir antes de comparar mismos objetivos de tarea y calidad requerida, ámbitos equivalentes, períodos productivos comparables, participantes/oportunidades, dificultad, volumen de fuentes, disponibilidad temporal, conectividad y apoyo. No mezclar una campaña o una etapa muy distinta sin explicar el efecto. El registro de ensayo y la doble captura obligatoria pueden añadir carga: deben medirse o declararse como limitación.

Cuando sea viable, usar casos equivalentes y alternar orden A/B para reducir aprendizaje y memoria, sin alterar la operación. Si solo se permite antes/después, declarar cambios de personal, proceso, conectividad o calidad de origen como explicaciones alternativas. Ninguno de estos diseños demuestra causalidad por sí solo.

Elegir la regla de resumen estadístico y su tratamiento de faltantes/pendientes antes de interpretar diferencias, sin seleccionar después el método más favorable. Mostrar conteos y coberturas junto a porcentajes y tiempos, resultados correctos junto a rapidez, y trazabilidad de cambios de definición. No promediar porcentajes de grupos con distintos denominadores sin ponderación pertinente; conservar numeradores/denominadores por ámbito.

Si A/B no son comparables, la conclusión es limitada o inconclusa. No atribuir automáticamente una mejora a Avicendia ni extrapolar un ensayo acotado a todas las granjas.

## 8. Criterios preliminares de éxito y resultados adversos

No hay umbrales, metas numéricas o compromisos aprobados. Antes del piloto, responsable operativo, administración y evaluación deberán acordar qué diferencia sería relevante y qué evidencia permitiría decidir.

| Dimensión | Evidencia que se buscaría | Resultado negativo o inconcluso que debe poder registrarse |
|---|---|---|
| Mejora operativa | Menor esfuerzo y/o demora en tareas comparables, distinguiendo ambos y la carga de captura | Ahorro activo acompañado de mayor espera, trabajo trasladado a otra función o datos insuficientes |
| Calidad de información | Cobertura, completitud y defectos confirmados con idéntica pauta y revisión | Mejor porcentaje por menos reportes esperados o menor inspección; más detección sin poder concluir empeoramiento |
| Adopción y facilidad de uso | Actividad y tarea terminada con apoyo/dificultades visibles; valoración voluntaria futura | Más accesos sin tarea completada, dependencia excesiva de ayuda o participantes excluidos |
| Continuidad del procedimiento | Tareas y pendientes conservados mediante alternativa autorizada ante interrupción | Pérdida o duplicación de registros, bloqueo operativo o falta de ensayo autorizado |
| Seguridad de registros | Acceso autorizado, custodia, origen y correcciones rastreables en el alcance evaluado | Exposición de evidencia, pérdida de original o permiso insuficiente; no se compensa con rapidez |
| Posibilidad de continuar | Responsables, soporte, esfuerzo y condiciones operativas sostenibles, contrastados con autorización | Utilidad no comprobada, carga insostenible o condiciones económicas/operativas aún desconocidas |

Las salidas de evaluación pueden ser favorables, desfavorables o inconclusas; también puede no haberse medido. No se fuerza una puntuación única que oculte riesgos. La decisión de continuar o detener corresponde a funciones autorizadas; esta documentación no aprueba piloto ni contratación.

## 9. Responsabilidades potenciales

| Función | Genera o aporta | Mide | Revisa validez | Aprueba interpretación |
|---|---|---|---|---|
| Responsable operativo | Plan, ámbitos y oportunidades reales | Puede aportar constancias de proceso | Contrasta expectativas y contexto | Valida lectura operativa junto a evaluación |
| Responsable de revisión | Hallazgos, correcciones y revisión realizada | Aporta tramos y confirmaciones | Verifica origen, unidades, pauta y discrepancias | Recomienda con límites, sin autoaprobar todo |
| Administración | Condiciones de acceso, recursos y continuidad | Puede aportar contexto autorizado | Contrasta carga y viabilidad | Decide con operativo/evaluación según autoridad acordada |
| Investigación o evaluación | Protocolo y fichas de observación | Aplica definiciones y agrega resultados | Comprueba cobertura y sesgos; busca contraste independiente cuando sea viable | Propone interpretación sustentada |
| Participantes del piloto | Actividad y contexto de la tarea consentida | Pueden registrar aportes mínimos si se acuerda | Pueden aclarar o corregir lo observado | No se les atribuye autoridad de cierre o aprobación por participar |

Son funciones por confirmar, no personal asignado. Una persona podría acumular funciones, pero no se presume que deba hacerlo; documentar conflictos de interés y limitaciones de contraste. No prometer independencia inexistente.

## 10. Integridad y privacidad

| Distorsión posible | Control conceptual |
|---|---|
| Reducir esperados o excluir casos difíciles | Plan y cohorte definidos antes, modificaciones motivadas y aprobación visible; reportar también excluidos y no evaluables |
| Marcar no aplica sin justificación o rellenar cero | Pauta contextual versionada, motivo y revisión; preservar ausencia frente a cero sustentado |
| Usar duplicados, versiones o sesiones para inflar cobertura/adopción | Una unidad por reporte/participante elegible; vínculos revisados y fuentes originales conservadas |
| Cerrar revisiones superficiales o borrar defectos | Alcance de revisión verificable, versión original y hallazgo conservados; corrección no elimina defecto de entrada |
| Medir solo casos resueltos rápidamente | Exponer pendientes, fallos, observaciones truncadas y sus cantidades junto a resumen temporal |
| Excluir participantes con dificultades | Cohorte y oportunidades acordadas; cambios legítimos motivados y sin represalias |
| Elegir una estadística o período más favorable después | Regla acordada, ventanas comparables y registro de cambios de criterio |

Cualquier medición real requerirá permiso de acceso, finalidad, participación voluntaria, información comprensible, custodia privada, personas con acceso, retención y tratamiento de retiro acordados. No recopilar en esta tarea datos reales ni usar métricas individuales para sancionar o vigilar.

Solo se versionan metodología y plantilla vacía. Las fichas cumplimentadas, referencias identificables, horarios personales y evidencia empresarial se conservarían fuera de Git y de sus carpetas de trabajo, en un espacio privado autorizado. No publicar nombres, chats, ubicaciones ni resultados de grupos que permitan reidentificación. Un código no garantiza anonimato; no enviar datos a servicios externos adicionales para medir. El método de observación será mínimo y autorizado, sin registro continuo de pantallas, ubicación o actividad personal.

## 11. Uso de la plantilla

La [plantilla vacía de seguimiento](PLANTILLA_SEGUIMIENTO_KPI.md) sirve para una copia futura privada. No rellenarla ahora. Diferenciar estado de disponibilidad, calculabilidad y revisión: un resultado calculado puede estar pendiente de revisión; no medido, no disponible y no aplicable tienen causas distintas.

Un porcentaje sin denominador conocido y positivo es no calculable, no cero. En duraciones individuales el denominador de tasa no aplica; si se calcula un resumen, su N y método deben constar. Mantener resultado vacío hasta tener observaciones y una interpretación justificada.

## 12. Hipótesis pendientes y límites

Faltan candidato autorizado, producto apto, responsables, acceso real a soportes y dispositivos, conectividad, plan de reportes, pauta exigible, momentos/cortes, profundidad de revisión, tareas equivalentes, fuentes viables, cobertura suficiente y criterios de relevancia. CP-01–CP-07 requieren decisión expresa antes de incorporarse.

CG-002 orienta qué problema medir; CG-003 mantiene P2 como hipótesis; CG-004 ofrece preparación para investigar con permiso; CG-005 separa momentos; CG-009 evita que todos los campos sean obligatorios o que null sea cero. Estas referencias no prueban resultados. CG-008 es sintético y su criterio histórico sigue pendiente.

La aceptación de CG-010 y cualquier decisión posterior corresponden a auditoría externa. No se inicia CG-011 ni se elaboran sus especificaciones.
