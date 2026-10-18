# Avicendia — Diccionario funcional del reporte diario

CG-009 · 18 de octubre de 2026 · Fase 00 · MVP · **Propuesta funcional para auditoría externa. No implementa formularios, validadores ni persistencia.**

## 1. Objetivo

Describir qué significa cada campo potencial del reporte diario, dónde aplica, cuándo podría conocerse y qué necesita revisarse. Está dirigido a responsables operativos, administradores y futuros desarrolladores. Permite representar información parcial sin convertirla en cero ni en un hecho confirmado.

El alcance es documental. No se definen tecnologías, cardinalidades, columnas SQL, endpoints, umbrales sanitarios ni máquinas de estados. La necesidad de medir, frecuencia, responsabilidades y criterios definitivos de cierre requieren validación posterior.

## 2. Fuentes

- **P5:** [CG-005 — Flujo diario de producción](FLUJO_DIARIO_PRODUCCION.md), especialmente categorías, T1–T7, revisión y cierre.
- **P6:** [CG-006 — Inventario de cartillas y mensajes](INVENTARIO_CARTILLAS_MENSAJES.md), procedencia, evidencia, candidatos y confirmación.
- **P7:** [CG-007 — Glosario](GLOSARIO_DOMINIO.md), identidades, campaña/partida, consumo y movimientos.
- **P8:** [CG-008 — Caso público sintético](EJEMPLO_OPERATIVO_G06.md) y [fixture](fixtures/G06_SINTETICO.json), únicamente como ejemplos inventados.
- **Solicitud vigente CG-009** y consulta local del contrato de referencia: unidades, opcionalidad, sexo, desconocido y fecha operativa; su aceptación original exige distinguir vacío, no medido y cero medido.

Se consultó Control Granja Engineering v2.1 sin copiar el paquete ni sus documentos originales. La clasificación inicial feat se concreta aquí como documentación funcional autorizada. La sección 4 identifica antecedentes por familia; las definiciones específicas y su obligatoriedad son propuestas de esta tarea, no acuerdos de campo aprobados. La columna Fuente de las matrices describe procedencia operativa posible, no un estudio realizado.

**Reproducción cuantitativa histórica exacta de CG-008: PENDIENTE.** Su integración en main no altera ese criterio ni demuestra aceptación histórica. No se consultan fuentes operativas privadas para CG-009.

## 3. Convenciones de lectura

Los ID A01–H09 son referencias de este documento, no nombres técnicos definitivos. Cada campo aparece una vez en la vista de significado y una vez en la de control de su familia; el ID enlaza ambas. Se cubren los catorce atributos solicitados: ID, nombre, definición, familia, ámbito, dimensiones, tipo, unidad, obligatoriedad, disponibilidad, ausencia, fuente, revisión y validación pendiente.

Las referencias de empresa, granja, galpón y campaña distinguen contexto; un nombre visible no prueba identidad ni autorización. Tenant no equivale a Company. Zona y sección se consideran solo si existen; partida solo si el dato es atribuible. El alcance de cada aporte puede precisar o limitar el del reporte general: no se heredan atribuciones dudosas.

**Obligatoriedad propuesta:**

- **O:** trazabilidad necesaria en este modelo documental. Si falta el valor, se registra incertidumbre y pendiente; no se afirma contexto resuelto ni reporte completo.
- **C:** condicional a la situación indicada, por ejemplo describir una medición ya aportada. No exige realizar universalmente esa medición.
- **OP:** opcional propuesto; su ausencia por sí sola no vuelve incompleto el reporte.
- **PV:** necesidad/frecuencia por validar. No se trata como obligatorio aprobado ni se descarta como innecesario.

En Ausencia, **V** = vacío/ausente; **D** = desconocido; **P** = pendiente de disponibilidad; **NM** = no medido con constancia; **NA** = no aplica con contexto justificado. Las barras indican situaciones documentables, no valores técnicos excluyentes. Véase [la separación en dimensiones](#disponibilidad). Un acto no ocurrido, como revisión o cierre, se describe como tal: no es una medición no realizada. La cifra cero pertenece a valores presentes, nunca a motivos de ausencia.

En Unidad, **—** significa sin magnitud física, no dato faltante; una fecha o referencia no necesita kg ni °C. Si se desconoce la unidad de una cantidad, no se declara interpretada. Se conserva la unidad original; toda conversión requiere equivalencia documentada y aplicable. Ninguna cifra atípica se corrige o rechaza automáticamente por esta especificación.

## 4. Familias de campos

| Familia | Campos | Alcance | Antecedentes |
|---|---|---|---|
| A — Identificación del reporte | A01–A16 (16) | Contexto e identidad; nombres visibles separados. | P5/P6/P7 |
| B — Población | B01–B12 (12) | Movimientos, recuentos y cálculos; sexo/partida si constan. | P5/P7/P8 |
| C — Alimentación | C01–C07 (7) | Consumo, despacho y entrega separados. | P5/P7/P8 |
| D — Agua | D01–D07 (7) | Consumo del período distinto de lectura acumulativa. | P5 |
| E — Condiciones ambientales | E01–E06 (6) | Lecturas situadas; exigibilidad por validar. | P5/P8 |
| F — Mediciones productivas | F01–F11 (11) | Muestra, método y tiempo; sin diagnósticos. | P5/P7/P8 |
| G — Incidencias y observaciones | G01–G09 (9) | Descripción, origen, revisión y seguimiento. | P5/P6/P7 |
| H — Revisión y cierre | H01–H09 (9) | Comprobaciones y decisiones documentales. | P5/P6/P8 |

## 5. Diccionario funcional

Toda cifra o descripción se acompaña conceptualmente de A10–A13 y A15–A16: contexto temporal, responsable, fuente y sustento. La revisión puede concluir que falta información; registrar valor no confirma el hecho. Los términos de control y PV remiten a secciones 3, 6 y 12.

En B, sexo es dimensión cuando la fuente lo distingue. Se admite total sin desglose: no inventar machos/hembras ni distribución entre partidas. Total y componentes no son cantidades adicionales para sumar. La incertidumbre de atribución persiste aunque el total sea conocido.

En E y F, un valor puntual sigue siendo puntual. Un resumen declara período, muestras y método; no se impone edad, frecuencia o exigencia sanitaria. En G, los campos especializados precisan A12/A13 para cada incidencia; no duplican reglas de procedencia ni convierten remitente en autor.

### 5.1. A — Identificación del reporte

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| A01 | **Referencia del reporte y aporte:** Distingue la recopilación y sus aportes; mensaje y evento son conceptos diferentes. | Reporte y aporte; Versión y vínculo de origen. | Referencia documental | — | O |
| A02 | **Empresa:** Entidad empresarial a la que se refiere la operación. | Empresa; Contexto empresarial. | Referencia | — | O |
| A03 | **Ámbito organizativo SaaS:** Contexto organizativo distinto de empresa, con relación aún por decidir. | Organización; Vínculo con empresa por resolver. | Referencia | — | PV |
| A04 | **Granja:** Instalación productiva general de referencia. | Granja; Empresa correspondiente. | Referencia | — | O |
| A05 | **Zona:** Agrupación espacial u operativa si existe en la granja. | Zona; Granja. | Referencia | — | C: si existe y es pertinente |
| A06 | **Galpón:** Instalación física a la que corresponde el dato. | Galpón; Granja y zona, si existe. | Referencia | — | O |
| A07 | **Sección:** Subdivisión física aplicable al dato, si existe. | Sección; Galpón. | Referencia | — | C: si existe y hay atribución |
| A08 | **Campaña:** Ciclo temporal de crianza al que pertenece el aporte. | Campaña; Ocupación y período, sin cardinalidad nueva. | Referencia | — | O |
| A09 | **Partida de ingreso:** Agrupación de origen o ingreso dentro de la campaña, solo con atribución sustentada. | Partida; Campaña y recepción pertinente. | Referencia | — | C: si el aporte se atribuye |
| A10 | **Fecha operativa:** Jornada productiva a la que corresponde el aporte. | Reporte y dato; Campaña y corte de jornada. | Fecha | — | O |
| A11 | **Período de observación o evento:** Momento o intervalo de lo observado, con precisión conocida. | Aporte o medición; Inicio, fin, punto o intervalo; T1. | Fecha o intervalo | — | C: al describir evento o período |
| A12 | **Responsable del aporte:** Función que registra o aporta, distinta de quien reenvía o acepta. | Aporte; Autor original y registrador, si difieren. | Referencia a función | — | O |
| A13 | **Fuente del registro:** Procedencia y referencia permitida al soporte, autor y canal. | Aporte; Original, copia, remitente y evidencia vinculada. | Referencia y descripción | — | O |
| A14 | **Nombre visible del alcance:** Etiqueta legible que acompaña una referencia de empresa o instalación. | Alcance identificado; Tipo de objeto y contexto de etiqueta. | Texto | — | OP |
| A15 | **Momentos de registro y comunicación:** Fechas reales de anotación y transmisión, separando envío y recepción si constan. | Aporte y versión; T3; T4 envío/recepción; precisión y fuente. | Fechas con función temporal | — | C: si ocurrió el acto |
| A16 | **Disponibilidad y sustento del aporte:** Presencia del valor, motivo de ausencia, expectativa temporal y forma de obtención. | Cada campo y versión; Aplicabilidad; T2; medido, informado, calculado o estimado. | Descripción funcional | — | O |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| A01 | T3 al documentar. | V/D/P | Registro de origen | Distinguir copia, aporte y hecho; no duplicar por reenvío. | PV2 |
| A02 | Al identificar el alcance. | V/D/P | Contexto autorizado | No identificar por nombre visible ni suponer acceso. | PV1 |
| A03 | Cuando exista relación organizativa verificable. | V/D/P | Contexto organizativo autorizado | No equiparar Tenant y Company ni inferir cardinalidades. | PV1 |
| A04 | Al identificar dónde corresponde el aporte. | V/D/P | Cartilla o informante | Contrastar pertenencia y nombres repetidos. | PV1 |
| A05 | Al aclarar la organización real. | V/D/P/NA | Organización de la granja | No crear una zona para completar una jerarquía. | PV1 |
| A06 | Al identificar la instalación. | V/D/P | Cartilla o informante | Distinguir galpón de campaña y homónimos. | PV1 |
| A07 | Cuando consten subdivisión y alcance. | V/D/P/NA | Origen del registro | No asignar sección ni población sin sustento. | PV1 |
| A08 | Al vincular aporte y ciclo. | V/D/P | Registro de campaña | La misma instalación puede alojar otra campaña después. | PV1 |
| A09 | Cuando el origen permite identificarla. | V/D/P/NA según contexto | Constancia o fuente del dato | Sin desglose no repartir datos ni crear otra campaña. | PV1 |
| A10 | Al establecer período productivo. | V/D/P | Fecha declarada y contexto | Confirmar jornada sin tomar automáticamente la de envío. | PV3 |
| A11 | Desde el evento o al conocer su momento. | V/D/P; acto no ocurrido explícito | Anotación original o relato | Distinguir intervalo diario de hora exacta y acto no ocurrido. | PV3 |
| A12 | Al documentar quién aportó. | V/D/P | Procedencia autorizada | Función declarada no prueba identidad ni autoridad de cierre. | PV2 |
| A13 | Al documentar contenido o referencia inaccesible. | V/D/P | Cartilla, archivo o comunicación autorizados | Referencia a archivo no implica acceso; conservar dudas. | PV2 |
| A14 | Cuando conste el nombre utilizado. | V/D/P | Rotulación o documento autorizado | Coincidencia de nombres no prueba identidad. | PV1 |
| A15 | Al registrar, transmitir o conocer cada momento. | V/D/P/NA si no hubo comunicación | Anotación y referencia del canal | No retrofechar registro ni presentar recepción como revisión. | PV3 |
| A16 | Al documentar lo conocido; T2 exacto puede faltar. | V/D/P; detallar motivo | Fuente o constancia del faltante | Aplicar sección 6; null solo no explica la ausencia. | PV3 |

### 5.2. B — Población

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| B01 | **Ingresos de aves de origen:** Aves recibidas de origen en el período; B06 separa traslados de entrada. | Campaña y recepción; Sexo si consta, partida atribuible, período. | Número entero no negativo | aves | C: ante ingreso representado |
| B02 | **Ingresos de origen acumulados:** Suma de ingresos de origen hasta un corte, distinta de población viva actual. | Campaña; Sexo o total sin desglose, corte y cobertura. | Número calculado | aves | C: con base suficiente |
| B03 | **Mortalidad diaria:** Muertes observadas o recuento del período con alcance identificado. | Campaña, galpón o sección; Sexo si consta; partida solo con evidencia. | Número entero no negativo | aves | PV; C al informar recuento |
| B04 | **Mortalidad acumulada:** Acumulación sustentada de mortalidad hasta un corte. | Mismo ámbito de B03; Sexo o total, corte, cobertura y versión. | Número calculado o informado identificado | aves | C: con base suficiente |
| B05 | **Descarte:** Retiro por criterio autorizado, con causa y destino por distinguir. | Ámbito del retiro; Sexo si consta, motivo, destino y período. | Número entero no negativo | aves | C: si se comunica retiro |
| B06 | **Traslado de entrada:** Aves trasladadas desde otro ámbito al de este reporte. | Ámbito de destino; Origen, sexo si consta, momento y referencia del traslado. | Número entero no negativo | aves | C: ante traslado representado |
| B07 | **Traslado de salida:** Aves trasladadas desde este ámbito a otro identificado. | Ámbito de origen; Destino, sexo si consta, momento y referencia del traslado. | Número entero no negativo | aves | C: ante traslado representado |
| B08 | **Salidas por otras causas:** Retiro físico por venta u otra causa, sin repetir B03/B05/B07. | Ámbito de salida; Causa, destino, sexo si consta y período. | Número entero no negativo | aves | C: ante salida representada |
| B09 | **Saldo previo del período:** Población sustentada al inicio del intervalo de balance. | Ámbito del balance; Sexo o total sin desglose, instante inicial. | Número entero no negativo | aves | C: para calcular saldo |
| B10 | **Saldo poblacional calculable:** Resultado de saldo previo y movimientos completos del mismo ámbito/período. | Ámbito del balance; Sexo o total, corte, cobertura y versión. | Número calculado | aves | C: solo con datos suficientes |
| B11 | **Población observada:** Recuento de aves presentes en un momento, separado del saldo calculado. | Ámbito del recuento; Sexo si consta, momento y método. | Número entero no negativo | aves | PV |
| B12 | **Ajuste justificado de población:** Variación motivada del balance que no repite otro movimiento. | Ámbito del balance; Signo, causa, período y vínculo revisado. | Número entero con signo | aves | C: si existe ajuste autorizado |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| B01 | Tras recepción y recuento; T2 puede ser posterior. | V/D/P | Constancia de recepción | Recepción, partida y consolidado no son tres ingresos. | PV4 |
| B02 | Con ingresos y versiones compatibles disponibles. | V/D/P | B01 y fuentes | No sumar acumulado con ingresos ya incluidos. | PV4 |
| B03 | Tras observación/recuento; distinguir período parcial de completo. | V/D/P; NM solo con constancia | Cartilla o recuento comunicado | Cero requiere sustento; no sustituir descarte ni repartir sin desglose. | PV4 |
| B04 | Con cobertura compatible o acumulado documentado. | V/D/P | B03 o fuente del acumulado informado | Subtotal conocido no es acumulado completo; no sumar versiones. | PV4 |
| B05 | Cuando se conoce y clasifica el retiro. | V/D/P | Constancia del retiro | Confirmar significado local; no contar también la misma salida. | PV4 |
| B06 | Al conocer recepción y alcance. | V/D/P | Constancia de traslado | No duplicar como B01 ni al consolidar ambos ámbitos. | PV4 |
| B07 | Al conocer salida y destino. | V/D/P | Constancia de traslado | Relacionar perspectivas sin confundir traslado con venta. | PV4 |
| B08 | Cuando consten cantidad y causa. | V/D/P | Constancia de salida | Salida no prueba cobro ni cierre; revisar solapamientos. | PV4 |
| B09 | Con recuento o saldo previo sustentado. | V/D/P | Recuento o balance anterior | No añadir otra vez población inicial e ingresos ya incluidos. | PV4 |
| B10 | Cuando estén disponibles los componentes pertinentes. | V/D/P | B01 y B03–B09; B12 si aplica | Faltante pertinente impide saldo exacto; no atribuirlo a partidas. | PV4 |
| B11 | Tras recuento documentado. | V/D/P/NM | Recuento de población | Contrastar sin reemplazar balance ni convertir diferencia en ajuste. | PV4 |
| B12 | Al documentar motivo, fuente y autorización. | V/D/P | Antecedente y revisión | Una corrección no crea automáticamente otro movimiento. | PV4 |

### 5.3. C — Alimentación

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| C01 | **Consumo de alimento informado:** Cantidad atribuida al uso efectivo de alimento durante un período. | Ámbito consumidor; Recurso, período, sexo/partida si constan, naturaleza del dato. | Número no negativo | Unidad original C02 | PV; C al aportar consumo |
| C02 | **Unidad original de alimento:** Unidad en que se comunica cada cantidad de alimento. | Cada cantidad C01/C06/C07; Magnitud y referencia de saco, si procede. | Selección descriptiva | kg, g, saco u otra declarada | C: con cantidad o expectativa conocida |
| C03 | **Período del consumo de alimento:** Intervalo de uso al que se atribuye C01. | Consumo de alimento; Inicio, fin y fecha operativa. | Intervalo | — | C: con aporte de consumo |
| C04 | **Método de determinación de alimento:** Cómo se obtuvo la cantidad y supuestos de cálculo o estimación. | Aporte de alimento; Medido, informado, calculado o estimado; cobertura. | Texto o referencia | — | C: para interpretar cantidad |
| C05 | **Peso aplicable por saco:** Masa por saco sustentada para esta cantidad y contexto, si se convierte. | Cantidad en sacos; Producto/presentación, origen y vigencia. | Número positivo si conocido | kg/saco | C: para convertir sacos a kg |
| C06 | **Alimento despachado:** Cantidad enviada desde origen a destino, distinta de consumo o entrega acreditada. | Envío de alimento; Origen, destino, período y unidad original. | Número no negativo | Unidad original C02 | C: si se registra despacho |
| C07 | **Alimento entregado:** Cantidad cuya entrega se comunica, conservando fuente y revisión. | Entrega al destino; Destino, período y unidad original. | Número no negativo | Unidad original C02 | C: si se registra entrega |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| C01 | T2 según método; puede ser después de la jornada. | V/D/P; NM si consta | Cartilla, recuento o balance informado | Medido, informado, calculado y estimado no significan confirmado. | PV5 |
| C02 | Cuando conste la expresión original. | V/D/P | Fuente de la cantidad | Unidad esperada sin cantidad no vuelve disponible el consumo. | PV5 |
| C03 | Cuando se identifica jornada o intervalo real. | V/D/P | Fuente del consumo | No usar período del despacho ni hora de envío. | PV3 |
| C04 | Al documentar obtención o pedir aclaración. | V/D/P | Responsable y antecedente | Describir un método no certifica consumo efectivo. | PV5 |
| C05 | Con peso documentado y aplicable. | V/D/P/NA | Especificación o verificación autorizada | Sin peso universal supuesto; en kg directos puede no aplicar. | PV5 |
| C06 | Cuando se documenta el envío. | V/D/P | Constancia de despacho | No añadir a consumo ni inferir recepción física. | PV5 |
| C07 | Al conocer entrega declarada o verificada. | V/D/P | Constancia de entrega | Entrega, inventario y consumo son hechos distintos. | PV5 |

### 5.4. D — Agua

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| D01 | **Consumo de agua:** Volumen usado durante un intervalo identificado. | Ámbito abastecido; Período, punto, método y cobertura. | Número no negativo | Unidad original D04 | PV; C al aportar consumo |
| D02 | **Lectura inicial de agua:** Valor acumulativo del medidor al inicio del intervalo. | Medidor y punto; Momento, escala y unidad original. | Número de lectura | Unidad original D04 | C: si se usa este método |
| D03 | **Lectura final de agua:** Valor acumulativo del mismo medidor al final del intervalo. | Medidor y punto; Momento, escala, reinicio o recambio conocidos. | Número de lectura | Unidad original D04 | C: si se usa este método |
| D04 | **Unidad de agua:** Unidad declarada de consumo o lectura; pulsos no equivalen por sí solos a volumen. | Cada cantidad o lectura; Magnitud, escala y factor si corresponde. | Selección descriptiva | L, m³ u otra declarada | C: con cantidad o lectura |
| D05 | **Período de medición de agua:** Intervalo entre lecturas o de consumo observado. | Consumo o medidor; Inicio, fin y fecha operativa. | Intervalo | — | C: con aporte de agua |
| D06 | **Punto de medición de agua:** Lugar o circuito al que corresponde lectura o consumo. | Punto y ámbito abastecido; Granja/galpón/sección si constan. | Referencia y descripción | — | C: con medición |
| D07 | **Medidor y método de agua:** Instrumento o método utilizado y sus limitaciones conocidas. | Medición o par de lecturas; Identidad del medidor, escala y continuidad. | Referencia y texto | — | C: para interpretar aporte |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| D01 | Tras medición o cálculo sustentado del intervalo. | V/D/P/NM | Medición o lecturas compatibles | Lectura acumulativa no es consumo; conservar incertidumbre. | PV5 |
| D02 | Al leer o documentar inicio. | V/D/P/NM | Lectura del medidor | Confirmar medidor y escala; no tratar como volumen diario. | PV5 |
| D03 | Al leer o documentar final. | V/D/P/NM | Lectura del medidor | Sin continuidad comprobada no restar automáticamente D02. | PV5 |
| D04 | Cuando conste en fuente o instrumento. | V/D/P | Fuente o escala del medidor | Conservar original; factor desconocido impide conversión. | PV5 |
| D05 | Cuando consten límites o incertidumbre. | V/D/P | Registro de lecturas | No suponer que una lectura representa jornada completa. | PV3 |
| D06 | Al contextualizar la medición. | V/D/P | Registro del punto | Medidor compartido no permite repartir entre galpones sin base. | PV1 |
| D07 | Al documentar método y continuidad. | V/D/P | Medidor o responsable | Reinicio, recambio o factor pendiente requieren revisión. | PV5 |

### 5.5. E — Condiciones ambientales

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| E01 | **Temperatura ambiental:** Temperatura del entorno en lugar y momento o intervalo definidos. | Punto ambiental; Puntual o resumen explícito, momento/período y método. | Número | °C u otra declarada | PV |
| E02 | **Humedad relativa:** Lectura de humedad relativa del aire con contexto. | Punto ambiental; Momento/período, método y carácter puntual/resumen. | Número | % de humedad relativa | PV |
| E03 | **Velocidad del aire:** Magnitud de movimiento del aire donde se observa, cuando se mida. | Punto ambiental; Ubicación, momento/período, método y carácter puntual/resumen. | Número | m/s u otra declarada | PV |
| E04 | **Punto ambiental:** Ubicación descriptiva de la observación dentro de su ámbito. | Punto de observación; Granja, galpón y sección si corresponde. | Referencia o texto | — | C: con medición ambiental |
| E05 | **Momento ambiental:** Instante o intervalo de lectura y precisión conocida. | Medición ambiental; T1 y fuente temporal. | Fecha o intervalo | — | C: con medición ambiental |
| E06 | **Instrumento o método ambiental:** Forma de obtener valor y producir resumen, si se declara. | Medición o resumen ambiental; Instrumento, cobertura de muestras y limitaciones. | Referencia y texto | — | C: para interpretar medición |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| E01 | Al leer o disponer de resumen sustentado. | V/D/P/NM/NA según contexto | Lectura o registro ambiental | Punto no es promedio diario; verificar escala sin autocorregir. | PV5 |
| E02 | Al obtener lectura contextualizada. | V/D/P/NM/NA según contexto | Instrumento o registro ambiental | No confundir escala ni lectura aislada con jornada completa. | PV5 |
| E03 | Al obtener medición pertinente. | V/D/P/NM/NA según contexto | Instrumento o anotación autorizada | No extender una lectura a toda la instalación. | PV5 |
| E04 | Al ubicar la lectura. | V/D/P | Responsable del registro | Describir sin coordenadas operativas privadas. | PV1 |
| E05 | Al observar o conocer su momento. | V/D/P; acto no ocurrido explícito | Anotación de lectura | No reemplazar por T3 o T4 ni inventar horas. | PV3 |
| E06 | Al describir lectura o resumen. | V/D/P | Instrumento y responsable | Promedio requiere período y muestras identificables. | PV5 |

### 5.6. F — Mediciones productivas

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| F01 | **Peso registrado de aves:** Masa individual o neta de muestra, indicando cuál se registró. | Ave o muestra; Partida/sexo si constan, momento, punto y modalidad. | Número no negativo | g o kg, conservando original | PV |
| F02 | **Tamaño de muestra:** Número real de aves pesadas o evaluadas en una medición específica. | Muestra concreta; Medición, partida/sexo si constan y cobertura. | Número entero no negativo | aves de la muestra | C: con muestreo |
| F03 | **Fecha de nacimiento de partida:** Referencia sustentada de nacimiento, distinta de recepción e inicio. | Partida; Origen y precisión conocida. | Fecha o intervalo | — | C: para edad basada en nacimiento |
| F04 | **Edad o referencia temporal verificable:** Edad con referencia inicial, observación y convención de cómputo sustentadas. | Partida o muestra; Nacimiento/otra referencia declarada, fecha y convención. | Número calculado o referencia temporal | días u horas declarados | C: al contextualizar por edad |
| F05 | **Peso promedio de muestra:** Media basada en masa neta y aves pesadas o mediciones individuales compatibles. | Muestra de pesaje; Sexo/partida si constan, método, período y versión. | Número calculado | g/ave o kg/ave declarados | C: con base suficiente |
| F06 | **Temperatura cloacal:** Medición corporal puntual contextualizada, si corresponde. | Ave o muestra; Partida/edad si verificables, momento y método. | Número | °C u otra declarada | PV |
| F07 | **pH del agua:** Resultado de medición de pH en punto y momento identificados. | Punto de agua; Momento y método. | Número | adimensional | PV |
| F08 | **Buche: categorías y recuentos:** Aves de una muestra asignadas a categorías descriptivas. | Muestra de evaluación; Partida/edad si constan, método, momento y categorías. | Categorías y enteros no negativos | aves por categoría | PV |
| F09 | **Buche: porcentajes de muestra:** Proporciones por categoría respecto de denominador explícito. | Misma muestra de F08; Categoría, denominador y cobertura. | Número calculado | % de la muestra declarada | C: con base suficiente |
| F10 | **Otras mediciones propuestas:** Variable adicional por validar, descrita antes de interpretarse. | Ámbito declarado; Nombre, método, unidad, momento, muestra si aplica. | Según magnitud declarada | Por identificar; aclarar antes de interpretar valor | PV |
| F11 | **Método y contexto de evaluación:** Descripción de muestreo, obtención y limitaciones de medición productiva. | Medición o muestra; Punto, momento, selección y referencia temporal. | Texto o referencia | — | C: para interpretar medición |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| F01 | Tras pesaje documentado. | V/D/P/NM/NA según contexto | Registro de pesaje | No mezclar masa individual, neta de grupo y promedio. | PV6 |
| F02 | Al documentar aves incluidas, no población del galpón. | V/D/P | Registro de evaluación | Denominador cero/desconocido impide promedio o porcentaje calculado. | PV6 |
| F03 | Cuando exista referencia verificable. | V/D/P | Antecedente autorizado de partida | No completar por recepción ni copiar de otra partida. | PV6 |
| F04 | Al conocer referencia, momento y convención. | V/D/P | F03 y contexto temporal | Tiempo desde recepción no es automáticamente edad; no edad única entre partidas. | PV6 |
| F05 | Con masa conocida y denominador positivo compatibles. | V/D/P | F01/F02 y método | No dividir por población alojada ni sumar promedios sin ponderar. | PV6 |
| F06 | Tras medición; sin ella no existe valor. | V/D/P/NM/NA según contexto | Registro de medición | No inferir del ambiente ni emitir diagnóstico. | PV6 |
| F07 | Tras lectura correspondiente. | V/D/P/NM/NA según contexto | Registro del punto o instrumento | No inferir calidad sanitaria ni valores faltantes. | PV6 |
| F08 | Tras evaluación y definición del universo. | V/D/P/NM/NA según contexto | Registro de evaluación | Aclarar exclusividad, cobertura y no evaluables antes de sumar. | PV6 |
| F09 | Con recuentos y denominador positivo conocidos. | V/D/P | F08 y F02 | 100 % solo con categorías exclusivas y exhaustivas; no extrapolar. | PV6 |
| F10 | Según variable y método que se validen. | V/D/P/NM/NA según contexto | Fuente autorizada de medición | No habilita catálogo técnico ni obligación nueva. | PV6 |
| F11 | Al documentar procedimiento conocido. | V/D/P | Responsable y registro | No presumir validados frecuencia, representatividad o pertinencia. | PV6 |

### 5.7. G — Incidencias y observaciones

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| G01 | **Descripción de incidencia u observación:** Relato o descripción observada, separando inferencias. | Incidencia; Alcance, momento y origen. | Texto | — | C: ante incidencia comunicada |
| G02 | **Categoría provisional de incidencia:** Etiqueta descriptiva de trabajo, sin taxonomía aprobada. | Incidencia; Motivo de clasificación. | Selección provisional o texto | — | OP |
| G03 | **Momento de incidencia:** Instante o intervalo al que se refiere lo comunicado. | Incidencia; T1 y precisión conocida. | Fecha o intervalo | — | C: ante incidencia representada |
| G04 | **Alcance de incidencia:** Ámbitos afectados conocidos, referidos a A02–A09 sin generalizar. | Incidencia; Instalación, campaña y partida si atribuible. | Referencias y descripción | — | C: ante incidencia representada |
| G05 | **Procedencia de incidencia:** A13 aplicado al relato o evidencia concreta de la incidencia. | Incidencia y aporte; Autor, observador, canal, copia y referencias. | Referencia y texto | — | C: ante incidencia representada |
| G06 | **Responsable de comunicación:** Función que transmite, distinta de autor, registrador o revisor. | Comunicación; Remitente, destinatario y T4 si constan. | Referencia a función | — | C: si se comunicó |
| G07 | **Evidencias relacionadas:** Referencias permitidas a contenidos asociados y accesibilidad. | Incidencia o aporte; Tipo de soporte, origen, relación y dudas. | Referencias | — | OP; C al citar evidencia |
| G08 | **Revisión de incidencia:** Comprobación de lo recibido con alcance y dudas explícitos. | Incidencia y versión; Responsable, T5 y hallazgos. | Descripción y referencias | — | C: cuando haya revisión |
| G09 | **Seguimiento pendiente:** Preguntas o acciones pendientes y función responsable propuesta. | Incidencia; Motivo, alcance y disponibilidad esperada. | Texto y referencias | — | C: si hay pendientes conocidos |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| G01 | Al observar o recibir relato identificado. | V/D/P | Observador o declaración identificada | No convertir opinión o instrucción en diagnóstico o hecho ejecutado. | PV8 |
| G02 | Cuando se describa sin inventar causa. | V/D/P | Descripción G01 | Clasificación no prueba causa ni gravedad sanitaria. | PV8 |
| G03 | Cuando la fuente permita situarla. | V/D/P | Observación o relato original | Conservar momento desconocido sin copiar hora del mensaje. | PV3 |
| G04 | Al identificar afectados o incertidumbre. | V/D/P | Fuente del hallazgo | Distinguir información de varios galpones. | PV1 |
| G05 | Al documentar procedencia. | V/D/P | Origen autorizado | Reenvío no prueba autoría ni constituye otra incidencia. | PV2 |
| G06 | Al conocer envío y procedencia. | V/D/P/NA si no hubo envío | Referencia autorizada de comunicación | Identidad o función aparente no acredita autoridad. | PV2 |
| G07 | Al disponer de contenido o referencia declarada. | V/D/P/NA | Cartilla, foto, texto, audio, video o documento autorizado | Distinguir no descargado, dañado, ausente y referencia inaccesible. | PV2 |
| G08 | Al efectuarse revisión conocida. | V/D/P; revisión no realizada | Revisor y constancia | Revisada no equivale a resuelta ni a diagnóstico confirmado. | PV8 |
| G09 | Al documentar necesidades de seguimiento. | V/D/P/NA según contexto | Revisión de incidencia | Cierre diario no resuelve ni autoriza intervención por sí solo. | PV8 |

### 5.8. H — Revisión y cierre

**Vista de significado y contexto.**

| ID | Campo y definición | Ámbito y dimensiones | Tipo conceptual | Unidad | Obligatoriedad propuesta |
|---|---|---|---|---|---|
| H01 | **Responsable de revisión:** Función que revisó y alcance de su autoridad conocida. | Aporte o reporte; Versión y alcance revisado. | Referencia a función | — | C: si hubo revisión |
| H02 | **Momentos de revisión:** Constancias de cada revisión efectiva, incluso repetida tras corregir. | Aporte o reporte; T5, versión, precisión y función. | Fechas | — | C: si hubo revisión |
| H03 | **Campos pendientes:** Campos sin información suficiente, motivo y efecto por acordar. | Reporte y campo; Aplicabilidad, obligatoriedad, disponibilidad y versión. | Referencias y descripción | — | C: si hay pendientes conocidos |
| H04 | **Inconsistencias detectadas:** Diferencias de fuentes, unidades, ámbitos, cálculos o versiones por aclarar. | Reporte y aportes; Campos afectados y fuentes en conflicto. | Texto y referencias | — | C: si se detectan |
| H05 | **Correcciones y aclaraciones:** Vínculo entre aporte previo y nuevo, conservando original, cambio, motivo y responsable. | Campo y versión; Original, nuevo aporte, T6 y comunicación/revisión posteriores. | Referencia y contenido documentado | La del campo corregido | C: si ocurre cambio o aclaración |
| H06 | **Descripción conceptual del reporte:** Situación de recopilación, completitud, revisión y aceptación coexistentes. | Reporte y versión; Alcance, fecha y campos esperados. | Descripción funcional | — | C: al comunicar situación |
| H07 | **Aceptación de cierre diario:** Decisión de función autorizada según condiciones acordadas, si existe. | Reporte y versión aceptada; Alcance, pendientes tratados y fundamento. | Decisión y referencias | — | C: si existe decisión |
| H08 | **Momento de cierre diario:** Momento efectivo de aceptación, separado del cierre de campaña. | Reporte y versión; T7 y precisión conocida. | Fecha | — | C: si hay cierre aceptado |
| H09 | **Observaciones posteriores:** Información después de revisión o cierre vinculada al original. | Reporte o aporte previo; Momento real, motivo, fuente y revisión solicitada. | Texto y referencias | — | OP; C si se aporta después |

**Vista de disponibilidad, procedencia y control.**

| ID | Disponibilidad | Ausencia | Fuente posible | Revisión necesaria | Validación pendiente |
|---|---|---|---|---|---|
| H01 | Al documentar quién revisó. | V/D/P; acto no realizado | Constancia del revisor | No suponer que registrador, veterinario o remitente aceptan cierre. | PV7 |
| H02 | Al revisar o conocer constancia verificable. | V/D/P; acto no realizado | Registro de revisión | No perder revisiones previas ni inferirlas de recepción. | PV3 |
| H03 | Al reconocer falta o incertidumbre. | V/D/P; lista no revisada no prueba ausencia de pendientes | A16 y revisión | No rellenar con cero ni dar por no bloqueante sin acuerdo. | PV7 |
| H04 | Al comparar información disponible. | V/D/P | Fuentes y revisión | No elegir automáticamente última cifra ni borrar discrepancia. | PV7 |
| H05 | T6 al documentar; disponibilidad propia de cada versión. | V/D/P/NA si no hubo cambio | Original y rectificación autorizada | Aclaración puede mantener valor; no sumar versiones ni retrotraer T2. | PV7 |
| H06 | Al describir situación y pendientes. | V/D/P | Recopilación y revisión | Sin catálogo exclusivo; revisado no significa cerrado. | PV7 |
| H07 | Cuando consten decisión y autoridad. | V/D/P; cierre no realizado | Función y constancia de aceptación | Sin mínimos definitivos ni cierre por completado automático. | PV7 |
| H08 | Al documentar cierre efectivamente ocurrido. | V/D/P; cierre no realizado | Constancia H07 | T7 vacío no es hora cero ni prueba campaña cerrada. | PV3 |
| H09 | Al recibir aporte con disponibilidad propia. | V/D/P/NA | Nueva comunicación autorizada | Sin reapertura o sustitución automática del cierre; preservar historia. | PV7 |

<a id="disponibilidad"></a>

## 6. Disponibilidad y ausencia: dimensiones que pueden coexistir

Las siete denominaciones de la solicitud no describen una sola variable. Se separan aplicabilidad, presencia, motivo de ausencia, expectativa temporal, forma de obtención y revisión. Son preguntas funcionales, sin seleccionar representación técnica ni catálogo definitivo.

| Denominación | Qué describe | Qué no demuestra |
|---|---|---|
| Vacío o ausente | No hay valor registrado en ese aporte | No prueba que no se midió ni que el hecho valga cero |
| No medido | Consta que no se realizó la medición o recuento correspondiente | No es cero; conocer el motivo no aporta cifra |
| Desconocido | Falta información suficiente para establecer valor o contexto | No equivale a no medido; podría existir un registro no localizado |
| Pendiente de disponibilidad | Expectativa sustentada de conocer el dato después, con motivo y momento esperado si consta | No promete que llegará ni implica medición ya realizada |
| No aplica | El campo no corresponde a este contexto y se explicita por qué | No oculta un obligatorio faltante |
| Cero medido o confirmado | Valor presente igual a cero, con recuento/medición sustentados o aceptación autorizada | Teclear cero no prueba observación; medir y confirmar son actos distintos |
| Valor registrado | Hay cifra o contenido informado, medido, calculado o estimado con origen identificado | No confirma por sí mismo el hecho ni elimina revisión pendiente |

Puede haber aplicabilidad afirmada, valor ausente, motivo desconocido y disponibilidad pendiente a la vez. Si consta que no se midió y se propone otro muestreo posterior, el nuevo dato tendrá su propio T1: no recrea retrospectivamente la medición omitida. Una cifra informada puede estar presente y pendiente de revisión; se conserva como candidato, sin borrarla ni presentarla como cero confirmado.

Para un valor calculado se documentan entradas, cobertura y limitaciones. Si faltan entradas pertinentes, el resultado exacto queda desconocido, aunque exista un subtotal conocido. «Informado» describe procedencia; «calculado», obtención; «confirmado», aceptación. Pueden coexistir en dimensiones distintas.

Null en P8 no distingue por sí solo desconocido, no realizado o no aplicable: necesita motivos y contexto. No se establece cómo persistirlos. Las fechas de actos no ocurridos se describen como no realizadas: no se inventa instante cero ni se llama no medido a un cierre inexistente.

## 7. Validaciones conceptuales

Se distinguen tres niveles: **estructural**, si la información es interpretable; **matemático**, si relaciones y unidades son consistentes; y **confirmación del hecho**, si una función autorizada acepta lo informado tras revisar su sustento. Superar los dos primeros no confirma el tercero.

| Ref. | Nivel y comprobación | Límite de interpretación |
|---|---|---|
| VC01 | Estructural: ámbito, fecha/período, fuente y versión o pendiente explícito | Nombre coincidente no acredita identidad ni acceso |
| VC02 | Estructural: cantidades de aves con recuento válido como enteros no negativos; ajuste firmado separado y justificado | Cantidad negativa comunicada requiere aclaración, no transformarla automáticamente en otra baja |
| VC03 | Estructural: temperatura con unidad y contexto; consumo con unidad y período | Valor atípico requiere revisar escala, instrumento, fuente y contexto, sin rechazo automático |
| VC04 | Matemático: movimientos distintos y compatibles por ámbito, período, sexo y versión | No sumar detalle, acumulado, total y corrección como hechos distintos |
| VC05 | Matemático: saldo previo + ingresos de origen + traslados de entrada − mortalidad − descarte − traslados de salida − otras salidas + ajuste firmado, para un período con todos los componentes sustentados | B01 excluye B06; causas de salida disjuntas. Corrección no es por sí misma B12. Sin cobertura no hay saldo exacto; un saldo negativo requiere revisión, sin truncarlo a cero |
| VC06 | Matemático: acumular con cobertura completa y versión pertinente revisada | Falta de hembras impide acumulado y total exactos aunque machos sean calculables; sin sexo no repartir |
| VC07 | Matemático: conservar unidad de alimento; sacos × kg/saco con factor positivo documentado y aplicable | Sin peso aplicable, sacos y kg separados; despacho/entrega no son consumo |
| VC08 | Matemático: consumo de agua por diferencia solo entre lecturas comparables del mismo medidor, unidad/escala y período con continuidad comprobada | Reinicio, recambio o conversión pendiente impiden resta automática; acumulado no es consumo |
| VC09 | Matemático: peso promedio con masa neta y aves realmente pesadas, denominador conocido mayor que cero y unidades compatibles | No usar población alojada ni promediar medias sin tamaños |
| VC10 | Matemático: porcentaje con numerador y universo explícitos y denominador positivo | 100 % solo en partición completa y exclusiva; incluir no evaluables si pertenecen al universo |
| VC11 | Temporal: fecha operativa independiente de T3/T4; edad por partida con referencia y convención verificables | Recepción no sustituye nacimiento; varias partidas no implican edad única |
| VC12 | Confirmación: evidencia, autoría, alcance y autoridad, manteniendo correcciones y pendientes | Lectura o revisión parcial no confirman todos los campos ni autorizan cierre |

Son comprobaciones de análisis, no validadores ejecutables. No se fijan intervalos sanitarios, umbrales oficiales ni rechazo automático. Una suma correcta puede partir de un hecho incorrecto: aceptarlo requiere revisión de origen.

## 8. Temporalidad y versiones

Referencia documental: **America/Lima**. Conservar precisión real —fecha, hora conocida o intervalo— sin inventar horas observadas ni formatos de persistencia. El corte de jornada sigue por validar.

| Referencia | Campo o contexto | Tratamiento conceptual |
|---|---|---|
| Fecha operativa | A10 y períodos A11/C03/D05 | Jornada productiva; comunicar de noche no la cambia automáticamente |
| T1 — Evento | A11, E05, G03 y momento de mediciones F | Hecho o intervalo observado, distinto de nacimiento, recepción o inicio |
| T2 — Disponibilidad | A16 y vista de control de cada campo | Cuándo fue utilizable esa versión, no cuándo llegó cualquier mensaje |
| T3 — Registro | A15 | Momento real de documentación, incluso tardío |
| T4 — Comunicación | A15/G06 y procedencia A13/G05 | Envío y recepción separados si constan; no implican revisión |
| T5 — Revisión | H01/H02 y G08 | Puede repetirse y ser parcial |
| T6 — Corrección | H05 | Original, nuevo aporte, motivo y responsable; disponibilidad propia |
| T7 — Cierre | H07/H08 | Aceptación efectiva de reporte y versión, no fin de campaña |

La ausencia de T6 puede significar que no hubo corrección; la de T7, cierre no realizado. No son valores productivos cero. Los aportes pueden conocerse en momentos diferentes y tener varias versiones. Se mantienen referencias previas; aclarar no implica cambiar cifra. No hay reapertura automática tras cierre ni secuencia técnica única aprobada.

## 9. Completitud y revisión

Primero se identifica qué información se esperaba realmente en ese contexto. No se calcula un porcentaje de completitud ni se decide qué pendientes autorizan cierre.

| Situación de un campo | Efecto conceptual |
|---|---|
| Inexistente en el conjunto acordado para ese reporte | No exigirlo solo porque sea imaginable; distinto de una casilla existente vacía |
| Opcional | Ausencia por sí sola no implica incompletitud |
| Obligatorio para el contexto | Valor requerido faltante queda pendiente; registrar motivo no lo vuelve disponible |
| Necesidad por validar | No tratar como obligatorio aprobado ni como ausencia irrelevante sin decisión |
| No aplicable | Justificar contexto; no encubrir un requisito aplicable |
| Presente sin revisión suficiente | Hay contenido, sin confirmar exactitud o aceptación |

| Denominación del reporte | Qué describe | Qué puede coexistir |
|---|---|---|
| Iniciado | Comenzó recopilación para alcance y jornada | Pendientes y revisión por realizar |
| Parcial | Falta información esperada o cobertura | Revisado y pendiente de datos |
| Pendiente de datos | Faltan aportes o se espera disponibilidad posterior | Parte de los datos revisada |
| Pendiente de revisión | Queda contenido o contexto por comprobar | Valores presentes y reporte parcial |
| Revisado | Se comprobó un alcance explícito y se registraron hallazgos | Faltantes, inconsistencias y cierre pendiente |
| Cerrado | Existe aceptación según condiciones y autoridad acordadas | Solo pendientes admitidos expresamente por ese acuerdo |

Son dimensiones y descripciones, no estados técnicos excluyentes ni transiciones implementadas. Ningún cero de relleno completa un reporte. Sin criterios y autoridad acordados no se declara cierre. Cerrar una jornada no cierra la campaña ni resuelve incidencias, y no habilita cambios sin revisión autorizada.

## 10. Ejemplos completamente sintéticos

**X01–X11 son ficticios.** Los que citan P8 usan exclusivamente su fixture público inventado; X07, X08 y X11 son independientes y no completan ni modifican P8. No hay mediciones ni datos históricos reales.

| ID | Ejemplo y campos | Lectura correcta |
|---|---|---|
| X01 | P8, RD-D: B03 machos = 0, expresamente declarado en el ejemplo | Valor presente con sustento ficticio, no ausencia; no demuestra recuento real |
| X02 | P8, RD-C: B03 hembras null, motivo recuento no disponible | Desconocido; no se sabe que no se midió, no rellenar cero. Acumulado exacto sigue faltando después |
| X03 | P8, ME-TC: F06 null porque no se realizó medición | No medido. T3 a las 11:20 no es T1 observado ni temperatura cero |
| X04 | P8, RD-D: C01 = 121.5 kg, C05 null con motivo no aplica | Conversión por saco no pertinente para esta cantidad directa en kg |
| X05 | P8, RD-A: C01 = 2.75 sacos; A10 = 2034-07-10, T2 el 11 a las 00:10, T3 00:15, T4 00:25 | Disponible después de jornada; fecha operativa sigue siendo del 10 |
| X06 | P8, CO-SIN: H05 conserva 4 → 3 hembras de RD-B y sus versiones; T6 el 12 a las 07:00 | Valor 3 disponible en rectificación, no en T2 inicial; no sumar 4 + 3 |
| X07 | Caso independiente: «Ejemplo Alba», nacimiento 2035-03-01; «Ejemplo Río», 2035-03-03; observación 2035-03-06 | Convención ficticia día cero y resta de fechas: F04 = 5 y 3 días; sin edad única ni convención productiva aprobada |
| X08 | Caso independiente: B03 = 9 aves de una campaña, sin sexo ni partida identificados | Total informado sin desglose; machos/hembras y atribución desconocidos. No inventar distribución ni duplicar total |
| X09 | P8, C01: 2.75 + 3.25 = 6 sacos con C05 desconocido; además 121.5 kg y consumo faltante RD-C | Subtotales separados, sin conversión ni cobertura completa; no añadir 5 sacos despachados |
| X10 | P8, RD-C: H02 registra revisión a las 06:00; B03 hembras y C01 faltan; H08 sin cierre | Reporte parcial y revisado, con pendientes; no completo ni cerrado |
| X11 | Caso independiente: casilla F07 vacía sin motivo, A14 opcional ausente | F07 demuestra ausencia, no medición no realizada. Falta de etiqueta opcional no vuelve incompleto un contexto bien identificado |

## 11. Compatibilidad conceptual con CG-008

No se transforma el JSON en esquema definitivo ni se añaden campos a P8. El diccionario describe qué se podría documentar; si una fuente carece de un atributo, se conserva esa carencia. Esta correspondencia no certifica completitud del fixture respecto de futuras reglas.

| Característica de P8 | Representación en diccionario | Límite conservado |
|---|---|---|
| Empresa/granja/galpón ficticios y CA-SIN | A02/A04/A06/A08; nombres A14 | A03 pendiente por Tenant–Company sin definir; no etiquetar automáticamente no aplica |
| Sección null y partidas PA-SIN/PB-SIN, recepciones RX-A/RX-B | A07/A09/B01 y ámbitos | No inventar sección ni recepción adicional por repetir totales |
| Poblaciones por sexo y resultados esperados | B01/B02 y B09/B10 bajo supuestos explícitos | Resultados no son ingresos; 2160 solo después de ambas recepciones |
| Mortalidad diaria/acumulada y faltante RD-C | B03/B04 por sexo y cobertura | Saldo total 2141 tras RD-B; después solo machos 1159 calculables bajo supuestos del ejemplo |
| Mortalidad sin atribución a partida | A09 y ámbito B03/B10 | Sin saldo exacto por partida sin nuevas evidencias |
| Nulos con distintos motivos y cero RD-D | A16 y sección 6 | No disponible, no medido, no aplica y acto no ocurrido separados |
| Alimento saco/kg y despacho separado | C01–C06, unidad/período y naturaleza del aporte | Sacos no convertidos, consumo faltante no es cero, despacho no es consumo |
| pH, ambiente y cloacal no medida | E01/E04–E06 y F06/F07/F11 | Valores puntuales; método no validado y faltantes conservados |
| Buche: muestra 16 y categorías 9/4/2/1 | F02/F08/F09/F11 | 56.25/25/12.5/6.25 % sobre esa muestra; sin extrapolar ni diagnosticar |
| Nacimiento de PA-SIN conocido y PB-SIN desconocido | F03/F04 | No completar nacimiento o edad de PB-SIN; X07 es otro caso |
| T1–T7, CO-SIN y cierres pendientes | A10/A11/A15/A16, H01–H08 | T2/T3/T4 iniciales de RD-B pertenecen a versión anterior; RD-C/RD-D sin T7 y campaña sin cierre |
| Autoría o método no completamente descritos | A12/A13, C04 y F11 según aporte | Se admite desconocido; un número no confirma detalles de procedencia |

**La reproducción cuantitativa histórica exacta de CG-008 continúa PENDIENTE.** La compatibilidad utiliza solo datos sintéticos y no cambia el criterio ni el reporte anterior.

## 12. Hipótesis y decisiones pendientes

| Ref. | Qué debe validarse | Reserva |
|---|---|---|
| PV1 | Organización efectiva, identidad, zona/sección, alcance por campaña/partida y desglose por sexo | Sin cardinalidades ni reparto inventados |
| PV2 | Soportes autorizados, autor/remitente/registrador, acceso, conservación y funciones de aporte | Sin datos reales, permisos inferidos ni integración automática |
| PV3 | Corte de jornada, precisión, disponibilidad por campo, fechas y versiones | America/Lima documental, sin persistencia ni horarios universales |
| PV4 | Cobertura de recuentos, ingresos, descarte, traslados, salidas, saldo previo y ajustes | Fórmula condicionada a hechos distintos y datos suficientes |
| PV5 | Unidades, peso aplicable por saco, métodos de alimento/agua, continuidad de medidores e instrumentos | Sin selección de equipos, factores o frecuencias inventados |
| PV6 | Qué medir, cuándo, método, muestras, edad y representatividad | Sin protocolos sanitarios ni objetivos técnicos sin fuente |
| PV7 | Mínimos por contexto, revisión, obligatoriedad, pendientes bloqueantes, aceptación y cambios tras cierre | Sin política definitiva ni máquina de estados |
| PV8 | Categorías de incidencia y funciones de revisión/seguimiento | Relato no es diagnóstico; cierre diario no implica resolución |

No se ejecutan entrevistas ni pilotos. Los acuerdos definitivos y la aceptación de CG-009 corresponden a evaluación externa; no se especifican ni se inician tareas posteriores.
