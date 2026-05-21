# Supabase para la quiniela

Este setup convierte la app en una pagina compartida: todos ven los mismos participantes, pronosticos, resultados y ranking.

## Pasos

1. Entra a https://supabase.com/ y crea un proyecto.
2. Abre `SQL Editor`.
3. Copia y ejecuta `supabase/schema.sql`.
4. Ve a `Project Settings > API`.
5. Copia:
   - Project URL
   - anon public key
6. Abre `app-config.js`.
7. Pega esos valores:

```js
window.QUINIELA_SUPABASE = {
  url: "https://TU-PROYECTO.supabase.co",
  anonKey: "TU_ANON_KEY"
};
```

8. Recarga la app.

Si conecta bien, arriba dira `Supabase conectado`.

## Login de participantes

Cada participante se registra en la app con:

- Nombre
- Email
- Contrasena

La app crea un registro en `participants` usando el `auth.uid()` de Supabase. Las reglas RLS hacen que cada usuario solo pueda insertar o editar pronosticos donde `participant_id = auth.uid()`.

Todos pueden leer:

- Participantes
- Pronosticos
- Resultados
- Ranking calculado en la app

## Hacerte admin

1. Registrate en la app con tu email.
2. En Supabase, ve a `Authentication > Users`.
3. Copia tu `User UID`.
4. Ve a `SQL Editor`.
5. Ejecuta:

```sql
insert into admin_users (user_id)
values ('PEGA_AQUI_TU_USER_UID')
on conflict (user_id) do nothing;
```

6. Cierra sesion y vuelve a entrar en la app.

Tu cuenta admin podra capturar resultados oficiales. Los demas participantes no podran editar resultados ni pronosticos ajenos.

## Importante

Si Supabase tiene activada la confirmacion por email, cada participante debe confirmar su correo antes de iniciar sesion. Puedes cambiar eso en `Authentication > Providers > Email`.
