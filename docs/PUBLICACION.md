# Publicación segura

Avicendia permanece público por decisión expresa del propietario. El contenido y todos los commits alcanzables de cada rama publicada deben ser aptos para difusión pública.

## Contenido de esta entrega

CG-001 contiene únicamente README, instrucciones de trabajo, política de publicación, contrato de tarea y exclusiones Git. No incluye archivos originales del paquete de ingeniería, evidencia operativa, datos de clientes ni credenciales.

Los materiales internos permanecen en la copia local de ingeniería. No se debe publicar una rama que ya los contenga en commits anteriores: eliminarlos del último árbol o añadirlos a .gitignore no los elimina del historial.

## Revisión antes de subir una rama

1. Confirmar que origin apunta exclusivamente a VicWaltzO/Avicendia y que la base es main.
2. Inspeccionar los archivos, el diff y cada commit alcanzable que se añadirá al remoto.
3. Excluir secretos, contactos privados, ubicaciones de operación, conversaciones, fórmulas y documentos o evidencias reales. Usar ejemplos inventados y etiquetados cuando hagan falta.
4. Comprobar que las instrucciones y enlaces públicos no dependen de rutas privadas del equipo.
5. Verificar desde un clon limpio y registrar resultados en el contrato de la tarea.
6. Subir exclusivamente la rama revisada; evitar push --all, --mirror o la publicación de etiquetas no revisadas.

.gitignore es una ayuda para evitar altas accidentales, no un escáner de secretos ni una garantía de privacidad. La revisión del contenido y del historial sigue siendo necesaria.
