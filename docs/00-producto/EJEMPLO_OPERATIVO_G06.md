# Avicendia — Ejemplo operativo G06: caso sintético

CG-008 · 17 de octubre de 2026 · **Documentación pública completamente ficticia. No reproduce cantidades históricas ni describe una operación actual.**

## 1. Objetivo y fuentes

Ofrecer un caso reproducible de una campaña de pollos de engorde con dos partidas, ingresos en fechas distintas, mortalidad por sexo, consumo, mediciones parciales y comunicación posterior al evento. El caso acompaña al [fixture JSON sintético](fixtures/G06_SINTETICO.json).

Aplicar el [glosario CG-007](GLOSARIO_DOMINIO.md), los momentos y cierres del [flujo CG-005](FLUJO_DIARIO_PRODUCCION.md) y la separación entre evidencia, interpretación y dato del [inventario CG-006](INVENTARIO_CARTILLAS_MENSAJES.md). No se implementan cálculos del SaaS, entidades, importadores, bases de datos ni servicios.

## 2. Procedencia y restricciones

Se distinguen tres elementos:

- **Referencia histórica:** material local privado que menciona ingresos, mortalidad, alimento y mediciones. Permanece fuera de las ramas públicas. No se reproducen sus cifras, fechas, identificadores, mensajes, archivos ni ubicaciones.
- **Fixture sintético:** identidades, cantidades, fechas y horas inventadas para este ejercicio. No se obtiene escalando cifras reales ni mediante una sustitución reversible. «G06» identifica el encargo y el nombre solicitado del archivo, no el galpón ficticio.
- **Comparación privada:** se inspeccionó localmente la estructura de las referencias sin mostrar sus valores. La reproducción cuantitativa histórica completa no se realizó y permanece pendiente; este caso público no sustituye el criterio original del roadmap.

No se publican evidencias originales, personas, empresas reales, coordenadas o referencias que permitan reconstruir la operación. No se envió material histórico a conectores de publicación ni a servicios externos adicionales. La revisión de separación respecto de la fuente se efectúa localmente; no constituye una validación histórica exacta.

## 3. Organización y convenciones del fixture

Una empresa ficticia «Empresa Sintética» administra «Granja Sintética» y «Galpón Sintético». La única campaña es CA-SIN. PA-SIN y PB-SIN son partidas de esa misma campaña; RX-A y RX-B identifican sus respectivas recepciones.

No se representa sección, zona ni reparto de aves por subdivisión. El campo de sección es null con motivo explícito. Tampoco se resuelve Tenant–Company: su referencia permanece null y fuera del alcance. Las funciones y autorizaciones mencionadas son ficticias.

El JSON es un formato documental mínimo, no el esquema definitivo de la aplicación. Las referencias enlazan casos; los campos de versiones y tiempos no implementan una máquina de estados. **null conserva desconocido, no medido o momento no ocurrido según su motivo; nunca se interpreta automáticamente como cero.**

La fecha operativa y las horas usan **America/Lima**. Todos los días y horarios de 2034 son inventados. Para este fixture se adopta día calendario local, desde 00:00 hasta 00:00 del siguiente día excluido; no se impone ese corte a ninguna granja.

## 4. Partidas, recepciones y población inicial

| Partida / recepción | Nacimiento ficticio | Recepción ficticia | Machos | Hembras | Total |
|---|---|---|---|---|---|
| PA-SIN / RX-A | 2034-07-09 | 2034-07-10, 08:00 | 713 | 587 | 1300 |
| PB-SIN / RX-B | Desconocido | 2034-07-11, hora desconocida | 463 | 397 | 860 |
| Campaña, tras ambos ingresos | No es fecha de nacimiento | Inicio de campaña: 2034-07-10 | 1176 | 984 | 2160 |

RX-A se registra a las 08:20 del día de recepción. RX-B se registra el 11 a las 10:00, sin que ello resuelva la hora del evento. Nacimiento, recepción e inicio de campaña son conceptos distintos; no se completa el nacimiento de PB-SIN por deducción.

Cálculos esperados: 713 + 587 = 1300; 463 + 397 = 860; machos 713 + 463 = 1176; hembras 587 + 397 = 984; total 1300 + 860 = 2160 = 1176 + 984. El total de campaña no es otro ingreso. En el primer día solo ha ingresado PA-SIN: no usar 2160 como población ya alojada ese día.

Las cantidades se toman una sola vez de las partidas. Las recepciones enlazan eventos y las tablas de resultados del JSON son expectativas, no movimientos adicionales.

## 5. Supuestos necesarios para los saldos

Solo dentro del escenario se establece saldo previo cero y ausencia completa de otros ingresos, descartes, traslados, ventas y ajustes durante las cuatro jornadas. Estos ceros son condiciones explícitas del caso, no valores deducidos de filas ausentes. En datos reales habría que demostrar cobertura de todos esos movimientos y del recuento.

Con tales condiciones, para cada sexo: **saldo al corte = ingresos acumulados hasta ese corte − mortalidad acumulada completa**. Si falta recuento de un sexo, su acumulado y saldo exactos quedan desconocidos; tampoco hay saldo total exacto. Con entradas/salidas no verificadas esta simplificación no sería suficiente.

La mortalidad se comunica para campaña y galpón, sin atribución a partida. No se reparte por proporciones de ingreso. Desde la segunda recepción no se pueden presentar saldos exactos por partida con este desglose.

## 6. Mortalidad diaria y acumulada

RD-B contiene la versión corregida: originalmente se comunicaron 4 hembras y se rectificó a 3. La sección 10 conserva ambas referencias. La tabla usa solo el valor vigente.

| Registro / fecha operativa | Machos diarios | Hembras diarias | Total diario | Nota |
|---|---|---|---|---|
| RD-A / 2034-07-10 | 7 | 5 | 12 | Recuento completo del ejemplo |
| RD-B / 2034-07-11 | 4 | 3 | 7 | Versión MO-B-v2, no sumar la anterior |
| RD-C / 2034-07-12 | 6 | Desconocido | Desconocido | Falta recuento de hembras |
| RD-D / 2034-07-13 | 0 | 2 | 2 | Cero explícito de machos; no resuelve el faltante anterior |

| Corte tras registro | Acumulada machos | Acumulada hembras | Acumulada total | Saldo machos | Saldo hembras | Saldo total |
|---|---|---|---|---|---|---|
| RD-A | 7 | 5 | 12 | 706 | 582 | 1288 |
| RD-B | 11 | 8 | 19 | 1165 | 976 | 2141 |
| RD-C | 17 | Desconocido | Desconocido | 1159 | Desconocido | Desconocido |
| RD-D | 17 | Desconocido | Desconocido | 1159 | Desconocido | Desconocido |

RD-A usa ingresos acumulados 713/587, no los de la recepción del día siguiente. RD-B y posteriores usan 1176/984. Por ejemplo: 1176 − (7 + 4) = 1165; 984 − (5 + 3) = 976; 2160 − 19 = 2141.

Los valores de hembras conocidos suman 8 hasta RD-C y 10 hasta RD-D, pero **no son mortalidad acumulada completa** porque falta RD-C. El dato diario posterior no elimina esa incertidumbre. Mortalidad, descarte, traslado y venta no se sustituyen entre sí.

## 7. Consumo de alimento

| Registro | Consumo informado | Unidad original | Disponibilidad y comunicación | Límite |
|---|---|---|---|---|
| RD-A | 2.75 | saco | Madrugada del siguiente día | Peso por saco desconocido |
| RD-B | 3.25 | saco | Madrugada del siguiente día | Peso por saco desconocido |
| RD-C | Desconocido | saco, como unidad esperada | Se comunica que falta el dato | No es cero ni cantidad disponible |
| RD-D | 121.5 | kg | Madrugada del siguiente día | Cantidad expresada directamente en kg |

Los tiempos precisos están en el JSON y se explican en la sección 9. T2 y T4 de RD-C corresponden al reporte parcial, no a un consumo todavía desconocido.

Sumas conocidas por separado: 2.75 + 3.25 = **6 sacos** y **121.5 kg**. Son subtotales de registros disponibles, no consumo completo de las cuatro jornadas. No hay un total común en kg: falta el peso aplicable por saco y falta un consumo diario. Tampoco se suman kg y sacos como una sola cantidad.

DS-SIN informa un **despacho ficticio de 5 sacos** el primer día. No se añade a 2.75 sacos consumidos ni demuestra consumo efectivo, entrega o inventario final.

## 8. Mediciones parciales

| Referencia | Medición sintética | Contexto y límite |
|---|---|---|
| ME-PH | pH del agua 6.74, adimensional | Un punto ficticio del galpón el 2034-07-10 a las 11:00 |
| ME-TA | Temperatura ambiental 30.6 °C | Un lugar/momento; no es temperatura de toda la jornada |
| ME-TC | Temperatura cloacal no medida: null | No se deduce de la temperatura ambiental; hora del evento también null |
| ME-BU | Evaluación ficticia de 16 aves de PA-SIN | Primer día de crianza según el nacimiento inventado; no extrapolar al galpón |

Las mediciones conocidas se registran a las 11:20 de ese mismo día. En ME-TC se registra que no se midió; ese momento no acredita que haya ocurrido una medición.

| Categoría ficticia de buche | Aves de la muestra | Porcentaje sobre 16 |
|---|---|---|
| Lleno | 9 | 56.25 % |
| Parcial | 4 | 25 % |
| Vacío | 2 | 12.5 % |
| No evaluable | 1 | 6.25 % |
| Total de la muestra | 16 | 100 % |

Cada ave aparece una sola vez: 9 + 4 + 2 + 1 = 16; los porcentajes suman 100 %. «No evaluable» pertenece al universo declarado; no se elimina para mejorar el porcentaje. Las etiquetas son categorías didácticas, no un protocolo veterinario aprobado. Clasificar toda la muestra no vuelve completo el reporte de otras variables.

No se inventan mediciones para otras jornadas ni para PB-SIN. No se emiten diagnósticos, calificaciones de bienestar ni comparación con objetivos oficiales. Edad, método y representatividad requieren validación fuera del caso.

## 9. Temporalidad T1–T7

Los siguientes horarios son **completamente sintéticos**. El JSON conserva fecha y desplazamiento -05:00 en cada momento.

| Momento | Tratamiento en el escenario |
|---|---|
| T1 — Evento/período | Intervalo de cada jornada; no es hora exacta de cada muerte o consumo |
| T2 — Disponibilidad | 00:10 del siguiente día, solo para los aportes conocidos |
| T3 — Registro | 00:15 del siguiente día, versión inicial |
| T4 — Comunicación | 00:25 del siguiente día; no cambia la fecha operativa |
| T5 — Revisión | 06:00 del siguiente día; en RD-B se repite a las 07:30 tras corregir |
| T6 — Corrección | Solo RD-B, 07:00 del siguiente día; en los demás no ocurrió |
| T7 — Cierre | RD-A y RD-B, 08:00 del siguiente día; RD-C y RD-D permanecen pendientes |

Para RD-A, evento/período del 10 y comunicación del 11 son fechas distintas. Se conserva fecha operativa del 10 sin retrofechar el registro. Las fechas de nacimiento y recepción no se sustituyen por la de envío.

Los cierres de RD-A/RD-B son decisiones ficticias de un revisor del escenario, con el peso por saco y mediciones faltantes expresamente aceptados como pendientes no bloqueantes para esos reportes. No se aprueba esta política para Avicendia ni se declara que tales reportes contengan todas las variables posibles. T7 null de RD-C/RD-D significa cierre no realizado, no hora cero. La campaña permanece sin cierre.

## 10. Corrección trazable

CO-SIN se refiere exclusivamente a RD-B, campo mortalidad de hembras. Conserva versión anterior MO-B-v1 con valor 4 y versión vigente MO-B-v2 con valor 3, motivo ficticio, función revisora del escenario y momentos de registro 07:00, comunicación 07:10 y nueva revisión 07:30 del 2034-07-12.

T2, T3 y T4 de RD-B describen la versión inicial de 4 hembras. El valor corregido de 3 queda disponible con la rectificación T6; no se retrotrae su disponibilidad a la madrugada. El resultado vigente se calcula con 3; no se suman 4 y 3 como hechos separados. El original permanece en la referencia de corrección. Ningún dato real ni mecanismo de autorización implementado se acredita con esta descripción.

## 11. Casos conceptuales y resultados esperados

Los resultados están también en resultados_esperados_no_son_ingresos del JSON. Son referencias futuras de comprobación, no tests de una aplicación existente.

| Caso | Comprobación conceptual | Resultado esperado |
|---|---|---|
| CP01 | Pertenencia de partidas | PA-SIN y PB-SIN referencian únicamente CA-SIN |
| CP02 | Ingresos por sexo y sin duplicados | PA 1300, PB 860; campaña M 1176, H 984, total 2160, contados una sola vez |
| CP03 | Mortalidad por sexo | RD-A 7/5; RD-B 4/3; RD-C 6/desconocido; RD-D 0/2 |
| CP04 | Acumulación sin duplicar diario, total o corrección | Tras RD-B: M 11, H 8, total 19; tras RD-D: M 17, H/total desconocidos |
| CP05 | Saldos solo con datos suficientes | RD-A 1288; RD-B 2141; RD-C/RD-D solo machos 1159, sin total exacto |
| CP06 | Bajas sin atribución a partida | Saldos exactos finales por partida: insuficiencia de información |
| CP07 | Consumo y unidad original | Subtotales conocidos separados: 6 sacos y 121.5 kg; total convertido/completo desconocido |
| CP08 | Ausente frente a cero | RD-C hembras/consumo null; RD-D machos 0 explícito, sin reemplazar el faltante previo |
| CP09 | Medición parcial | ME-TC null; muestra de buche 16 y 100 % de esa muestra, sin completar otros campos |
| CP10 | Comunicación nocturna | RD-A conserva fecha operativa 2034-07-10 aunque T3/T4 sean del 11 |
| CP11 | Corrección con original | CO-SIN mantiene 4 → 3 y su vínculo; cómputo vigente usa una sola versión |
| CP12 | Cierre diario distinto de campaña | RD-A/RD-B con T7 ficticio; campaña sin cierre, RD-C/RD-D pendientes |

## 12. Incertidumbres y límites de aceptación

Persisten nacimiento de PB-SIN, hora de su recepción, desglose de bajas por partida/sección, mortalidad de hembras de RD-C, consumo de RD-C, peso por saco y mediciones no realizadas. Cada motivo está expresado en el fixture o en sus supuestos. No se deducen de cifras de otra jornada o de otro sexo.

La simplificación de saldos exige que los supuestos de cobertura sean verdaderos; en una granja no bastaría con omitir filas de otros movimientos. Los porcentajes solo describen la muestra ficticia. El formato documental no resuelve versiones, permisos, retención, cierres ni persistencia del producto.

**Criterio original del roadmap: PENDIENTE.** No se realizó reproducción cuantitativa completa contra la fuente histórica privada. El fixture sustituye las cantidades por otras inventadas y no acredita fidelidad numérica histórica. La evaluación externa debe mantener separado este criterio de las comprobaciones sintéticas y de la aceptación final de CG-008.
