# CG-003 — Reporte técnico: delimitar cliente ideal

Fecha: 16 de octubre de 2026, America/Bogota. Fase 00 · Prioridad P0 · Tamaño S · Documentación · Riesgo R0.

**Dictamen: VALIDADA TÉCNICAMENTE, EN REVISIÓN EXTERNA. Estado final: PARCIAL por aceptación pendiente.** No hay bloqueo técnico ni criterios documentales sin comprobar; no se declara cierre sin evaluación del supervisor. El perfil comercial no está validado.

## 1. Identificación, objetivo y alcance

CG-003 identifica tres perfiles hipotéticos de granjas pequeñas y medianas de pollos de engorde de Perú y prioriza uno para una futura validación de campo y un eventual piloto. Se aplicaron la skill control-granja-engineering, AGENTS.md y las referencias de ejecución adaptativa y entregas Git.

El contrato original pide segmentar por galpones, conectividad y digitalización, con al menos tres perfiles y piloto priorizado. El encargo vigente añade comparación operativa y comercial, incertidumbre explícita y condiciones de revisión. No se selecciona una granja real ni se certifica demanda.

CG-002 está integrada: se verificó que b3df307 es ancestro de main. La rama se creó desde main actualizado en 253ac2bad134aebf5c7c800c3c5e5cd6fffc5b5a. El checkout público estaba limpio; los archivos ajenos de branding y la documentación privada de la copia local se preservaron.

## 2. Implementación y decisiones

| Documento | Resultado |
|---|---|
| [CLIENTE_IDEAL.md](../00-producto/CLIENTE_IDEAL.md) | Tres perfiles, matrices operativa/tecnológica y de viabilidad, priorización y condiciones de revisión |
| Este reporte | Evidencia de aceptación, límites y estado de GitHub en la misma rama y PR |

La segmentación distingue P1, registro predominantemente manual; P2, consolidación parcialmente digital; y P3, sistemas informáticos existentes. Incluye cantidad de galpones, responsables y distribución, frecuencia de registros, consolidación, internet, teléfonos, equipos, papel y herramientas digitales.

Se prioriza provisionalmente **P2**: podría combinar necesidad de conciliar información con familiaridad digital y permitir estudiar un flujo acotado sin sustituir sistemas. Se comparó con P1, que podría requerir cambios de hábitos, y P3, que podría exigir convivencia o integraciones. Son hipótesis condicionadas, no evidencia de superioridad comercial.

La comparación usa criterios cualitativos explícitos, sin pesos ni puntuaciones numéricas. Los rangos de galpones y dotaciones son ilustrativos y se solapan; no constituyen clasificación oficial ni suponen que el tamaño determine madurez digital o capacidad económica. La contratación y el acceso se dejan desconocidos para los tres perfiles.

Se diferencian cliente ideal hipotético, candidato accesible y cliente comercial validado. No hay candidato confirmado ni cliente validado. Las condiciones para un eventual piloto no se presentan como condiciones ya cumplidas.

## 3. Matriz de aceptación y verificaciones

| Criterio solicitado | Resultado | Evidencia documental |
|---|---|---|
| Al menos tres perfiles diferenciados | PASS | P1, P2 y P3 en sección 3 |
| Galpones, conectividad y digitalización | PASS | Matriz de 12 dimensiones, con tamaño y madurez independientes |
| Necesidades operativas plausibles | PASS conceptual | Consolidar cartillas, conciliar mensajes/hojas o comprobar vacíos entre sistemas, según escenario |
| Comparación de viabilidad | PASS | Seis criterios en sección 4: problema, implementación futura, usuarios, capacitación, contratación y acceso |
| Perfil prioritario seleccionado | PASS | P2, condicionado a problema observable y captura viable |
| Justificación conceptualmente verificable | PASS | Criterios explícitos y contraste P2 frente a P1/P3 en sección 5 |
| Hipótesis e invalidación identificadas | PASS | Secciones 6–7: categorías, incertidumbres y motivos para cambiar la prioridad |
| Coherencia con CG-002 | PASS | Enlace a tesis y conservación de sus cuatro métricas y capacidades previstas |

Verificaciones realmente ejecutadas:

- git fetch origin main --no-tags y comprobación de ancestro: CG-002 integrada y main local actualizada antes de crear la rama.
- task_contract.py CG-003 --format json: salida 0; objetivo, aceptación y dependencias originales consultados. No declara dependencias; el requisito previo de CG-002 proviene del encargo actual.
- Lectura editorial completa de CLIENTE_IDEAL.md: terminología, ortografía, consistencia de la elección, separación entre hipótesis y evidencia y ausencia de promesas técnicas revisadas.
- Comprobación documental con Python: siete secciones, tres tablas con columnas consistentes, cobertura de las dimensiones solicitadas y reservas explícitas; salida 0.
- Enlaces locales: el documento enlaza correctamente con TESIS_PRODUCTO.md y el reporte con CLIENTE_IDEAL.md.
- UTF-8 y espacios finales: comprobados. Búsqueda focalizada de tokens, claves privadas, correos y rutas locales sin hallazgos; revisión manual sin datos de empresas reales. No equivale a una certificación universal de privacidad.
- git diff --check y git diff --cached --check: aprobados para el documento; revisión completa del archivo nuevo antes de su commit. La revisión del reporte se realiza igualmente antes de incorporarlo.
- Clon limpio local --no-local --single-branch --no-tags de 84dab2d: único cambio frente a 253ac2b es CLIENTE_IDEAL.md, árbol limpio, enlace válido y CG-002 en el historial. El objeto del commit de documentación local interna no está disponible en ese clon.

No se ejecutaron pruebas del SaaS, build, CI remoto ni estudios de mercado: no hay cambios de código y la entrega es R0. No se contactaron clientes ni se realizaron entrevistas. No se presentan esos trabajos como ejecutados.

## 4. Calidad, seguridad y compatibilidad

La organización sigue docs/00-producto y docs/reportes. No se introducen módulos, tecnologías ni cambios de arquitectura, APIs, esquemas o interfaces. No hay modificaciones funcionales que requieran pruebas de regresión de aplicación.

Se conservan como propuestas futuras IA, WhatsApp, instrumentos y operación sin conexión. Tener conexión intermitente no prueba que Avicendia pueda trabajar sin conexión. La segmentación advierte que un eventual piloto exige demostrar un flujo viable con conectividad real.

No se usan estadísticas del sector, presupuestos, ingresos ni disposición de pago. Las estimaciones están identificadas como escenarios. No se publican el paquete original, sus datos operativos, ubicaciones, contactos ni evidencia de granjas. La revisión del diff limita el cambio a los dos documentos de CG-003.

## 5. GitHub y trazabilidad

- Repositorio: [VicWaltzO/Avicendia](https://github.com/VicWaltzO/Avicendia).
- Rama: codex/CG-003-cliente-ideal, publicada al remoto.
- Base: 253ac2bad134aebf5c7c800c3c5e5cd6fffc5b5a.
- Commit de segmentación: [84dab2d](https://github.com/VicWaltzO/Avicendia/commit/84dab2d6c6284f4c55d58fa2b3bb75cf2b754a6e), docs(product): delimitar cliente ideal (CG-003).
- PR: [#3](https://github.com/VicWaltzO/Avicendia/pull/3), dirigido a main, abierto y sin fusionar.
- El reporte se incorpora en un commit semántico posterior, en esta misma rama y PR. Su SHA puede consultarse en el historial del archivo; no se incluye una referencia circular a su propio commit.

La publicación final comprende documento y reporte. No se realiza push directo a main, merge, release ni despliegue. Se respeta la instrucción específica de CG-003 de detenerse para evaluación externa.

## 6. Observaciones, límites y asuntos pendientes

La elección de P2 es provisional. Puede invalidarse si no aparece el problema, el flujo actual ya lo resuelve, no hay acceso o disponibilidad, o el piloto exige capacidades inexistentes. P1 o P3 pueden tomar prioridad si ofrecen evidencia más fuerte y una prueba de menor esfuerzo operativo.

No hay acceso efectivo a granjas, compradores confirmados, línea base, ahorros, piloto ejecutado ni demanda demostrada. No se asocia escala con presupuesto. La validez empírica queda pendiente de investigación autorizada y no se confunde con la aceptación documental de CG-003.

No se añade deuda técnica de código ni se cambian otros documentos. Falta la evaluación del supervisor, que podrá aprobar o solicitar ajustes. Este reporte no especifica la siguiente tarea.

## 7. Estado final

**PARCIAL: entregables de CG-003 técnicamente validados y enviados a revisión; aceptación externa pendiente.** Los ocho criterios documentales están comprobados. El perfil de cliente sigue siendo hipotético, el PR permanece abierto y no se ha modificado main. Ejecución detenida, sin iniciar CG-004 ni generar sus especificaciones.
