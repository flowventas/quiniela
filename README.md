# Quiniela Mundialista

App sencilla para organizar una quiniela con participantes ilimitados.

## Reglas base

- Fases: fase de grupos, dieciseisavos, octavos, cuartos, semifinal y final.
- Puntos por acertar ganador: 3.
- Puntos por acertar empate: 3.
- Extra por marcador exacto: 2.
- Desempates en tabla: puntos, marcadores exactos, ganadores acertados, nombre.

## Uso

1. Abre `index.html` o sirve la carpeta con un servidor local.
2. En `Config`, agrega participantes. El calendario FIFA 2026 ya viene precargado con 104 partidos.
3. En `Pronosticos`, elige participante y captura marcadores.
4. En `Resultados`, captura los marcadores oficiales.
5. La `Tabla` se actualiza automaticamente.

Los datos se guardan en el navegador con `localStorage`. Usa `Exportar` e `Importar` para respaldar o compartir el estado de la quiniela.

Fuente del calendario: pagina oficial de FIFA de resultados y calendario de la Copa Mundial de la FIFA 2026, consultada el 21 de mayo de 2026.

## Siguiente mejora recomendada

Para que todos puedan consultar el mismo estado en vivo desde sus celulares, el siguiente paso natural es agregar un backend pequeño con login de administrador y una base de datos compartida.

## Deploy

La app es estatica. Para publicarla en Vercel:

1. Sube este proyecto a GitHub.
2. Entra a https://vercel.com/new.
3. Importa el repositorio.
4. Framework preset: `Other`.
5. Build command: dejar vacio.
6. Output directory: dejar vacio.
7. Deploy.

Si vas a usar Supabase, configura `app-config.js` antes del deploy con tu Project URL y anon key.
