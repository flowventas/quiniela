/**
 * Pega este archivo en script.google.com y ejecuta crearFormulariosQuiniela().
 * Crea 6 Google Forms: una por fase de la quiniela.
 */
const QUINIELA_ROWS = `Fase de grupos|MEX|RSA|2026-06-11T13:00|Primera fase|Grupo A|Estadio Ciudad de México|Ciudad de México
Fase de grupos|KOR|CZE|2026-06-11T20:00|Primera fase|Grupo A|Estadio Guadalajara|Guadalajara
Fase de grupos|CAN|BIH|2026-06-12T13:00|Primera fase|Grupo B|Estadio de Toronto|Toronto
Fase de grupos|USA|PAR|2026-06-12T19:00|Primera fase|Grupo D|Estadio Los Angeles|Los Ángeles
Fase de grupos|QAT|SUI|2026-06-13T13:00|Primera fase|Grupo B|Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Fase de grupos|BRA|MAR|2026-06-13T16:00|Primera fase|Grupo C|Estadio Nueva York/Nueva Jersey|Nueva York
Fase de grupos|HAI|SCO|2026-06-13T19:00|Primera fase|Grupo C|Estadio Boston|Boston
Fase de grupos|AUS|TUR|2026-06-13T22:00|Primera fase|Grupo D|Estadio BC Place Vancouver|Vancouver
Fase de grupos|GER|CUW|2026-06-14T11:00|Primera fase|Grupo E|Estadio Houston|Houston
Fase de grupos|NED|JPN|2026-06-14T14:00|Primera fase|Grupo F|Estadio Dallas|Dallas
Fase de grupos|CIV|ECU|2026-06-14T17:00|Primera fase|Grupo E|Estadio Filadelfia|Filadelfia
Fase de grupos|SWE|TUN|2026-06-14T20:00|Primera fase|Grupo F|Estadio Monterrey|Monterrey
Fase de grupos|ESP|CPV|2026-06-15T10:00|Primera fase|Grupo H|Estadio Atlanta|Atlanta
Fase de grupos|BEL|EGY|2026-06-15T13:00|Primera fase|Grupo G|Estadio de Seattle|Seattle
Fase de grupos|KSA|URU|2026-06-15T16:00|Primera fase|Grupo H|Estadio Miami|Miami
Fase de grupos|IRN|NZL|2026-06-15T19:00|Primera fase|Grupo G|Estadio Los Angeles|Los Ángeles
Fase de grupos|FRA|SEN|2026-06-16T13:00|Primera fase|Grupo I|Estadio Nueva York/Nueva Jersey|Nueva York
Fase de grupos|IRQ|NOR|2026-06-16T16:00|Primera fase|Grupo I|Estadio Boston|Boston
Fase de grupos|ARG|ALG|2026-06-16T19:00|Primera fase|Grupo J|Estadio Kansas City|Kansas City
Fase de grupos|AUT|JOR|2026-06-16T22:00|Primera fase|Grupo J|Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Fase de grupos|POR|COD|2026-06-17T11:00|Primera fase|Grupo K|Estadio Houston|Houston
Fase de grupos|ENG|CRO|2026-06-17T14:00|Primera fase|Grupo L|Estadio Dallas|Dallas
Fase de grupos|GHA|PAN|2026-06-17T17:00|Primera fase|Grupo L|Estadio de Toronto|Toronto
Fase de grupos|UZB|COL|2026-06-17T20:00|Primera fase|Grupo K|Estadio Ciudad de México|Ciudad de México
Fase de grupos|CZE|RSA|2026-06-18T10:00|Primera fase|Grupo A|Estadio Atlanta|Atlanta
Fase de grupos|SUI|BIH|2026-06-18T13:00|Primera fase|Grupo B|Estadio Los Angeles|Los Ángeles
Fase de grupos|CAN|QAT|2026-06-18T16:00|Primera fase|Grupo B|Estadio BC Place Vancouver|Vancouver
Fase de grupos|MEX|KOR|2026-06-18T19:00|Primera fase|Grupo A|Estadio Guadalajara|Guadalajara
Fase de grupos|USA|AUS|2026-06-19T13:00|Primera fase|Grupo D|Estadio de Seattle|Seattle
Fase de grupos|SCO|MAR|2026-06-19T16:00|Primera fase|Grupo C|Estadio Boston|Boston
Fase de grupos|BRA|HAI|2026-06-19T18:30|Primera fase|Grupo C|Estadio Filadelfia|Filadelfia
Fase de grupos|TUR|PAR|2026-06-19T21:00|Primera fase|Grupo D|Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Fase de grupos|NED|SWE|2026-06-20T11:00|Primera fase|Grupo F|Estadio Houston|Houston
Fase de grupos|GER|CIV|2026-06-20T14:00|Primera fase|Grupo E|Estadio de Toronto|Toronto
Fase de grupos|ECU|CUW|2026-06-20T18:00|Primera fase|Grupo E|Estadio Kansas City|Kansas City
Fase de grupos|TUN|JPN|2026-06-20T22:00|Primera fase|Grupo F|Estadio Monterrey|Monterrey
Fase de grupos|ESP|KSA|2026-06-21T10:00|Primera fase|Grupo H|Estadio Atlanta|Atlanta
Fase de grupos|BEL|IRN|2026-06-21T13:00|Primera fase|Grupo G|Estadio Los Angeles|Los Ángeles
Fase de grupos|URU|CPV|2026-06-21T16:00|Primera fase|Grupo H|Estadio Miami|Miami
Fase de grupos|NZL|EGY|2026-06-21T19:00|Primera fase|Grupo G|Estadio BC Place Vancouver|Vancouver
Fase de grupos|ARG|AUT|2026-06-22T11:00|Primera fase|Grupo J|Estadio Dallas|Dallas
Fase de grupos|FRA|IRQ|2026-06-22T15:00|Primera fase|Grupo I|Estadio Filadelfia|Filadelfia
Fase de grupos|NOR|SEN|2026-06-22T18:00|Primera fase|Grupo I|Estadio Nueva York/Nueva Jersey|Nueva York
Fase de grupos|JOR|ALG|2026-06-22T21:00|Primera fase|Grupo J|Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Fase de grupos|POR|UZB|2026-06-23T11:00|Primera fase|Grupo K|Estadio Houston|Houston
Fase de grupos|ENG|GHA|2026-06-23T14:00|Primera fase|Grupo L|Estadio Boston|Boston
Fase de grupos|PAN|CRO|2026-06-23T17:00|Primera fase|Grupo L|Estadio de Toronto|Toronto
Fase de grupos|COL|COD|2026-06-23T20:00|Primera fase|Grupo K|Estadio Guadalajara|Guadalajara
Fase de grupos|SUI|CAN|2026-06-24T13:00|Primera fase|Grupo B|Estadio BC Place Vancouver|Vancouver
Fase de grupos|BIH|QAT|2026-06-24T13:00|Primera fase|Grupo B|Estadio de Seattle|Seattle
Fase de grupos|SCO|BRA|2026-06-24T16:00|Primera fase|Grupo C|Estadio Miami|Miami
Fase de grupos|MAR|HAI|2026-06-24T16:00|Primera fase|Grupo C|Estadio Atlanta|Atlanta
Fase de grupos|CZE|MEX|2026-06-24T19:00|Primera fase|Grupo A|Estadio Ciudad de México|Ciudad de México
Fase de grupos|RSA|KOR|2026-06-24T19:00|Primera fase|Grupo A|Estadio Monterrey|Monterrey
Fase de grupos|CUW|CIV|2026-06-25T14:00|Primera fase|Grupo E|Estadio Filadelfia|Filadelfia
Fase de grupos|ECU|GER|2026-06-25T14:00|Primera fase|Grupo E|Estadio Nueva York/Nueva Jersey|Nueva York
Fase de grupos|JPN|SWE|2026-06-25T17:00|Primera fase|Grupo F|Estadio Dallas|Dallas
Fase de grupos|TUN|NED|2026-06-25T17:00|Primera fase|Grupo F|Estadio Kansas City|Kansas City
Fase de grupos|TUR|USA|2026-06-25T20:00|Primera fase|Grupo D|Estadio Los Angeles|Los Ángeles
Fase de grupos|PAR|AUS|2026-06-25T20:00|Primera fase|Grupo D|Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Fase de grupos|NOR|FRA|2026-06-26T13:00|Primera fase|Grupo I|Estadio Boston|Boston
Fase de grupos|SEN|IRQ|2026-06-26T13:00|Primera fase|Grupo I|Estadio de Toronto|Toronto
Fase de grupos|CPV|KSA|2026-06-26T18:00|Primera fase|Grupo H|Estadio Houston|Houston
Fase de grupos|URU|ESP|2026-06-26T18:00|Primera fase|Grupo H|Estadio Guadalajara|Guadalajara
Fase de grupos|EGY|IRN|2026-06-26T21:00|Primera fase|Grupo G|Estadio de Seattle|Seattle
Fase de grupos|NZL|BEL|2026-06-26T21:00|Primera fase|Grupo G|Estadio BC Place Vancouver|Vancouver
Fase de grupos|PAN|ENG|2026-06-27T15:00|Primera fase|Grupo L|Estadio Nueva York/Nueva Jersey|Nueva York
Fase de grupos|CRO|GHA|2026-06-27T15:00|Primera fase|Grupo L|Estadio Filadelfia|Filadelfia
Fase de grupos|COL|POR|2026-06-27T17:30|Primera fase|Grupo K|Estadio Miami|Miami
Fase de grupos|COD|UZB|2026-06-27T17:30|Primera fase|Grupo K|Estadio Atlanta|Atlanta
Fase de grupos|ALG|AUT|2026-06-27T20:00|Primera fase|Grupo J|Estadio Kansas City|Kansas City
Fase de grupos|JOR|ARG|2026-06-27T20:00|Primera fase|Grupo J|Estadio Dallas|Dallas
Dieciseisavos|2A|2B|2026-06-28T13:00|Dieciseisavos de final||Estadio Los Angeles|Los Ángeles
Dieciseisavos|1C|2F|2026-06-29T11:00|Dieciseisavos de final||Estadio Houston|Houston
Dieciseisavos|1E|3ABCDF|2026-06-29T14:30|Dieciseisavos de final||Estadio Boston|Boston
Dieciseisavos|1F|2C|2026-06-29T19:00|Dieciseisavos de final||Estadio Monterrey|Monterrey
Dieciseisavos|2E|2I|2026-06-30T11:00|Dieciseisavos de final||Estadio Dallas|Dallas
Dieciseisavos|1I|3CDFGH|2026-06-30T15:00|Dieciseisavos de final||Estadio Nueva York/Nueva Jersey|Nueva York
Dieciseisavos|1A|3CEFHI|2026-06-30T19:00|Dieciseisavos de final||Estadio Ciudad de México|Ciudad de México
Dieciseisavos|1L|3EHIJK|2026-07-01T10:00|Dieciseisavos de final||Estadio Atlanta|Atlanta
Dieciseisavos|1G|3AEHIJ|2026-07-01T14:00|Dieciseisavos de final||Estadio de Seattle|Seattle
Dieciseisavos|1D|3BEFIJ|2026-07-01T18:00|Dieciseisavos de final||Estadio de la Bahía de San Francisco|Área de la Bahía de San Francisco
Dieciseisavos|1H|2J|2026-07-02T13:00|Dieciseisavos de final||Estadio Los Angeles|Los Ángeles
Dieciseisavos|2K|2L|2026-07-02T17:00|Dieciseisavos de final||Estadio de Toronto|Toronto
Dieciseisavos|1B|3EFGIJ|2026-07-02T21:00|Dieciseisavos de final||Estadio BC Place Vancouver|Vancouver
Dieciseisavos|2D|2G|2026-07-03T12:00|Dieciseisavos de final||Estadio Dallas|Dallas
Dieciseisavos|1J|2H|2026-07-03T16:00|Dieciseisavos de final||Estadio Miami|Miami
Dieciseisavos|1K|3DEIJL|2026-07-03T19:30|Dieciseisavos de final||Estadio Kansas City|Kansas City
Octavos|W73|W75|2026-07-04T11:00|Octavos de final||Estadio Houston|Houston
Octavos|W74|W77|2026-07-04T15:00|Octavos de final||Estadio Filadelfia|Filadelfia
Octavos|W76|W78|2026-07-05T14:00|Octavos de final||Estadio Nueva York/Nueva Jersey|Nueva York
Octavos|W79|W80|2026-07-05T18:00|Octavos de final||Estadio Ciudad de México|Ciudad de México
Octavos|W83|W84|2026-07-06T13:00|Octavos de final||Estadio Dallas|Dallas
Octavos|W81|W82|2026-07-06T18:00|Octavos de final||Estadio de Seattle|Seattle
Octavos|W86|W88|2026-07-07T10:00|Octavos de final||Estadio Atlanta|Atlanta
Octavos|W85|W87|2026-07-07T14:00|Octavos de final||Estadio BC Place Vancouver|Vancouver
Cuartos|W89|W90|2026-07-09T14:00|Cuartos de final||Estadio Boston|Boston
Cuartos|W93|W94|2026-07-10T13:00|Cuartos de final||Estadio Los Angeles|Los Ángeles
Cuartos|W91|W92|2026-07-11T15:00|Cuartos de final||Estadio Miami|Miami
Cuartos|W95|W96|2026-07-11T19:00|Cuartos de final||Estadio Kansas City|Kansas City
Semifinal|W97|W98|2026-07-14T13:00|Semifinal||Estadio Dallas|Dallas
Semifinal|W99|W100|2026-07-15T13:00|Semifinal||Estadio Atlanta|Atlanta
Final|RU101|RU102|2026-07-18T15:00|Partido por el tercer puesto||Estadio Miami|Miami
Final|W101|W102|2026-07-19T13:00|Final||Estadio Nueva York/Nueva Jersey|Nueva York`;
const GOLES = ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

function crearFormulariosQuiniela() {
  const partidos = QUINIELA_ROWS.trim().split('\n').map((row, index) => {
    const [fase, local, visitante, fecha, faseFifa, grupo, estadio, ciudad] = row.split('|');
    return {
      id: 'fifa-2026-' + String(index + 1).padStart(3, '0'),
      fase,
      local,
      visitante,
      fecha,
      faseFifa,
      grupo,
      estadio,
      ciudad
    };
  });

  const fases = ['Fase de grupos', 'Dieciseisavos', 'Octavos', 'Cuartos', 'Semifinal', 'Final'];
  fases.forEach((fase) => {
    const form = FormApp.create('Quiniela Mundialista 2026 - ' + fase);
    form.setDescription('Pronosticos de la quiniela. Selecciona los goles para cada equipo. Usa - si quieres dejar pendiente un marcador.');
    form.setCollectEmail(false);
    form.setAllowResponseEdits(true);
    form.setConfirmationMessage('Pronosticos guardados. Gracias por participar.');

    form.addTextItem()
      .setTitle('Nombre del participante')
      .setRequired(true);

    partidos.filter((partido) => partido.fase === fase).forEach((partido) => {
      const detalles = [formatearFecha(partido.fecha), partido.faseFifa, partido.grupo, partido.estadio, partido.ciudad]
        .filter(Boolean)
        .join(' ? ');

      form.addSectionHeaderItem()
        .setTitle(partido.id + ' ? ' + partido.local + ' vs ' + partido.visitante)
        .setHelpText(detalles);

      form.addListItem()
        .setTitle(partido.id + ' ' + partido.local + ' goles')
        .setChoiceValues(GOLES)
        .setRequired(true);

      form.addListItem()
        .setTitle(partido.id + ' ' + partido.visitante + ' goles')
        .setChoiceValues(GOLES)
        .setRequired(true);
    });

    Logger.log(fase + ': ' + form.getEditUrl());
  });
}

function formatearFecha(valor) {
  const fecha = new Date(valor);
  return Utilities.formatDate(fecha, 'America/Mexico_City', 'dd/MM/yyyy HH:mm');
}
