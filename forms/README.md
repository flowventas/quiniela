# Formato de Google Forms para la quiniela

Crea un formulario por fase. En cada formulario usa estas reglas:

- Campo obligatorio: Nombre del participante.
- Para cada partido, usa dos preguntas desplegables: goles del local y goles del visitante.
- Opciones de cada desplegable: -, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15.
- El valor `-` sirve para dejar un pronostico pendiente.
- Manten los titulos exactamente como aparecen aqui para facilitar la importacion posterior.

## Opcion rapida: crear los formularios con script

1. Abre https://script.google.com/.
2. Crea un proyecto nuevo.
3. Pega el contenido de `forms/crear-google-forms.gs`.
4. Ejecuta la funcion `crearFormulariosQuiniela`.
5. Acepta permisos.
6. En `Ver > Registros`, copia los enlaces de edicion de los 6 formularios.

Cada formulario queda con el campo `Nombre del participante` y dos desplegables por partido.

## Fase de grupos

- Archivo de preguntas: `forms/fase-de-grupos-google-form.md`
- Template CSV de respuestas: `forms/fase-de-grupos-respuestas-template.csv`
- Partidos: 72

## Dieciseisavos

- Archivo de preguntas: `forms/dieciseisavos-google-form.md`
- Template CSV de respuestas: `forms/dieciseisavos-respuestas-template.csv`
- Partidos: 16

## Octavos

- Archivo de preguntas: `forms/octavos-google-form.md`
- Template CSV de respuestas: `forms/octavos-respuestas-template.csv`
- Partidos: 8

## Cuartos

- Archivo de preguntas: `forms/cuartos-google-form.md`
- Template CSV de respuestas: `forms/cuartos-respuestas-template.csv`
- Partidos: 4

## Semifinal

- Archivo de preguntas: `forms/semifinal-google-form.md`
- Template CSV de respuestas: `forms/semifinal-respuestas-template.csv`
- Partidos: 2

## Final

- Archivo de preguntas: `forms/final-google-form.md`
- Template CSV de respuestas: `forms/final-respuestas-template.csv`
- Partidos: 2
