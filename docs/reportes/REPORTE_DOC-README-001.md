# DOC-README-001 — Branding y portada de Avicendia

18 de octubre de 2026 · Encargo transversal · Documentación y activos SVG/PNG · Riesgo R0.

**Estado actual: INTEGRADA EN MAIN POR INSTRUCCIÓN EXPRESA DEL PROPIETARIO.** La sección 10 registra la integración autorizada del PR #12. Las pruebas técnicas y el render en GitHub se documentan en las secciones anteriores; la integración no añade una certificación legal o comercial de marca.

**Historial de versiones:** las secciones 1–7 conservan el alcance y la evidencia de la primera entrega estática. La sección 8 registra la revisión solicitada después: animación y redacción más natural. La sección 9 añade la publicación autorizada y sus comprobaciones posteriores. Estas pruebas no sustituyen retroactivamente la evidencia de las versiones locales. El generador de imágenes de la versión 2 se trata como herramienta de bajo impacto R1.

**Estado histórico de la versión 1: PARCIAL — propuesta implementada localmente, pendiente de revisión del propietario y render real en GitHub.** En esa etapa no se declaró aceptación comercial de la marca ni validación completa de P0. No se asigna un identificador CG ni se inicia otra tarea.

## 1. Objetivo y alcance autorizado

Aplicar la identidad suministrada al README, crear banners claros y oscuros con adaptación móvil, y documentar su mantenimiento. El propietario confirmó este alcance en la conversación. El brief y el paquete se trataron como referencias de diseño y hechos por comprobar, no como autorización para publicar o modificar servicios remotos.

No se implementan producto, arquitectura, captura asistida, integraciones, automatizaciones, despliegues ni un nuevo catálogo de marca. No se modifica AGENTS.md ni se incorporan documentos privados completos.

## 2. Estado comprobado y fuentes

- Repositorio: `VicWaltzO/Avicendia`; remoto origin verificado.
- La copia original estaba en `codex/preparacion-skill-v2.1`, con archivos locales no seguidos. Se preservó y se creó un worktree administrado independiente desde `main`.
- Rama de entrega local: `codex/doc-readme-001-branding`. Base y HEAD: `6047406f7ff80a30c0b7c6cace9e395c8de2e68d`, integración documental de CG-009.
- La consulta de `main` mediante el conector GitHub devolvió esa misma base. El acceso Git directo a la red falló por resolución de red; no se usó ese fallo como prueba del estado remoto.
- Se leyeron instrucciones locales, la skill Control Granja Engineering y sus criterios de diff/entrega, README, política de publicación, árbol público y documentos de producto pertinentes. El brief suministrado aportó la dirección editorial; no se recuperaron muestras privadas de escritura.
- Se inventariaron los nueve reportes CG-001 a CG-009 presentes en la base pública y se examinaron sus estados y reservas. CG-002 declara alcance documental completado; otros reportes conservan pendientes. No se concilió una fuente completa de aceptación formal para obtener un numerador.
- El [PR #9](https://github.com/VicWaltzO/Avicendia/pull/9) se comprobó fusionado en la base indicada. Su reporte histórico todavía dice «abierto»: se conserva como evidencia de su momento de entrega. Ni esa integración ni una calificación PASS se convierten en aceptación automática.
- El árbol no contiene aplicación ejecutable, manifiestos de dependencias del SaaS ni arquitectura implementada. La tesis, el cliente, el flujo y el diccionario son propuestas documentales; no acreditan validación de campo.

El plan local de 240 tareas no se publica ni se convierte en una barra de avance. El README conserva «Progreso pendiente de consolidación».

## 3. Cambios y archivos

| Archivo o conjunto | Cambio y motivo |
|---|---|
| [README.md](../../README.md) | Portada de producto, estado explícito, cinco capacidades planificadas, navegación a documentos reales y reglas de calidad/uso |
| [README_MAINTENIMIENTO.md](../README_MAINTENIMIENTO.md) | Evaluación del impacto público por entrega, evidencia/aceptación, progreso, mantenimiento visual y publicación segura |
| [ASSETS.md](../brand/ASSETS.md) | Procedencia, paleta, archivos, composición móvil, contraste y reservas de identidad/derechos |
| [Identidad SVG](../../assets/branding/) | Isotipo e imagotipo COLOR del paquete, conservados byte por byte |
| [Banners editables](../../assets/branding/readme/) | Cuatro SVG finales: horizontal y compacto, claros y oscuros; un respaldo PNG horizontal |
| Este reporte | Alcance, evidencia, resultados, límites y estado de revisión del encargo transversal |

El README mantiene seis secciones principales: propósito, disponible hoy, capacidades previstas, documentación, desarrollo/calidad y marca/uso. La evolución aparece dentro de documentación. No hay instalación, stack ficticio, contacto inventado, insignias decorativas ni contador inferido.

## 4. Decisiones de diseño y procedencia

Se consultaron la guía breve, MANIFEST, brand-decisions, PROCEDENCIA, INFORME_VALIDACION e INCIDENCIAS del paquete 1.0.0. El CRC del ZIP y la correspondencia de los SVG seleccionados con su extracción se comprobaron. Su SHA-256 se registra en [ASSETS.md](../brand/ASSETS.md).

Se reutilizan el ave y los glifos reconstruidos: no se dibuja un símbolo alternativo ni se sustituye la tipografía por Inter. El nombre tiene un solo color: Carbón sobre Marfil, blanco sobre Carbón. El símbolo conserva los degradados del paquete. La línea de datos horizontal es decorativa, tenue y estática.

Los banners horizontales miden 1600 × 520; los compactos, 720 × 600. Hasta 600 px de viewport, `<picture>` propone una composición móvil: símbolo arriba, nombre completo y eslogan dividido después de «e». Se conservan los contornos, tildes, puntuación y proporciones de los glifos. Esta portada no establece una nueva composición oficial de marca.

Los SVG finales son también sus fuentes editables, con grupos identificados; no se duplica un `hero-source.svg`. El PNG de respaldo se exporta directamente del SVG claro, a 1600 × 520. Cada SVG pesa menos de 43 KiB y el PNG 75.905 bytes; el conjunto de siete activos pesa 278.453 bytes, aproximadamente 272 KiB.

No se incluyen ZIP, favicon, originales raster, comparativas, informes internos, fuentes ni PDF. El maestro reconstruido, su color, mínimos ópticos y derechos siguen sujetos a revisión humana. No se declara registro, certificación ni licencia nueva.

## 5. Verificaciones ejecutadas

Los scripts auxiliares de composición, render y comprobación son temporales, fuera del conjunto publicable. No se añaden dependencias al repositorio ni un workflow para un cambio documental.

| Comando o comprobación | Resultado real |
|---|---|
| `git rev-parse`, ramas, remoto, status y árbol de main | Base, repositorio, aislamiento y ausencia de aplicación comprobados |
| Consulta GitHub de main y metadatos del PR #9 | Base remota coincide; PR fusionado, separado de aceptación formal |
| `python build_branding.py` temporal | PASS: CRC del ZIP, tres fuentes seleccionadas coincidentes y seis SVG creados |
| Render con Sharp/librsvg 2.63.2 | PASS: PNG y seis reducciones de banners a 320/768/1280; inspección visual de ambos temas |
| `node preview.cjs` temporal, Edge 155.0.4283.62 | PASS: seis escenarios locales, fuente seleccionada correcta, imagen cargada y sin desbordamiento de página |
| Respaldo con las fuentes de picture retiradas en la vista local | PASS: `hero-poster.png` cargado a su resolución nativa |
| Inspección de capturas locales | PASS local: símbolo, nombre, eslogan, jerarquía y enlaces visibles; tabla simplificada tras revisar móvil |
| `python check_branding.py` temporal | PASS con este reporte incluido: cuatro documentos, 45 enlaces/rutas locales, seis XML SVG, referencias internas, paleta, ausencia de contenido activo/externo y búsqueda focalizada de privacidad |
| Integridad de identidad y texto | PASS: dos SVG copiados byte por byte; símbolo, nombre y eslogan de los cuatro banners conservan los trazados de la fuente |
| Contraste sRGB del texto de los banners | PASS aritmético: Carbón/Marfil 16,661:1; blanco/Carbón 17,404:1; ambos superiores a 4,5:1 |
| `git diff --check`, `git diff --cached --check`, lectura del diff y documentos nuevos | PASS: sin errores de whitespace; README y tres documentos revisados completos, SVG examinados estructuralmente y sin cambios staged |
| Alcance e historial nuevo | PASS: once rutas de este encargo; `git log main..HEAD` vacío, main en la base original y copia de preparación preservada; se observó un archivo CG-010 ajeno añadido durante el trabajo y no se tocó |
| Build, pruebas funcionales y CI del SaaS | NOT APPLICABLE: no existe aplicación ejecutable en esta base |
| Render en GitHub y clon limpio publicado | NO EJECUTADO: propuesta local, sin publicación autorizada ni realizada |

La primera ejecución del verificador detectó el reporte aún ausente y una normalización de saltos de línea al copiar los SVG de identidad. Se corrigió la copia para conservar los bytes originales. La primera invocación de la vista previa falló por la sintaxis de importación ESM en Windows; se corrigió la URL local y la matriz posterior pasó. Esos intentos no constituyen evidencia PASS de la versión final.

Las seis capturas completas se conservan localmente como `readme-light-320.png`, `readme-dark-320.png`, `readme-light-768.png`, `readme-dark-768.png`, `readme-light-1280.png` y `readme-dark-1280.png`, junto con `browser-results.json`. Corresponden a HTML generado con Marked y estilos locales de lectura, no al sanitizador, CSS o proxy de imágenes de GitHub. El rótulo de vista previa no forma parte del README.

### Matriz visual local

| Comprobación, en ambos temas | 320 px | 768 px | 1280 px |
|---|---|---|---|
| Variante seleccionada y cargada | PASS: compacta | PASS: horizontal | PASS: horizontal |
| Hero sin recortes ni distorsión | PASS local | PASS local | PASS local |
| Símbolo, nombre y eslogan | PASS local | PASS local | PASS local |
| Jerarquía y navegación | PASS local | PASS local | PASS local |
| Render directo en GitHub | PARTIAL: pendiente | PARTIAL: pendiente | PARTIAL: pendiente |

La imagen ocupa 288 px en el viewport de 320, 704 en el de 768 y 948 en el de 1280, con proporciones conservadas. La selección compacta responde al viewport, no al ancho de una columna aislada; el comportamiento en el contenedor real de GitHub queda por verificar.

### Criterios P0 y elementos condicionados

| Criterio | Estado y evidencia |
|---|---|
| Identidad | PASS técnico local; aceptación del maestro y composición por el propietario pendiente |
| Propósito y estado comprensibles | PASS documental y lectura local; no se promete software operativo |
| Hero estático y adaptación | PASS local en seis escenarios; PARTIAL respecto del render en GitHub |
| Veracidad y evolución | PASS documental: fuentes públicas enlazadas, aceptación separada de integración y sin contador |
| Mantenimiento | PASS documental: disparadores y registro por tarea en la guía enlazada |
| Accesibilidad | PASS local para texto alternativo, ausencia de movimiento y contraste calculado; sin auditoría completa de lectores de pantalla |
| Enlaces, SVG y privacidad del incremento | PASS focalizado: 45 enlaces/rutas locales válidos, seis SVG autónomos y sin patrones privados detectados en los cuatro documentos; límites de la búsqueda en sección 6 |
| Gobernanza | PASS local: main y copia original preservadas; sin publicación remota |
| P1: mapa arquitectónico | NOT APPLICABLE: no hay arquitectura implementada; se evita crear un diagrama que sugiera despliegue |
| P1: contador e índice derivado | NOT APPLICABLE: no se consolidó aceptación formal pública suficiente |
| P2: animación, imagen social y workflows extra | NOT APPLICABLE: fuera de la entrega estática mínima autorizada |

P0 no se considera plenamente validado mientras falte el render real y la revisión correspondiente.

## 6. Privacidad, revisión y límites

Se seleccionan exclusivamente trazados públicos y textos nuevos sin insumos operativos reales. El brief completo, las rutas personales y los documentos privados de origen quedan fuera de la entrega. La revisión de este incremento no certifica ni purga el historial previo del repositorio; no altera las reservas registradas en tareas anteriores.

No hay commits nuevos cuyo historial se haya publicado. Antes de un eventual commit/push deberá revisarse de nuevo el conjunto exacto y su identidad pública conforme a [PUBLICACION.md](../PUBLICACION.md). La búsqueda de patrones es focalizada y no constituye una garantía universal de ausencia de secretos.

La aceptación final del maestro, los colores, la nueva composición de portada y las condiciones de uso corresponden al propietario. La revisión legal, los favicon y la impresión no se resolvieron. No se hicieron entrevistas, pruebas de campo, mediciones ni validación comercial.

## 7. Git y estado de entrega

Cambios locales sin commit en `codex/doc-readme-001-branding`, base `6047406f7ff80a30c0b7c6cace9e395c8de2e68d`. No se creó PR, no se hizo push, merge, release ni despliegue. No se modificaron ramas remotas ni la configuración About del repositorio.

Recuperación: revisar el diff y descartar únicamente los archivos de este encargo en el worktree aislado si el propietario rechaza la propuesta, preservando cualquier cambio posterior. No usar reset destructivo sobre la copia original.

**Entrega local para revisión, no cierre aceptado.** Quedan pendientes la revisión visual de marca y el render autorizado en GitHub. Este reporte informa lo realizado; no define ni inicia la siguiente tarea.

## 8. Versión 2 — Animación breve y una voz más cercana

### Solicitud y cambios

El propietario pidió añadir animación al banner y hacer la redacción mucho más natural y humana, conservando el tono profesional. Se mantiene la misma rama local y se amplía únicamente este encargo.

El README ahora parte de una idea cotidiana: «Entender lo que pasa en la granja empieza por tener buenos registros». Se reescribieron la introducción, el propósito, el estado del proyecto y las explicaciones de desarrollo/evolución. Se redujeron repeticiones y lenguaje administrativo, conservando la diferencia entre propuesta, implementación y aceptación. No se incorporaron testimonios, cifras de éxito ni afirmaciones de uso real.

Se añadieron cuatro GIF: claro/oscuro, en composición horizontal y compacta. Un pulso recorre la línea decorativa y destaca tres puntos; el símbolo y todas las letras permanecen inmóviles. La secuencia consta de 48 fotogramas de 100 ms, dura 4,8 segundos, se reproduce una sola vez y termina en reposo.

Los cuatro SVG estáticos y el PNG de respaldo se conservan. El elemento picture selecciona GIF únicamente con `prefers-reduced-motion: no-preference`; con movimiento reducido selecciona SVG. El README no necesita JavaScript ni animación interna de SVG. Los ajustes propios de GIF de GitHub deben verificarse allí por separado.

El [generador de GIF](../../scripts/render-readme-motion.cjs) queda como fuente editable del movimiento, junto a los SVG que definen su geometría. Requiere Node y sharp >= 0.34.3 en un entorno de herramientas; no instala paquetes ni añade dependencias de ejecución al producto. Solo escribe los cuatro GIF de portada. Se actualizaron las guías de marca y mantenimiento para explicar el movimiento, su regeneración y sus límites.

### Verificaciones de la versión 2

| Comprobación ejecutada | Resultado y alcance |
|---|---|
| `node scripts/render-readme-motion.cjs`, con sharp del entorno de herramientas | PASS: cuatro GIF, 48 fotogramas, 4.800 ms y una sola reproducción por variante |
| `python check_motion.py` temporal, decodificación independiente con Pillow | PASS: cada fotograma dura 100 ms; sin extensión de repetición; movimiento limitado al detalle; primer y último fotograma iguales |
| Comparación de todos los fotogramas | PASS: 192 fotogramas examinados; nombre, símbolo y eslogan inmóviles. Cambio acotado a (582,411)–(1470,445) en horizontal y (278,566)–(442,574) en compacto |
| `node preview.cjs` temporal, Edge 155.0.4283.62 | PASS: doce combinaciones de 320/768/1280 px, claro/oscuro y movimiento normal/reducido; ocho fuentes picture, imagen esperada cargada y sin desbordamiento de página |
| Capturas temporizadas en navegador a 320 y 1280 px | PASS: cambio visible durante el pulso; capturas idénticas después de cinco segundos, sin repetición posterior en la ventana observada |
| Respaldo PNG en navegador | PASS: carga de `hero-poster.png` al retirar las fuentes picture en la prueba local |
| `python check_branding.py` temporal | PASS con la sección de versión 2 incluida: cuatro documentos, 57 enlaces/rutas locales y seis SVG; integridad de trazados, contraste y búsqueda focalizada de privacidad conservados |
| Revisión editorial y visual | Texto revisado; propósito, estado temprano y capacidades futuras conservados. Capturas locales inspeccionadas en escritorio y móvil |
| Diff y alcance final | PASS: diff del README y lectura completa del generador y documentos modificados; comprobaciones de formato y sintaxis sin errores. Dieciséis rutas en el incremento completo, sin staged ni commits nuevos |
| GitHub | PARTIAL: no se publicó el cambio ni se observó su render real. Las pruebas locales no acreditan el proxy de imágenes ni los ajustes propios de GitHub |

Durante el primer intento, un retardo escalar de sharp no asignó tiempo a todos los fotogramas. La decodificación independiente lo detectó; se corrigió usando un retardo explícito por fotograma y se comprobó de nuevo cada GIF. Los PASS de esta sección corresponden a los archivos posteriores a esa corrección.

| GIF de versión 2 | Peso |
|---|---|
| `hero-motion-light.gif` | 67.225 bytes |
| `hero-motion-dark.gif` | 65.742 bytes |
| `hero-motion-compact-light.gif` | 34.888 bytes |
| `hero-motion-compact-dark.gif` | 34.938 bytes |

Los once activos suman 481.246 bytes, aproximadamente 470 KiB; cada GIF queda por debajo de 66 KiB. Las paletas indexadas de GIF pueden variar levemente del SVG, que se mantiene como referencia de marca.

La evidencia de versión 1 permanece separada. La versión 2 conserva doce capturas completas, las muestras temporizadas del pulso y `browser-results.json` en un directorio local distinto. Los nombres de las capturas de versión 2 incorporan el tamaño, tema y preferencia de movimiento. No se añaden esas capturas ni rutas privadas al conjunto publicable.

### Referencias y límites actuales

Se consultó documentación oficial de [formatos de imagen de GitHub](https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files), [ajustes de accesibilidad de GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-settings/managing-accessibility-settings), [movimiento y pausa de W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) y [salida animada de sharp](https://sharp.pixelplumbing.com/api-output/). La animación breve y la alternativa estática son decisiones de esta entrega, no una certificación de accesibilidad completa.

P2 queda activado por la solicitud explícita del propietario. Está implementado y probado localmente; la compatibilidad final con GitHub permanece PARTIAL. P0 mantiene pendiente su render en GitHub y la revisión del propietario. No hay auditoría completa de lectores de pantalla, aceptación legal de marca, pruebas de campo ni nuevas capacidades del SaaS.

La revisión 2 sigue sin commit, push o PR. Este encargo no modificó main ni la copia original de ingeniería. Durante la revisión, main avanzó por trabajo paralelo a `73f251821d839ad0a48901c75a3f76ec979d10b0`, incorporando tres documentos de CG-010. Se comprobó ese alcance documental y se preservó: la rama de branding conserva su base `6047406f7ff80a30c0b7c6cace9e395c8de2e68d`, sin rebase, sin retirar esos documentos de main y sin presentar CG-010 como trabajo de este encargo. Se entrega para revisión en la misma rama `codex/doc-readme-001-branding`, sin iniciar otra tarea.

## 9. Publicación autorizada — actualización posterior a las versiones locales

El propietario solicitó expresamente subir el cambio a GitHub. Se autoriza la publicación de esta rama y su PR de revisión; no se interpreta como permiso de fusión, aceptación comercial de marca o despliegue.

Se consultó origin/main mediante Git normal, sin etiquetas ni publicación masiva. La rama remota de branding no existía y no había un PR previo con esa cabeza. La identidad autenticada corresponde al propietario del repositorio. Los nuevos commits se preparan con la identidad pública noreply ya usada por el proyecto, sin modificar la configuración personal del equipo.

Antes de publicar se avanzó la rama local de branding por fast-forward hasta `73f251821d839ad0a48901c75a3f76ec979d10b0`, conservando los cambios de CG-010. El cambio de branding sigue limitado a dieciséis rutas. Este avance actualiza la base de entrega descrita en las secciones históricas; no altera main ni adjudica el trabajo paralelo a este encargo. Los tres documentos incorporados son preparación de un futuro piloto, sin software ni resultados de campo, por lo que el estado del README se mantiene vigente.

Se repitieron las comprobaciones de documentación y movimiento sobre esa base: PASS en cuatro documentos, seis SVG y los 192 fotogramas GIF, con los mismos límites de la versión 2. El conjunto publicable excluye el ZIP, el brief privado, las capturas locales, los auxiliares temporales y el paquete interno de ingeniería.

**Estado al preparar el primer commit:** revisión de privacidad, clon limpio, publicación del commit, apertura del PR y comprobación del render remoto en curso. Los resultados posteriores se registrarán aquí sin atribuir a esta versión evidencia que todavía no existe. La aceptación del propietario sigue pendiente.

### Resultados posteriores a la publicación

El [commit 049d550](https://github.com/VicWaltzO/Avicendia/commit/049d55027dbe8def36935a6108b79bfb3e2812eb) se creó y publicó mediante Git normal, con autor y committer públicos noreply comprobados. Se revisaron las dieciséis rutas del incremento y los patrones de privacidad en los once archivos de texto/vector; no se añadieron archivos ajenos ni materiales internos. No se empleó force-push.

Se creó el [PR #12](https://github.com/VicWaltzO/Avicendia/pull/12) hacia main, en borrador y sin fusión. GitHub confirmó una cabeza inicial 049d550, base 73f2518 y dieciséis archivos cambiados. La rama publicada es `codex/doc-readme-001-branding`.

El clon de comprobación se creó con `git clone --no-local --single-branch`, desde la rama comprometida, y luego se contrastó mediante fetch con GitHub. HEAD y FETCH_HEAD coincidieron en `049d55027dbe8def36935a6108b79bfb3e2812eb`, con diff vacío y árbol de trabajo limpio. El clon no contiene el paquete interno de ingeniería, los auxiliares temporales ni el ZIP.

Sobre ese clon pasaron los cuatro documentos, 57 enlaces/rutas locales, seis SVG, contraste y los 192 fotogramas de movimiento. Git normaliza los saltos CRLF de los dos SVG de identidad a LF: la comparación pública excluye exclusivamente esa diferencia de fin de línea; los trazados y los colores permanecen iguales. El conjunto público de once activos suma 481.117 bytes. Las comprobaciones de copia byte por byte de las secciones anteriores corresponden a la extracción local previa a esa normalización.

### Render real en GitHub

Se abrió el [README de la rama publicada](https://github.com/VicWaltzO/Avicendia/tree/codex/doc-readme-001-branding) en Edge 155.0.4283.62, mediante sesiones nuevas sin autenticar, sin sustituir el HTML ni los estilos de GitHub. Se comprobaron sus ocho fuentes picture, selección efectiva, imagen decodificada, encuadre y capturas reales. La primera lectura encontró un elemento reemplazado durante la carga dinámica; se esperó a que terminara esa carga y se repitió la matriz completa.

| GitHub, claro y oscuro | 320 px de viewport | 768 px de viewport | 1280 px de viewport |
|---|---|---|---|
| Movimiento reducido | PASS: SVG compacto | PASS: SVG horizontal | PASS: SVG horizontal |
| Movimiento normal | PASS: GIF compacto | PASS: GIF horizontal | PASS: GIF horizontal |
| Imagen cargada y encuadrada | PASS | PASS | PASS |
| Marca y eslogan visibles en la inspección | PASS | PASS | PASS |

Pasaron las doce combinaciones. La imagen ocupó 254, 406 y 838 px, respectivamente, dentro del contenedor real de GitHub; el panel lateral explica la diferencia con los anchos de las pruebas locales. Se conservaron las proporciones y el alt. Las capturas temporizadas del GIF horizontal oscuro mostraron cambios durante el pulso y estabilidad después de cinco segundos. Se inspeccionaron las capturas de móvil, escritorio y fases del pulso.

La evidencia directa queda en doce capturas de hero, ocho capturas de página, cuatro capturas temporizadas y `github-results.json`, conservadas localmente fuera del conjunto publicable. Esta prueba resuelve el render pendiente de las versiones anteriores para los escenarios observados; no cubre todos los dispositivos, lectores de pantalla o ajustes propios de cuentas autenticadas.

### Estado de revisión y constancia

La implementación y los checks técnicos de portada y animación tienen evidencia local, de clon limpio y de GitHub. La aceptación visual del maestro, del color y de la composición corresponde al propietario. El PR permanece en borrador, sin merge, release ni despliegue; main seguía en 73f2518 al comprobar las referencias después de subir la rama.

Esta constancia posterior actualiza únicamente el reporte y el estado de verificación en las dos guías. Su commit se identifica en el [historial del PR](https://github.com/VicWaltzO/Avicendia/pull/12/commits) con el mensaje `docs(brand): registrar publicacion y render en GitHub (DOC-README-001)`. El README, los SVG, GIF, PNG y el generador permanecen en los mismos blobs que se probaron en el primer commit. No se inicia ninguna tarea posterior.

## 10. Integración en main autorizada por el propietario

Después de publicar el PR, el propietario ordenó expresamente incorporarlo a main. Esa instrucción amplía la autorización anterior de publicación de rama. Se retiró el estado de borrador del PR #12 y se preparó su integración mediante Git normal en un clon limpio, con identidad pública noreply de autor y committer.

La base comprobada es `73f251821d839ad0a48901c75a3f76ec979d10b0` y la cabeza revisada del PR es `2a72079dae689c1df6779101ce57f373bf86b6b4`. La fusión de esas revisiones no produjo conflictos y conserva CG-010. El merge incorpora el mismo README, los once activos y el generador ya verificados; este reporte añade únicamente la constancia de integración. La copia original de ingeniería y su trabajo no relacionado permanecen fuera de la operación.

La publicación de main utiliza un merge commit normal y avance rápido del remoto, sin force-push. Su SHA definitivo se consulta en el historial de main y en el PR #12, evitando una referencia circular en el propio reporte. Las reservas y estados de borrador de las secciones previas corresponden a sus versiones históricas y quedan actualizados por esta instrucción.

La matriz de doce escenarios en GitHub corresponde a los mismos blobs de README e imágenes que se integran. No hay cambios de aplicación, producción, datos reales, infraestructura ni una siguiente tarea iniciada.
